import { Component, OnInit } from '@angular/core';
import {DoctorSpaceService} from "../shared/services/doctor-space.service";
import {AuthenticationService} from "../shared/services/authentication.service";
import {Doctor} from "../shared/models/doctor";
import {MedicalFileService} from "../shared/services/medical-file.service";
import {UsersService} from "../shared/services/users.service";
import {User} from "../shared/models/user";
import {Consultation} from "../shared/models/consultation";
import {Patient} from "../shared/models/patient";
import {Disponnibilite} from "../shared/models/disponibilite";
import {RdvService} from "../shared/services/rdv.service";
import {AutorisationService} from "../shared/services/autorisation.service";
import {Log} from "../shared/models/log";
import {LogService} from "../shared/services/log.service";
import {ActivatedRoute, ActivatedRouteSnapshot, Params, Router} from "@angular/router";

@Component({
  selector: 'app-patient_rdv',
  templateUrl: './patient_rdv.component.html',
  styleUrls: ['./patient_rdv.component.css']
})
export class PatientRdvComponent implements OnInit {
  myDoctors: User[] = [];
  isLogged: boolean;
  doctorDetails: string[];
  planningDays: any[][];
  me: User;
  thisDate: Date;
  reservationBox: string[] = [];
  motif: string;

  constructor(private doctorService: DoctorSpaceService, private auth: AuthenticationService,
              private medicalService: MedicalFileService,
              private userService: UsersService,
              private rdvService: RdvService,
              private autorisationService: AutorisationService,
              private logService: LogService,
              private router: Router,
              private route: ActivatedRoute) { }
  ngOnInit() {
    this.isLogged = this.auth.isLoggedIn();
    this.fetchInformations();
    this.thisDate = new Date();
    this.reservationBox['open'] = 'false';

    // on recupere le parametre passé s'il existe
    try {
      this.route.params.subscribe( resp => {
        const id = resp['doctor_id'];
        if (id) {
          this.openDetails(resp['doctor_id']);
        }
      });
    } catch (e) {
    }
  }


  // pour url du type : https://...../page/VALUE
  // renvoi VALUE
  getParameterByName(url) {
    const pars = url.split('/');
    const id = pars.pop();
    return id;
  }

  afterDay() {
    this.thisDate = new Date((this.thisDate.getTime()) + 86400000);
    this.openDetails(this.doctorDetails['id']);
  }

  beforeDay() {
    this.thisDate = new Date((this.thisDate.getTime()) - 86400000);
    this.openDetails(this.doctorDetails['id']);
  }

  openReservationBox(jour: number, mois: number, an: number, time: string) {
   this.reservationBox['jour'] = jour.toString();
   this.reservationBox['mois'] = mois.toString();
   this.reservationBox['an'] = an.toString();
   this.reservationBox['time'] = time;
   this.reservationBox['open'] = 'true';
  }

  closeReservationBox() {
    this.reservationBox['open'] = 'false';
    this.motif = '';
  }

  reserver() {
    console.log(this.motif);
    const jour = this.reservationBox['jour'];
    const mois = this.reservationBox['mois'];
    const an = this.reservationBox['an'];
    const time = this.reservationBox['time'];
    const horaire = time.split(':');
    const minute = +horaire[1]; // conversion number
    const heure = +horaire[0]; // conversion number
    let consultation = new Consultation(null);
    this.doctorService.getPatientByUserId(this.me._id)
      .subscribe( myPatient => {
        this.doctorService.getDoctorByUserId(this.doctorDetails['id'])
          .subscribe( myDoctor => {
            consultation.doctor = new Doctor(myDoctor[0]);
            consultation.patient = new Patient(myPatient[0]);
            consultation.motif = this.motif;
            consultation.date = new Date(an, mois - 1, jour, heure, minute, 0);
            this.doctorService.addConsultation(consultation)
              .subscribe(resp => {
                console.log(resp);
                this.motif = '';
                this.reservationBox['open'] = 'false';

                // log de reservation
                let log = new Log(null);
                log.severity = 1;
                log.user = new User(this.me);
                log.action = 'Reservation';
                this.logService.addLog(log)
                  .subscribe( resp => {
                    console.log(resp);
                  });

                // modifier le truc disponnibilite
                this.doctorService.getDisponnibiliteOfThisDay(new Date(an, mois - 1, jour, heure, minute, 0), (new Doctor(myDoctor[0]))._id)
                  .subscribe( dispo => {

                    let myDispo = new Disponnibilite(dispo[0]);
                    // formatage minute
                    let minutesString = this.rdvService.formatageMinute(minute);
                    let dateInDispo = this.rdvService.timeInDispo(heure + ':' + minutesString, myDispo);
                    if (dateInDispo !== null) {
                      console.log(dateInDispo.toLocaleString());
                      let indexOfDate = this.rdvService.findIndexOfDate(myDispo.disponnibilite, dateInDispo); // BUG ICI : index=-1
                      myDispo.disponnibilite.splice(indexOfDate, 1); // on enleve le mauvais /!\
                      this.doctorService.modifyDisponnibilite(myDispo)
                        .subscribe( resp => {
                          console.log(resp);
                          this.openDetails(this.doctorDetails['id']);
                        });
                    }
                  });
              });
          });
      });
  }

