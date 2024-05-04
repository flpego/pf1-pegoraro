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
  displayedColumns: string[] = ['id', 'name', 'email', 'taughtSubjects', 'edit'];
  teachers: ITeacher[] = [];
  dataSource!: MatTableDataSource<ITeacher> ;

  constructor(private teachersService: TeachersService, private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.teachersService.getTeachers().subscribe({
      next: (teachers) => {
        this.teachers = teachers;
        this.dataSource = new MatTableDataSource(this.teachers)
      },
      error: (err) => {console.log(err)},
    })
  }

  openModal(editingTeacher?: ITeacher): void {

    this.matDialog
      .open(TeacherModalComponent, { data: editingTeacher ? { ...editingTeacher } : undefined, })
      .afterClosed()
      .subscribe({
        next: (res: ITeacher) => {
          if (res) {
            console.log(res);
            if (editingTeacher) {
              console.log(editingTeacher);
          
              Object.assign(editingTeacher, res);
          
              this.dataSource = new MatTableDataSource(this.teachers);
            } else {
              const currentTime = new Date().getTime();
              console.log(res);
              res.id = currentTime;
              this.teachers = [...this.teachers, res];
              this.dataSource = new MatTableDataSource(this.teachers);
            }
           
          }
        },
      });
  }

}
