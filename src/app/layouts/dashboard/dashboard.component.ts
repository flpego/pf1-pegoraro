import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../core/services/courses.service';
import { TeachersService } from './pages/teachers/services/teachers.service';
import { ITeacher } from './pages/teachers/models/teacher.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  showFiller = true;
  constructor(private coursesService: CoursesService, private teachersService: TeachersService) {

  }
  teacher: ITeacher[] = [];
  getTeacherProfile() {
    this.coursesService.getCourses().subscribe({
      next: (res) => {
        console.log(res)
      }
    });
    this.teachersService.getTeachers().subscribe({
      next: (res) => {
        this.teacher = res;
        console.log(res)
      }
    });
  }

  ngOnInit(): void {
    this.getTeacherProfile();
  }
}
