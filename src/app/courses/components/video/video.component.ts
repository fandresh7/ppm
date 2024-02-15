import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  inject
} from '@angular/core'
import { Router } from '@angular/router'

import { VgApiService, VgCoreModule } from '@videogular/ngx-videogular/core'
import { VgControlsModule } from '@videogular/ngx-videogular/controls'
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play'
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering'

import { Lesson, LessonType } from '@courses/logic/models/lessons'
import { sendExternal } from '@superlikers/api/entries'
import { LevelsStore } from '@courses/store/levels.store'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent implements OnDestroy, OnChanges {
  levelsStore = inject(LevelsStore)
  router = inject(Router)
  sanitizer = inject(DomSanitizer)

  preload = 'auto'
  api: VgApiService = new VgApiService()

  @Input() lesson: Lesson | null = null
  @Input() attempt = false

  @Output() hasFinishEmiter = new EventEmitter<boolean>()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private intervalId!: any

  private hasFinish = false

  get subtitles() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      this.lesson?.VideoContent?.subtitles ?? ''
    )
  }

  onPlayerReady(source: VgApiService) {
    this.api = source

    this.updateVideoSource()

    this.api.subscriptions.play.subscribe(this.play.bind(this))
    this.api.subscriptions.pause.subscribe(this.pause.bind(this))
    this.api.subscriptions.ended.subscribe(this.ended.bind(this))
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['lesson'] && this.api.getDefaultMedia()) {
      this.updateVideoSource()
    }
  }

  ngOnDestroy() {
    clearInterval(this.intervalId)
  }

  private updateVideoSource() {
    const video = this.attempt
      ? this.lesson?.attempt?.video
      : this.lesson?.VideoContent?.video

    this.api.getDefaultMedia().elem.src = video
  }

  play() {
    this.intervalId = setInterval(() => {
      this.sendTrackingExternal()
    }, 5000)
  }

  pause() {
    clearInterval(this.intervalId)
  }

  ended() {
    clearInterval(this.intervalId)

    if (this.hasFinish && !this.attempt) {
      this.updateLesson()
    }

    // At the end of the video, send External to redeem another attempt
    if (this.hasFinish && this.attempt) {
      const params = {
        event: 'attempts',
        properties: {
          name: this.lesson?.courseName ?? ''
        },
        category: this.lesson?.category ?? ''
      }

      sendExternal(params).then(response => {
        if (response !== 'success') return
        this.updateLesson()
        this.emitHasFinishEmiter()
      })
    }
  }

  updateLesson() {
    if (!this.lesson) return
    this.levelsStore.updateLesson(this.lesson).subscribe(() => {
      if (this.attempt) return

      const nextUrl = this.lesson?.nextLessonUrl ?? ['/home']
      this.router.navigate(nextUrl)
    })
  }

  sendTrackingExternal() {
    if (!this.api) return
    if (!this.lesson) return

    const currentTime = this.api.currentTime
    const duration = this.api.duration

    const finish = currentTime >= this.api.duration * 0.9

    const properties: Record<string, string | number> = {
      time: this.api.currentTime,
      finish: finish.toString(),
      duration,
      course: this.lesson.courseName ?? '',
      lesson: this.lesson?.name,
      type: LessonType.Video
    }

    const event = this.attempt ? 'attempts-videos' : 'lessons-videos'
    const params = {
      event,
      properties,
      category: this.lesson?.category
    }

    sendExternal(params).then(response => {
      if (response !== 'success') return
      if (finish) this.hasFinish = true
    })
  }

  emitHasFinishEmiter() {
    this.hasFinishEmiter.emit(true)
  }
}
