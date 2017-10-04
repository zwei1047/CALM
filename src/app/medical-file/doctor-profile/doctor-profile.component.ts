import { Component, OnInit } from '@angular/core';
import {MedicalFileService} from "../../shared/services/medical-file.service";
import {Patient} from "../../shared/models/patient";
import {AuthenticationService} from "../../shared/services/authentication.service";
import {User} from "../../shared/models/user";
import {Doctor} from "../../shared/models/doctor";

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  constructor(private medicalfile: MedicalFileService, private authentication: AuthenticationService) { }
  image = require('../../shared/img/profil.png');
  patient: Patient;
  isLogged: boolean; // if user is logged or not

  ngOnInit() {
    this.isLogged = this.authentication.isLoggedIn();
    if (this.isLogged) {
      this.getPatient();
    }
  }

  getPatient() {
    this.medicalfile.getCurrentPatient().subscribe(pat => {
      this.patient = new Patient(pat);
    });
  }

}
