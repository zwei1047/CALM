import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Post} from "../models/post";
import {Observable} from "rxjs";
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class ReminderService {
  url: string;

  constructor(private http: Http, private authentication: AuthenticationService) {
    this.url = 'https://192.168.43.60:3000/api/';
  }

  getRappel(userId: string) {
    console.log(userId);
    return this.http.get(this.url + 'getRappels/' + userId, this.authentication.getRequestOptions())
      .map(res => res.json());
  }

  reminderDone(reminderId: string) {
    return this.http.get(this.url + 'reminderDone/' + reminderId, this.authentication.getRequestOptions())
      .map(res => res.json());
  }


}
