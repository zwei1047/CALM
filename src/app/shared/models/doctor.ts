import {User} from "./user";
import {Patient} from "./patient";

export class Doctor {
  _id : string;
  user_id : User;
  cabinet: String;
  phone: String;
  patients : [String];

  constructor(DoctorInfo: any){
    if (DoctorInfo){
      this._id = DoctorInfo._id;
      this.user_id = new User(DoctorInfo.user_id);
      this.cabinet = DoctorInfo.cabinet;
      this.phone = DoctorInfo.phone;
      this.patients = [""];
    }
    else {
      this._id = "";
      this.user_id = new User(null);
      this.cabinet = "";
      this.phone ="";
      this.patients = [""];
    }
  }
}
