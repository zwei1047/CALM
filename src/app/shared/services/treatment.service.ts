import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';
import {Treatment} from '../models/treatment';

@Injectable()
export class TreatmentService {
  url: string;

  constructor(private http: Http, private authentication: AuthenticationService) {
    this.url = 'https://192.168.43.60:3000/api/';
  }

  getUserTreatment(id: string): Observable<any> {
    return this.http.get(this.url + 'treatment/' + id, this.authentication.getRequestOptions())
      .map(res => res.json());
  }

  updateUserTreatment(id: string, updatedTreatment: Treatment): Observable<any> {
    console.log(updatedTreatment);
    return this.http.put(this.url + 'updateTreatment/' + id, updatedTreatment, this.authentication.getRequestOptions())
      .map(res => res.json());
  }

  getMedicamentList(medicName: string): Observable<any> {
    return this.http.get(this.url + 'getMedicName/' + medicName , this.authentication.getRequestOptions()).map(res => res.json());
  }

  deleteTreatment(id: string): Observable<any> {
    return this.http.delete(this.url + 'treatment/' + id, this.authentication.getRequestOptions())
      .map(res => res.json());
  }

  addTreatment(id: string, newTreatment: Treatment): Observable<any> {
    return this.http.put(this.url + 'treatment/' + id, newTreatment, this.authentication.getRequestOptions())
      .map(res => res.json());
  }

  getTreatmentInfo(codeCIS: string): Observable<any> {
    return this.http.get(this.url + 'getMedicInfo/' + codeCIS, this.authentication.getRequestOptions())
      .map(res => res.json());
  }

  getTreatmentInteraction(ids: string): Observable<any> {
    return this.http.get(this.url + 'getMedicInteraction/' + ids, this.authentication.getRequestOptions())
      .map(res => res.json());
  }

}
