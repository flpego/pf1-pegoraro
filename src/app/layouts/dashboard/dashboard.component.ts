import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

import { IUser } from './pages/users/models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  showFiller = true;
  userLoginOn:boolean = false;
  user:IUser | null = null;
  constructor(private router: Router, private authService: AuthService) {
  }

  logout():void {
    this.authService.logout()
  }

  ngOnInit(): void {
    this.authService.userData$.subscribe({
      next: (userData)=>{
        this.user = userData;
        this.userLoginOn = true;
      }
    });

  }
}
