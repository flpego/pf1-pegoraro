import { Injectable } from "@angular/core";
import { TeachersService } from "../teachers/teachers.service";
import { StudentsService } from "../students/students.service";
import { Observable, forkJoin } from "rxjs";
import { ITeacher } from "../teachers/models/teacher.model";
import { IStudent } from "../students/models/student.model";

@Injectable({
    providedIn: 'root'
})
export class HomeService {
  private baseUrl = 'http://localhost:3000'; 

  constructor(private teacherService: TeachersService, private studentService: StudentsService){
  }
  getData(): Observable<{teachers: ITeacher[], students: IStudent[]}>{
    return forkJoin({
        teachers: this.teacherService.getTeachers(),
        students: this.studentService.getStudents(),
    })
  }
}