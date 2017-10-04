/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DoctorSpaceService } from './doctor-space.service';

describe('DoctorSpaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoctorSpaceService]
    });
  });

  it('should ...', inject([DoctorSpaceService], (service: DoctorSpaceService) => {
    expect(service).toBeTruthy();
  }));
});
