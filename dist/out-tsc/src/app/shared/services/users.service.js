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
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthenticationService } from './authentication.service';
export var UsersService = (function () {
    function UsersService(http, authentication) {
        this.http = http;
        this.authentication = authentication;
    }
    // Get all users from the API
    UsersService.prototype.getUsers = function () {
        return this.http.get('https://localhost:3000/api/users', this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.deleteUser = function (id) {
        if (this.authentication.currentUserId() == id) {
            this.authentication.logout();
        }
        return this.http.delete('https://localhost:3000/api/users/' + id, this.authentication.getRequestOptions())
            .map(function (res) { return console.log("Users Service : delete user code : " + res); });
    };
    UsersService.prototype.deleteAddress = function (id) {
        return this.http.delete('https://localhost:3000/api/addresses/' + id, this.authentication.getRequestOptions())
            .map(function (res) { return console.log("Users Service : delete address code : " + res); });
    };
    UsersService.prototype.getProfile = function () {
        return this.http.get('https://localhost:3000/api/profile', this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.getAddressById = function (id) {
        return this.http.get('https://localhost:3000/api/addresses/' + id, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.getAddresses = function () {
        return this.http.get('https://localhost:3000/api/addresses', this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.getDoctors = function () {
        return this.http.get('https://localhost:3000/api/doctors', this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    UsersService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http, AuthenticationService])
    ], UsersService);
    return UsersService;
}());
//# sourceMappingURL=F:/CALM/src/src/app/shared/services/users.service.js.map