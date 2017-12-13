import { Component, OnInit } from '@angular/core';
import {UsersService} from "../shared/services/users.service";
import {Patient} from "../shared/models/patient";
import {DoctorSpaceService} from "../shared/services/doctor-space.service";
import {AuthenticationService} from "../shared/services/authentication.service";
import {Post} from "../shared/models/post";

@Component({
  selector: 'app-doctor-space',
  templateUrl: './doctor-space.component.html',
  styleUrls: ['./doctor-space.component.css']
})
export class DoctorSpaceComponent implements OnInit {

  patients: Patient[] = [];
  submitted: boolean = false;
  post: Post;
  patient_selected: Patient;
  isLogged: boolean;

  constructor(private doctorService: DoctorSpaceService, private auth: AuthenticationService) { }
  ngOnInit() {
    this.isLogged = this.auth.isLoggedIn();
    this.loadAllPatients();
    this.post = new Post(null);
  }

  private loadAllPatients() {
    this.doctorService.getPatientFromDoctor(this.auth.currentUserId()).subscribe(patients => {
      this.patients = patients;
      console.log('Patients :', this.patients);
    });
  }

  selectPatient(patient: Patient) {
    this.patient_selected = patient;
    localStorage.setItem('patient', JSON.stringify(patient));
  }

  change_submit(patient: Patient) {
    this.patient_selected = patient;
    this.submitted = !this.submitted;
  }

}
