import { TestBed } from '@angular/core/testing';

import { CommssionService } from './commission.service';

describe('CoursesService', () => {
  let service: CommssionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommssionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
