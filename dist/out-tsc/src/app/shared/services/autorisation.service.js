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
export var AutorisationService = (function () {
    function AutorisationService(http, authentication) {
        this.http = http;
        this.authentication = authentication;
        this.url = 'https://localhost:3000/api/';
    }
    AutorisationService.prototype.addAutorisation = function (autorisation) {
        return this.http.put(this.url + 'autorisation/', autorisation, this.authentication.getRequestOptions())
            .map(function (res) { return res; });
    };
    AutorisationService.prototype.getPostAutorisation = function (user_id) {
        // trier pour avoir que les types = post
        return this.http.get(this.url + 'autorisation/post/' + user_id, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    AutorisationService.prototype.getRdvAutorisation = function (user_id) {
        return this.http.get(this.url + 'autorisation/rdv/' + user_id, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    AutorisationService.prototype.getAutorisations = function (user_id) {
        return this.http.get(this.url + 'autorisation/' + user_id, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    AutorisationService.prototype.getAutorisationDemands = function (user_id) {
        return this.http.get(this.url + 'autorisation/demand/' + user_id, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    AutorisationService.prototype.deleteAutorisation = function (id) {
        return this.http.delete(this.url + 'autorisation/' + id, this.authentication.getRequestOptions())
            .map(function (res) { return res; });
    };
    AutorisationService.prototype.acceptAutorisation = function (demand_id) {
        return this.http.get(this.url + 'autorisation/accept/' + demand_id, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    AutorisationService.prototype.refuseAutorisation = function (demand_id) {
        return this.http.get(this.url + 'autorisation/refuse/' + demand_id, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    AutorisationService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http, AuthenticationService])
    ], AutorisationService);
    return AutorisationService;
}());
//# sourceMappingURL=F:/CALM/src/src/app/shared/services/autorisation.service.js.map