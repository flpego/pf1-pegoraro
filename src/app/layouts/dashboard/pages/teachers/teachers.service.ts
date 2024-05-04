import { Injectable } from '@angular/core';
import { of } from 'rxjs';

const TEACHERS = [
  {
    id: 1,
    name: 'Juan',
    lastName: 'Perez',
    email: 'juanp@test.com',
    taughtSubjects: 'Anatomia'
  },
  {
    id: 2,
    name: 'Danila',
    lastName: 'Gonzales',
    email: 'danilag@test.com',
    taughtSubjects: 'Fisiologia'
  },
  {
    id: 3,
    name: 'Pedro',
    lastName: 'Balverde',
    email: 'pedrob@test.com',
    taughtSubjects: 'Motricidad 1'
  },
  {
    id: 4,
    name: 'Lucia',
    lastName: 'Luz',
    email: 'luluz@test.com',
    taughtSubjects: 'Direccion de gimnasios'
  },
  {
    id: 5,
    name: 'Lucas',
    lastName: 'Perez',
    email: 'lucape@test.com',
    taughtSubjects: 'Biomecanica'
  },
];

@Injectable({
  providedIn: 'root',
})
export class TeachersService {
  constructor() {}

  getTeachers() {
    return of(TEACHERS);
  }

  getStudentById(id: number) {
    return of(TEACHERS.find((student) => student.id === id));
  }
}
