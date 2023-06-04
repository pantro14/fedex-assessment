import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {
  passwordValidators,
  signUpFormControl,
} from '../../models/sign-up-form-control';
import { verifyForbidWords } from '../../utils/custom-validators/password/password-validations';
import { finalize, Observable, Subscription } from 'rxjs';
import { Registration } from '../../models/registration';
import { RegisterService } from '../../services/register/register.service';
import { LetDirective } from '@ngrx/component';
import { ErrorMessageComponent } from '../../common/error-message/error-message.component';
import { SuccessMessageComponent } from '../../common/success-message/success-message.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LetDirective,
    ErrorMessageComponent,
    SuccessMessageComponent,
  ],
  templateUrl: './sign-up.component.html',
  styles: [],
})
export class SignUpComponent implements OnDestroy {
  signUpForm;
  registration$: Observable<Registration>;
  loading: boolean;

  firstNameSubscription: Subscription | undefined;
  lastNameSubscription: Subscription | undefined;

  passwordType = 'password';

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) {
    this.signUpForm = this.formBuilder.group(signUpFormControl);
    // Password validation must be updated every time first name and last name change
    this.firstNameSubscription = this.firstName?.valueChanges.subscribe({
      next: () => this.updatePasswordValidators(),
    });
    this.lastNameSubscription = this.lastName?.valueChanges.subscribe({
      next: () => this.updatePasswordValidators(),
    });
  }

  ngOnDestroy() {
    this.firstNameSubscription?.unsubscribe();
    this.lastNameSubscription?.unsubscribe();
  }

  get firstName() {
    return this.signUpForm.get('firstName');
  }
  get lastName() {
    return this.signUpForm.get('lastName');
  }
  get email() {
    return this.signUpForm.get('email');
  }
  get password() {
    return this.signUpForm.get('password');
  }

  updatePasswordValidators(): void {
    this.password?.setValidators([
      ...passwordValidators,
      verifyForbidWords(
        this.firstName?.value as string,
        this.lastName?.value as string
      ),
    ]);
    this.password?.updateValueAndValidity();
  }

  togglePasswordView(): void {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
  }

  submitForm(): void {
    if (!this.signUpForm.invalid) {
      this.loading = true;
      this.registration$ = this.registerService
        .postRegistration$({
          firstName: this.firstName?.value as string,
          lastName: this.lastName?.value as string,
          email: this.email?.value as string,
        })
        .pipe(finalize(() => (this.loading = false)));
    }
  }
}
