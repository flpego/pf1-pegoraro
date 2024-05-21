import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CreateStudentPayload, IStudent } from './models/student.model';
import { IUser } from '../users/models/user.model';

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
  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  getStudents(): Observable<IStudent[]> {
    return this.httpClient.get<IStudent[]>(`${this.baseUrl}/students`);
  }

  getStudentById(id: number) {
    return of(STUDENTS.find((student) => student.id === id));
  }

  addStudent(payload: CreateStudentPayload): Observable<IStudent> {
    return this.httpClient.post<IStudent>(`${this.baseUrl}/students`, payload);
  }
}
