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
export var DoctorSearchService = (function () {
    function DoctorSearchService(http, authentication) {
        this.http = http;
        this.authentication = authentication;
    }
    DoctorSearchService.prototype.getSearchDoctor = function (city) {
        return this.http.get('https://localhost:3000/api/searchDoctor/' + city, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    DoctorSearchService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http, AuthenticationService])
    ], DoctorSearchService);
    return DoctorSearchService;
}());
//# sourceMappingURL=F:/CALM/src/src/app/shared/services/doctor-search.service.js.map