import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';
import { SharedModule } from '../../../../shared/shared.module';
import { TeacherModalComponent } from './components/teacher-modal/teacher-modal.component';


@NgModule({
  declarations: [
    TeachersComponent,
    TeacherModalComponent
  ],
  
  imports: [
    CommonModule,
    TeachersRoutingModule,
    SharedModule
  ]
})
export class TeachersModule { }
