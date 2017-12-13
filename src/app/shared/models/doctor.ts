import {User} from "./user";
import {Patient} from "./patient";
import {Building} from './building';

export class Doctor {
  _id: string;
  user_id: User;
  phone: String;
  patients: Patient[] = [];
  infrastructure: Building[] = [];

  constructor(DoctorInfo: any) {
    if (DoctorInfo) {
      this._id = DoctorInfo._id;
      this.user_id = new User(DoctorInfo.user_id);
      this.phone = DoctorInfo.phone;
      if(DoctorInfo.patients){
        for (const elt of DoctorInfo.patients){
          this.patients.push(new Patient(elt));
        }
      }
      if(DoctorInfo.infrastructure){
        for (const elt of DoctorInfo.infrastructure){
          this.infrastructure.push(new Building(elt));
        }
      }
    } else {
      this._id = "";
      this.user_id = new User(null);
      this.phone ="";
    }
  }
}
