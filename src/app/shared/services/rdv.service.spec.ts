import { TestBed, async, inject } from '@angular/core/testing';
import {RdvService} from './rdv.service';

describe('MedicalFileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RdvService]
    });
  });

  it('should ...', inject([RdvService], (service: RdvService) => {
    expect(service).toBeTruthy();
  }));
});
