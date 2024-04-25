import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FormsValidatorsPipe } from './pipes/forms-validators.pipe';
import { Font20Directive } from './directives/font20.directive';
@NgModule({
  declarations: [
    //declaracion de Pipes
    FormsValidatorsPipe,
    Font20Directive,
  ],
  imports: [CommonModule],
  exports: [
    //importaciones de material
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    
    //importaciones de angular
    ReactiveFormsModule,
    //importaciones de directivas y pipes
    FormsValidatorsPipe,
    Font20Directive,
  ],
})
export class SharedModule {}
