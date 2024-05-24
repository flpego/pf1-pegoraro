import { Component, OnInit } from '@angular/core';
import { TeachersService } from './teachers.service';
import { ITeacher } from './models/teacher.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { TeacherModalComponent } from './components/teacher-modal/teacher-modal.component';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.scss',
})
export class TeachersComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'taughtSubjects',
    'edit',
  ];
  teachers: ITeacher[] = [];
  dataSource!: MatTableDataSource<ITeacher>;

  constructor(
    private teachersService: TeachersService,
    private matDialog: MatDialog
  ) {}

  loadTeachers(): void {
    this.teachersService.getTeachers().subscribe({
      next: (res) => {
        console.log(res);
        this.teachers = res;
        console.log(this.teachers);
        this.updateDataSource();
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

  private addNewTeacher(newTeacher: ITeacher): void {
    this.teachersService.addTeacher(newTeacher).subscribe({
      next: (newStudentData) => {
        this.teachers = [...this.teachers, newTeacher];
        this.loadTeachers();
      },
    });
  }

  onDelete(teacherId: string) {
    this.teachersService.deleteTeacher(teacherId).subscribe({
     next: () => {
       this.teachers = this.teachers.filter(teacher => teacher.id !== teacherId);
       this.updateDataSource();
     },
     error: (err) => {
       console.error('Error al eliminar el estudiante', err);
     }
    })
   }

  ngOnInit(): void {
   this.loadTeachers();
  }

  openModal(editingTeacher?: ITeacher): void {
    this.matDialog
      .open(TeacherModalComponent, {
        data: editingTeacher ? { ...editingTeacher } : undefined,
      })
      .afterClosed()
      .subscribe({
        next: (res: ITeacher) => {
          if (res) {
            console.log(res);
            if (editingTeacher) {
              this.teachersService.updateTeacher(editingTeacher.id, res);

              this.dataSource = new MatTableDataSource(this.teachers);
            } else {
    
              this.addNewTeacher(res);
              this.updateDataSource();
            }
          }
        },
      });
  }

  updateDataSource(): void {
    this.dataSource = new MatTableDataSource(this.teachers);
  }
}
