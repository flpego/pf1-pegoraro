import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LoginRequest } from './models/loginRequest.model';
import {
  BehaviorSubject,
  Observable,
  catchError,
  map,
  tap,
  throwError,
} from 'rxjs';
import { IUser } from '../dashboard/pages/users/models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  userData$: BehaviorSubject<IUser | null> = new BehaviorSubject<IUser | null>(
    null
  );
  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(credentials: LoginRequest): Observable<IUser | null> {
    console.log(credentials);
    return this.httpClient.get<IUser[]>(`${this.baseUrl}/users`).pipe(
      map((users) => {
        const user = users.find(
          (u) =>
            u.userName === credentials.userName &&
            u.password === credentials.password
        );
        if (user) {
          this.userData$.next(user);
          this.loggedIn$.next(true);
          return user;
        } else {
          return null;
        }
      }),

      //encadena el el handleError a la peticion si es que retorna error
      catchError(this.handleError)
    );
  }

  logout(): void {
    this.loggedIn$.next(false);
    this.userData$.next(null);
    this.router.navigate(['auth'])
  }

  //manejo de errores
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error(error.error);
    } else {
      console.error(error.error, error.status);
    }
    return throwError(() => new Error('algo malio sal, dev'));
  }

  get user(): Observable<IUser | null> {
    return this.userData$.asObservable();
  }
  get userLoggedIn(): Observable<boolean> {
    return this.loggedIn$.asObservable();
  }
}
