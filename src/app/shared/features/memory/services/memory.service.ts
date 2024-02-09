import { Injectable, inject } from '@angular/core'
import { Router } from '@angular/router'

import { BehaviorSubject, filter, first, map } from 'rxjs'

import { Lesson } from '@courses/logic/models/lessons'
import { MemoryCard } from '@courses/logic/models/memory'
import { FeedbackMessagesService } from '@shared/messages/services/feedback-messages.service'
import { sendExternal } from '@superlikers/api/entries'
import { LevelsStore } from '@courses/store/levels.store'

@Injectable({
  providedIn: 'any'
})
export class MemoryService {
  router = inject(Router)
  levelsStore = inject(LevelsStore)
  messagesService = inject(FeedbackMessagesService)

  private cardsSubject$ = new BehaviorSubject<MemoryCard[]>([])
  cards$ = this.cardsSubject$.asObservable()

  validateAllMatch$ = this.cards$.pipe(
    filter(cards => cards.length > 0),
    map(cards => this.validateAllMatch(cards)),
    filter(value => value),
    first()
  )

  opportunities = 0

  loadCards(cards: MemoryCard[]) {
    const randomCards = cards.sort(() => Math.random() - 0.5)
    this.cardsSubject$.next(randomCards)
  }

  // Flip a specific card identified by its ID
  flipCard(cardId: number) {
    const cards = this.cardsSubject$.getValue()

    const canFlip = this.canFlipCard(cards)
    if (!canFlip) return

    const cardIndex = cards.findIndex(item => item.id === cardId)
    const updateCard = { ...cards[cardIndex], flipped: true }

    const newCards = cards.slice(0)
    newCards[cardIndex] = updateCard

    this.cardsSubject$.next(newCards)
  }

  // Validate and handle the matching logic when two cards are flipped
  validateMatch() {
    const cards = this.cardsSubject$.getValue()

    // Filter flipped cards that have not been matched
    const flippedCards = cards.filter(card => card.flipped && !card.match)
    if (flippedCards.length < 2) return

    const hasMatch = this.hasMatchCards(flippedCards)
    this.opportunities += 1

    if (hasMatch) {
      this.setMatchCards(cards)
    } else {
      this.resetFlippedCards(cards)
    }
  }

  // Validate if two flipped cards have a match
  private hasMatchCards(cards: MemoryCard[]) {
    const cardsValues = cards.map(card => card.value)
    const hasMatch = new Set(cardsValues).size === 1

    return hasMatch && cards.length === 2
  }

  // Check if there are fewer than two flipped cards
  private canFlipCard(cards: MemoryCard[]) {
    const flippedCards = cards.filter(card => card.flipped && !card.match)
    return flippedCards.length < 2
  }

  // Set the match state to true for the flipped cards
  private setMatchCards(cards: MemoryCard[]) {
    const newCards = cards.map(card => {
      if (card.flipped) return { ...card, match: true }

      return { ...card }
    })

    this.cardsSubject$.next(newCards)
  }

  // Reset the flipped state for unmatched cards after a delay
  private resetFlippedCards(cards: MemoryCard[]) {
    const newCards = cards.map(card => {
      if (card.match) return { ...card }

      return { ...card, flipped: false }
    })

    setTimeout(() => {
      this.cardsSubject$.next(newCards)
    }, 500)
  }

  // Validate if all cards have been matched
  private validateAllMatch(cards: MemoryCard[]) {
    const values: string[] = []
    if (cards.length === 0) return false

    cards.forEach(card => {
      if (card.match) values.push(card.value)
    })

    const uniqueValuesAmount = new Set(values).size
    const hasFinish = uniqueValuesAmount === cards.length / 2

    return hasFinish
  }

  async sendData(lesson: Lesson, opportunities: number) {
    const { MemoryContent, nextLessonUrl } = lesson
    if (!MemoryContent) return

    const properties = { oportunidades: opportunities }

    await sendExternal({
      event: MemoryContent.external,
      properties
    })

    this.levelsStore.updateLesson(lesson).subscribe(() => {
      this.messagesService.showMemorySuccessMessage(opportunities).then(() => {
        this.router.navigate(nextLessonUrl ?? ['/home'])
      })
    })
  }
}
