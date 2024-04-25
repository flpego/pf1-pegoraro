import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../core/services/courses.service';
import { ITeacher } from './pages/teachers/models/teacher.model';
import { ICourse } from './pages/courses/models/course.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  showFiller = true;
  constructor(
    private coursesService: CoursesService,
  ) {}
  ngOnInit(): void {
    this.getCourses();
    this.getTeachers();
  }
  teachers: ITeacher[] = [];
  courses: ICourse[] = [];
  students =[]
  getCourses() {
    this.coursesService.getCourses().subscribe({
      next: (res) => {
        console.log(res);
        this.courses = res;
      },
    });
  }

  getTeachers() {
    this.coursesService.getTeachers().subscribe({
      next: (res) => {
        this.teachers = res;
        console.log(res);
      },
    });
  }

  assignTeacherToCourse(): void {

  }
}
