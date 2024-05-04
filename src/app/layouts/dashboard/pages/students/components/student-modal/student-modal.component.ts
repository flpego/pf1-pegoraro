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
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/i)]],
      lastName: [
        '',
        [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/i)],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
        ],
      ],
      selectedGrade: [this.grades[0]]
    });

    if (data) {
      this.studentsForm.patchValue(data);
    }
  }

  get nameControl() {
    return this.studentsForm.get('name');
  }

  get lastNameControl() {
    return this.studentsForm.get('lastName');
  }

  get emailControl() {
    return this.studentsForm.get('email');
  }


  onSaveEstudent(): void {
    if (this.studentsForm.invalid) {
      this.studentsForm.markAllAsTouched();
    } else {
      const formData = this.studentsForm.value;
      const selectedGrade = formData.selectedGrade;
      delete formData.selectedGrade; 
      formData.grades = [selectedGrade]; 
      this.matDialogRef.close(formData);
    }
  }
}
