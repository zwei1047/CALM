var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UsersService } from './shared/services/users.service';
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home";
import { ContactComponent } from "./contact/contact";
import { AboutComponent } from "./about/about";
import { UsersComponent } from "./users/users";
import { LoginComponent } from "./login/login";
import { NotFoundComponent } from "./not-found/not-found";
import { appRouting } from "./app.routing";
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './shared/services/authentication.service';
import { ProfileComponent } from './profile/profile.component';
import { TrimValueAccessorModule } from 'ng-trim-value-accessor';
import { MedicalFileComponent } from './medical-file/medical-file.component';
import { DoctorProfileComponent } from './medical-file/doctor-profile/doctor-profile.component';
import { CurrentTreatmentComponent } from './medical-file/current-treatment/current-treatment.component';
import { MedicalFileService } from "./shared/services/medical-file.service";
import { SettingsComponent } from "./profile/settings/settings.component";
import { CalendarComponent } from './medical-file/calendar/calendar.component';
import { ReminderComponent } from './medical-file/reminder/reminder.component';
import { DoctorSpaceComponent } from './doctor-space/doctor-space.component';
import { BuildingSpaceComponent } from './building-space/building-space.component';
import { DoctorSpaceService } from './shared/services/doctor-space.service';
import { GoogleMapComponent } from './medical-file/google-map/google-map.component';
import { AgmCoreModule } from "angular2-google-maps/core";
import { PostsComponent } from './medical-file/posts/posts.component';
import { OrganisationSpaceComponent } from './organisation-space/organisation-space.component';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                HomeComponent,
                ContactComponent,
                AboutComponent,
                UsersComponent,
                LoginComponent,
                NotFoundComponent,
                RegisterComponent,
                ProfileComponent,
                MedicalFileComponent,
                DoctorProfileComponent,
                CurrentTreatmentComponent,
                SettingsComponent,
                CalendarComponent,
                ReminderComponent,
                DoctorSpaceComponent,
                BuildingSpaceComponent,
                OrganisationSpaceComponent,
                GoogleMapComponent,
                PostsComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                HttpModule,
                appRouting,
                TrimValueAccessorModule,
                AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyDVDZy1qXBBu6ctMvyYcSONy3-cs5PjYNU'
                })
            ],
            providers: [
                UsersService,
                AuthenticationService,
                MedicalFileService,
                DoctorSpaceService
            ],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=F:/CALM/src/src/app/app.module.js.map