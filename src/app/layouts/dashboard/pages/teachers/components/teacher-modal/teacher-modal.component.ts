import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ITeacher } from '../../models/teacher.model';

@Component({
  selector: 'app-teacher-modal',
  templateUrl: './teacher-modal.component.html',
  styleUrl: './teacher-modal.component.scss',
})
export class TeacherModalComponent {
  teacherForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private matDialogref: MatDialogRef<TeacherModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data?: ITeacher
  ) {
    this.teacherForm = this.formBuilder.group({
      name: ['', Validators.required, Validators.pattern(/^[A-Za-z\s]+$/i)],
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
      taughtSubjects: ['', [Validators.required]],
    });
    if(data){
      this.teacherForm.patchValue(data)
    }
  }


  get nameControl() {
    return this.teacherForm.get('name');
  }

  get lastNameControl() {
    return this.teacherForm.get('lastName');
  }

  get emailControl() {
    return this.teacherForm.get('email');
  }

  get taughtSubjectsControl() {
    return this.teacherForm.get('taughtSubjects')
  }

  onSaveTeacher(): void {
    if (this.teacherForm.invalid) {
      this.teacherForm.markAllAsTouched();
    } else {
      const formData = this.teacherForm.value;
      const selectedGrade = formData.selectedGrade;
      delete formData.selectedGrade; 
      formData.grades = [selectedGrade]; 
      this.matDialogref.close(formData);
    }
  }

}
