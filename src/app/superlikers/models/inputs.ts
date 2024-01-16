/* eslint-disable @typescript-eslint/no-duplicate-enum-values */

export type InputType =
  | 'UserEmailField'
  | 'PasswordField'
  | 'SelectField'
  | 'TextField'
  | 'PhoneField'
  | 'HiddenField'
  | 'CheckBoxGroupField'
  | 'CheckBoxField'

export enum InputTypes {
  UserEmailField = 'email',
  PasswordField = 'password',
  TextField = 'text',
  PhoneField = 'tel',
  CheckBoxGroupField = 'checkbox',
  CheckBoxField = 'checkbox',
  HiddenField = 'hidden',
  SelectField = 'select'
}

export interface Field {
  _type: InputType
  choices?: Choice[]
  field_type: string
  label: string
  name: string
  placeholder: null
  typeval: string
  default_value?: string
  confirm?: string
  confirm_label?: string
  hidden_field?: boolean
  is_public?: boolean
  required_field?: boolean
  help_text?: string
  messages: {
    blank?: string
    taken?: string
  }
}

export interface Choice {
  label: string
  value: string
}
