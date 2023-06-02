import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {passwordValidators, signUpFormControl} from '../../model/sign-up-form-control';
import {verifyForbidWords} from '../../utils/custom-validators/email-validators';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styles: [],
})
export class SignUpComponent {
  signUpForm;

  passwordType = 'password';

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.signUpForm = this.formBuilder.group(signUpFormControl)
    // Password validation must be updated every time first name and last name change
    this.firstName?.valueChanges.subscribe({
      next: (firstName) => this.updatePasswordValidators()
    });
    this.lastName?.valueChanges.subscribe({
      next: (firstName) => this.updatePasswordValidators()
    });
  }

  get firstName() { return this.signUpForm.get('firstName')};
  get lastName() { return this.signUpForm.get('lastName')};
  get email() { return this.signUpForm.get('email')};
  get password() { return this.signUpForm.get('password')};

  updatePasswordValidators(): void {
    this.password?.setValidators(
      [...passwordValidators,
        verifyForbidWords(this.firstName?.value as string, this.lastName?.value as string)
      ]
    );
    this.password?.updateValueAndValidity();
  }

  togglePasswordView(): void {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
  }

  submitForm(): void {
    if(!this.signUpForm.invalid) {
      // ready to consumer the server
    }
  }

}
