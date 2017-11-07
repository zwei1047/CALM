import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Post} from "../models/post";
import {Observable} from "rxjs";
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class DoctorSearchService {

  constructor(private http: Http, private authentication: AuthenticationService) { }

  getSearchDoctor(city: string) {
    return this.http.get('https://localhost:3000/api/searchDoctor/'+city, this.authentication.getRequestOptions())
      .map(res => res.json());
  }


}
