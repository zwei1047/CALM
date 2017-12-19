import {UsersService} from "../shared/services/users.service";
import {MedicalFileService} from "../shared/services/medical-file.service";
import {AuthenticationService} from "../shared/services/authentication.service";
import {DoctorSpaceService} from "../shared/services/doctor-space.service";
import {Component, OnInit} from "@angular/core";
import {User} from "../shared/models/user";
import {Doctor} from "../shared/models/doctor";
import {Consultation} from "../shared/models/consultation";
import {Disponnibilite} from "../shared/models/disponibilite";
import {RdvService} from "../shared/services/rdv.service";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-doctor_rdv',
  templateUrl: './doctor_rdv.component.html',
  styleUrls: ['./doctor_rdv.component.css']
})
export class DoctorRdvComponent implements OnInit {
  isLogged: boolean;
  planningDays: any[][];
  thisDate: Date = new Date();
  meUser: User;
  meDoctor: Doctor;
  consultations: Consultation[] = [];
  disponnibilites: Disponnibilite[] = [];
  detailsRdv: any[];

  constructor(private doctorService: DoctorSpaceService, private auth: AuthenticationService,
              private medicalService: MedicalFileService,
              private userService: UsersService,
              private rdvService: RdvService) {
  }

  ngOnInit() {
    this.detailsRdv = [];
    this.detailsRdv['visible'] = false;
    this.isLogged = this.auth.isLoggedIn();
    this.fetchInformation();
  }

  afterDay() {
    this.thisDate = new Date((this.thisDate.getTime()) + 86400000);
    this.prepareData();
  }

  beforeDay() {
    this.thisDate = new Date((this.thisDate.getTime()) - 86400000);
    this.prepareData();
  }

  openDetailsRdv(user: any, motif: string) {
    const myUser = new User(user);
    this.detailsRdv['user'] = myUser;
    this.detailsRdv['motif'] = motif;
    this.detailsRdv['visible'] = true;
    console.log(myUser);
  }

  closeDetailsRdv() {
    this.detailsRdv = [];
    this.detailsRdv['visible'] = false;
  }


  changeStateOfDay(jour: number, mois: number, an: number) {
    this.doctorService.getDisponnibiliteOfThisDay(new Date(an, mois - 1, jour, 12, 0, 0), this.meDoctor._id)
      .subscribe(dispos => {
        let myDispo = new Disponnibilite(null);
        let modify = false;
        if (dispos[0]) {
          myDispo = new Disponnibilite(dispos[0]);
          modify = true;
        } else {
          myDispo.jour = jour;
          myDispo.mois = mois;
          myDispo.an = an;
        }
        myDispo.doctor = this.meDoctor;
        myDispo.fullDisponnibilite(an, mois, jour);

        // on enleve les horaires correspondants à des rdv
        this.doctorService.getConsultations(this.meDoctor._id)
          .subscribe(consultations => {
            for (const consultation of consultations) {
              const myConsultation = new Consultation(consultation);
              const currentDate = new Date(myConsultation.date);
              const indexOfDate = this.rdvService.findIndexOfDate(myDispo.disponnibilite, currentDate);
              const dateInConsul = this.rdvService.timeInDispo(currentDate.getHours() + ':' + this.rdvService.formatageMinute(currentDate.getMinutes()), myDispo);
              if (dateInConsul !== null && indexOfDate !== -1) {
                myDispo.disponnibilite.splice(indexOfDate, 1);
              }
            }
            if (!modify) {
              this.doctorService.addDisponnibilite(myDispo)
                .subscribe(resp => {
                  console.log(resp);
                  this.fetchInformation();
                });
            } else {
              this.doctorService.modifyDisponnibilite(myDispo)
                .subscribe(resp => {
                  console.log(resp);
                  this.fetchInformation();
                });
            }

          });
      });
  }


  // on test pas s'il y a un rdv avant de changer dispo
  changeState(jour: number, mois: number, an: number, time: string) {

    let timeTab = time.split(':');
    let minuteTime = +timeTab[1];
    let hourTime = +timeTab[0];

    this.doctorService.getConsultationOfThisDay(this.meDoctor._id, new Date(an, mois - 1, jour, hourTime, minuteTime, 0))
      .subscribe(consultationThisTime => {
        if (consultationThisTime === null) {
          // on ne change rien
        } else {
          // on peut changer
          console.log('change state : ' + time + ' date : ' + (new Date(an, mois - 1, jour, 12, 0, 0)).toLocaleString());
          this.doctorService.getDisponnibiliteOfThisDay(new Date(an, mois - 1, jour, 12, 0, 0), this.meDoctor._id)
            .subscribe(dispos => {
              let dispo = dispos[0];
              if (dispo) {
                let myDispo = new Disponnibilite(dispo);
                let dateInDispo = this.rdvService.timeInDispo(time, myDispo);
                if (dateInDispo !== null) {
                  // l'horaire etait disponnible, il faut l'enlever
                  let indexOfDate = this.rdvService.findIndexOfDate(myDispo.disponnibilite, dateInDispo);
                  myDispo.disponnibilite.splice(indexOfDate, 1);
                } else {
                  // il faut ajouter une nouvelle date
                  let timeTab = time.split(':');
                  let myHour = +timeTab[0];
                  let myMinute = +timeTab[1];

                  let myNewDate = new Date(an, mois - 1, jour, myHour, myMinute, 0);
                  myDispo.disponnibilite.push(myNewDate);
                }
                this.doctorService.modifyDisponnibilite(myDispo)
                  .subscribe(resp => {
                    console.log(resp);
                    this.fetchInformation();
                  });
              } else {
                // la dispo n'existe pas encore pour ce jour, il faut la creer
                let myNewDispo = new Disponnibilite(null);
                myNewDispo.doctor = this.meDoctor;
                myNewDispo.jour = jour;
                myNewDispo.mois = mois;
                myNewDispo.an = an;

                const timeTab = time.split(':');
                const myHour = +timeTab[0];
                const myMinute = +timeTab[1];
                myNewDispo.disponnibilite.push(new Date(an, (mois - 1), jour, myHour, myMinute, 0));
                this.doctorService.addDisponnibilite(myNewDispo)
                  .subscribe(resp => {
                    console.log(resp);
                    this.fetchInformation();
                  });
              }
            });
        }
      });


  }

