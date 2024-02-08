import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  OnInit,
  inject
} from '@angular/core'
import { Router } from '@angular/router'

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer'
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer'

import { Lesson } from '@courses/logic/models/lessons'
import { sendExternal } from '@superlikers/api/entries'
import { CoursesService } from '@courses/services/courses.store'
import { SubmitButtonComponent } from '@shared/components/submit-button/submit-button.component'

@Component({
  selector: 'app-infografia',
  standalone: true,
  imports: [NgxExtendedPdfViewerModule, SubmitButtonComponent],
  templateUrl: './infografia.component.html',
  styleUrl: './infografia.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InfografiaComponent implements OnInit {
  coursesService = inject(CoursesService)

  router = inject(Router)

  @Input() lesson: Lesson | null = null
  @Input() pdfUrl = 'assets/test.pdf'

  loading = false

  constructor() {
    pdfDefaultOptions.assetsFolder = 'bleeding-edge'
  }

  ngOnInit() {
    console.log('On Init')
    // this.pdfUrl = this.lesson?.InfografiaContent?.infografia ?? ''
  }

  sendData() {
    this.loading = true

    const properties: Record<string, string> = {
      type: 'infografia',
      finish: 'true',
      course: this.lesson?.courseName || '',
      course_category: this.lesson?.courseCategory || '',
      lesson: this.lesson?.name || ''
    }

    const params = {
      event: 'lessons-videos',
      properties,
      category: this.lesson?.category
    }

    sendExternal(params).then(response => {
      this.loading = false

      if (response !== 'success') return
      if (!this.lesson) return

      const nextLessonUrl = this.lesson.nextLessonUrl ?? ['/home']

      this.coursesService.updateLesson(this.lesson).subscribe(() => {
        this.router.navigate(nextLessonUrl)
      })
    })
  }
}
