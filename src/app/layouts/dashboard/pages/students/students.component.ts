import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentsService } from './students.service';
import { MatTableDataSource } from '@angular/material/table';
import { StudentModalComponent } from './components/student-modal/student-modal.component';
import { IStudent } from './models/student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'grades', 'edit'];
  dataSource!: MatTableDataSource<IStudent>;
  students: IStudent[] = [];
  constructor(
    private matDialog: MatDialog,
    private studentsService: StudentsService
  ) {}

  ngOnInit(): void {
    this.studentsService.getStudents().subscribe({
      next: (res) => {
        console.log(res);
        this.students = res;
        console.log(this.students);
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
      .open(StudentModalComponent, {
        data: editingStudent ? { ...editingStudent } : undefined,
      })
      .afterClosed()
      .subscribe({
        next: (res: IStudent) => {
          if (res) {
            if (editingStudent) {
              console.log(editingStudent);
              // Copia las calificaciones del estudiante actual
              const updatedGrades = [...editingStudent.grades];
              // Agrega las nuevas calificaciones
              for (const grade of res.grades) {
                updatedGrades.push(grade);
              }
              // Actualiza las calificaciones del estudiante
              editingStudent.grades = updatedGrades;

              // Actualiza otros campos del estudiante
              Object.assign(editingStudent, res);

              this.dataSource = new MatTableDataSource(this.students);
              this.updateDataSource();
              this.dataSource = new MatTableDataSource(this.students);
            } else {
              this.studentsService.addStudent(res).subscribe({
                next: (newStudent) => {
                  this.students = [...this.students, newStudent];
                  this.dataSource = new MatTableDataSource(this.students);
                },
              });
              this.dataSource = new MatTableDataSource(this.students);
              console.log(this.students);
            }
          }
        },
      });
  }

  onDelete(studentId: number) {
    this.students = this.students.filter((student) => student.id != studentId);
    this.dataSource = new MatTableDataSource(this.students);
  }

  updateDataSource(): void {
    this.dataSource = new MatTableDataSource(this.students);
  }
}
