import { Validators } from '@angular/forms';
import { verifyLowerAndUpperCase } from '../utils/custom-validators/password/password-validations';

export const passwordValidators = [
  Validators.required,
  Validators.minLength(8),
  verifyLowerAndUpperCase(),
];

export const signUpFormControl = {
  firstName: ['', [Validators.required]],
  lastName: ['', [Validators.required]],
  email: ['', [Validators.required, Validators.email]],
  password: ['', passwordValidators],
};
