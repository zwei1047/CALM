/**
 * Created by Romain on 15/03/2017.
 */
import {Component, OnInit} from '@angular/core';
import {UsersService} from '../shared/services/users.service';
import {User} from "../shared/models/user";
import {Router} from '@angular/router'

@Component({
  selector: 'users-page',
  templateUrl: 'users.html',
  styleUrls: ['users.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit{
  //instantiate users list to an empty array
  currentUser: User;
  users: User[] = [];

  constructor(private usersService: UsersService,  private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(id: string) {
    this.usersService.deleteUser(id)
      .subscribe(function(data){}
    );
  }

  deleteAddress(id : string) {
    this.usersService.deleteAddress(id)
      .subscribe(function (data) {
        console.log(data);
      })
  }

  buttonDelete(user : User) {
    this.deleteAddress(user.address._id);
    this.deleteUser(user._id);
    this.loadAllUsers();
  }

  private loadAllUsers() {
    this.usersService.getUsers().subscribe(users => { this.users = users; });
  }

}
