
import {Patient} from "./patient";
import {Doctor} from "./doctor";

export class Consultation {
  _id: string;
  patient: Patient;
  doctor: Doctor;
  date: Date;

  constructor(consultationInfo: any) {
    if (consultationInfo) {
      this.doctor = new Doctor(consultationInfo.doctor);
      this.patient = new Patient(consultationInfo.patient);
      this.date = consultationInfo.date;
    } else {
      this.doctor = new Doctor(null);
      this.patient = new Patient(null);
      this.date = null;
    }
  }
}
