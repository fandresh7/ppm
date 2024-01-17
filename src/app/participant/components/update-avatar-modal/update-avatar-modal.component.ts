import { DialogRef } from '@angular/cdk/dialog'
import { Component, inject } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'

import { Observable } from 'rxjs'

import { ParticipantService } from '@participant/services/participant.service'
import { SubmitButtonComponent } from '@shared/components/submit-button/submit-button.component'
import { uploadPhoto } from '@superlikers/api/activities'
import { Participant } from '@superlikers/models/participant'

@Component({
  selector: 'app-update-avatar-modal',
  standalone: true,
  imports: [ReactiveFormsModule, SubmitButtonComponent],
  templateUrl: './update-avatar-modal.component.html',
  styleUrl: './update-avatar-modal.component.css'
})
export class UpdateAvatarModalComponent {
  fb = inject(FormBuilder)
  participantService = inject(ParticipantService)

  participant$: Observable<Participant>

  imageUrl: string | ArrayBuffer | null = null
  image: File | null = null
  loading = false

  form: FormGroup = this.fb.group({
    avatar: [null, [Validators.required]]
  })

  constructor(public dialogRef: DialogRef<string>) {
    this.participant$ = this.participantService.participant$
  }

  showImage(file: File) {
    const reader = new FileReader()
    reader.onload = () => {
      this.imageUrl = reader.result
    }
    reader.readAsDataURL(file)
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement
    const file = inputElement.files?.[0]

    if (!file) return

    this.showImage(file)
    this.image = file
  }

  isValidField(name: string) {
    return this.form.controls[name].errors && this.form.controls[name].touched
  }

  updateParticipantAvatar(photoLocation: string) {
    const initialPath =
      'https://superlikers-staging.s3.amazonaws.com/uploads/upload-photo'

    const photoId = photoLocation.split('/').at(-1)
    const name = this.image?.name.replaceAll(/[\s\uFEFF\xA0]+/g, '_')

    const url = initialPath + '/' + photoId + '/' + name

    this.participantService.updateAvatar(url)
  }

  onSubmit() {
    if (!this.image) {
      this.loading = false
      this.form.markAllAsTouched()
      return
    }

    const avatarControl = this.form.get('avatar')
    if (!avatarControl) return

    this.loading = true

    uploadPhoto({
      category: 'avatar',
      file: this.image
    }).then(response => {
      const { state, message, location } = response

      if (state === 'error') {
        avatarControl.setErrors({ customError: message })
      } else {
        this.updateParticipantAvatar(location)
        this.dialogRef.close()
      }

      this.loading = false
    })
  }
}
