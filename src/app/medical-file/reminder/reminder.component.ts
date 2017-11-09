import { Component, OnInit } from '@angular/core';
import {ReminderService} from "../../shared/services/reminder.service";
import {UsersService} from "../../shared/services/users.service";
import {User} from "../../shared/models/user";
import {Reminder} from "../../shared/models/reminder";
import {AuthenticationService} from "../../shared/services/authentication.service";

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {

  isLogged: boolean;
  user: User;
  rappeles: Reminder[] = [];
  constructor(private reminderService: ReminderService, private userService: UsersService, private authentication: AuthenticationService) { }

  ngOnInit() {
    this.isLogged = this.authentication.isLoggedIn();
    if (this.isLogged) {
      this.getUser();
      // console.log(this.user._id);
      // this.getRappels(this.user._id);
    }
  }

  getUser() {
    this.userService.getProfile()
      .subscribe(user => {
        this.user = new User(user);
        console.log(this.user);
        this.getRappels(this.user._id);
      });
  }
  getRappels(userId: string ) {
    this.reminderService.getRappel(userId)
      .subscribe(rappeles => {
        this.rappeles = rappeles;
        console.log(this.rappeles);
      });
  }
  reminderDone(reminder_id: string) {
    console.log('it has been done:' + reminder_id);
    console.log(this.rappeles[0]['expire']);
    this.reminderService.reminderDone(reminder_id).subscribe(info => {
      console.log(info);
    });
    for (const n of this.rappeles) {
      if (n['_id'] === reminder_id) {
        n['expire'] = true;
      }

    }

  }

}
