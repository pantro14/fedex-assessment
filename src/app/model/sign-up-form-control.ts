import {Validators} from '@angular/forms';
import {verifyLowerAndUpperCase} from '../utils/custom-validators/email-validators';

export const passwordValidators =  [
  Validators.required,
  Validators.minLength(8),
  verifyLowerAndUpperCase(),
];

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
    passwordValidators
  ],
}
