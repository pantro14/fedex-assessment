import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  passwordValidators,
  signUpFormControl,
} from '../../models/sign-up-form-control';
import { verifyForbidWords } from '../../utils/custom-validators/password/password-validations';
import { combineLatestWith, finalize, Observable, Subscription } from 'rxjs';
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
  validPasswordSubscription: Subscription | undefined;

  passwordType = 'password';

  get firstName() {
    return this.signUpForm.get('firstName') as FormControl;
  }
  get lastName() {
    return this.signUpForm.get('lastName') as FormControl;
  }
  get email() {
    return this.signUpForm.get('email') as FormControl;
  }
  get password() {
    return this.signUpForm.get('password') as FormControl;
  }

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) {
    this.signUpForm = this.formBuilder.group(signUpFormControl);

    // Password validation must be updated every time first name and last name change
    this.validPasswordSubscription = this.firstName.valueChanges
      .pipe(combineLatestWith(this.lastName.valueChanges))
      .subscribe({
        next: ([firstName, lastName]) =>
          this.updatePasswordValidators(firstName, lastName),
      });
  }

  updatePasswordValidators(firstName: string, lastName: string): void {
    this.password?.setValidators([
      ...passwordValidators,
      verifyForbidWords(firstName, lastName),
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
          firstName: this.firstName.value,
          lastName: this.lastName.value,
          email: this.email.value,
        })
        .pipe(finalize(() => (this.loading = false)));
    }
  }

  ngOnDestroy() {
    this.validPasswordSubscription?.unsubscribe();
  }
}
