import { Dialog } from '@angular/cdk/dialog'
import { Overlay } from '@angular/cdk/overlay'
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject
} from '@angular/core'

import { AsyncPipe, JsonPipe } from '@angular/common'
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable, combineLatest, first, map, switchMap } from 'rxjs'

import { SubmitButtonComponent } from '@shared/components/submit-button/submit-button.component'
import { ProgressBarComponent } from '@courses/components/progress-bar/progress-bar.component'
import { LevelsStore } from '@courses/store/levels.store'
import { FormsService } from '@shared/features/forms/services/forms.service'
import { Lesson } from '@courses/logic/models/lessons'
import { LoadingService } from '@shared/loading/loading.service'
import { testSliderOptions } from '@courses/utils/swipers'
import { CheckboxGroupComponent } from '@shared/features/forms/components/checkbox-group/checkbox-group.component'
import { RadioComponent } from '@shared/features/forms/components/radio/radio.component'
import { FeedbackMessagesService } from '@shared/messages/services/feedback-messages.service'
import { TestService } from '@courses/services/test.service'
import Swiper from 'swiper'
import { LoadingTestComponent } from '@courses/components/loading/loading-test/loading-test.component'

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    SubmitButtonComponent,
    ProgressBarComponent,
    AsyncPipe,
    JsonPipe,
    CheckboxGroupComponent,
    RadioComponent,
    LoadingTestComponent
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestComponent implements OnInit {
  fb = inject(FormBuilder)
  route = inject(ActivatedRoute)
  router = inject(Router)

  levelsStore = inject(LevelsStore)
  loadingService = inject(LoadingService)
  formService = inject(FormsService)
  messagesService = inject(FeedbackMessagesService)
  testService = inject(TestService)

  @ViewChild('slider', { static: true }) slider!: ElementRef
  swiperInstance!: Swiper

  form: FormGroup = this.fb.group({})
  data$!: Observable<{ lesson: Lesson; loading: boolean }>

  actualSlide = 1
  totalSlides = 1
  submitLoading = false

  get percentage() {
    return this.totalSlides > 0
      ? (this.actualSlide / this.totalSlides) * 100
      : 0
  }

  constructor(
    public dialog: Dialog,
    public overlay: Overlay
  ) {
    this.form = this.formService.getForm()

    this.data$ = this.route.params.pipe(
      switchMap(params => {
        return combineLatest([
          this.loadingService.loading$,
          this.levelsStore.getLesson(params['category'])
        ])
      }),
      map(([loading, lesson]) => {
        this.initialize(lesson)
        return { lesson, loading }
      })
    )
  }

  ngOnInit() {
    this.initializeSlider()

    this.testService.resetSwiperEvent.subscribe(() => {
      this.resetSwiper()
    })
  }

  initialize(lesson: Lesson) {
    if (!lesson) return

    const questions = lesson.TestContent?.questions ?? []
    this.totalSlides = questions.length + 1

    this.formService.initializeForm(questions)
    this.testService.validate(lesson)
  }

  initializeSlider() {
    this.swiperInstance = Object.assign(
      this.slider.nativeElement,
      testSliderOptions
    )

    this.slider.nativeElement.initialize()
  }

  onSwiperChange() {
    const index = this.slider.nativeElement.swiper.realIndex
    this.actualSlide = index + 1
  }

  previousSlide() {
    this.slider.nativeElement.swiper.slidePrev()

    const step = this.slider.nativeElement.swiper.realIndex
    const previousStep = step + 1

    if (previousStep >= 0) this.actualSlide = previousStep
  }

  nextSlide() {
    this.slider.nativeElement.swiper.slideNext()

    const step = this.slider.nativeElement.swiper.realIndex
    const nextStep = step + 1

    if (nextStep <= this.totalSlides) this.actualSlide = nextStep
  }

  resetSwiper() {
    this.actualSlide = 1
    this.slider.nativeElement.swiper.slideTo(0)
  }

  showSubmitButton(lesson: Lesson, index: number) {
    const questions = lesson.TestContent?.questions ?? []

    return questions.length - 1 === index
  }

  onSubmit(lesson: Lesson) {
    const externalEvent = lesson.TestContent?.external
    if (!externalEvent) return

    if (this.form.invalid) {
      this.messagesService.showTestIncomplete()
      return
    }

    this.submitLoading = true

    this.testService
      .submit(externalEvent, this.form.value)
      .pipe(
        switchMap(() => {
          return this.levelsStore.updateLesson(lesson)
        }),
        first()
      )
      .subscribe(() => {
        this.submitLoading = false
      })
  }
}
