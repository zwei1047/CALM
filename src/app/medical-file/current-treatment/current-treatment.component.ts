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
  searchList: {}[];
  treatmentInfo: {};
  interaction: {}[];

  constructor(private http: Http, private treatment: TreatmentService, private usersService: UsersService) {


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
        console.log(data);
        this.treatments = data;
        this.treatments.forEach(function (element) {
          this.treatment.getTreatmentInfo(element.codeCIS).subscribe(response => {
              const tmp = JSON.parse(response);
              if (tmp != null) {

                element.substances = tmp.compositions[0].substancesActives.map(a => a.denominationSubstance);
              }
            },
            error => console.log(error));
          if (element.start != null) {
            element.start = new Date(element.start);
          } else {
            element.start = new Date();
          }
          if (element.end != null) {
            element.end = new Date(element.end);
          } else {
            element.start = new Date();
          }
        }.bind(this));
        this.getInteraction(this.treatments.map(a => a.codeCIS));
      },
      error => console.log(error)
    );
  };

  getTreatmentInfo(treatment: Treatment) {
    this.treatment.getTreatmentInfo(treatment.codeCIS).subscribe(data => {
        this.treatmentInfo = JSON.parse(data);
        console.log(this.treatmentInfo);
      },
      error => console.log(error));
  }

  getInteraction(ids: {}[]) {
    if (ids.length > 0) {
      this.treatment.getTreatmentInteraction(ids.join('|')).subscribe(
        data => {
          this.interaction = JSON.parse(data);
        },
        error => console.log(error)
      );
    }
  };
}
