import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const hasLowerAndUpperCase = (password: string) => {
  return /[A-Z]/.test(password) && /[a-z]/.test(password);
};

export const verifyLowerAndUpperCase = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    return !hasLowerAndUpperCase(control.value)
      ? { lowerUpperCase: { value: control.value } }
      : null;
  };
};

export const hasForbiddenWords = (
  password: string,
  firstName: string,
  lastName: string
) => {
  // skip validation if first name and last name are empty string
  const isFirstNamePresent =
    firstName === ''
      ? false
      : password.toLowerCase().includes(firstName.toLowerCase());
  const isLastNamePresent =
    lastName === ''
      ? false
      : password.toLowerCase().includes(lastName.toLowerCase());
  return isFirstNamePresent || isLastNamePresent;
};

export const verifyForbidWords = (
  firstName: string,
  lastName: string
): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    return hasForbiddenWords(control.value, firstName, lastName)
      ? { forbiddenWords: { value: control.value } }
      : null;
  };
};
