import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './pages/course/course.component';

const routes: Routes = [
  {
    path: "",
    component: CoursesComponent
  },
  {
    path: ":course",
    component: CourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
