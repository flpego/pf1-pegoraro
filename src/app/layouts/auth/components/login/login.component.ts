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
      userName: [
        '',
        [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/i)],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),
        ],
      ],
    });
  }

  getUserNameControl() {
    return this.loginForm.get('userName');
  }

  getPasswordControl() {
    return this.loginForm.get('password');
  }

  loginUser(){
    if(this.loginForm.valid){
      console.log("user inicio sesion");
      this.router.navigateByUrl("/dashboard");
      this.loginForm.reset()
    }else{
      alert("User y/o password incorrecta")
    }
  }
}
