/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MedicalFileService } from './medical-file.service';

describe('MedicalFileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedicalFileService]
    });
  });

  it('should ...', inject([MedicalFileService], (service: MedicalFileService) => {
    expect(service).toBeTruthy();
  }));
});
