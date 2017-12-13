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
import { UsersService } from "../../shared/services/users.service";
import { AuthenticationService } from "../../shared/services/authentication.service";
import { User } from "../../shared/models/user";
import { Patient } from "../../shared/models/patient";
import { MedicalFileService } from "../../shared/services/medical-file.service";
import { Autorisation } from "../../shared/models/autorisation";
import { AutorisationService } from "../../shared/services/autorisation.service";
export var SettingsComponent = (function () {
    function SettingsComponent(authentication, usersService, medicalService, autorisationService) {
        this.authentication = authentication;
        this.usersService = usersService;
        this.medicalService = medicalService;
        this.autorisationService = autorisationService;
        this.doctors = [];
        this.autorisations = [];
        this.addAutorisationForm = [];
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.patient = new Patient(null);
        this.user = new User(null);
        this.loadAllDoctors();
        this.isLogged = this.authentication.isLoggedIn();
        if (this.isLogged) {
            this.getInformations();
        }
    };
    SettingsComponent.prototype.getInformations = function () {
        var _this = this;
        this.usersService.getProfile()
            .subscribe(function (user) {
            _this.user = new User(user);
            _this.autorisationService.getAutorisations(_this.user._id)
                .subscribe(function (autorisations) {
                _this.autorisations = autorisations;
            });
        });
    };
    SettingsComponent.prototype.loadAllDoctors = function () {
        var _this = this;
        this.usersService.getDoctors().subscribe(function (doctors) {
            _this.doctors = doctors;
            // for(let i=0; i<doctors.length; i++){
            // }
        });
    };
    SettingsComponent.prototype.addDoctor = function (doctor) {
        var _this = this;
        this.medicalService.getCurrentPatient()
            .subscribe(function (patient) {
            _this.patient = new Patient(patient);
            _this.medicalService.addGeneralDoctor(doctor, _this.patient._id)
                .subscribe(function (data) {
                console.log("Doctor changed : ", data);
            });
        });
    };
    SettingsComponent.prototype.openAddAutorisation = function () {
        this.addAutorisationForm['show'] = true;
    };
    SettingsComponent.prototype.addNewAutorisation = function () {
        var _this = this;
        console.log('we will add a new autorisation');
        this.newAutorisation = new Autorisation(null);
        this.medicalService.getUserByEmail(this.addAutorisationForm['email'])
            .subscribe(function (observer) {
            if (observer) {
                _this.newAutorisation.user = _this.user;
                _this.newAutorisation.observer = new User(observer);
                _this.newAutorisation.subject = _this.addAutorisationForm['subject'];
                _this.newAutorisation.type = _this.addAutorisationForm['type'];
                console.log(_this.newAutorisation);
                _this.autorisationService.addAutorisation(_this.newAutorisation)
                    .subscribe(function (res) {
                    if (res) {
                        console.log(res);
                    }
                    // if autorisation is about post, we add the inverse of this
                    if (_this.newAutorisation.subject === 'POST') {
                        console.log('inverse user et observer???');
                        _this.newAutorisation.observer = _this.user;
                        _this.newAutorisation.user = new User(observer);
                        _this.autorisationService.addAutorisation(_this.newAutorisation)
                            .subscribe(function (res) {
                            if (res) {
                                console.log(res);
                            }
                            _this.getInformations(); // update
                        });
                    }
                    else {
                        _this.getInformations(); // update
                    }
                });
            }
        });
    };
    SettingsComponent.prototype.deleteAutorisation = function (aut_id) {
        var _this = this;
        console.log('delete this id : ' + aut_id);
        this.autorisationService.deleteAutorisation(aut_id)
            .subscribe(function (resp) {
            console.log(resp);
            _this.getInformations(); // update
        });
    };
    SettingsComponent = __decorate([
        Component({
            selector: 'app-settings',
            templateUrl: './settings.component.html',
            styleUrls: ['./settings.component.css']
        }), 
        __metadata('design:paramtypes', [AuthenticationService, UsersService, MedicalFileService, AutorisationService])
    ], SettingsComponent);
    return SettingsComponent;
}());
//# sourceMappingURL=F:/CALM/src/src/app/profile/settings/settings.component.js.map