import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentsService } from '../../students.service';
import { IGrade, IStudent } from '../../models/student.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.scss',
})
export class StudentDetailsComponent implements OnInit {
  student: IStudent | null = null;
  gradeForm: FormGroup;

  displayedColumns: string[] = ['nombre', 'nota', 'fecha'];
  dataSource = new MatTableDataSource<IGrade>();

  constructor(
    private fb: FormBuilder,
    private studentService: StudentsService,
    private matDialogRef: MatDialogRef<StudentDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { student?: IStudent }
  ) {
    this.gradeForm = this.fb.group({
      title: [''],
      grade: [
        '',
        [Validators.required, Validators.min(1), Validators.max(100)],
      ],
    });
  }

  onSubmit(): void {
    if (this.gradeForm.valid) {
      const newGrade: IGrade = {
        ...this.gradeForm.value,
        createdAt: new Date(),
      };

      if (this.student) {
        this.student.grades.push(newGrade);
        this.studentService
          .editStudent(this.student.id, this.student)
          .subscribe({
            next: (updatedStudent) => {
              this.student = updatedStudent;
              this.dataSource = new MatTableDataSource(updatedStudent.grades);

              console.log(
                'Estudiante actualizado con nueva calificación:',
                this.student
              );
              this.gradeForm.reset();
            },
            error: (err) => {
              console.error('Error al actualizar el estudiante', err);
            },
          });
      }
    }
  }

  ngOnInit(): void {
    const id = this.data.student?.id;

    if (id) {
      console.log(this.data);
      this.studentService.getStudentById(id).subscribe({
        next: (student) => {
          this.student = student;
          this.dataSource = new MatTableDataSource(student.grades);
          console.log('Estudiante cargado:', this.student);
        },
        error: (err) => {
          console.error('Error al cargar el estudiante', err);
        },
      });
    }
  }
}
