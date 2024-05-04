import { Component } from '@angular/core';
import { StudentsService } from '../../students.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IStudent } from '../../models/student.model';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrl: './students-details.component.scss',
})
export class StudentsDetailsComponent {
  student$: Observable<IStudent | undefined>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private studentsService: StudentsService
  ) {
    this.student$ = this.studentsService.getStudentById(
      parseInt(this.activatedRoute.snapshot.params['id'])
    );
  }

  calculateProm(num: number[]) {

    const total1 = num.reduce((acc, total) => acc + total);
    return total1/num.length
  }
}
