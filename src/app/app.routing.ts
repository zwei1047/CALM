/**
 * Created by ISEN on 28/03/2017.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';
import { LoginComponent } from './login/login';
import { NotFoundComponent } from './not-found/not-found'
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import {AppComponent} from "./app.component";
import { MedicalFileComponent } from './medical-file/medical-file.component';
import {SettingsComponent} from "./profile/settings/settings.component";
import { DoctorSpaceComponent } from './doctor-space/doctor-space.component';
import { BuildingSpaceComponent } from './building-space/building-space.component';
import { OrganisationSpaceComponent } from './organisation-space/organisation-space.component';
import {PatientTreatmentComponent} from './doctor-space/patient-treatment/patient-treatment.component';
import {CurrentTreatmentComponent} from './medical-file/current-treatment/current-treatment.component';
import {PatientRdvComponent} from "./patient_rdv/patient_rdv.component";
import {DoctorRdvComponent} from "./doctor_rdv/doctor_rdv.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login' , component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'medical-file', component: MedicalFileComponent },
  { path: 'doctor-space', component: DoctorSpaceComponent},
  { path: 'current-treatment', component: CurrentTreatmentComponent},
  { path: 'patient-treatment', component: PatientTreatmentComponent},
  { path: 'building-space', component: BuildingSpaceComponent},
  { path: 'organisation-space', component: OrganisationSpaceComponent},
  { path: 'patient_rdv', component: PatientRdvComponent},
  { path: 'patient_rdv/:doctor_id', component: PatientRdvComponent},
  { path: 'doctor_rdv', component: DoctorRdvComponent},
  { path: 'logout', component: AppComponent},
  { path: 'settings', component: SettingsComponent},
  { path: '**', component: NotFoundComponent}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
