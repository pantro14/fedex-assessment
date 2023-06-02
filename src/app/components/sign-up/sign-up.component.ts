import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {signUpFormControl} from '../../model/sign-up-form-control';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styles: [],
})
export class SignUpComponent {
  signUpForm;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.signUpForm = this.formBuilder.group(signUpFormControl)
  }

  get firstName() { return this.signUpForm.get('firstName')};
  get lastName() { return this.signUpForm.get('lastName')};
  get email() { return this.signUpForm.get('email')};
  get password() { return this.signUpForm.get('password')};

  submitForm(): void {
    console.log('form submitted');
  }

}
