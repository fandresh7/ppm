import { Injectable, inject } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Question } from '@courses/logic/models/tests'
import { LoadingService } from '@shared/loading/loading.service'

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  fb = inject(FormBuilder)
  loadingService = inject(LoadingService)

  private form: FormGroup = new FormGroup({})

  getForm() {
    return this.form
  }

  initializeForm(questions: Question[]) {
    questions.forEach(question => {
      const { name } = question

      const formControl = this.fb.control(null, Validators.required)
      this.form.addControl(name, formControl)
    })
  }
}
