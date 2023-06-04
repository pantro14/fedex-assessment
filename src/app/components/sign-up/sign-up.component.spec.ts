import { fakeAsync, tick } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { RegisterService } from '../../services/register/register.service';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

describe('SignUpComponent', () => {
  let component: SignUpComponent;

  const registrationMock = {
    _id: 'id',
    firstName: 'Homer',
    lastName: 'Simpson',
    email: 'homer@simpsons.com',
  };

  const mockRegisterService = {
    postRegistration$: jest.fn().mockReturnValue(of(registrationMock)),
  } as unknown as RegisterService;

  beforeEach(() => {
    component = new SignUpComponent(new FormBuilder(), mockRegisterService);
  });

  it('should create the component', () => {
    expect(component).toBeDefined();
  });

  it('should update password validators when first name changes', fakeAsync(() => {
    const spyUpdatePasswordValidator = jest.spyOn(
      component,
      'updatePasswordValidators'
    );
    component.signUpForm.controls['firstName'].setValue('Homer');
    tick();
    expect(spyUpdatePasswordValidator).toHaveBeenCalled();
  }));

  it('should update password validators when last name changes, form invalid', fakeAsync(() => {
    component.signUpForm.controls['password'].setValue('simpson123');
    component.signUpForm.controls['lastName'].setValue('Simpson');
    tick();
    expect(component.signUpForm.invalid).toBeTruthy();
  }));

  it('should test submit form', fakeAsync(() => {
    component.signUpForm.controls['firstName'].setValue('Homer');
    component.signUpForm.controls['lastName'].setValue('Simpson');
    component.signUpForm.controls['email'].setValue('homer@simpson.com');
    component.signUpForm.controls['password'].setValue('MyP@$$word');
    component.submitForm();
    expect(component.signUpForm.valid).toBeTruthy();
    component.registration$.subscribe({
      next: (result) => {
        expect(result).toBe(registrationMock);
      },
    });
    tick();
  }));

  it('should test toggle password view', () => {
    component.passwordType = 'text';
    component.togglePasswordView();
    expect(component.passwordType).toBe('password');
    component.togglePasswordView();
    expect(component.passwordType).toBe('text');
  });
});
