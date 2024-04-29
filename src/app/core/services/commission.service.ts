import { Injectable } from '@angular/core';
import { Observable, of, map, Subject } from 'rxjs';
import { ICommission } from '../models/commission.model';
import { COMMISSIONS } from '../../layouts/dashboard/data/courses.data';
import { IStudent } from '../../layouts/dashboard/pages/students/models/student.model';
import { students } from '../../layouts/dashboard/data/students.data';

@Injectable({
  providedIn: 'root',
})
export class CommssionService {
  constructor() {}

  getCourses(): Observable<ICommission[]> {
    return of(COMMISSIONS).pipe(
      map((commissions) => this.assignStudents(commissions))
    );
  }

  //recibe arreglo de comisiones y devuelve nuevo arreglo con cada profesor asignado asu materia
  private assignStudents(commissions: ICommission[]): ICommission[] {
    return commissions.map((commission) => {
      const studentAssigned = students.filter((student) =>
        student.courses.some((course) =>
          commission.subjects.some((subject) => subject.id === course.id)
        )
      );
      return { ...commission, students: studentAssigned };
    });
  }
}
