import { Injectable } from '@angular/core';
import { of } from 'rxjs';

const STUDENTS = [
  {
    id: 1,
    name: 'Juan',
    lastName: 'Perez',
    email: 'juanp@test.com',
    grades: [10, 9],
  },
  {
    id: 2,
    name: 'Danila',
    lastName: 'Gonzales',
    email: 'danilag@test.com',
    grades: [10, 9],
  },
  {
    id: 3,
    name: 'Pedro',
    lastName: 'Balverde',
    email: 'pedrob@test.com',
    grades: [10, 9],
  },
  {
    id: 4,
    name: 'Lucia',
    lastName: 'Luz',
    email: 'luluz@test.com',
    grades: [10, 9],
  },
  {
    id: 5,
    name: 'Lucas',
    lastName: 'Perez',
    email: 'lucape@test.com',
    grades: [10, 9],
  },
];

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor() {}

  getStudents() {
    return of(STUDENTS);
  }

  getStudentById(id: number) {
    return of(STUDENTS.find((student) => student.id === id));
  }
}
