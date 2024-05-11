import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, throwError } from "rxjs";
import { IUser } from "../dashboard/pages/users/models/user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService{
    private loggedIn: boolean = false;
    private baseUrl = 'http://localhost:3000';
    constructor(private httpCl: HttpClient){

    }
   

    login(username: string, password: string){
        return this.httpCl.post<IUser>(`${this.baseUrl}/login`, { username, password })
        .pipe(
            map((res) => {
                this.loggedIn = true;
                console.log(res)
                return res;
            }),
            catchError((error) => {
                console.log(error)
                return error;
            })
        );
    }

    logout(): void {
        this.loggedIn = false;
    }

    isLoggedIn(): boolean {
        // Retorna el estado actual de autenticación del usuario
        console.log(this.loggedIn)
        return this.loggedIn;
    }
}