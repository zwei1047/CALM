import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import {Disponnibilite} from "../models/disponibilite";
import {Consultation} from "../models/consultation";
import {isNullOrUndefined, isUndefined} from "util";

@Injectable()
export class RdvService {

  constructor(private http: Http) {}

  // find index of a date in a array of date
  findIndexOfDate(array: Date[], date: Date) {
    for (let i = 0; i < array.length; i++) {
      // console.log('%c ' + array[i].toLocaleString() + ' === ' + date.toLocaleString(), 'color:green');
      let a = new Date(array[i]);
      let b = new Date(date);
      if (a.getDate() === b.getDate() && a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear()) {
        if (a.getMinutes() === b.getMinutes() && a.getHours() === b.getHours()) {
          return i;
        }
      }
    }
    return -1;
  }

  formatageMinute(minute: any) {
    let minutesString = '';
    if (minute === 0) {
      minutesString = '00';
    } else {
      minutesString = minute.toString();
    }
    return minutesString;
  }

  // tri le tableau permettant d'envoyer les données à afficher sur la page rdv
  triBigTab(tab: string[]) {
    // on a en entree une ligne : this.planningDays[i]
    for (let i = 0; i < tab['time'].length - 1; i++) {
      if (this.difference2Time(tab['time'][i], tab['time'][i + 1]) === 1) {
        // swap
        const temp = tab['time'][i + 1];
        tab['time'][i + 1] = tab['time'][i];
        tab['time'][i] = temp;

        const temp2 = tab['type'][i + 1];
        tab['type'][i + 1] = tab['type'][i];
        tab['type'][i] = temp2;

        const temp3 = tab['complement'][i + 1];
        tab['complement'][i + 1] = tab['complement'][i];
        tab['complement'][i] = temp3;

        const temp4 = tab['motif'][i + 1];
        tab['motif'][i + 1] = tab['motif'][i];
        tab['motif'][i] = temp4;
        i = -1;
      }
    }
    return tab;
  }

  // compare 2 temps sous le format : 'hh:mm'
  difference2Time(time1: string, time2: string) {
    const time1tab = time1.split(':');
    const time2tab = time2.split(':');
    const heure1 = +time1tab[0];
    const heure2 = +time2tab[0];
    const minute1 = +time1tab[1];
    const minute2 = +time2tab[1];

    if (heure1 > heure2) {
      return 1;
    } else if (heure1 < heure2) {
      return -1;
    } else if (minute1 > minute2) {
      return 1;
    } else if (minute1 < minute2) {
      return -1;
    } else {
      return 0;
    }
  }

  // renvoie true si la valeur est dans le tableau
  isInTab(tab: any[], value: any) {
    for (let elt of tab) {
      if (elt === value) {
        return true;
      }
    }
    return false;
  }

  timeInDispo(time: string, dispo: Disponnibilite) {
    for (let elt of dispo.disponnibilite) {
      const eltDate = new Date(elt);
      const minutes = eltDate.getMinutes();
      let minutesString = '';
      if (minutes === 0) {
        minutesString = '00';
      } else {
        minutesString = minutes.toString();
      }
      const currentTime = eltDate.getHours() + ':' + minutesString;
      if (currentTime === time) {
        return eltDate;
      }
    }
    return null;
  }

  // cherche une dispo dans un tableau de dispo, pour un jour, mois et annee donnés
  searchDispo(dispos: Disponnibilite[], jour: number, mois: number, an: number) {
    for (const dispo of dispos) {
      if (jour === dispo.jour && mois === dispo.mois && an === dispo.an) {
        // on a trouve la bonne entrée
        return dispo;
      }
    }
    return null;
  }

  // cherche une consultation pour un jour mois et année donnés
  searchRdv(consultation: Consultation[], jour: number, mois: number, an: number) {
    let output = [];
    for (const consult of consultation) {
      const dateConsult = new Date(consult.date);
      if (jour === dateConsult.getDate() && mois === (dateConsult.getMonth()+1) && an === dateConsult.getFullYear()) {
        output.push(consult);
      }
    }
    return output;
  }

}
