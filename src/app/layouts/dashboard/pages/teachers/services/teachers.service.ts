import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Teachers } from '../../../data/teachers.data';

@Injectable({
  providedIn: 'root',
})
export class TeachersService {
  constructor() {}

  getTeachers() {
    return of(Teachers);
  }
}
