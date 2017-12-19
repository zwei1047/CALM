import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../shared/services/authentication.service';
import {UsersService} from '../shared/services/users.service';
import {User} from "../shared/models/user";
import {Address} from "../shared/models/address";
import {DoctorSpaceService} from "../shared/services/doctor-space.service";
import {Consultation} from "../shared/models/consultation";
import {Patient} from "../shared/models/patient";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isLogged: boolean; // if user is logged or not
  image = require('../shared/img/profil.png');
  user: User;
  consultations_patient: Consultation[];

  constructor(private authentication: AuthenticationService, private usersService: UsersService,
              private doctorspaceService: DoctorSpaceService) { }


  ngOnInit() {
    this.isLogged = this.authentication.isLoggedIn();
    if (this.isLogged) {
      this.getProfile();
    }
  }

  getProfile() {
    this.usersService.getProfile()
      .subscribe(user => {
        this.user = new User(user);
        this.doctorspaceService.getPatientByUserId(this.user._id)
          .subscribe(patient => {
            let patientObject = new Patient(patient[0]);
            console.log(patientObject);
            this.doctorspaceService.getConsultationsPatient(patientObject._id)
              .subscribe( consultations => {
                console.log(consultations);
                this.consultations_patient = consultations;
              });
          });
      });
  }

  // getAddress(address_id : string) {
  //   this.usersService.getAddressById(address_id)
  //     .subscribe(address => {
  //       this.user.address = address;
  //     })
  // }

}
