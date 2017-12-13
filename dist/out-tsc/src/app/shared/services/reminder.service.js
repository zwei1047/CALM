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
export var ReminderService = (function () {
    function ReminderService(http, authentication) {
        this.http = http;
        this.authentication = authentication;
    }
    ReminderService.prototype.getRappel = function (userId) {
        console.log(userId);
        return this.http.get('https://localhost:3000/api/getRappels/' + userId, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    ReminderService.prototype.reminderDone = function (reminderId) {
        console.log("i am here reminder service");
        return this.http.get('https://localhost:3000/api/reminderDone/' + reminderId, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    ReminderService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http, AuthenticationService])
    ], ReminderService);
    return ReminderService;
}());
//# sourceMappingURL=F:/CALM/src/src/app/shared/services/reminder.service.js.map