import {User} from "./user";
import {Doctor} from "./doctor";

export class Patient {
  _id: string;
  phone: string;
  user_id: User;
  general_doctor: Doctor;
  patient_followed: Patient[];

  constructor(patientInfo: any) {
    if (patientInfo) {
      this._id = patientInfo._id;
      this.user_id = new User(patientInfo.user_id);
      this.general_doctor = new Doctor(patientInfo.general_doctor);
      for (const elt of patientInfo.patient_followed){
        this.patient_followed.push(new Patient(elt));
      }
    } else {
      this._id = '';
      this.user_id = new User(null);
      this.general_doctor = new Doctor(null);
      this.phone = '';
    }
  }

}




