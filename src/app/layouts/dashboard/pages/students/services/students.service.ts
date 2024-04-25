import { Injectable } from '@angular/core';
import { students } from '../../../data/students.data';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  //Create

  // Read
  getStudents() {
    return of(students);
  }
}
