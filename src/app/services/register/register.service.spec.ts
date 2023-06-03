import {fakeAsync, TestBed} from '@angular/core/testing';

import { RegisterService } from './register.service';
import {of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {RegistrationBody} from '../../model/registration';

describe('RegisterService', () => {
  let service: RegisterService;

  const registrationMock = {
    _id: 'id',
    firstName: 'Homer',
    lastName: 'Simpson',
    email: 'homer@simpsons.com'
  };

  const httpMock = {
    post: jest.fn().mockReturnValue(of(registrationMock))
  } as unknown as HttpClient;

  beforeEach(() => {
    service = new RegisterService(
      httpMock
    )
  });

  it('service should be created', () => {
    expect(service).toBeDefined();
  });

  it('service should be created', fakeAsync(() => {
    service.postRegistration$({} as RegistrationBody)
      .subscribe({
        next: (result) => {
          expect(result).toBe(registrationMock);
        }
      })
  }));

});
