import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IStudent } from '../../models/student.model';

@Component({
  selector: 'app-student-modal',
  templateUrl: './student-modal.component.html',
  styleUrl: './student-modal.component.scss',
})
export class StudentModalComponent {
  studentsForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<StudentModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data?: IStudent
  ) {
    this.studentsForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      calificacion: ['sin asignar'],
    });
    if (data) {
      this.studentsForm.patchValue(data);
    }
  }

  onSaveEstudent(): void {
    if (this.studentsForm.invalid) {
      this.studentsForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.studentsForm.value);
    }
  }
}
