import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [

      {
        path: 'home',
        loadChildren: () => 
          import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'students',
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
