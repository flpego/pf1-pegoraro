import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-student-modal',
  templateUrl: './student-modal.component.html',
  styleUrl: './student-modal.component.scss',
})
export class StudentModalComponent {
  studentsForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<StudentModalComponent>
  ) {
    this.studentsForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      calificacion: ['sin asignar']
    });
  }

  onSaveEstudent(): void {
    if (this.studentsForm.invalid) {
      this.studentsForm.markAllAsTouched();
    } else {
    this.matDialogRef.close(this.studentsForm.value)
    }
  }
}
