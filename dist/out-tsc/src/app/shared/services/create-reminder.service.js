var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { AuthenticationService } from "./authentication.service";
export var CreateReminderService = (function () {
    function CreateReminderService(http, authentication) {
        this.http = http;
        this.authentication = authentication;
    }
    CreateReminderService.prototype.createFirstReminder = function (treatment) {
        var treatement = [{
                takingState: "Avant-repas",
                quantity: 10,
                frequence: 1,
                typeFrequence: "jours",
                info: "Comprimé aspirine 500mg",
                name: "Aspirine",
                codeCIS: "42",
                start: new Date(),
                end: new Date().setDate(25),
                userId: "5a098f391f982053ef3665b3",
                _id: "5a0b0936fecaf0101d591ff9"
            }];
        return this.http.put('https://localhost:3000/api/createFirstRappel/', treatement, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    CreateReminderService.prototype.createNextReminder = function (treatmentId) {
        return this.http.put('https://localhost:3000/api/createNextRappel/', this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    CreateReminderService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http, AuthenticationService])
    ], CreateReminderService);
    return CreateReminderService;
}());
//# sourceMappingURL=F:/CALM/src/src/app/shared/services/create-reminder.service.js.map