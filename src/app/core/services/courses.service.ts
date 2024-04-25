import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Courses } from '../../layouts/dashboard/data/courses.data';
import { Teachers } from '../../layouts/dashboard/data/teachers.data';
import { students } from '../../layouts/dashboard/data/students.data';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() {
   }

   getCourses() {
    return of(Courses.map(course => ({
      ...course,
      students: students.filter(student => student.courses.some(courseItem => courseItem.id === course.id)),
      teachers: Teachers.filter(teacher => teacher.coursesTaugth.some(courseItem => courseItem.id === course.id))
    })));
  }

  getStudents() {
    return of(students);
  }

  getTeachers() {
    return of(Teachers);
  }
  
}
