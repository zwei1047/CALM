import {Patient} from "./patient";
import {Doctor} from "./doctor";

export class Disease {
  _id: string;
  patient: Patient;
  doctor: Doctor;
  name: String;
  severity: number;
  comments: String;
  Created_at: Date;

  constructor(diseaseInfo: any) {
    if (diseaseInfo) {
      this.doctor = new Doctor(diseaseInfo.doctor);
      this.patient = new Patient(diseaseInfo.patient);
      this.name = diseaseInfo.name;
      this.comments = diseaseInfo.comments;
      if (0 <= diseaseInfo.severity && diseaseInfo.severity <= 5) {
        this.severity = diseaseInfo.severity;
      } else {
        this.severity = 0;
      }
    } else {
      this.severity = 0;
      this.doctor = new Doctor(null);
      this.patient = new Patient(null);
      this.name = '';
      this.comments = '';
    }
  }
}
