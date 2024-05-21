import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { IUser } from '../../pages/users/models/user.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent implements OnInit {
  showFiller = true;

  user: IUser | null = null;

  constructor(private router: Router, private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }

  ngOnInit(): void {
    const userFromStorage = this.authService.getUserFromLocalStore();
    console.log(userFromStorage);
    if (userFromStorage) {
      this.user = userFromStorage;
    } else {
      this.authService.userData$.subscribe({
        next: (userData) => {
          console.log(userData);
          this.user = userData;
        },
      });
    }
  }
}
