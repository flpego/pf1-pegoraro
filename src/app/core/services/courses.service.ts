import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Courses } from '../../layouts/dashboard/data/courses.data';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() {
   }
   getCourse(id: number){
    return of(Courses[id])
   }
   getCourses(){
    return of(Courses)
   }
}
