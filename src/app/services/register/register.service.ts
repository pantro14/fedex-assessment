import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Registration, RegistrationBody} from '../../model/registration';
import {BASE_URL} from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl;
  constructor(private readonly http: HttpClient) {
    this.baseUrl = BASE_URL;
  }

  postRegistration$(registrationBody: RegistrationBody): Observable<Registration> {
    const URL = `${this.baseUrl}/users`;
    return this.http.post<Registration>(URL, registrationBody);
  }
}
