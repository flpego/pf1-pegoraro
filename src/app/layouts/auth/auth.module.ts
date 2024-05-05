import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../../shared/shared.module';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
