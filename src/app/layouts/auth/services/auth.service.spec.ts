import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

import { LoginRequest } from '../models/loginRequest.model';
import { IUser } from '../../dashboard/pages/users/models/user.model';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('AuthService', () => {
  let authService: AuthService;
  let authServiceLoginSpy: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    authServiceLoginSpy = jasmine.createSpyObj('AuthService', ['login']);

    TestBed.configureTestingModule({
      providers: [{ provide: AuthService, useValue: authServiceLoginSpy }],
      imports: [HttpClientModule],
      
    });
    authService = TestBed.inject(AuthService);
  });

  it('Debe comprobar si hay user en el localStore', () => {});

  it('Debe retornar un Observable de tipo IUser al llamar login si las credenciales son validas', (done) => {
    const credentials: LoginRequest = {
      userName: 'joaperez',
      password: '1234ar',
    };

    const user: IUser = {
      id: 'ec5b',
      name: 'jaoquin',
      lastname: 'perez',
      userName: 'joaperez',
      role: 'STUDENT',
      password: '1234ar',
    };

    authServiceLoginSpy.login.and.returnValue(of(user));

    authService.login(credentials).subscribe({
      next: (data) => {
        expect(data).toBe(user);
        done();
      }
    })

    

   
  });
});
