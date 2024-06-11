import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { LoginRequest } from '../models/loginRequest.model';
import { IUser } from '../../dashboard/pages/users/models/user.model';
import { HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';


describe('AuthService', () => {

  let authServiceLoginSpy: jasmine.SpyObj<AuthService>;
  let loggedIn$: BehaviorSubject<boolean>

  let authService: AuthService;
  beforeEach(() => {

    authServiceLoginSpy = jasmine.createSpyObj('AuthService', ['login']);
    loggedIn$ = new BehaviorSubject<boolean>(true);
    Object.defineProperty(authServiceLoginSpy, 'loggedIn$', { value: loggedIn$ });

    TestBed.configureTestingModule({
      providers: [{ provide: AuthService, useValue: authServiceLoginSpy }],
      imports: [HttpClientModule],
      
    });
    authService = TestBed.inject(AuthService);
    localStorage.clear();
  });

  it('Debe comprobar si loggedIn$ es true al instanciarce', (done) => {
    authServiceLoginSpy.loggedIn$.next(true);
    authService.loggedIn$.subscribe((loggedIn) => {
      expect(loggedIn).toBeTrue();
      done(); 
    });
  });



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
