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

  errorMessage:string =""; //implementar alerta de error
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
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{4,}$/),
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

  loginUser() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (userData) => {
          console.log(userData);
        },
        error: (error) => {
          this.errorMessage = error;
          console.log(error);
        },
        complete: () => {
          console.log('User Login completed');

          this.router.navigateByUrl('/dashboard');
          this.loginForm.reset();
        },
      });
    } else {
      this.loginForm.markAllAsTouched();
      alert('User y/o password incorrecta');
    }
  }
}
