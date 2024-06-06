import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { SharedModule } from '../../../../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

import { Router } from '@angular/router';
import { of } from 'rxjs';
import { CreateUserPayload } from '../../../dashboard/pages/users/models/user.model';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;
  beforeEach(() => {
    authService = jasmine.createSpyObj('AuthService', ['resgisterNewUser']);
    router = jasmine.createSpyObj('Router', ['navigateByUrl']);
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [SharedModule, BrowserAnimationsModule, HttpClientModule],
      providers: [
        { provide: AuthService, useValue: authService },
        { provide: Router, useValue: router },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(RegisterComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe ser requerido: el campo name', () => {
    const control = component.registerForm.get('name');
    control?.setValue('');
    expect(control?.hasError('required')).toBeTrue();
  });

  it('Debe ser requerido: el campo lastName', () => {
    const control = component.registerForm.get('lastName');
    control?.setValue('');
    expect(control?.hasError('required')).toBeTrue();
  });

  it('Debe ser requerido: el campo userName', () => {
    const control = component.registerForm.get('userName');
    control?.setValue('');
    expect(control?.hasError('required')).toBeTrue();
  });

  it('Debe ser requerido: el campo role', () => {
    const control = component.registerForm.get('role');
    control?.setValue('');
    expect(control?.hasError('required')).toBeTrue();
  });

  it('Debe ser requerido: el campo password', () => {
    const control = component.registerForm.get('password');
    control?.setValue('');
    expect(control?.hasError('required')).toBeTrue();
  });
  it('Debe ser invalido si las contrasenias no coinciden', () => {
    const form = component.registerForm;
    form.setValue({
      name: 'Juan',
      lastName: 'Perez',
      userName: 'juanPerez',
      role: 'STUDENT',
      password: 'asdfasd',
      passwordConfirm: 'test1234',
    });
    expect(form.valid).toBeFalse();
    expect(form.get('passwordConfirm')?.errors?.['mismatch']).toBeUndefined();
  });

  it('Debe llamar al metodo registerNewUser del AuthService con los datos al enviar el formulario', () => {
    const formValue: CreateUserPayload = {
      name: 'Juan',
      lastName: 'Perez',
      userName: 'juanPerez',
      role: 'STUDENT',
      password: 'test1234',
      passwordConfirm: 'test1234'
    };
    component.registerForm.setValue(formValue);
    authService.resgisterNewUser.and.returnValues(of(null));
    component.onSubmit();
    expect(authService.resgisterNewUser).toHaveBeenCalledWith(formValue);
  });
});
