import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LoginRequest } from './models/loginRequest.model';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { IUser } from '../dashboard/pages/users/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  userData: BehaviorSubject<IUser> = new BehaviorSubject<IUser>({
    email: '',
    id: '',
    lastname: '',
    name: '',
    password: '',
    role: 'TEACHER',
    userName: '',
  });
  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  login(credentials: LoginRequest): Observable<IUser> {
    console.log(credentials);
    return this.httpClient.get<IUser>(`${this.baseUrl}/users`).pipe(
      tap((user) => {
        this.userData.next(user), this.loggedIn.next(true);
      }),
      //encadena el el handleError a la peticion si es que retorna error
      catchError(this.handleError)
    );
  }

  logout(): void {}

  //manejo de errores
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error(error.error);
    } else {
      console.error(error.error, error.status);
    }
    return throwError(() => new Error('algo malio sal, dev'));
  }

  get user(): Observable<IUser> {
    return this.userData.asObservable();
  }
  get userLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}
