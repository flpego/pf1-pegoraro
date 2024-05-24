import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITeacher } from './models/teacher.model';

@Injectable({
  providedIn: 'root',
})
export class TeachersService {
  constructor(private httpClient: HttpClient) {}

  private baseUrl = 'http://localhost:3000'; 

  getTeachers(): Observable<ITeacher[]> {
    return this.httpClient.get<ITeacher[]>(`${this.baseUrl}/teachers`);
  }

  getTeacherById(id: string): Observable<ITeacher> {
    return this.httpClient.get<ITeacher>(`${this.baseUrl}/teachers/${id}`);
  }

  addTeacher(teacher: ITeacher): Observable<ITeacher> {
    return this.httpClient.post<ITeacher>(`${this.baseUrl}/teachers`, teacher);
  }

  updateTeacher(id: string, teacher: ITeacher): Observable<ITeacher> {
    return this.httpClient.put<ITeacher>(`${this.baseUrl}/teachers/${id}`, teacher);
  }

  deleteTeacher(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/teachers/${id}`);
  }
}
