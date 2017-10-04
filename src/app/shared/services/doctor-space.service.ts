import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Post} from "../models/post";
import {Observable} from "rxjs";
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class DoctorSpaceService {

  constructor(private http: Http, private authentication: AuthenticationService) { }

  getPatientFromDoctor(id: string) {
    return this.http.get('https://localhost:3000/api/patientsdoctor/'+id, this.authentication.getRequestOptions())
      .map(res => res.json());
  }

  send_post(post: Post) {
    return this.http.post('https://localhost:3000/api/post',post, this.authentication.getRequestOptions())
      .map(res => res.json());
  }
}
