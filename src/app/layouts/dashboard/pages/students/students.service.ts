import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CreateStudentPayload, IStudent } from './models/student.model';



@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}
  //read
  getStudents(): Observable<IStudent[]> {
    return this.httpClient.get<IStudent[]>(`${this.baseUrl}/students`);
  }
  //get student by id
  getStudentById(id: string) {
    return this.httpClient.get<IStudent>(`${this.baseUrl}/students/${id}`);
  }
  //creat
  addStudent(payload: CreateStudentPayload): Observable<IStudent> {
    return this.httpClient.post<IStudent>(`${this.baseUrl}/students`, payload);
  }
  //update
  editStudent(id: string, student: IStudent): Observable<IStudent> {
    return this.httpClient.put<IStudent>(
      `${this.baseUrl}/students/${id}`,
      student
    );
  }
  //delete
  deleteStudent(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/students/${id}`);
  }
}
