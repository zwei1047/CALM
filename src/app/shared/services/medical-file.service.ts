import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import {AuthenticationService} from "./authentication.service";
import {Observable} from "rxjs";
import {Patient} from "../models/patient";
import {Doctor} from "../models/doctor";
import {Autorisation} from "../models/autorisation";
import {User} from "../models/user";
import {Post} from "../models/post";

@Injectable()
export class MedicalFileService {

  constructor(private http: Http, private authentication: AuthenticationService) { }


  getCurrentPatient() {
    return this.http.get('https://localhost:3000/api/patients/' + this.authentication.currentUserId(), this.authentication.getRequestOptions())
      .map(res => res.json());
  }

  //getUserByEmail(email:String) {
  //  return this.http.get('https://localhost:3000/api/users/' +email, this.authentication.getRequestOptions())
  //    .map(res => res.json());
  //}
  getUserById(id: string) {
    return this.http.get('https://localhost:3000/api/users/' + id, this.authentication.getRequestOptions())
      .map(res => res.json());
  }

  addGeneralDoctor(doctor: Doctor, id: string) {
    return this.http.put('https://localhost:3000/api/patient/' + id, doctor, this.authentication.getRequestOptions())
      .map(res => res);
  }

  get_posts(sender_id: string, receiver_id: string) {
    return this.http.get('https://localhost:3000/api/post/' + sender_id + '/' + receiver_id, this.authentication.getRequestOptions())
      .map(res => res.json());
  }
  addPost(post: Post) {
    return this.http.post('https://localhost:3000/api/post', post, this.authentication.getRequestOptions())
      .map(res => res.json());
  }

  getUserList(user_id: string) {
    return this.http.get('https://localhost:3000/api/autorisation/' + user_id, this.authentication.getRequestOptions())
      .map(res => res.json());
  }
  addAutorisation(autorisation: Autorisation) {
    console.log('trying to add an autorisation ... ');
    return this.http.put('https://localhost:3000/api/autorisation/', autorisation, this.authentication.getRequestOptions())
      .map(res => res.json());
  }
  getPostAutorisation(user_id: String) {
    // trier pour avoir que les types = post
    return this.http.get('https://localhost:3000/api/autorisation/'+user_id, this.authentication.getRequestOptions())
      .map(res => res.json());
  }

}
