import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../shared/services/authentication.service';
import {UsersService} from '../shared/services/users.service';
import {User} from "../shared/models/user";
import {Address} from "../shared/models/address";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authentication: AuthenticationService, private usersService: UsersService) { }
  isLogged: boolean; // if user is logged or not
  image = require('../shared/img/profil.png');
  user: User;

  ngOnInit() {
    this.isLogged = this.authentication.isLoggedIn();
    if (this.isLogged) {
      this.getProfile();
    }
  }

  getProfile() {
    this.usersService.getProfile()
      .subscribe(user => {
        this.user = new User(user);
        console.log(this.user);
      });
  }

  // getAddress(address_id : string) {
  //   this.usersService.getAddressById(address_id)
  //     .subscribe(address => {
  //       this.user.address = address;
  //     })
  // }

}
