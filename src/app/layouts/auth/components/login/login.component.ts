import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  hide = true;
  loginForm: FormGroup;
  errorMessage: string | null = null; //implementar alerta de error
  
  constructor(
    private loginFormBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.loginFormBuilder.group({
      userName: [
        '',
        [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/i)],
      ],
      password: [
        '',
        [
          Validators.required,
          //1 numero, una mayuscula, 1 minuscula, 4 caracteres minimos
          Validators.pattern('^[a-z0-9]+$'),
        ],
      ],
    });
  }

  get UserNameControl() {
    return this.loginForm.get('userName');
  }

  get PasswordControl() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    const loginData = this.loginForm.value;
    this.authService.login(loginData).subscribe({
      next: (user) => {
        if (user) {
          this.router.navigateByUrl('/dashboard');

          this.errorMessage = null;
        } else {
          console.log('Login failed');
          this.errorMessage = 'Usuario y/o contrasena incorrecta';
        }
      },
      error: (error) => {
        console.error('Login failed', error);
        this.errorMessage = 'Ocurrio un error durante el login';
      },
      complete: () => {
        this.loginForm.reset();
      },
    });
  }

 
}
