import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { LoginRequest } from "./models/loginRequest.model";
import { Observable, catchError, throwError } from "rxjs";
import { IUser } from "../dashboard/pages/users/models/user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService{
    private loggedIn: boolean = false;
    private baseUrl = 'http://localhost:3000';
    constructor(private httpClient: HttpClient){

    }
   

    login(credentials: LoginRequest):Observable<IUser>{
        console.log(credentials)
        return this.httpClient.get<IUser>(`${this.baseUrl}/users`).pipe(
            catchError(this.handleError)
        )
    }

    logout(): void {
        this.loggedIn = false;
    }

    isLoggedIn(): boolean {
        // Retorna el estado actual de autenticación del usuario
        console.log(this.loggedIn)
        return this.loggedIn;
    }
//manejo de errores
    private handleError(error: HttpErrorResponse){
        if( error.status === 0){
            console.error(error.error)
        }else{
            console.error(error.error, error.status)
        }
        return throwError( ()=> new Error("algo malio sal, dev") )
    }
}