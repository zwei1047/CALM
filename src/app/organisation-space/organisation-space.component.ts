import { Component, OnInit } from '@angular/core';
import {UsersService} from "../shared/services/users.service";
import {Patient} from "../shared/models/patient";
import {DoctorSpaceService} from "../shared/services/doctor-space.service";
import {AuthenticationService} from "../shared/services/authentication.service";
import {Post} from "../shared/models/post";

@Component({
  selector: 'app-organisation-space',
  templateUrl: './organisation-space.component.html',
  styleUrls: ['./organisation-space.component.css']
})
export class OrganisationSpaceComponent implements OnInit {

  isLogged: boolean;

  constructor(private doctorService: DoctorSpaceService, private auth: AuthenticationService) { }
  ngOnInit() {
    this.isLogged = this.auth.isLoggedIn();
  }
}
