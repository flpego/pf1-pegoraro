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
  materia= "Quimica";
  profesor= "Walter White";

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
    'edit',
  ];


  constructor(private matDialog: MatDialog) {}

  openModal(editingStudent?: IStudent): void {
    this.matDialog
      .open(StudentModalComponent, { data: editingStudent })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            if (editingStudent) {
              this.students = this.students.map((student) =>
                student.id === editingStudent.id
                  ? { ...student, ...result }
                  : student
              );
            } else {
              const currentTime = new Date()
                .getTime()
                .toString()
                .substring(0, 2);
               const currentTimeInt = parseInt(currentTime) * Math.random()
              result.id = currentTimeInt
              this.students = [...this.students, result];
            }
          }
        },
      });
  }

  onDelete(studentId: number) {
    this.students = this.students.filter((student) => student.id != studentId);
  }
}
