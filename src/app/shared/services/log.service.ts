import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {AuthenticationService} from "./authentication.service";
import {Log} from "../models/log";

@Injectable()
export class LogService {
  url: string;

  constructor(private http: Http, private authentication: AuthenticationService) {
    this.url = 'http://54.38.243.4:3000/api/';
  }


  addLog(log: Log) {
    return this.http.post(this.url + 'log/', log, this.authentication.getRequestOptions())
      .map(res => res);
  }
}
