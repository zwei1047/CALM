import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Post} from "../models/post";
import {Observable} from "rxjs";
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class ReminderService {

  constructor(private http: Http, private authentication: AuthenticationService) {
  }

  getRappel(userId: string) {
    console.log(userId);
    return this.http.get('http://54.38.243.4:3000/api/getRappels/' + userId, this.authentication.getRequestOptions())
      .map(res => res.json());
  }

  reminderDone(reminderId: string) {
    console.log("i am here reminder service");
    return this.http.get('http://54.38.243.4:3000/api/reminderDone/' + reminderId, this.authentication.getRequestOptions())
      .map(res => res.json());
  }


}
