import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IStudent } from './models/student.model';
import { MatDialog } from '@angular/material/dialog';
import { StudentModalComponent } from './components/student-modal/student-modal.component';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent {
  students: IStudent[] = [
    {
      id: 1,
      fullName: 'Juan Perez',
      age: 25,
      calificacion: 8,
    },
    {
      id: 2,
      fullName: 'Ernesto Barros',
      age: 23,
      calificacion: 6,
    },
  ];

  dataSource = new MatTableDataSource(this.students);

  displayedColumns: string[] = [
    'legajo',
    'fullName',
    'age',
    'calificacion',
    'state',
  ];
  saludar(): void {
    console.log('hola');
  }

  constructor(private matDialog : MatDialog) {

  }

  openModal(): void {
    this.matDialog.open(StudentModalComponent).afterClosed().subscribe({
      next: (result) => {
        if(result) {
          this.students = [...this.students, result]
        }
      }
    })
  }





}
