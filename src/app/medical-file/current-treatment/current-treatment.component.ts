import {Component, OnInit} from '@angular/core';
import {TreatmentService} from '../../shared/services/treatment.service';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {Http, Headers, RequestOptions, Jsonp} from '@angular/http';
import {JsonpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import {Treatment} from '../../shared/models/treatment';
import {User} from '../../shared/models/user';
import {UsersService} from '../../shared/services/users.service';


@Component({
  selector: 'app-current-treatment',
  templateUrl: './current-treatment.component.html',
  styleUrls: ['./current-treatment.component.css'],
  providers: [UsersService]
})
export class CurrentTreatmentComponent implements OnInit {
  currentUser: User;
  treatments: Treatment[] = [];
  start: Date;

  constructor(private http: Http, private treatment: TreatmentService , private usersService: UsersService) {

    //this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //console.log(this.currentUser);
  }

  ngOnInit() {
    this.usersService.getProfile()
      .subscribe(user => {
        this.currentUser = new User(user);
        this.getMedicamentList();
      });

  };

  getMedicamentList() {
    this.treatment.getUserTreatment(this.currentUser._id).subscribe(
      data => {
        this.treatments = data;
        this.treatments.forEach(function (element) {
          element.start = new Date(element.start);
          element.end = new Date(element.end);
        });
      },
      error => console.log(error)
    );
  };
/*
  updateUserTreatment() {
    this.treatment.updateUserTreatment('5a09837f7927e54946f28178', 'test').subscribe(
      data => {
        this.treatments = data;
        console.log(data);
      },
      error => console.log(error)
    );
  };*/
}
