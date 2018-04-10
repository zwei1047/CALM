import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Post} from "../models/post";
import {Observable} from "rxjs";
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class DoctorSearchService {
  url: string;

  constructor(private http: Http, private authentication: AuthenticationService) {
    this.url = 'http://54.38.243.4:3000/api/';
  }

  getAllUserDoctor() {
    return this.http.get(this.url + 'users/doctor', this.authentication.getRequestOptions())
      .map( res =>  res.json());
  }


}
