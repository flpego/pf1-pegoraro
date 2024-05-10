import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  hide = true;
  registerForm: FormGroup;
  constructor(private registerFormBuilder: FormBuilder){
    this.registerForm = registerFormBuilder.group({
      name:['', Validators.required],
      lastName : ['', Validators.required],
      role : ['', Validators.required],
      password : ['', Validators.required],
      passwordConfirm : ['', Validators.required]
    })


  }


  getUserNameControl() {
    return this.registerForm.get('name');
  }

  getUserLastNameControl() {
    return this.registerForm.get('lastName');
  }
  getUserRole() {
    return this.registerForm.get('role');
  }
  getUserPassword() {
    return this.registerForm.get('password');
  }
  getUserPasswordConfirm() {
    return this.registerForm.get('passwordConfirm');
  }
}
