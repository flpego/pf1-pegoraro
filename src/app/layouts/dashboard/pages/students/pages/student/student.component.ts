import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
  constructor(private activateRoute: ActivatedRoute){
    this.activateRoute.params.subscribe({
      next: (item) => console.log(item)
    })
  }
}
