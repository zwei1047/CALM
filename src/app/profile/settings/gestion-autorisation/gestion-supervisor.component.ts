import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../shared/services/authentication.service";
import {User} from "../../../shared/models/user";
import {AutorisationService} from "../../../shared/services/autorisation.service";
import {UsersService} from "../../../shared/services/users.service";

@Component({
  selector: 'app-gestion-supervisor',
  templateUrl: './gestion-supervisor.component.html',
  styleUrls: ['./gestion-supervisor.component.css']
})
export class GestionSupervisorComponent implements OnInit {

  autorisations: any[] = [];
  user: User;
  isLogged: boolean; // if user is logged or not
  constructor(private authentication: AuthenticationService, private autorisationService: AutorisationService, private usersService: UsersService) { }
  ngOnInit() {
    console.log('1');
    this.user = new User(null);
    this.isLogged = this.authentication.isLoggedIn();
    if (this.isLogged) {
      this.getInformations();
    }

  }
  public getInformations() {
    this.usersService.getProfile()
      .subscribe(user => {
        this.user = new User(user);
        this.getSupervisor(this.user._id);
      });
  }
  getSupervisor(userId: string) {
    this.autorisationService.getSupervisor(userId)
      .subscribe(autorisations => {
        this.autorisations = autorisations ;
        console.log(this.autorisations);
      });
  }
}
