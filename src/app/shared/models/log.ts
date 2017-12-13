import {User} from "./user";
import {Http} from "@angular/http";

export class Log {
  _id: string;
  user: User;
  action: string;
  severity: number;
  ipAddress: string;


  constructor(logInfo: any) {
    if (logInfo) {
      this.user = new User(logInfo.user);
      this.action = logInfo.action;
      if (logInfo.severity > 0 && logInfo.severity <= 5) {
        this.severity = logInfo.severity;
      } else {
        this.severity = 1;
      }
      this.ipAddress = logInfo.ipAddress; // comment avoir l'adresse IP ?
    } else {
      this._id = '';
      this.user = new User(null);
      this.action = '';
      this.severity = null;
      this.ipAddress = '';
    }
  }
}