  // fetch my account and all the doctors link to me
  fetchInformations() {
    this.userService.getProfile()
      .subscribe( me => {
        if (me) {
          this.me = me;
          this.autorisationService.getRdvAutorisation(this.me._id)
            .subscribe( autorisations => {
              for (const aut of autorisations) {
                let add = true;
                for (const doctor of this.myDoctors) {
                  if (doctor._id === aut.observer._id) {
                    add = false;
                  }
                }
                if (add) {
                  this.myDoctors.push(aut.observer);
                }
              }
            });
        }
      });
  }

  openDetails(doctor_id: string) {
    // open the details for the rdv
    this.doctorDetails = [];
    this.medicalService.getUserById(doctor_id)
      .subscribe( user => {
        this.doctorDetails['description'] = 'Description of the medecin : ' + user.first_name ;
        this.doctorDetails['id'] = doctor_id;
      });

    // on recupere toutes les consultation du doctor
    this.doctorService.getDoctorByUserId(doctor_id)
      .subscribe( doctor => {
        console.log(doctor);

        this.userService.getProfile()
          .subscribe(meUser => {
            console.log(meUser);

            // fetch all consultations of the doctor selected
            this.doctorService.getConsultations(doctor[0]._id)
              .subscribe( consultations => {
                // a ce moment on a les consultations du doctor
                // il faut modifier les horaires non disponible
                console.log(consultations);
                const dateNow = this.thisDate;
                this.planningDays = [[], [], [], [], [], [], []];
                const jours = new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
                // il faut generer les crenaux horaires
                // il suffit de recuperer les 'disponnibilite' pour chaque jour
                this.doctorService.getDisponnibiliteOf(doctor[0]._id)
                  .subscribe( dispos => {
                    for (let i = 0; i < 7; i++) {
                      // on ajoute 24 heure pour avoir lendemain
                      const dateUsed = new Date(dateNow.getTime() + i * 86400000);
                      this.planningDays[i]['jour'] = jours[dateUsed.getDay()];
                      this.planningDays[i]['date'] = dateUsed.getDate() + '/' + (dateUsed.getMonth() + 1);
                      this.planningDays[i]['numJour'] = dateUsed.getDate();
                      this.planningDays[i]['mois'] = (dateUsed.getMonth() + 1);
                      this.planningDays[i]['an'] = dateUsed.getFullYear();
                      this.planningDays[i]['time'] = [];
                      this.planningDays[i]['type'] = [];
                      this.planningDays[i]['complement'] = [];
                      this.planningDays[i]['motif'] = [];

                      // il faut rechercher dans la liste de dispo l'entrée correspondant à notre jour
                      const dispoOfMyDay = this.rdvService.searchDispo(dispos, dateUsed.getDate(), dateUsed.getMonth() + 1, dateUsed.getFullYear());
                      if (dispoOfMyDay) {
                        for (const dateOfMyDay of dispoOfMyDay.disponnibilite) {

                          const myDate = new Date(dateOfMyDay);

                          // formatage minute
                          const minutesString = this.rdvService.formatageMinute(myDate.getMinutes());

                          // ajout de la valeur pour affichage
                          this.planningDays[i]['time'].push(myDate.getHours() + ':' + minutesString);
                          this.planningDays[i]['type'].push('');
                          this.planningDays[i]['complement'].push('');
                          this.planningDays[i]['motif'].push('');
                        }
                      } else {
                        console.log('%c dispo of my day not found for the day : ' + dateUsed.getDate() + '/' + (dateUsed.getMonth() + 1), 'color:red; font-weight:bold');
                      }
                      this.planningDays[i] = this.rdvService.triBigTab(this.planningDays[i]);
                    }
                  });
              });
          });
      });
  }
}
