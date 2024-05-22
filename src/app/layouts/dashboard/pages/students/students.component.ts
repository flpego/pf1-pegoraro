import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentsService } from './students.service';
import { MatTableDataSource } from '@angular/material/table';
import { StudentModalComponent } from './components/student-modal/student-modal.component';
import { IStudent } from './models/student.model';
import { StudentDetailsComponent } from './components/student-details/student-details.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'edit'];
  dataSource!: MatTableDataSource<IStudent>;
  students: IStudent[] = [];
  constructor(
    private matDialog: MatDialog,
    private studentsService: StudentsService
  ) {}

  ngOnInit(): void {
    this.loadStudents();
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
              this.updateStudent(editingStudent.id, res);
            } else {
              this.addNewStudent(res);
            }
          }
        },
      });
  }

  openStudentDetails(student?: IStudent):void {
    this.matDialog.open(StudentDetailsComponent,{ data: { student }}) 
  }

  //metodo para cargar los studiantes
  loadStudents(): void {
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

  //metodo para agregar nuevo studiante
  private addNewStudent(newStudent: IStudent): void {
    this.studentsService.addStudent(newStudent).subscribe({
      next: (newStudentData) => {
        this.students = [...this.students, newStudent];
        this.updateDataSource();
      },
    });
  }
  //metodo para actualizar estudiante
 updateStudent(id: string, editingStudent: IStudent ): void {
    this.studentsService.editStudent(id, editingStudent).subscribe({
      next: (res) => {
        this.students = this.students.map((student) => student.id === id ? res : student);
        this.updateDataSource()
      }
    })
    
  }

  //implementar protocolo htttp para eliminar
  onDelete(studentId: string) {
   this.studentsService.deleteStudent(studentId).subscribe({
    next: () => {
      this.students = this.students.filter(student => student.id !== studentId);
      this.updateDataSource();
    },
    error: (err) => {
      console.error('Error al eliminar el estudiante', err);
    }
   })
  }
  //metodo para actualizar la tabla
  updateDataSource(): void {
    this.dataSource = new MatTableDataSource(this.students);
  }
}
