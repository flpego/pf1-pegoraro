import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { SharedModule } from '../../../../shared/shared.module';
import { StudentModalComponent } from './components/student-modal/student-modal.component';
import { StudentsDetailsComponent } from './pages/students-details/students-details.component';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentsDetailsComponent,
    StudentModalComponent,
  ],
  imports: [CommonModule, StudentsRoutingModule, SharedModule],
})
export class StudentsModule {}
