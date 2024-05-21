import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { IUser } from '../../pages/users/models/user.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  showFiller = true;

  user:IUser | null = null;

  constructor(private router: Router, private authService: AuthService) {}

  logout():void {
    this.authService.logout()
    this.authService.userData$.subscribe({
      next: (userData)=>{
        this.user = userData;
      }
    });
  }
}
