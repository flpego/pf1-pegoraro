import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  hide = true;
  loginForm: FormGroup;
  constructor(
    private loginFormBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.loginFormBuilder.group({
      userName: ['', Validators.required, Validators.pattern(/^[A-Za-z\s]+$/i)],
      password: [
        '',
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),
      ],
    });
  }

  getUserNameControl() {
    return this.loginForm.get('userName');
  }

  getPasswordControl() {
    return this.loginForm.get('password');
  }

  login(event: Event) {
    event.preventDefault();
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      console.log('usuario inicio seseion');
      const username = this.loginForm.get('userName')?.value;
      const password = this.loginForm.get('password')?.value;
      const observer: Observer<any> = {
        next: (user) => {
          console.log(user);
          this.router.navigate(['dashboard']);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          // Puedes manejar el comportamiento cuando la operación se complete, si es necesario
        },
      };

      // Suscribirse al servicio de autenticación con el objeto Observer
      this.authService.login(username, password).subscribe(observer);
    }
    this.router.navigate(['dasboard']);
  }
}
