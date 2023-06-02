import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

const hasLowerAndUpperCase = (word: string) => {
  return /[A-Z]/.test(word) && /[a-z]/.test(word);
}

export const verifyLowerAndUpperCase = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    return !hasLowerAndUpperCase(control.value) ? {lowerUpperCase: {value: control.value}} : null;
  };
}

const hasForbiddenWords = (word: string, firstName: string, lastName: string) => {
  // skip validation if first name and last name are empty string
  const isFirstNamePresent = firstName === '' ? false : word.toLowerCase().includes(firstName.toLowerCase());
  const isLastNamePresent = lastName === '' ? false : word.toLowerCase().includes(lastName.toLowerCase());
  return isFirstNamePresent || isLastNamePresent;
}

export const verifyForbidWords = (firstName: string, lastName: string): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    return hasForbiddenWords(control.value, firstName, lastName) ? {forbiddenWords: {value: control.value}} : null;
  };
}
