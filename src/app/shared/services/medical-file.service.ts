import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import {AuthenticationService} from "./authentication.service";
import {Observable} from "rxjs";
import {Patient} from "../models/patient";
import {Doctor} from "../models/doctor";

@Injectable()
export class MedicalFileService {

  constructor(private http: Http, private authentication: AuthenticationService) { }


  getCurrentPatient() {
    return this.http.get('https://localhost:3000/api/patients/' + this.authentication.currentUserId(), this.authentication.getRequestOptions())
      .map(res => res.json());
  }

  getUserByEmail(email:String) {
    return this.http.get('https://localhost:3000/api/users/' +email, this.authentication.getRequestOptions())
      .map(res => res.json());
  }

  addGeneralDoctor(doctor : Doctor, id : string) {
    return this.http.put('https://localhost:3000/api/patient/'+id, doctor, this.authentication.getRequestOptions())
      .map(res => res);
  }

  get_posts(patient_id: string) {
    return this.http.get('https://localhost:3000/api/post/'+patient_id , this.authentication.getRequestOptions())
      .map(res => res.json());
  }


}
