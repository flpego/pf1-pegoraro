import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentsComponent } from './pages/students/students.component';
import { authGuard } from '../../core/guards/auth.guard';
import { userGuard } from '../../core/guards/user.guard';

const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
    canActivateChild: [authGuard],
    children: [

      {
        path: 'home',
        component: HomeComponent,
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'students',
        component: StudentsComponent,
        // canActivate: [userGuard],
        loadChildren: () =>
          import('./pages/students/students.module').then(
            (m) => m.StudentsModule
          ),
      },
      {
        path: 'teachers',
        loadChildren: () =>
          import('./pages/teachers/teachers.module').then(
            (m) => m.TeachersModule
          ),
      },
      {
        path: 'users',
        canActivate: [userGuard],
        loadChildren: () =>
          import('./pages/users/users.module').then(
            (m) => m.UsersModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
