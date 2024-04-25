import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IStudent } from './models/student.model';
import { MatDialog } from '@angular/material/dialog';
import { StudentModalComponent } from './components/student-modal/student-modal.component';
import { StudentsService } from './services/students.service';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent implements OnInit {
  @Input() profesor: string = '';
  materia = 'Quimica';
  dataSource;
  constructor(
    private matDialog: MatDialog,
    private studentsService: StudentsService
  ) {
    this.dataSource = new MatTableDataSource<IStudent>();
  }

  displayedColumns: string[] = [
    'legajo',
    'fullName',
    'age',
    'grade',
    'state',
    'edit',
  ];

  students: IStudent[] = [];

  ngOnInit(): void {
    this.studentsService.getStudents().subscribe({
      next: (res) => {
        console.log(res);

        this.students = res;
        this.dataSource = new MatTableDataSource(this.students);
      },
      error: (err) => {
        //en un futuro, manjejo de errores
        console.log(err);
      },
      complete: () => {
        console.log('task completed');
      },
    });
  }

  openModal(editingStudent?: IStudent): void {
    this.matDialog
      .open(StudentModalComponent, { data: editingStudent })
      .afterClosed()
      .subscribe({
        next: (res: IStudent) => {
          if (res) {
            console.log(res);
            if (editingStudent) {
              console.log(editingStudent);
              this.students = this.students.map((student) =>
                student.id === editingStudent.id
                  ? {
                      ...student,
                      ...res,
                    }
                  : student
              );
            } else {
              const currentTime = new Date().getTime();
              console.log(res);
              console.log(this.students);
              res.id = currentTime;
              this.students = [...this.students, res];
              console.log(this.students);
            }
          }
        },
      });
  }

  onDelete(studentId: number) {
    this.students = this.students.filter((student) => student.id != studentId);
  }
}
