import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../layouts/auth/auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.loggedIn$.pipe(
    map((user) => {
      if (!user) {
        return router.createUrlTree(['auth']);
      } else {
        return true;
      }
    })
  );

};
