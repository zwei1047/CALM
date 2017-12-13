import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../shared/services/users.service";
import {AuthenticationService} from "../../shared/services/authentication.service";
import {User} from "../../shared/models/user";
import {Doctor} from "../../shared/models/doctor";
import {Patient} from "../../shared/models/patient";
import {MedicalFileService} from "../../shared/services/medical-file.service";
import {Autorisation} from "../../shared/models/autorisation";
import {AutorisationService} from "../../shared/services/autorisation.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  isLogged: boolean; // if user is logged or not
  user: User;
  patient: Patient;
  doctors: Doctor[] = [];
  autorisations: Autorisation[] = [];
  newAutorisation: Autorisation;
  addAutorisationForm: any[] = [];

  constructor(private authentication: AuthenticationService, private usersService: UsersService,
    private medicalService: MedicalFileService, private autorisationService: AutorisationService) { }


  ngOnInit() {
    this.patient = new Patient(null);
    this.user = new User(null);
    this.loadAllDoctors();
    this.isLogged = this.authentication.isLoggedIn();
    if (this.isLogged) {
      this.getInformations();
    }
  }

  public getInformations() {
    this.usersService.getProfile()
      .subscribe(user => {
        this.user = new User(user);
        this.autorisationService.getAutorisations(this.user._id)
          .subscribe( autorisations => {
            this.autorisations = autorisations;
          });
      });
  }

  private loadAllDoctors() {
    this.usersService.getDoctors().subscribe(doctors => {
      this.doctors = doctors;
      // for(let i=0; i<doctors.length; i++){
      // }
    });
  }

  addDoctor(doctor: Doctor) {
    this.medicalService.getCurrentPatient()
      .subscribe(patient => {
        this.patient = new Patient(patient);
        this.medicalService.addGeneralDoctor(doctor, this.patient._id)
          .subscribe(data => {
            console.log("Doctor changed : ",data);
          });
      });
  }

  openAddAutorisation() {
    this.addAutorisationForm['show'] = true;
  }

  addNewAutorisation() {
    console.log('we will add a new autorisation');
    this.newAutorisation = new Autorisation(null);
    this.medicalService.getUserByEmail(this.addAutorisationForm['email'])
      .subscribe( observer => {
        if (observer) {
          this.newAutorisation.user = this.user;
          this.newAutorisation.observer = new User(observer);
          this.newAutorisation.subject = this.addAutorisationForm['subject'];
          this.newAutorisation.type = this.addAutorisationForm['type'];
          console.log(this.newAutorisation);

          this.autorisationService.addAutorisation(this.newAutorisation)
            .subscribe( res => {
              if (res) {
                console.log(res);
              }
              // if autorisation is about post, we add the inverse of this
              if (this.newAutorisation.subject === 'POST') {
                console.log('inverse user et observer???');
                this.newAutorisation.observer = this.user;
                this.newAutorisation.user = new User(observer);
                this.autorisationService.addAutorisation(this.newAutorisation)
                  .subscribe( res => {
                    if (res) {
                      console.log(res);
                    }
                    this.getInformations(); // update
                  });
              } else {
                this.getInformations(); // update
              }

            });
        }
      });
  }

  deleteAutorisation(aut_id: string) {
    console.log('delete this id : ' + aut_id);
    this.autorisationService.deleteAutorisation(aut_id)
      .subscribe( resp => {
        console.log(resp);
        this.getInformations(); // update
      });
  }
}
