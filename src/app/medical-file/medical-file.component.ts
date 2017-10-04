import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../shared/services/authentication.service';

@Component({
  selector: 'app-medical-file',
  templateUrl: './medical-file.component.html',
  styleUrls: ['./medical-file.component.css']
})
export class MedicalFileComponent implements OnInit {

  constructor(private authentication: AuthenticationService) { }
  isLogged : boolean;

  ngOnInit() {
    this.isLogged = this.authentication.isLoggedIn();
  }

}