  prepareData() {
    console.log('preparing the data');
    this.planningDays = [[], [], [], [], [], [], []];
    const jours = new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");

    for (let i = 0; i < 7; i++) {
      const dateUsed = new Date(this.thisDate.getTime() + i * 86400000);
      this.planningDays[i]['jour'] = jours[dateUsed.getDay()];
      this.planningDays[i]['date'] = dateUsed.getDate() + '/' + (dateUsed.getMonth() + 1);
      this.planningDays[i]['numJour'] = dateUsed.getDate();
      this.planningDays[i]['mois'] = (dateUsed.getMonth() + 1);
      this.planningDays[i]['an'] = dateUsed.getFullYear();
      this.planningDays[i]['time'] = []; // a remplir totalement
      this.planningDays[i]['type'] = [];
      this.planningDays[i]['complement'] = [];
      this.planningDays[i]['motif'] = [];

      const dispoOfMyDay = this.rdvService.searchDispo(this.disponnibilites, dateUsed.getDate(), dateUsed.getMonth() + 1, dateUsed.getFullYear());
      if (dispoOfMyDay) {
        for (const dateOfMyDay of dispoOfMyDay.disponnibilite) {

          const myDate = new Date(dateOfMyDay);

          // formatage minute
          const minutesString = this.rdvService.formatageMinute(myDate.getMinutes());

          // ajout de la valeur pour affichage
          this.planningDays[i]['time'].push(myDate.getHours() + ':' + minutesString);
          this.planningDays[i]['type'].push('libre');
          this.planningDays[i]['complement'].push('');
          this.planningDays[i]['motif'].push('');
        }
      } else {
        console.log('%c dispo of my day not found for the day : ' + dateUsed.getDate() + '/' + (dateUsed.getMonth() + 1), 'color:red;font-weight:bold');
      }

      const rdvOfMyDay = this.rdvService.searchRdv(this.consultations, dateUsed.getDate(), dateUsed.getMonth() + 1, dateUsed.getFullYear());
      if (rdvOfMyDay) {
        for (const rdv of rdvOfMyDay) {
          const myDate = new Date(rdv.date);
          const minutesString = this.rdvService.formatageMinute(myDate.getMinutes());
          this.planningDays[i]['time'].push(myDate.getHours() + ':' + minutesString);
          this.planningDays[i]['type'].push('rdv');
          // this.planningDays[i]['complement'].push(rdv.patient.user_id.first_name + ' ' + rdv.patient.user_id.last_name);
          this.planningDays[i]['complement'].push(rdv.patient.user_id);
          if (!isNullOrUndefined(rdv.motif)) {
            this.planningDays[i]['motif'].push(rdv.motif);
          } else {
            this.planningDays[i]['motif'].push('');
          }

        }
      }

      // on rempli avec des cases 'occupé'
      let thisHour = 8;
      let thisMinute = 0;
      let minutesString = '';
      while ((this.planningDays[i]['time'].length) < 24) {
        minutesString = this.rdvService.formatageMinute(thisMinute);
        if (!this.rdvService.isInTab(this.planningDays[i]['time'], thisHour.toString() + ':' + minutesString)) {
          this.planningDays[i]['time'].push(thisHour.toString() + ':' + minutesString);
          this.planningDays[i]['type'].push('occupe');
          this.planningDays[i]['complement'].push('');
          this.planningDays[i]['motif'].push('');
        }
        thisMinute += 30;
        if (thisMinute === 60) {
          thisMinute = 0;
          thisHour++;
        }
      }
      this.planningDays[i] = this.rdvService.triBigTab(this.planningDays[i]);
    }
  }

  fetchInformation() {
    this.consultations = [];
    this.disponnibilites = [];

    this.userService.getProfile()
      .subscribe(user => {
        this.meUser = new User(user);
        this.doctorService.getDoctorByUserId(this.meUser._id)
          .subscribe(doctor => {
            this.meDoctor = new Doctor(doctor[0]);
            this.doctorService.getConsultations(this.meDoctor._id)
              .subscribe(consultations => {
                for (const consult of consultations) {
                  this.consultations.push(new Consultation(consult));
                }
                this.doctorService.getDisponnibiliteOf(this.meDoctor._id)
                  .subscribe(disponnibilites => {
                    for (const dispo of disponnibilites) {
                      this.disponnibilites.push(new Disponnibilite(dispo));
                    }
                    console.log(this.consultations);
                    console.log(this.disponnibilites);
                    console.log(this.meDoctor);
                    this.prepareData();
                  });
              });
          });
      });
  }
}
