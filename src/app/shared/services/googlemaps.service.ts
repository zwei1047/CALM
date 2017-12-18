//AIzaSyBP3rwf-IO8cySRvXbPQ95ISbwVZlr2aFk

import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class GooglemapsService {
  apiKey: string;

  constructor(private http: Http, private authentication: AuthenticationService) {
    this.apiKey = 'AIzaSyBP3rwf-IO8cySRvXbPQ95ISbwVZlr2aFk';
  }

  convertAddresstoCode(address: string) {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + this.apiKey)
      .map( res => res.json());
  }

}
