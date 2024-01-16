import { Component, Input, OnInit } from '@angular/core'

import {
  checkLessonIsFavorite,
  checkResourceIsFavorite,
  setLessonAsFavorite,
  setResourceAsFavorite
} from '@courses/logic/lessons'

import { Lesson, Resource } from '@courses/logic/models/lessons'

@Component({
  selector: 'app-favorite-button',
  standalone: true,
  imports: [],
  templateUrl: './favorite-button.component.html',
  styleUrl: './favorite-button.component.css'
})
export class FavoriteButtonComponent implements OnInit {
  @Input() size = 8

  @Input() lesson: Lesson | null = null
  @Input() resource: Resource | null = null

  isFavorite = false

  get sizeClasses() {
    return `w-${this.size} h-${this.size}`
  }

  ngOnInit() {
    if (this.lesson) {
      this.isFavorite = checkLessonIsFavorite(this.lesson)
    }

    if (this.resource) {
      this.isFavorite = checkResourceIsFavorite(this.resource)
    }
  }

  save() {
    if (this.lesson) {
      this.isFavorite = setLessonAsFavorite(this.lesson)
    }

    if (this.resource) {
      this.isFavorite = setResourceAsFavorite(this.resource)
    }
  }
}
