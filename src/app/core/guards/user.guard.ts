import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../layouts/auth/auth.service';
import { map } from 'rxjs';

export const userGuard: CanActivateFn = (route, state) => {

  const  authService = inject(AuthService);
  const router = inject(Router)

  return authService.userData$.pipe(
    map((user) => user?.role !== 'ADMIN' ?  router.createUrlTree(['dashboard', 'home']) : true)
  );
};
