import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Autorisation} from "../shared/models/autorisation";
import {AutorisationService} from "../shared/services/autorisation.service";
import {User} from "../shared/models/user";
import {setInterval} from "timers";


@Component({
  selector: 'alert-info',
  templateUrl: 'alert-info.component.html',
  styleUrls: ['alert-info.component.css'],
  inputs: ['user']
})

export class AlertInfoComponent implements OnInit {

  alertNumber: number;
  user: User;
  demands: Autorisation[] = [];
  ngOnInit() {
    console.log("start");
    var _this = this;
    setTimeout(function(){
      console.log("hello");
      _this.getAutorisationDemands();
    }, 1000);
      }
  getAutorisationDemands() {
  this.autorisationService.getAutorisationDemands(this.user._id)
    .subscribe(demands => {
      if (demands.length) {
        this.alertNumber = demands.length;
        this.demands = demands;
        this.demands.forEach(function (element) {
          element.Created_at= new Date(element.Created_at);
          let year = element.Created_at.getFullYear();
          let month = element.Created_at.getMonth() + 1;
          let day = element.Created_at.getDate();
          let hour = element.Created_at.getHours() - 1;
          let minute = element.Created_at.getMinutes();
          let newDate = new Date(year, month, day, hour, minute);
          element.Created_at = newDate;
        });
      } else {
        this.alertNumber = 0;
      }

  });
  }

  liClick(event: Event) {
    event.stopPropagation();
    return false;
  }
  autoriserClick (demand_id: string) {
    if (confirm('vous etes sure?')) {
      console.log('yes');
      this.autorisationService.acceptAutorisation(demand_id).subscribe(info => {
        console.log(info);
      });
      for (const n of this.demands) {
        if (n['_id'] === demand_id) {
          n['confirm'] = true;
        }

      }
      this.alertNumber = this.alertNumber - 1;
    } else {
      console.log('no');
    }

  }
  nonAutoriserClick (demand_id) {
    if (confirm('vous etes sure?')) {
      console.log('yes');
      // this.openDialogBox();
      console.log('it has been done:' + demand_id);
      this.autorisationService.refuseAutorisation(demand_id).subscribe(info => {
        console.log(info);
      });
      for (const n of this.demands) {
        if (n['_id'] === demand_id) {
          n['confirm'] = true;
        }

      }
      this.alertNumber = this.alertNumber - 1;
    } else {
      console.log('no');
    }

  }

  constructor(private autorisationService: AutorisationService){

  }



}
