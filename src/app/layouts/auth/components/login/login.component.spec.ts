import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LoginComponent } from './login.component';
import { SharedModule } from '../../../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { IUser } from '../../../dashboard/pages/users/models/user.model';
import { of } from 'rxjs';


describe('LoginComponent', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService : jasmine.SpyObj<AuthService>;
  let router :  jasmine.SpyObj<Router>

  beforeEach(() => {
    authService = jasmine.createSpyObj('AuthService', ['login']);
    router = jasmine.createSpyObj('Router', ['navigateByUrl']);
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [SharedModule, BrowserAnimationsModule, HttpClientModule],
      providers: [
        { provide: AuthService, useValue: authService },
        { provide: Router, useValue: router }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(LoginComponent);

    component = fixture.componentInstance;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>; 
    fixture.detectChanges()
  });
  
  it('Debe ser requerido: el campo userName', () => {
    const control = component.loginForm.get('userName');
    control?.setValue('');
    expect(control?.hasError('required')).toBeTrue();
  });

  it('Debe ser requerido: el campo userName', () => {
    const control = component.loginForm.get('userName');
    control?.setValue('');
    expect(control?.hasError('required')).toBeTrue();
  });

  it('Debe navegar al Dashboard si el login es exitoso', () => {
    const loginData = { userName: 'testuser', password: 'testpassword' };
    const mockUser: IUser = {
      id: '123',
      userName: 'testuser',
      name: 'Test',
      lastname: 'User',
      password: 'testpassword',
      role: 'STUDENT'
    };

    authService.login.and.returnValue(of(mockUser));  

    component.loginForm.setValue(loginData);
    component.onSubmit();

    expect(router.navigateByUrl).toHaveBeenCalledWith('/dashboard');
    expect(component.errorMessage).toBeNull();
  })

  it('Debe establecer errorMessage si el login falla', () => {
    const loginData = { userName: 'testuser', password: 'testpassword' };

    authService.login.and.returnValue(of(null));  

    component.loginForm.setValue(loginData);
    component.onSubmit();

    expect(component.errorMessage).toBe('Usuario y/o contrasena incorrecta');
  });
  
});
