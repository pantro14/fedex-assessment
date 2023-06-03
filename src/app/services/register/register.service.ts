import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Registration, RegistrationBody} from '../../model/registration';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private readonly http: HttpClient) {}

  postRegistration$(registrationBody: RegistrationBody): Observable<Registration> {
    const URL = `/api/users`;
    return this.http.post<Registration>(URL, registrationBody);
  }
}
