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
import {
  IUser,
  CreateUserPayload,
} from '../dashboard/pages/users/models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    this.hasUser()
  );
  userData$: BehaviorSubject<IUser | null> = new BehaviorSubject<IUser | null>(
    null
  );
  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient, private router: Router) {}

  //defino funcion que retorna un boolean para determinar si hay user
  private hasUser(): boolean {
    return !!localStorage.getItem('user');
  }

  getUserFromLocalStore(): IUser | null {
    const user = localStorage.getItem('user');
    //expresion ternaria, si hay user...
    return user ? JSON.parse(user) : null;
  }

  private setUserToLocalStorage(user: IUser | null) {
    return user
      ? localStorage.setItem('user', JSON.stringify(user))
      : localStorage.removeItem('user');
  }

  login(credentials: LoginRequest): Observable<IUser | null> {
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
          this.setUserToLocalStorage(user);
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
    this.setUserToLocalStorage(null);
    this.router.navigate(['auth']);
  }

  //regsiter

  resgisterNewUser(payload: CreateUserPayload): Observable<IUser | null> {
    console.log(payload);
    return this.httpClient.post<IUser>(`${this.baseUrl}/users`, payload).pipe(
      map((user) => {
        if (user) {
          this.userData$.next(user);
          this.loggedIn$.next(true);
          this.setUserToLocalStorage(user);
          return user;
        } else {
          return null;
        }
      })
    );
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
