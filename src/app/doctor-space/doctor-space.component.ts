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

  constructor(private doctorService: DoctorSpaceService, private auth: AuthenticationService) { }

  patients: Patient[] = [];
  submitted: boolean = false;
  post: Post;
  patient_selected: Patient;

  ngOnInit() {
    this.loadAllPatients();
    this.post = new Post(null);
  }

  private loadAllPatients() {

    this.doctorService.getPatientFromDoctor(this.auth.currentUserId()).subscribe(patients => {
      this.patients = patients;
      console.log("Patients :", this.patients);
    });
  }

  send_post() {
    this.post.patient = this.patient_selected;
    this.post.doctor = this.auth.currentUserId(); // Get the user id of the doctor but not the doctor id
    this.doctorService.send_post(this.post).subscribe(data => console.log(data));
    this.change_submit(null);
  }

  change_submit(patient : Patient) {
    this.patient_selected = patient;
    this.submitted = !this.submitted;
  }

}
