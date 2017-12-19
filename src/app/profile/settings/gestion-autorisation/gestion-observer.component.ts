import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../shared/services/authentication.service";
import {AutorisationService} from "../../../shared/services/autorisation.service";
import {User} from "../../../shared/models/user";
import {UsersService} from "../../../shared/services/users.service";

@Component({
  selector: 'app-gestion-observer',
  templateUrl: './gestion-observer.component.html',
  styleUrls: ['./gestion-observer.component.css']
})
export class GestionObserverComponent implements OnInit {

  autorisations: any[] = [];
  autorisationValide: any[] = [];
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
        this.getObserver(this.user._id);
      });
  }
  getObserver(userId: string) {
    this.autorisationService.getObserver(userId)
      .subscribe(autorisations => {
        this.autorisations = autorisations ;
        console.log(this.autorisations);
        for( var i = 0; i < this.autorisations.length; i++) {
          if (this.autorisations[i].confirm && this.autorisations[i].valide) {
            this.autorisationValide.push(this.autorisations[i]);
          }
        }
      });
  }
}
