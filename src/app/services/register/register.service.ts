import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registration, RegistrationBody } from '../../models/registration';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private readonly http: HttpClient) {}

  postRegistration$(
    registrationBody: RegistrationBody
  ): Observable<Registration> {
    return this.http.post<Registration>(
      `${environment.baseUrl}/users`,
      registrationBody
    );
  }
}
