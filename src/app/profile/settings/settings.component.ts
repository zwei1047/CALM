import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../shared/services/users.service";
import {AuthenticationService} from "../../shared/services/authentication.service";
import {User} from "../../shared/models/user";
import {Doctor} from "../../shared/models/doctor";
import {Patient} from "../../shared/models/patient";
import {MedicalFileService} from "../../shared/services/medical-file.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  isLogged: boolean; // if user is logged or not
  user : User;
  patient : Patient;
  doctors : Doctor[] = [];

  constructor(private authentication: AuthenticationService, private usersService: UsersService,
    private medicalService : MedicalFileService) { }


  ngOnInit() {
    this.patient = new Patient(null);
    this.user = new User(null);
    this.loadAllDoctors();
    this.isLogged = this.authentication.isLoggedIn();
    if(this.isLogged) {
      this.getProfile();
    }
  }

  getProfile() {
    this.usersService.getProfile()
      .subscribe(user => {
        this.user = new User(user);
      });
  }

  private loadAllDoctors() {
    this.usersService.getDoctors().subscribe(doctors => {
      this.doctors = doctors;
      // for(let i=0; i<doctors.length; i++){
      // }
    });
  }

  addDoctor(doctor : Doctor) {
    this.medicalService.getCurrentPatient()
      .subscribe(patient => {
        this.patient = new Patient(patient);
        this.medicalService.addGeneralDoctor(doctor, this.patient._id)
          .subscribe(data => {
            console.log("Doctor changed : ",data);
          });
      });
  }
}
