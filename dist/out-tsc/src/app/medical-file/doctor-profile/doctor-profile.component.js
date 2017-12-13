var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { MedicalFileService } from "../../shared/services/medical-file.service";
import { Patient } from "../../shared/models/patient";
import { AuthenticationService } from "../../shared/services/authentication.service";
export var DoctorProfileComponent = (function () {
    function DoctorProfileComponent(medicalfile, authentication) {
        this.medicalfile = medicalfile;
        this.authentication = authentication;
        this.image = require('../../shared/img/profil.png');
    }
    DoctorProfileComponent.prototype.ngOnInit = function () {
        this.isLogged = this.authentication.isLoggedIn();
        if (this.isLogged) {
            this.getPatient();
        }
    };
    DoctorProfileComponent.prototype.getPatient = function () {
        var _this = this;
        this.medicalfile.getCurrentPatient().subscribe(function (pat) {
            _this.patient = new Patient(pat);
        });
    };
    DoctorProfileComponent = __decorate([
        Component({
            selector: 'app-doctor-profile',
            templateUrl: './doctor-profile.component.html',
            styleUrls: ['./doctor-profile.component.css']
        }), 
        __metadata('design:paramtypes', [MedicalFileService, AuthenticationService])
    ], DoctorProfileComponent);
    return DoctorProfileComponent;
}());
//# sourceMappingURL=F:/CALM/src/src/app/medical-file/doctor-profile/doctor-profile.component.js.map