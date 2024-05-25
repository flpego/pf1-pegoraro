import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { IStudent } from '../students/models/student.model';
import { ITeacher } from '../teachers/models/teacher.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  students: IStudent[] = []
  teachers: ITeacher[] = []

  constructor(private homeService: HomeService){}

  ngOnInit(): void {
    this.homeService.getData().subscribe({
      next: (res) => {
        this.students = res.students;
        this.teachers = res.teachers;
      }
    })
  }
}
