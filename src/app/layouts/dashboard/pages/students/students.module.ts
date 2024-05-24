import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { SharedModule } from '../../../../shared/shared.module';
import { StudentModalComponent } from './components/student-modal/student-modal.component';

import { StudentDetailsComponent } from './components/student-details/student-details.component';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentModalComponent,
    StudentDetailsComponent,
  ],
  imports: [CommonModule, StudentsRoutingModule, SharedModule],
})
export class StudentsModule {}
