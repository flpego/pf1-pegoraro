import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentModalComponent } from './components/student-modal/student-modal.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [StudentsComponent, StudentModalComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule,
  ],
  exports: [StudentsComponent],
})
export class StudentsModule {}
