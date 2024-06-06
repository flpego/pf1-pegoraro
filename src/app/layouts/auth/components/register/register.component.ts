import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  hide = true;
  registerForm: FormGroup;
  errorMessage: string | null = null;
  passwordMatchError: boolean = false;
  constructor(
    private registerFormBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.registerFormBuilder.group(
      {
        name: ['', Validators.required],
        lastName: ['', Validators.required],
        userName: [
          '',
          [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/i)],
        ],
        role: ['', Validators.required],
        password: ['', Validators.required],
        passwordConfirm: ['', Validators.required],
      },
      { validators: this.passwordMatch.bind(this) }
    );
  }

  passwordMatch(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const passwordConfirm = control.get('passwordConfirm')?.value;
    if (password !== passwordConfirm) {
      this.passwordMatchError = true;
      return { mismatch: true };
    } else {
      this.passwordMatchError = false; 
      return null;
    }
  }

  get UserNameControl() {
    return this.registerForm.get('name');
  }
  get UserLastNameControl() {
    return this.registerForm.get('lastName');
  }
  get UserRoleControl() {
    return this.registerForm.get('role');
  }
  get UserPasswordControl() {
    return this.registerForm.get('password');
  }
  get UserPasswordConfirmControl() {
    return this.registerForm.get('passwordConfirm');
  }

  onSubmit() {
    if (this.registerForm.valid && !this.passwordMatchError) {
      const registerFormValue = this.registerForm.value;

      this.authService.resgisterNewUser(registerFormValue).subscribe({
        next: (newUser) => {
          if (newUser) {
            this.router.navigateByUrl('/dashboard');
            this.errorMessage = null;
          } else {
            console.log('Login failed');
            this.errorMessage = 'Usuario y/o contrasena incorrecta';
          }
        },
        error: (error) => {
          console.error('Error al registrar user', error);
          this.errorMessage = 'ocurrio un error durante el registro';
        },
        complete: () => {
          this.registerForm.reset();
        },
      });
    }
  }
}
