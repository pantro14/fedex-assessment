import {Validators} from '@angular/forms';

export const signUpFormControl = {
  firstName: [
    '',
    [
      Validators.required,
      Validators.minLength(5),
    ]
  ],
  lastName: [
    '',
    [
      Validators.required,
      Validators.minLength(2),
    ]
  ],
  email: [
    '',
    [
      Validators.required,
      Validators.minLength(2),
    ]
  ],
  password: [
    '',
    [
      Validators.required,
      Validators.minLength(2),
    ]
  ],
}
