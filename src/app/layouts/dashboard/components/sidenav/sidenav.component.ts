import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  showFiller = true;

  constructor(private router: Router) {}

  logout():void {
   this.router.navigate(['auth']);
  }
}
