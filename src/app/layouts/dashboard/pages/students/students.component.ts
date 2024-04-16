import { Component, Input } from '@angular/core';
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
  @Input() profesor: string = '';
  materia = 'Quimica';

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
      calificacion: 10,
    },
    {
      id: 3,
      fullName: 'Lucas Ibaniez',
      age: 25,
      calificacion: 8,
    },
    {
      id: 4,
      fullName: 'Joaquin Pereira',
      age: 23,
      calificacion: 10,
    },
    {
      id: 5,
      fullName: 'Ricardo For',
      age: 23,
      calificacion: 10,
    },
  ];

  dataSource = new MatTableDataSource(this.students);

  displayedColumns: string[] = [
    'legajo',
    'fullName',
    'age',
    'calificaciones',
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
                  ? {
                      ...student,
                      ...result,
                    }
                  : student
              );
            } else {
              const currentTime = new Date().getTime();

              result.id = currentTime;
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
