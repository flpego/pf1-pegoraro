import { Component, OnInit } from '@angular/core';
import { CommssionService } from '../../../../core/services/commission.service';
import { ICommission } from '../../../../core/models/commission.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit{
  commissions: ICommission[];

  constructor(
    private commissionService: CommssionService,
  ) {
    this.commissions = []
  }
  ngOnInit(): void {
    this.getCourses();
  }
  students =[]
  
  getCourses() {
    this.commissionService.getCourses().subscribe({
      next: (res) => {
        console.log(res);
        this.commissions = res;
      },
    });
  }
  
  
  
  assignTeacherToCourse(): void {
    
  }
}
