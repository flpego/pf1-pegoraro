import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { FormsValidatorsPipe } from './pipes/forms-validators.pipe';
import { Font20Directive } from './directives/font20.directive';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list'
import { MatTooltipModule } from '@angular/material/tooltip';
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
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatListModule,
    MatTooltipModule,
    //importaciones de angular
    ReactiveFormsModule,
    //importaciones de directivas y pipes
    FormsValidatorsPipe,
    Font20Directive,
  ],
})
export class SharedModule {}
