import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { StudentModalComponent } from './components/student-modal/student-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StudentsComponent, StudentModalComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  exports: [StudentsComponent],
})
export class StudentsModule {}
