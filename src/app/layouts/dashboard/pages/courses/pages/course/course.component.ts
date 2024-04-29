import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent {
  constructor(private activateRoute: ActivatedRoute){
    console.log(this.activateRoute.snapshot.params['course']);
  }
}
