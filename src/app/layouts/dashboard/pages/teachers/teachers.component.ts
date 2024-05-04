import { Component, OnInit } from '@angular/core';
import { TeachersService } from './teachers.service';
import { ITeacher } from './models/teacher.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.scss',
})
export class TeachersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'taughtSubjects', 'edit'];
  teachers: ITeacher[] = [];
  dataSource!: MatTableDataSource<ITeacher> ;

  constructor(private teachersService: TeachersService) {}

  ngOnInit(): void {
    this.teachersService.getTeachers().subscribe({
      next: (teachers) => {
        this.teachers = teachers;
        this.dataSource = new MatTableDataSource(this.teachers)
      },
      error: (err) => {console.log(err)},
    })
  }
}
