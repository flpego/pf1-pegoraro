import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StudentsModule } from './pages/students/students.module';

@NgModule({
  declarations: [DashboardComponent, ],
  imports: [
    StudentsModule,
    CommonModule,
    DashboardRoutingModule,
    //importacines de angular material
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
