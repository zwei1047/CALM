import {User} from "./user";
import {Doctor} from "./doctor";

export class Reminder {
  _id: string;
  user: User
  rappel: string;
  date: Date;
  expire: Boolean;
  doctor: Doctor;

  constructor(rappelInfo: any) {
    if (rappelInfo) {
      this._id = rappelInfo._id;
      this.user = rappelInfo.user;
      this.rappel = rappelInfo.rappel;
      this.date = rappelInfo.date;
      this.expire = rappelInfo.expire;
      this.doctor = rappelInfo.doctor;
    } else {
      this._id = '';
      this.rappel = '';
      this.expire = true;
      this.user = new User(null);
      this.doctor = new Doctor(null);
    }
  }

}




