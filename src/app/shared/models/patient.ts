import {User} from "./user";
import {Doctor} from "./doctor";

export class Patient {
  _id : string;
  user_id: User;
  general_doctor: Doctor;

  constructor(patientInfo:any) {
    if (patientInfo){
      this._id = patientInfo._id;
      this.user_id = new User(patientInfo.user_id);
      this.general_doctor = new Doctor(patientInfo.general_doctor);
    }
    else {
      this._id = "";
      this.user_id = new User(null);
      this.general_doctor = new Doctor(null);
    }
  }

}




