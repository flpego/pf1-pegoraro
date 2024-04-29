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
  grades: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<StudentModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data?: IStudent
  ) {
    this.studentsForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/i)]],
      age: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      grades: [this.grades[0]],
    });
    this.studentsForm.controls['grades'].setValue(this.grades[0]);

    if (data) {
      this.studentsForm.patchValue(data);
    }
  }

  get fullNameControl () {
    return this.studentsForm.get('fullName');
  }

  get ageControl () {
    return this.studentsForm.get('age');
  }


  onSaveEstudent(): void {
    if (this.studentsForm.invalid) {
      this.studentsForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.studentsForm.value);
    }
  }
}
