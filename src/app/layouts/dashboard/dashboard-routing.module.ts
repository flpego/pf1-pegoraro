import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentsComponent } from './pages/students/students.component';

const routes: Routes = [

  {
    path: 'dashboard',
    component: DashboardComponent,
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
