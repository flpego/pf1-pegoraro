import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ICommission } from '../../../../../../core/models/commission.model';
import { CommissionService } from '../../../../../../core/services/commission.service';
import { IStudent } from '../../../students/models/student.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
})
export class CourseComponent {
  
  course$: Observable<ICommission | undefined>;
  selectedCourseStudents: IStudent[] = [];
  
  constructor(
    private activateRoute: ActivatedRoute,
    private commissionService: CommissionService
  ) {
    const courseId = parseInt(this.activateRoute.snapshot.params['id']);
    this.course$ = this.commissionService.getCourseById(courseId);
    
    this.course$.subscribe(course => {
      if (course) {
        this.selectedCourseStudents = this.filterStudentsByCourseId(courseId, course.students);
      }
    });
  }

  filterStudentsByCourseId(courseId: number, students: IStudent[]): IStudent[] {
    return students.filter(student => student.courses.some(course => course.id === courseId));
  }
}
