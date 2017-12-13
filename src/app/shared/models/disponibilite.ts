
import {Doctor} from "./doctor";

export class Disponnibilite {
  _id: string;
  doctor: Doctor;
  jour: number;
  mois: number;
  an: number;
  disponnibilite: Date[] = [];

  constructor(consultationInfo: any) {
    if (consultationInfo) {
      this._id = consultationInfo._id;
      this.jour = consultationInfo.jour;
      this.mois = consultationInfo.mois;
      this.an = consultationInfo.an;
      this.doctor = new Doctor(consultationInfo.doctor);
      if (consultationInfo.disponnibilite) {
        for (const date of consultationInfo.disponnibilite) {
          this.disponnibilite.push(date);
        }
      }
    } else {
      this.doctor = new Doctor(null);
    }
  }

  fullDisponnibilite(an: number, mois: number, jour: number) {
    let hours = 8;
    let minutes = 0;

    this.disponnibilite = [];

    while (hours < 20) {
      let currentDate = new Date(an, mois - 1, jour, hours, minutes, 0);
      this.disponnibilite.push(currentDate);

      minutes += 30;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }
}
