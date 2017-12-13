/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {PatientRdvComponent} from "./patient_rdv.component";

describe('PatientRdvComponent', () => {
  let component: PatientRdvComponent;
  let fixture: ComponentFixture<PatientRdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientRdvComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
