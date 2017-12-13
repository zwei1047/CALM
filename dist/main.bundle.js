webpackJsonp([1,4],{

/***/ 1098:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(487);


/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__doctor__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Patient; });


var Patient = (function () {
    function Patient(patientInfo) {
        this.patient_followed = [];
        if (patientInfo) {
            this._id = patientInfo._id;
            this.user_id = new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */](patientInfo.user_id);
            this.general_doctor = new __WEBPACK_IMPORTED_MODULE_1__doctor__["a" /* Doctor */](patientInfo.general_doctor);
            if (patientInfo.patient_followed) {
                for (var _i = 0, _a = patientInfo.patient_followed; _i < _a.length; _i++) {
                    var elt = _a[_i];
                    this.patient_followed.push(new Patient(elt));
                }
            }
        }
        else {
            this._id = '';
            this.user_id = new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */](null);
            this.general_doctor = new __WEBPACK_IMPORTED_MODULE_1__doctor__["a" /* Doctor */](null);
            this.phone = '';
        }
    }
    return Patient;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/patient.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    // save the token in localStorage and change the navbar state
    AuthenticationService.prototype.saveToken = function (token) {
        localStorage.setItem('token', token);
    };
    // get the token stored in localStorage and change the navbar state
    AuthenticationService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    // delete the token in localStorage and change the navbar state
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('token');
        location.reload();
    };
    // return true if the user is authenticate
    AuthenticationService.prototype.isLoggedIn = function () {
        var token = this.getToken();
        var payload;
        // Verify if token is present and if it's still valid
        if (token) {
            payload = token.split('.')[1];
            payload = atob(payload);
            payload = JSON.parse(payload);
            return payload.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.currentUser = function () {
        if (this.isLoggedIn()) {
            var token = this.getToken();
            var payload = token.split('.')[1];
            payload = atob(payload);
            payload = JSON.parse(payload);
            return (payload.email);
        }
    };
    ;
    AuthenticationService.prototype.currentUserId = function () {
        if (this.isLoggedIn()) {
            var token = this.getToken();
            var payload = token.split('.')[1];
            payload = atob(payload);
            payload = JSON.parse(payload);
            return (payload._id);
        }
    };
    ;
    AuthenticationService.prototype.register = function (user) {
        return this.http.post('https://localhost:3000/api/register', user)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json());
        });
    };
    AuthenticationService.prototype.login = function (user) {
        return this.http.post('https://localhost:3000/api/login', user)
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json());
        });
    };
    AuthenticationService.prototype.getRequestOptions = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        header.append('Authorization', "Bearer " + this.getToken());
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: header });
        return options;
    };
    AuthenticationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/authentication.service.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutorisationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AutorisationService = (function () {
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
    AutorisationService.prototype.deleteAutorisation = function (id) {
        return this.http.delete(this.url + 'autorisation/' + id, this.authentication.getRequestOptions())
            .map(function (res) { return res; });
    };
    AutorisationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], AutorisationService);
    return AutorisationService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/autorisation.service.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__address__ = __webpack_require__(402);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });

/**
 * Created by ISEN on 15/03/2017.
 */
var User = (function () {
    function User(UserInfo) {
        // console.log("UserInfo : ", UserInfo);
        if (UserInfo) {
            this._id = UserInfo._id;
            this.first_name = UserInfo.first_name;
            this.last_name = UserInfo.last_name;
            this.birth_date = UserInfo.birth_date;
            this.email = UserInfo.email;
            this.password = UserInfo.password;
            this.role = UserInfo.role;
            this.profile_img = UserInfo.profile_img;
            this.address = new __WEBPACK_IMPORTED_MODULE_0__address__["a" /* Address */](UserInfo.address);
        }
        else {
            this._id = "";
            this.first_name = "";
            this.last_name = "";
            this.birth_date = null;
            this.email = "";
            this.password = "";
            this.role = "";
            this.profile_img = null;
            this.address = new __WEBPACK_IMPORTED_MODULE_0__address__["a" /* Address */](null);
        }
    }
    ;
    return User;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/user.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RdvService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RdvService = (function () {
    function RdvService(http) {
        this.http = http;
    }
    // find index of a date in a array of date
    RdvService.prototype.findIndexOfDate = function (array, date) {
        for (var i = 0; i < array.length; i++) {
            // console.log('%c ' + array[i].toLocaleString() + ' === ' + date.toLocaleString(), 'color:green');
            var a = new Date(array[i]);
            var b = new Date(date);
            if (a.getDate() === b.getDate() && a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear()) {
                if (a.getMinutes() === b.getMinutes() && a.getHours() === b.getHours()) {
                    return i;
                }
            }
        }
        return -1;
    };
    RdvService.prototype.formatageMinute = function (minute) {
        var minutesString = '';
        if (minute === 0) {
            minutesString = '00';
        }
        else {
            minutesString = minute.toString();
        }
        return minutesString;
    };
    // tri le tableau permettant d'envoyer les données à afficher sur la page rdv
    RdvService.prototype.triBigTab = function (tab) {
        // on a en entree une ligne : this.planningDays[i]
        for (var i = 0; i < tab['time'].length - 1; i++) {
            if (this.difference2Time(tab['time'][i], tab['time'][i + 1]) === 1) {
                // swap
                var temp = tab['time'][i + 1];
                tab['time'][i + 1] = tab['time'][i];
                tab['time'][i] = temp;
                var temp2 = tab['type'][i + 1];
                tab['type'][i + 1] = tab['type'][i];
                tab['type'][i] = temp2;
                var temp3 = tab['complement'][i + 1];
                tab['complement'][i + 1] = tab['complement'][i];
                tab['complement'][i] = temp3;
                var temp4 = tab['motif'][i + 1];
                tab['motif'][i + 1] = tab['motif'][i];
                tab['motif'][i] = temp4;
                i = -1;
            }
        }
        return tab;
    };
    // compare 2 temps sous le format : 'hh:mm'
    RdvService.prototype.difference2Time = function (time1, time2) {
        var time1tab = time1.split(':');
        var time2tab = time2.split(':');
        var heure1 = +time1tab[0];
        var heure2 = +time2tab[0];
        var minute1 = +time1tab[1];
        var minute2 = +time2tab[1];
        if (heure1 > heure2) {
            return 1;
        }
        else if (heure1 < heure2) {
            return -1;
        }
        else if (minute1 > minute2) {
            return 1;
        }
        else if (minute1 < minute2) {
            return -1;
        }
        else {
            return 0;
        }
    };
    // renvoie true si la valeur est dans le tableau
    RdvService.prototype.isInTab = function (tab, value) {
        for (var _i = 0, tab_1 = tab; _i < tab_1.length; _i++) {
            var elt = tab_1[_i];
            if (elt === value) {
                return true;
            }
        }
        return false;
    };
    RdvService.prototype.timeInDispo = function (time, dispo) {
        for (var _i = 0, _a = dispo.disponnibilite; _i < _a.length; _i++) {
            var elt = _a[_i];
            var eltDate = new Date(elt);
            var minutes = eltDate.getMinutes();
            var minutesString = '';
            if (minutes === 0) {
                minutesString = '00';
            }
            else {
                minutesString = minutes.toString();
            }
            var currentTime = eltDate.getHours() + ':' + minutesString;
            if (currentTime === time) {
                return eltDate;
            }
        }
        return null;
    };
    // cherche une dispo dans un tableau de dispo, pour un jour, mois et annee donnés
    RdvService.prototype.searchDispo = function (dispos, jour, mois, an) {
        for (var _i = 0, dispos_1 = dispos; _i < dispos_1.length; _i++) {
            var dispo = dispos_1[_i];
            if (jour === dispo.jour && mois === dispo.mois && an === dispo.an) {
                // on a trouve la bonne entrée
                return dispo;
            }
        }
        return null;
    };
    // cherche une consultation pour un jour mois et année donnés
    RdvService.prototype.searchRdv = function (consultation, jour, mois, an) {
        var output = [];
        for (var _i = 0, consultation_1 = consultation; _i < consultation_1.length; _i++) {
            var consult = consultation_1[_i];
            var dateConsult = new Date(consult.date);
            if (jour === dateConsult.getDate() && mois === (dateConsult.getMonth() + 1) && an === dateConsult.getFullYear()) {
                output.push(consult);
            }
        }
        return output;
    };
    RdvService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], RdvService);
    return RdvService;
    var _a;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/rdv.service.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreatmentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TreatmentService = (function () {
    function TreatmentService(http, authentication) {
        this.http = http;
        this.authentication = authentication;
    }
    TreatmentService.prototype.getUserTreatment = function (id) {
        return this.http.get('https://localhost:3000/api/treatment/' + id, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    TreatmentService.prototype.updateUserTreatment = function (id, updatedTreatment) {
        console.log(updatedTreatment);
        return this.http.put('https://localhost:3000/api/updateTreatment/' + id, updatedTreatment, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    TreatmentService.prototype.getMedicamentList = function (medicName) {
        return this.http.get('https://localhost:3000/api/getMedicName/' + medicName, this.authentication.getRequestOptions()).map(function (res) { return res.json(); });
    };
    TreatmentService.prototype.deleteTreatment = function (id) {
        return this.http.delete('https://localhost:3000/api/treatment/' + id, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    TreatmentService.prototype.addTreatment = function (id, newTreatment) {
        return this.http.put('https://localhost:3000/api/treatment/' + id, newTreatment, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    TreatmentService.prototype.getTreatmentInfo = function (codeCIS) {
        return this.http.get('https://localhost:3000/api/getMedicInfo/' + codeCIS, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    TreatmentService.prototype.getRequestOptions = function () {
        /*
        let header: Headers = new Headers();
        header.append('Access-Control-Request-Method', 'GET');
        let options = new RequestOptions({headers: header});
        return options;
        */
    };
    TreatmentService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], TreatmentService);
    return TreatmentService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/treatment.service.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'about-page',
            template: __webpack_require__(801),
            styles: [__webpack_require__(778)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/about.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_user__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_users_service__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(authenticationService, router, usersService) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.usersService = usersService;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__shared_models_user__["a" /* User */](null);
    }
    AppComponent.prototype.ngOnInit = function () {
        this.isLogged = this.authenticationService.isLoggedIn();
        if (this.isLogged) {
            this.getProfile();
        }
    };
    AppComponent.prototype.getProfile = function () {
        var _this = this;
        this.usersService.getProfile()
            .subscribe(function (user) {
            console.log("User received from API", user);
            _this.user = new __WEBPACK_IMPORTED_MODULE_3__shared_models_user__["a" /* User */](user);
        });
        //this.getAddress(this.user.address_id);
    };
    AppComponent.prototype.getAddress = function (address_id) {
        var _this = this;
        this.usersService.getAddressById(address_id)
            .subscribe(function (address) {
            _this.user.address = address;
        });
    };
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigateByUrl('/');
        location.reload();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(802),
            styles: [__webpack_require__(779)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_users_service__["a" /* UsersService */]) === 'function' && _c) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/app.component.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_space_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildingSpaceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuildingSpaceComponent = (function () {
    function BuildingSpaceComponent(doctorService, auth) {
        this.doctorService = doctorService;
        this.auth = auth;
    }
    BuildingSpaceComponent.prototype.ngOnInit = function () {
        this.isLogged = this.auth.isLoggedIn();
    };
    BuildingSpaceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-building-space',
            template: __webpack_require__(803),
            styles: [__webpack_require__(780)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_space_service__["a" /* DoctorSpaceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_space_service__["a" /* DoctorSpaceService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], BuildingSpaceComponent);
    return BuildingSpaceComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/building-space.component.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'contact-page',
            template: __webpack_require__(804),
            styles: [__webpack_require__(781)]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/contact.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_space_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_post__ = __webpack_require__(406);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorSpaceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DoctorSpaceComponent = (function () {
    function DoctorSpaceComponent(doctorService, auth) {
        this.doctorService = doctorService;
        this.auth = auth;
        this.patients = [];
        this.submitted = false;
    }
    DoctorSpaceComponent.prototype.ngOnInit = function () {
        this.isLogged = this.auth.isLoggedIn();
        this.loadAllPatients();
        this.post = new __WEBPACK_IMPORTED_MODULE_3__shared_models_post__["a" /* Post */](null);
    };
    DoctorSpaceComponent.prototype.loadAllPatients = function () {
        var _this = this;
        this.doctorService.getPatientFromDoctor(this.auth.currentUserId()).subscribe(function (patients) {
            _this.patients = patients;
            console.log('Patients :', _this.patients);
        });
    };
    DoctorSpaceComponent.prototype.selectPatient = function (patient) {
        this.patient_selected = patient;
        localStorage.setItem('patient', JSON.stringify(patient));
    };
    DoctorSpaceComponent.prototype.change_submit = function (patient) {
        this.patient_selected = patient;
        this.submitted = !this.submitted;
    };
    DoctorSpaceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-doctor-space',
            template: __webpack_require__(805),
            styles: [__webpack_require__(782)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_space_service__["a" /* DoctorSpaceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_space_service__["a" /* DoctorSpaceService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], DoctorSpaceComponent);
    return DoctorSpaceComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/doctor-space.component.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_treatment_service__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_treatment__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_models_user__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_users_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientTreatmentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PatientTreatmentComponent = (function () {
    function PatientTreatmentComponent(http, treatment, usersService, route, router) {
        this.http = http;
        this.treatment = treatment;
        this.usersService = usersService;
        this.route = route;
        this.router = router;
        this.treatments = [];
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_5__shared_models_user__["a" /* User */]({});
    }
    PatientTreatmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newTreatment = new __WEBPACK_IMPORTED_MODULE_4__shared_models_treatment__["a" /* Treatment */]({});
        this.route.params.subscribe(function (params) {
            _this.userId = params['id'];
            if (_this.userId) {
                _this.getMedicamentList();
                _this.usersService.getUser(_this.userId).subscribe(function (data) {
                    _this.currentUser = data;
                }, function (error) { return console.log(error); });
            }
            else {
                console.log('404');
            }
        });
    };
    ;
    PatientTreatmentComponent.prototype.getMedicamentList = function () {
        var _this = this;
        this.treatment.getUserTreatment(this.userId).subscribe(function (data) {
            _this.treatments = data;
            _this.treatments.forEach(function (element) {
                this.treatment.getTreatmentInfo(element.codeCIS).subscribe(function (response) {
                    var tmp = JSON.parse(response);
                    if (tmp != null) {
                        element.substances = tmp.compositions[0].substancesActives.map(function (a) { return a.denominationSubstance; });
                    }
                }, function (error) { return console.log(error); });
                if (element.start != null) {
                    element.start = new Date(element.start);
                }
                else {
                    element.start = new Date();
                }
                if (element.end != null) {
                    element.end = new Date(element.end);
                }
                else {
                    element.start = new Date();
                }
                //          element.end.toLocaleDate| date:'dd/MM/yyyy'String('fr-FR');
            }.bind(_this));
        }, function (error) { return console.log(error); });
    };
    ;
    PatientTreatmentComponent.prototype.deleteMedicament = function (id) {
        var _this = this;
        var result = confirm('Supprimer définitivement ?');
        if (result) {
            this.treatment.deleteTreatment(id).subscribe(function (data) {
                _this.getMedicamentList();
            }, function (error) { return console.log(error); });
        }
    };
    ;
    PatientTreatmentComponent.prototype.isSelected = function (id) {
        if (this.selectedTreatment) {
            if (this.selectedTreatment._id === id) {
                return true;
            }
        }
        return false;
    };
    PatientTreatmentComponent.prototype.updateSelectedTreatment = function (treatment) {
        this.selectedTreatment = treatment;
        this.clean();
    };
    PatientTreatmentComponent.prototype.updateUserTreatment = function (treatment) {
        var _this = this;
        this.treatment.updateUserTreatment(treatment._id, treatment).subscribe(function (data) {
            _this.getMedicamentList();
            _this.selectedTreatment = null;
        }, function (error) { return console.log(error); });
        this.clean();
    };
    PatientTreatmentComponent.prototype.expiredTreatment = function (treatment) {
        var result = confirm('Fin du traitement ?');
        if (result) {
            treatment.expired = true;
            this.updateUserTreatment(treatment);
        }
    };
    PatientTreatmentComponent.prototype.addTreatment = function (codeCIS, denomination) {
        var _this = this;
        /* if (treatment == null || treatment.name == null || treatment.start == null
           || treatment.typeFrequence == null || treatment.frequence == null
           || treatment.quantity == null || treatment.end == null || treatment.takingState == null) {
           console.log('Missing information');
         } else {
         */
        var treatment = new __WEBPACK_IMPORTED_MODULE_4__shared_models_treatment__["a" /* Treatment */]({});
        treatment.codeCIS = codeCIS;
        treatment.name = denomination;
        treatment.start = new Date();
        treatment.end = null;
        treatment.takingState = '';
        treatment.quantity = null;
        treatment.frequence = null;
        treatment.typeFrequence = '';
        treatment.expired = null;
        treatment.info = null;
        console.log(treatment);
        this.treatment.addTreatment(this.userId, treatment).subscribe(function (data) {
            _this.newTreatment = new __WEBPACK_IMPORTED_MODULE_4__shared_models_treatment__["a" /* Treatment */]({});
            _this.getMedicamentList();
            _this.selectedTreatment = null;
        }, function (error) { return console.log(error); });
        this.clean();
    };
    PatientTreatmentComponent.prototype.getMedicName = function (medicName) {
        this.treatment.getMedicamentList(medicName).subscribe(function (data) {
            var medicList = JSON.parse(data);
        }, function (error) { return console.log(error); });
    };
    PatientTreatmentComponent.prototype.eventHandler = function (event) {
        var _this = this;
        if (event !== '') {
            this.treatment.getMedicamentList(event).subscribe(function (data) {
                _this.searchList = JSON.parse(data);
            }, function (error) { return console.log(error); });
        }
    };
    PatientTreatmentComponent.prototype.getTreatmentInfo = function (treatment) {
        var _this = this;
        this.treatment.getTreatmentInfo(treatment.codeCIS).subscribe(function (data) {
            _this.treatmentInfo = JSON.parse(data);
            console.log(_this.treatmentInfo);
        }, function (error) { return console.log(error); });
    };
    PatientTreatmentComponent.prototype.redirect = function (url) {
        window.open(url);
    };
    PatientTreatmentComponent.prototype.getDerivateList = function (substance, medic) {
        var _this = this;
        if (this.oldMedicName == null || this.oldMedicName == '') {
            this.oldMedicName = medic.name;
            var accent = [
                /[\300-\306]/g, /[\340-\346]/g,
                /[\310-\313]/g, /[\350-\353]/g,
                /[\314-\317]/g, /[\354-\357]/g,
                /[\322-\330]/g, /[\362-\370]/g,
                /[\331-\334]/g, /[\371-\374]/g,
                /[\321]/g, /[\361]/g,
                /[\307]/g, /[\347]/g,
            ];
            var noaccent = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u', 'N', 'n', 'C', 'c'];
            for (var i = 0; i < accent.length; i++) {
                substance = substance.replace(accent[i], noaccent[i]);
            }
            if (typeof this.derivateList !== 'undefined' && this.derivateList != null && this.derivateList.length > 0) {
                this.derivateList = [];
            }
            this.treatment.getMedicamentList(substance).subscribe(function (data) {
                _this.derivateList = JSON.parse(data);
            }, function (error) { return console.log(error); });
        }
    };
    PatientTreatmentComponent.prototype.clean = function () {
        this.oldMedicName = '';
        this.derivateList = [];
    };
    PatientTreatmentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-patient-treatment',
            template: __webpack_require__(806),
            styles: [__webpack_require__(783)],
            providers: [__WEBPACK_IMPORTED_MODULE_6__shared_services_users_service__["a" /* UsersService */]],
            inputs: [
                'patient'
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_treatment_service__["a" /* TreatmentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_treatment_service__["a" /* TreatmentService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_services_users_service__["a" /* UsersService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* Router */]) === 'function' && _e) || Object])
    ], PatientTreatmentComponent);
    return PatientTreatmentComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/patient-treatment.component.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_users_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_medical_file_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_doctor_space_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_models_user__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_models_doctor__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_models_consultation__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_models_disponibilite__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_rdv_service__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_util__ = __webpack_require__(1096);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_util__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorRdvComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var DoctorRdvComponent = (function () {
    function DoctorRdvComponent(doctorService, auth, medicalService, userService, rdvService) {
        this.doctorService = doctorService;
        this.auth = auth;
        this.medicalService = medicalService;
        this.userService = userService;
        this.rdvService = rdvService;
        this.thisDate = new Date();
        this.consultations = [];
        this.disponnibilites = [];
    }
    DoctorRdvComponent.prototype.ngOnInit = function () {
        this.detailsRdv = [];
        this.detailsRdv['visible'] = false;
        this.isLogged = this.auth.isLoggedIn();
        this.fetchInformation();
    };
    DoctorRdvComponent.prototype.afterDay = function () {
        this.thisDate = new Date((this.thisDate.getTime()) + 86400000);
        this.prepareData();
    };
    DoctorRdvComponent.prototype.beforeDay = function () {
        this.thisDate = new Date((this.thisDate.getTime()) - 86400000);
        this.prepareData();
    };
    DoctorRdvComponent.prototype.openDetailsRdv = function (user, motif) {
        var myUser = new __WEBPACK_IMPORTED_MODULE_5__shared_models_user__["a" /* User */](user);
        this.detailsRdv['user'] = myUser;
        this.detailsRdv['motif'] = motif;
        this.detailsRdv['visible'] = true;
        console.log(myUser);
    };
    DoctorRdvComponent.prototype.closeDetailsRdv = function () {
        this.detailsRdv = [];
        this.detailsRdv['visible'] = false;
    };
    DoctorRdvComponent.prototype.changeStateOfDay = function (jour, mois, an) {
        var _this = this;
        this.doctorService.getDisponnibiliteOfThisDay(new Date(an, mois - 1, jour, 12, 0, 0), this.meDoctor._id)
            .subscribe(function (dispos) {
            var myDispo = new __WEBPACK_IMPORTED_MODULE_8__shared_models_disponibilite__["a" /* Disponnibilite */](null);
            var modify = false;
            if (dispos[0]) {
                myDispo = new __WEBPACK_IMPORTED_MODULE_8__shared_models_disponibilite__["a" /* Disponnibilite */](dispos[0]);
                modify = true;
            }
            else {
                myDispo.jour = jour;
                myDispo.mois = mois;
                myDispo.an = an;
            }
            myDispo.doctor = _this.meDoctor;
            myDispo.fullDisponnibilite(an, mois, jour);
            // on enleve les horaires correspondants à des rdv
            _this.doctorService.getConsultations(_this.meDoctor._id)
                .subscribe(function (consultations) {
                for (var _i = 0, consultations_1 = consultations; _i < consultations_1.length; _i++) {
                    var consultation = consultations_1[_i];
                    var myConsultation = new __WEBPACK_IMPORTED_MODULE_7__shared_models_consultation__["a" /* Consultation */](consultation);
                    var currentDate = new Date(myConsultation.date);
                    var indexOfDate = _this.rdvService.findIndexOfDate(myDispo.disponnibilite, currentDate);
                    var dateInConsul = _this.rdvService.timeInDispo(currentDate.getHours() + ':' + _this.rdvService.formatageMinute(currentDate.getMinutes()), myDispo);
                    if (dateInConsul !== null && indexOfDate !== -1) {
                        myDispo.disponnibilite.splice(indexOfDate, 1);
                    }
                }
                if (!modify) {
                    _this.doctorService.addDisponnibilite(myDispo)
                        .subscribe(function (resp) {
                        console.log(resp);
                        _this.fetchInformation();
                    });
                }
                else {
                    _this.doctorService.modifyDisponnibilite(myDispo)
                        .subscribe(function (resp) {
                        console.log(resp);
                        _this.fetchInformation();
                    });
                }
            });
        });
    };
    // on test pas s'il y a un rdv avant de changer dispo
    DoctorRdvComponent.prototype.changeState = function (jour, mois, an, time) {
        var _this = this;
        var timeTab = time.split(':');
        var minuteTime = +timeTab[1];
        var hourTime = +timeTab[0];
        this.doctorService.getConsultationOfThisDay(this.meDoctor._id, new Date(an, mois - 1, jour, hourTime, minuteTime, 0))
            .subscribe(function (consultationThisTime) {
            if (consultationThisTime === null) {
            }
            else {
                // on peut changer
                console.log('change state : ' + time + ' date : ' + (new Date(an, mois - 1, jour, 12, 0, 0)).toLocaleString());
                _this.doctorService.getDisponnibiliteOfThisDay(new Date(an, mois - 1, jour, 12, 0, 0), _this.meDoctor._id)
                    .subscribe(function (dispos) {
                    var dispo = dispos[0];
                    if (dispo) {
                        var myDispo = new __WEBPACK_IMPORTED_MODULE_8__shared_models_disponibilite__["a" /* Disponnibilite */](dispo);
                        var dateInDispo = _this.rdvService.timeInDispo(time, myDispo);
                        if (dateInDispo !== null) {
                            // l'horaire etait disponnible, il faut l'enlever
                            var indexOfDate = _this.rdvService.findIndexOfDate(myDispo.disponnibilite, dateInDispo);
                            myDispo.disponnibilite.splice(indexOfDate, 1);
                        }
                        else {
                            // il faut ajouter une nouvelle date
                            var timeTab_1 = time.split(':');
                            var myHour = +timeTab_1[0];
                            var myMinute = +timeTab_1[1];
                            var myNewDate = new Date(an, mois - 1, jour, myHour, myMinute, 0);
                            myDispo.disponnibilite.push(myNewDate);
                        }
                        _this.doctorService.modifyDisponnibilite(myDispo)
                            .subscribe(function (resp) {
                            console.log(resp);
                            _this.fetchInformation();
                        });
                    }
                    else {
                        // la dispo n'existe pas encore pour ce jour, il faut la creer
                        var myNewDispo = new __WEBPACK_IMPORTED_MODULE_8__shared_models_disponibilite__["a" /* Disponnibilite */](null);
                        myNewDispo.doctor = _this.meDoctor;
                        myNewDispo.jour = jour;
                        myNewDispo.mois = mois;
                        myNewDispo.an = an;
                        var timeTab_2 = time.split(':');
                        var myHour = +timeTab_2[0];
                        var myMinute = +timeTab_2[1];
                        myNewDispo.disponnibilite.push(new Date(an, (mois - 1), jour, myHour, myMinute, 0));
                        _this.doctorService.addDisponnibilite(myNewDispo)
                            .subscribe(function (resp) {
                            console.log(resp);
                            _this.fetchInformation();
                        });
                    }
                });
            }
        });
    };
    DoctorRdvComponent.prototype.prepareData = function () {
        console.log('preparing the data');
        this.planningDays = [[], [], [], [], [], [], []];
        var jours = new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
        for (var i = 0; i < 7; i++) {
            var dateUsed = new Date(this.thisDate.getTime() + i * 86400000);
            this.planningDays[i]['jour'] = jours[dateUsed.getDay()];
            this.planningDays[i]['date'] = dateUsed.getDate() + '/' + (dateUsed.getMonth() + 1);
            this.planningDays[i]['numJour'] = dateUsed.getDate();
            this.planningDays[i]['mois'] = (dateUsed.getMonth() + 1);
            this.planningDays[i]['an'] = dateUsed.getFullYear();
            this.planningDays[i]['time'] = []; // a remplir totalement
            this.planningDays[i]['type'] = [];
            this.planningDays[i]['complement'] = [];
            this.planningDays[i]['motif'] = [];
            var dispoOfMyDay = this.rdvService.searchDispo(this.disponnibilites, dateUsed.getDate(), dateUsed.getMonth() + 1, dateUsed.getFullYear());
            if (dispoOfMyDay) {
                for (var _i = 0, _a = dispoOfMyDay.disponnibilite; _i < _a.length; _i++) {
                    var dateOfMyDay = _a[_i];
                    var myDate = new Date(dateOfMyDay);
                    // formatage minute
                    var minutesString_1 = this.rdvService.formatageMinute(myDate.getMinutes());
                    // ajout de la valeur pour affichage
                    this.planningDays[i]['time'].push(myDate.getHours() + ':' + minutesString_1);
                    this.planningDays[i]['type'].push('libre');
                    this.planningDays[i]['complement'].push('');
                    this.planningDays[i]['motif'].push('');
                }
            }
            else {
                console.log('%c dispo of my day not found for the day : ' + dateUsed.getDate() + '/' + (dateUsed.getMonth() + 1), 'color:red;font-weight:bold');
            }
            var rdvOfMyDay = this.rdvService.searchRdv(this.consultations, dateUsed.getDate(), dateUsed.getMonth() + 1, dateUsed.getFullYear());
            if (rdvOfMyDay) {
                for (var _b = 0, rdvOfMyDay_1 = rdvOfMyDay; _b < rdvOfMyDay_1.length; _b++) {
                    var rdv = rdvOfMyDay_1[_b];
                    var myDate = new Date(rdv.date);
                    var minutesString_2 = this.rdvService.formatageMinute(myDate.getMinutes());
                    this.planningDays[i]['time'].push(myDate.getHours() + ':' + minutesString_2);
                    this.planningDays[i]['type'].push('rdv');
                    // this.planningDays[i]['complement'].push(rdv.patient.user_id.first_name + ' ' + rdv.patient.user_id.last_name);
                    this.planningDays[i]['complement'].push(rdv.patient.user_id);
                    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_util__["isNullOrUndefined"])(rdv.motif)) {
                        this.planningDays[i]['motif'].push(rdv.motif);
                    }
                    else {
                        this.planningDays[i]['motif'].push('');
                    }
                }
            }
            // on rempli avec des cases 'occupé'
            var thisHour = 8;
            var thisMinute = 0;
            var minutesString = '';
            while ((this.planningDays[i]['time'].length) < 24) {
                minutesString = this.rdvService.formatageMinute(thisMinute);
                if (!this.rdvService.isInTab(this.planningDays[i]['time'], thisHour.toString() + ':' + minutesString)) {
                    this.planningDays[i]['time'].push(thisHour.toString() + ':' + minutesString);
                    this.planningDays[i]['type'].push('occupe');
                    this.planningDays[i]['complement'].push('');
                    this.planningDays[i]['motif'].push('');
                }
                thisMinute += 30;
                if (thisMinute === 60) {
                    thisMinute = 0;
                    thisHour++;
                }
            }
            this.planningDays[i] = this.rdvService.triBigTab(this.planningDays[i]);
        }
    };
    DoctorRdvComponent.prototype.fetchInformation = function () {
        var _this = this;
        this.consultations = [];
        this.disponnibilites = [];
        this.userService.getProfile()
            .subscribe(function (user) {
            _this.meUser = new __WEBPACK_IMPORTED_MODULE_5__shared_models_user__["a" /* User */](user);
            _this.doctorService.getDoctorByUserId(_this.meUser._id)
                .subscribe(function (doctor) {
                _this.meDoctor = new __WEBPACK_IMPORTED_MODULE_6__shared_models_doctor__["a" /* Doctor */](doctor[0]);
                _this.doctorService.getConsultations(_this.meDoctor._id)
                    .subscribe(function (consultations) {
                    for (var _i = 0, consultations_2 = consultations; _i < consultations_2.length; _i++) {
                        var consult = consultations_2[_i];
                        _this.consultations.push(new __WEBPACK_IMPORTED_MODULE_7__shared_models_consultation__["a" /* Consultation */](consult));
                    }
                    _this.doctorService.getDisponnibiliteOf(_this.meDoctor._id)
                        .subscribe(function (disponnibilites) {
                        for (var _i = 0, disponnibilites_1 = disponnibilites; _i < disponnibilites_1.length; _i++) {
                            var dispo = disponnibilites_1[_i];
                            _this.disponnibilites.push(new __WEBPACK_IMPORTED_MODULE_8__shared_models_disponibilite__["a" /* Disponnibilite */](dispo));
                        }
                        console.log(_this.consultations);
                        console.log(_this.disponnibilites);
                        console.log(_this.meDoctor);
                        _this.prepareData();
                    });
                });
            });
        });
    };
    DoctorRdvComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'app-doctor_rdv',
            template: __webpack_require__(807),
            styles: [__webpack_require__(784)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_doctor_space_service__["a" /* DoctorSpaceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_doctor_space_service__["a" /* DoctorSpaceService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_medical_file_service__["a" /* MedicalFileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_medical_file_service__["a" /* MedicalFileService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__shared_services_users_service__["a" /* UsersService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9__shared_services_rdv_service__["a" /* RdvService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9__shared_services_rdv_service__["a" /* RdvService */]) === 'function' && _e) || Object])
    ], DoctorRdvComponent);
    return DoctorRdvComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/doctor_rdv.component.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home-page',
            template: __webpack_require__(808),
            styles: [__webpack_require__(785)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/home.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_user__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_authentication_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, authentication) {
        this.router = router;
        this.authentication = authentication;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__shared_models_user__["a" /* User */](null);
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    // signin the new user if signup successfully
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authentication.login(this.user)
            .subscribe(function (res) {
            _this.submitted = true;
            _this.authentication.saveToken(res.token);
            _this.router.navigate(['/profile']);
            location.reload();
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login-page',
            template: __webpack_require__(809),
            styles: [__webpack_require__(786)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/login.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_treatment_service__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_user__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_users_service__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentTreatmentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CurrentTreatmentComponent = (function () {
    function CurrentTreatmentComponent(http, treatment, usersService) {
        this.http = http;
        this.treatment = treatment;
        this.usersService = usersService;
        this.treatments = [];
        //this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        //console.log(this.currentUser);
    }
    CurrentTreatmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersService.getProfile()
            .subscribe(function (user) {
            _this.currentUser = new __WEBPACK_IMPORTED_MODULE_4__shared_models_user__["a" /* User */](user);
            _this.getMedicamentList();
        });
    };
    ;
    CurrentTreatmentComponent.prototype.getMedicamentList = function () {
        var _this = this;
        this.treatment.getUserTreatment(this.currentUser._id).subscribe(function (data) {
            _this.treatments = data;
            _this.treatments.forEach(function (element) {
                element.start = new Date(element.start);
                element.end = new Date(element.end);
            });
        }, function (error) { return console.log(error); });
    };
    ;
    CurrentTreatmentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-current-treatment',
            template: __webpack_require__(811),
            styles: [__webpack_require__(788)],
            providers: [__WEBPACK_IMPORTED_MODULE_5__shared_services_users_service__["a" /* UsersService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_treatment_service__["a" /* TreatmentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_treatment_service__["a" /* TreatmentService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_services_users_service__["a" /* UsersService */]) === 'function' && _c) || Object])
    ], CurrentTreatmentComponent);
    return CurrentTreatmentComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/current-treatment.component.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicalFileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MedicalFileComponent = (function () {
    function MedicalFileComponent(authentication) {
        this.authentication = authentication;
    }
    MedicalFileComponent.prototype.ngOnInit = function () {
        this.isLogged = this.authentication.isLoggedIn();
    };
    MedicalFileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-medical-file',
            template: __webpack_require__(813),
            styles: [__webpack_require__(790)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object])
    ], MedicalFileComponent);
    return MedicalFileComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/medical-file.component.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(816)
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/not-found.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_space_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganisationSpaceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrganisationSpaceComponent = (function () {
    function OrganisationSpaceComponent(doctorService, auth) {
        this.doctorService = doctorService;
        this.auth = auth;
    }
    OrganisationSpaceComponent.prototype.ngOnInit = function () {
        this.isLogged = this.auth.isLoggedIn();
    };
    OrganisationSpaceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-organisation-space',
            template: __webpack_require__(817),
            styles: [__webpack_require__(793)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_space_service__["a" /* DoctorSpaceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_space_service__["a" /* DoctorSpaceService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], OrganisationSpaceComponent);
    return OrganisationSpaceComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/organisation-space.component.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_space_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_doctor__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_medical_file_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_users_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_models_user__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_models_consultation__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_models_patient__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_models_disponibilite__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_rdv_service__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_autorisation_service__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_models_log__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_services_log_service__ = __webpack_require__(408);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientRdvComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var PatientRdvComponent = (function () {
    function PatientRdvComponent(doctorService, auth, medicalService, userService, rdvService, autorisationService, logService) {
        this.doctorService = doctorService;
        this.auth = auth;
        this.medicalService = medicalService;
        this.userService = userService;
        this.rdvService = rdvService;
        this.autorisationService = autorisationService;
        this.logService = logService;
        this.myDoctors = [];
        this.reservationBox = [];
    }
    PatientRdvComponent.prototype.ngOnInit = function () {
        this.isLogged = this.auth.isLoggedIn();
        this.fetchInformations();
        this.thisDate = new Date();
        this.reservationBox['open'] = 'false';
    };
    PatientRdvComponent.prototype.afterDay = function () {
        this.thisDate = new Date((this.thisDate.getTime()) + 86400000);
        this.openDetails(this.doctorDetails['id']);
    };
    PatientRdvComponent.prototype.beforeDay = function () {
        this.thisDate = new Date((this.thisDate.getTime()) - 86400000);
        this.openDetails(this.doctorDetails['id']);
    };
    PatientRdvComponent.prototype.openReservationBox = function (jour, mois, an, time) {
        this.reservationBox['jour'] = jour.toString();
        this.reservationBox['mois'] = mois.toString();
        this.reservationBox['an'] = an.toString();
        this.reservationBox['time'] = time;
        this.reservationBox['open'] = 'true';
    };
    PatientRdvComponent.prototype.closeReservationBox = function () {
        this.reservationBox['open'] = 'false';
        this.motif = '';
    };
    PatientRdvComponent.prototype.reserver = function () {
        var _this = this;
        console.log(this.motif);
        var jour = this.reservationBox['jour'];
        var mois = this.reservationBox['mois'];
        var an = this.reservationBox['an'];
        var time = this.reservationBox['time'];
        var horaire = time.split(':');
        var minute = +horaire[1]; // conversion number
        var heure = +horaire[0]; // conversion number
        var consultation = new __WEBPACK_IMPORTED_MODULE_7__shared_models_consultation__["a" /* Consultation */](null);
        this.doctorService.getPatientByUserId(this.me._id)
            .subscribe(function (myPatient) {
            _this.doctorService.getDoctorByUserId(_this.doctorDetails['id'])
                .subscribe(function (myDoctor) {
                consultation.doctor = new __WEBPACK_IMPORTED_MODULE_3__shared_models_doctor__["a" /* Doctor */](myDoctor[0]);
                consultation.patient = new __WEBPACK_IMPORTED_MODULE_8__shared_models_patient__["a" /* Patient */](myPatient[0]);
                consultation.motif = _this.motif;
                consultation.date = new Date(an, mois - 1, jour, heure, minute, 0);
                _this.doctorService.addConsultation(consultation)
                    .subscribe(function (resp) {
                    console.log(resp);
                    _this.motif = '';
                    _this.reservationBox['open'] = 'false';
                    // log de reservation
                    var log = new __WEBPACK_IMPORTED_MODULE_12__shared_models_log__["a" /* Log */](null);
                    log.severity = 1;
                    log.user = new __WEBPACK_IMPORTED_MODULE_6__shared_models_user__["a" /* User */](_this.me);
                    log.action = 'Reservation';
                    _this.logService.addLog(log)
                        .subscribe(function (resp) {
                        console.log(resp);
                    });
                    // modifier le truc disponnibilite
                    _this.doctorService.getDisponnibiliteOfThisDay(new Date(an, mois - 1, jour, heure, minute, 0), (new __WEBPACK_IMPORTED_MODULE_3__shared_models_doctor__["a" /* Doctor */](myDoctor[0]))._id)
                        .subscribe(function (dispo) {
                        var myDispo = new __WEBPACK_IMPORTED_MODULE_9__shared_models_disponibilite__["a" /* Disponnibilite */](dispo[0]);
                        // formatage minute
                        var minutesString = _this.rdvService.formatageMinute(minute);
                        var dateInDispo = _this.rdvService.timeInDispo(heure + ':' + minutesString, myDispo);
                        if (dateInDispo !== null) {
                            console.log(dateInDispo.toLocaleString());
                            var indexOfDate = _this.rdvService.findIndexOfDate(myDispo.disponnibilite, dateInDispo); // BUG ICI : index=-1
                            myDispo.disponnibilite.splice(indexOfDate, 1); // on enleve le mauvais /!\
                            _this.doctorService.modifyDisponnibilite(myDispo)
                                .subscribe(function (resp) {
                                console.log(resp);
                                _this.openDetails(_this.doctorDetails['id']);
                            });
                        }
                    });
                });
            });
        });
    };
    // fetch my account and all the doctors link to me
    PatientRdvComponent.prototype.fetchInformations = function () {
        var _this = this;
        this.userService.getProfile()
            .subscribe(function (me) {
            if (me) {
                _this.me = me;
                _this.autorisationService.getRdvAutorisation(_this.me._id)
                    .subscribe(function (autorisations) {
                    for (var _i = 0, autorisations_1 = autorisations; _i < autorisations_1.length; _i++) {
                        var aut = autorisations_1[_i];
                        var add = true;
                        for (var _a = 0, _b = _this.myDoctors; _a < _b.length; _a++) {
                            var doctor = _b[_a];
                            if (doctor._id === aut.observer._id) {
                                add = false;
                            }
                        }
                        if (add) {
                            _this.myDoctors.push(aut.observer);
                        }
                    }
                });
            }
        });
    };
    PatientRdvComponent.prototype.openDetails = function (doctor_id) {
        var _this = this;
        // open the details for the rdv
        this.doctorDetails = [];
        this.medicalService.getUserById(doctor_id)
            .subscribe(function (user) {
            _this.doctorDetails['description'] = 'Description of the medecin : ' + user.first_name;
            _this.doctorDetails['id'] = doctor_id;
        });
        // on recupere toutes les consultation du doctor
        this.doctorService.getDoctorByUserId(doctor_id)
            .subscribe(function (doctor) {
            console.log(doctor);
            _this.userService.getProfile()
                .subscribe(function (meUser) {
                console.log(meUser);
                // fetch all consultations of the doctor selected
                _this.doctorService.getConsultations(doctor[0]._id)
                    .subscribe(function (consultations) {
                    // a ce moment on a les consultations du doctor
                    // il faut modifier les horaires non disponible
                    console.log(consultations);
                    var dateNow = _this.thisDate;
                    _this.planningDays = [[], [], [], [], [], [], []];
                    var jours = new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
                    // il faut generer les crenaux horaires
                    // il suffit de recuperer les 'disponnibilite' pour chaque jour
                    _this.doctorService.getDisponnibiliteOf(doctor[0]._id)
                        .subscribe(function (dispos) {
                        for (var i = 0; i < 7; i++) {
                            // on ajoute 24 heure pour avoir lendemain
                            var dateUsed = new Date(dateNow.getTime() + i * 86400000);
                            _this.planningDays[i]['jour'] = jours[dateUsed.getDay()];
                            _this.planningDays[i]['date'] = dateUsed.getDate() + '/' + (dateUsed.getMonth() + 1);
                            _this.planningDays[i]['numJour'] = dateUsed.getDate();
                            _this.planningDays[i]['mois'] = (dateUsed.getMonth() + 1);
                            _this.planningDays[i]['an'] = dateUsed.getFullYear();
                            _this.planningDays[i]['time'] = [];
                            _this.planningDays[i]['type'] = [];
                            _this.planningDays[i]['complement'] = [];
                            _this.planningDays[i]['motif'] = [];
                            // il faut rechercher dans la liste de dispo l'entrée correspondant à notre jour
                            var dispoOfMyDay = _this.rdvService.searchDispo(dispos, dateUsed.getDate(), dateUsed.getMonth() + 1, dateUsed.getFullYear());
                            if (dispoOfMyDay) {
                                for (var _i = 0, _a = dispoOfMyDay.disponnibilite; _i < _a.length; _i++) {
                                    var dateOfMyDay = _a[_i];
                                    var myDate = new Date(dateOfMyDay);
                                    // formatage minute
                                    var minutesString = _this.rdvService.formatageMinute(myDate.getMinutes());
                                    // ajout de la valeur pour affichage
                                    _this.planningDays[i]['time'].push(myDate.getHours() + ':' + minutesString);
                                    _this.planningDays[i]['type'].push('');
                                    _this.planningDays[i]['complement'].push('');
                                    _this.planningDays[i]['motif'].push('');
                                }
                            }
                            else {
                                console.log('%c dispo of my day not found for the day : ' + dateUsed.getDate() + '/' + (dateUsed.getMonth() + 1), 'color:red; font-weight:bold');
                            }
                            _this.planningDays[i] = _this.rdvService.triBigTab(_this.planningDays[i]);
                        }
                    });
                });
            });
        });
    };
    PatientRdvComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-patient_rdv',
            template: __webpack_require__(819),
            styles: [__webpack_require__(795)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_space_service__["a" /* DoctorSpaceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_space_service__["a" /* DoctorSpaceService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_medical_file_service__["a" /* MedicalFileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_medical_file_service__["a" /* MedicalFileService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_services_users_service__["a" /* UsersService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_10__shared_services_rdv_service__["a" /* RdvService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_10__shared_services_rdv_service__["a" /* RdvService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_11__shared_services_autorisation_service__["a" /* AutorisationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_11__shared_services_autorisation_service__["a" /* AutorisationService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_13__shared_services_log_service__["a" /* LogService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_13__shared_services_log_service__["a" /* LogService */]) === 'function' && _g) || Object])
    ], PatientRdvComponent);
    return PatientRdvComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/patient_rdv.component.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_users_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_user__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(authentication, usersService) {
        this.authentication = authentication;
        this.usersService = usersService;
        this.image = __webpack_require__(485);
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.isLogged = this.authentication.isLoggedIn();
        if (this.isLogged) {
            this.getProfile();
        }
    };
    ProfileComponent.prototype.getProfile = function () {
        var _this = this;
        this.usersService.getProfile()
            .subscribe(function (user) {
            _this.user = new __WEBPACK_IMPORTED_MODULE_3__shared_models_user__["a" /* User */](user);
            console.log(_this.user);
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(821),
            styles: [__webpack_require__(797)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_users_service__["a" /* UsersService */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/profile.component.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_users_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_user__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_patient__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_medical_file_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_models_autorisation__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_autorisation_service__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_mail_service__ = __webpack_require__(409);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SettingsComponent = (function () {
    function SettingsComponent(authentication, usersService, medicalService, autorisationService, mailService) {
        this.authentication = authentication;
        this.usersService = usersService;
        this.medicalService = medicalService;
        this.autorisationService = autorisationService;
        this.mailService = mailService;
        this.doctors = [];
        this.autorisations = [];
        this.addAutorisationForm = [];
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.patient = new __WEBPACK_IMPORTED_MODULE_4__shared_models_patient__["a" /* Patient */](null);
        this.user = new __WEBPACK_IMPORTED_MODULE_3__shared_models_user__["a" /* User */](null);
        this.loadAllDoctors();
        this.isLogged = this.authentication.isLoggedIn();
        if (this.isLogged) {
            this.getInformations();
        }
    };
    SettingsComponent.prototype.sendTestMail = function () {
        console.log('sending test email ... ');
        this.mailService.sendTestMail()
            .subscribe(function (response) {
            console.log(response);
        });
    };
    SettingsComponent.prototype.sendPersoMail = function (to, subject, text) {
        console.log('sending test email ... ');
        this.mailService.sendMail(to, subject, text)
            .subscribe(function (resp) {
            console.log(resp);
        });
    };
    SettingsComponent.prototype.getInformations = function () {
        var _this = this;
        this.usersService.getProfile()
            .subscribe(function (user) {
            _this.user = new __WEBPACK_IMPORTED_MODULE_3__shared_models_user__["a" /* User */](user);
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
            console.log('this patient : ', patient);
            _this.patient = new __WEBPACK_IMPORTED_MODULE_4__shared_models_patient__["a" /* Patient */](patient);
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
        this.newAutorisation = new __WEBPACK_IMPORTED_MODULE_6__shared_models_autorisation__["a" /* Autorisation */](null);
        this.medicalService.getUserByEmail(this.addAutorisationForm['email'])
            .subscribe(function (observer) {
            if (observer) {
                _this.newAutorisation.user = _this.user;
                _this.newAutorisation.observer = new __WEBPACK_IMPORTED_MODULE_3__shared_models_user__["a" /* User */](observer);
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
                        _this.newAutorisation.observer = _this.user;
                        _this.newAutorisation.user = new __WEBPACK_IMPORTED_MODULE_3__shared_models_user__["a" /* User */](observer);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(822),
            styles: [__webpack_require__(798)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_users_service__["a" /* UsersService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_medical_file_service__["a" /* MedicalFileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_services_medical_file_service__["a" /* MedicalFileService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_autorisation_service__["a" /* AutorisationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__shared_services_autorisation_service__["a" /* AutorisationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__shared_services_mail_service__["a" /* MailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__shared_services_mail_service__["a" /* MailService */]) === 'function' && _e) || Object])
    ], SettingsComponent);
    return SettingsComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/settings.component.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_user__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    //private base64textString:string;
    function RegisterComponent(router, authentication) {
        this.router = router;
        this.authentication = authentication;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__shared_models_user__["a" /* User */](null);
        this.submitted = true;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    /*handleFileSelect(evt){
      var files = evt.target.files;
      var file = files[0];
  
      if (files && file) {
        var reader = new FileReader();
        reader.onload =this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(file);
        console.log(file);
      }
    }
  
    _handleReaderLoaded(readerEvt) {
      var binaryString = readerEvt.target.result;
      this.base64textString= btoa(binaryString);
    }*/
    // signin the new user if signup successfully
    RegisterComponent.prototype.login = function (email, password) {
        var _this = this;
        this.user.password = password;
        this.user.email = email;
        this.authentication.login(this.user)
            .subscribe(function (res) {
            _this.submitted = true;
            _this.authentication.saveToken(res.token);
            _this.router.navigate(['/profile']);
            location.reload();
        });
    };
    // create the new user
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.authentication.register(this.user)
            .subscribe(function (res) {
            _this.submitted = true;
            _this.login(_this.user.email, _this.user.password);
            _this.router.navigate(['/profile']);
            location.reload();
        });
        this.submitted = false;
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(823),
            styles: [__webpack_require__(799)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/register.component.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Address; });
/**
 * Created by ISEN on 11/04/2017.
 */
var Address = (function () {
    function Address(AdressInfo) {
        // console.log("AdressInfo : ", AdressInfo);
        if (AdressInfo) {
            this._id = AdressInfo._id;
            this.num = AdressInfo.num;
            this.street_address = AdressInfo.street_address;
            this.city = AdressInfo.city;
            this.postal_code = AdressInfo.postal_code;
            this.country = AdressInfo.country;
            this.latitude = AdressInfo.latitude;
            this.longitude = AdressInfo.longitude;
            this.precision = AdressInfo.precision;
        }
        else {
            this._id = "";
            this.num = 0;
            this.street_address = "";
            this.city = "";
            this.postal_code = 0;
            this.country = "France";
            this.latitude = 0;
            this.longitude = 0;
            this.precision = false;
        }
    }
    return Address;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/address.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Autorisation; });

var Autorisation = (function () {
    function Autorisation(autorisationInfo) {
        this.subjectList = ['POST', 'DOSSIER', 'RDV'];
        this.typeList = ['READ', 'READ_WRITE'];
        if (autorisationInfo) {
            this.user = new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */](autorisationInfo.user);
            this.observer = new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */](autorisationInfo.observer);
            if (autorisationInfo.type && autorisationInfo.subject) {
                if (this.typeList.indexOf(autorisationInfo.type) !== -1 && this.subjectList.indexOf(autorisationInfo.subject) !== -1) {
                    console.log('type & subject valid');
                    this.type = autorisationInfo.type;
                    this.subject = autorisationInfo.subject;
                }
            }
            this.Created_at = autorisationInfo.Created_at;
            this.valide = autorisationInfo.valide;
        }
        else {
            this.user = new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */](null);
            this.observer = new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */](null);
            this.type = 'READ';
            this.subject = 'POST';
            this.valide = true;
        }
    }
    return Autorisation;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/autorisation.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__patient__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__doctor__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Consultation; });


var Consultation = (function () {
    function Consultation(consultationInfo) {
        if (consultationInfo) {
            this._id = consultationInfo._id;
            this.doctor = new __WEBPACK_IMPORTED_MODULE_1__doctor__["a" /* Doctor */](consultationInfo.doctor);
            this.patient = new __WEBPACK_IMPORTED_MODULE_0__patient__["a" /* Patient */](consultationInfo.patient);
            this.date = consultationInfo.date;
            this.motif = consultationInfo.motif;
        }
        else {
            this.doctor = new __WEBPACK_IMPORTED_MODULE_1__doctor__["a" /* Doctor */](null);
            this.patient = new __WEBPACK_IMPORTED_MODULE_0__patient__["a" /* Patient */](null);
            this.date = null;
            this.motif = '';
        }
    }
    return Consultation;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/consultation.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__doctor__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Disponnibilite; });

var Disponnibilite = (function () {
    function Disponnibilite(consultationInfo) {
        this.disponnibilite = [];
        if (consultationInfo) {
            this._id = consultationInfo._id;
            this.jour = consultationInfo.jour;
            this.mois = consultationInfo.mois;
            this.an = consultationInfo.an;
            this.doctor = new __WEBPACK_IMPORTED_MODULE_0__doctor__["a" /* Doctor */](consultationInfo.doctor);
            if (consultationInfo.disponnibilite) {
                for (var _i = 0, _a = consultationInfo.disponnibilite; _i < _a.length; _i++) {
                    var date = _a[_i];
                    this.disponnibilite.push(date);
                }
            }
        }
        else {
            this.doctor = new __WEBPACK_IMPORTED_MODULE_0__doctor__["a" /* Doctor */](null);
        }
    }
    Disponnibilite.prototype.fullDisponnibilite = function (an, mois, jour) {
        var hours = 8;
        var minutes = 0;
        this.disponnibilite = [];
        while (hours < 20) {
            var currentDate = new Date(an, mois - 1, jour, hours, minutes, 0);
            this.disponnibilite.push(currentDate);
            minutes += 30;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    };
    return Disponnibilite;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/disponibilite.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TypePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });

var TypePost;
(function (TypePost) {
    TypePost[TypePost["INFO"] = 'INFO'] = "INFO";
    TypePost[TypePost["ALERT"] = 'ALERT'] = "ALERT";
    TypePost[TypePost["POST"] = 'POST'] = "POST";
    TypePost[TypePost["TREATMENT"] = 'TREATMENT'] = "TREATMENT";
})(TypePost || (TypePost = {}));
;
var Post = (function () {
    // lle type de post ne fonctionne pas
    function Post(postInfo) {
        if (postInfo) {
            this._id = postInfo._id;
            this.sender = new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */](postInfo.sender);
            this.receiver = new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */](postInfo.receiver);
            this.text = postInfo.text;
            this.type = postInfo.type;
        }
        else {
            this.sender = new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */](null);
            this.receiver = new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */](null);
            this.text = '';
            this.Created_at = null;
        }
    }
    return Post;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/post.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorSearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DoctorSearchService = (function () {
    function DoctorSearchService(http, authentication) {
        this.http = http;
        this.authentication = authentication;
    }
    DoctorSearchService.prototype.getSearchDoctor = function (city) {
        return this.http.get('https://localhost:3000/api/searchDoctor/' + city, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    DoctorSearchService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], DoctorSearchService);
    return DoctorSearchService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/doctor-search.service.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogService = (function () {
    function LogService(http, authentication) {
        this.http = http;
        this.authentication = authentication;
        this.url = 'https://localhost:3000/api/';
    }
    LogService.prototype.addLog = function (log) {
        return this.http.post(this.url + 'log/', log, this.authentication.getRequestOptions())
            .map(function (res) { return res; });
    };
    LogService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], LogService);
    return LogService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/log.service.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MailService = (function () {
    function MailService(http, authentication) {
        this.http = http;
        this.authentication = authentication;
        this.url = 'https://localhost:3000/api/';
    }
    MailService.prototype.sendTestMail = function () {
        console.log('From mailService : we call the API to send the mail.');
        return this.http.post(this.url + 'mail/test/', 'var useless', this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    MailService.prototype.sendMail = function (to, subject, text) {
        console.log('From mailService : sending a mail.');
        return this.http.post(this.url + 'mail/', { to: to, subject: subject, text: text }, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    MailService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], MailService);
    return MailService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/mail.service.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_users_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = (function () {
    function UsersComponent(usersService, router) {
        this.usersService = usersService;
        this.router = router;
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    UsersComponent.prototype.deleteUser = function (id) {
        this.usersService.deleteUser(id)
            .subscribe(function (data) { });
    };
    UsersComponent.prototype.deleteAddress = function (id) {
        this.usersService.deleteAddress(id)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    UsersComponent.prototype.buttonDelete = function (user) {
        this.deleteAddress(user.address._id);
        this.deleteUser(user._id);
        this.loadAllUsers();
    };
    UsersComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.usersService.getUsers().subscribe(function (users) { _this.users = users; });
    };
    UsersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'users-page',
            template: __webpack_require__(824),
            styles: [__webpack_require__(800)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_users_service__["a" /* UsersService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_users_service__["a" /* UsersService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _b) || Object])
    ], UsersComponent);
    return UsersComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/users.js.map

/***/ }),

/***/ 485:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgA3ADcAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A+t+lGaKBQAUZoooAM0Zoo6UAFFFFACmkoooAKWkooABRRRQAtJS0lABRRS0AGaSjNFABS0lLQAlFFFABQaKM0AFFFGaAA0UGgCgAooxRQACiiigAooIooAKOtFAoAKKKKACiig0ALSUUUAFFFGKACiiigAooooADRRRQAdqKMUdBQAUYoooAKKKKACiiigAooxRQAUUYooAMUUUUALSVc0vSLzWbkQWVu88h67RwPcntXoWi/B4ACTVLs5/54239WI/pQB5jRivfbHwNoWnqBHpsLkfxTDzD+ua1E0uzjGEtIFHoIgKAPm+ivou40DTLoETafayf70K5/lXP6p8LtEvwTDHJZSHo0Lcfkc/pigDxMUvSuv8AEPwy1TRUeaAC/thzmIfOB7r/AIZrjyMcEYoAWkoooAKWkooAKBRRQAvSikooAKWkowaACiiigAooooAKKKKACig0UAFdP4N8EXPimfzGJgsEOHmxyx/ur7/yql4T8NS+J9XS2XKwr880n91f8T0Fe82NlBptpFbW0YjgjG1VHYUARaTo9nolottZwLDGOuOrH1J7mrtFFABRmijNABSZpaKADNcb4y+Hlrr8b3VmFttQxnIGFk/3vf3rsqPwoA+ary0m0+5kt7iNoZ4ztZGHINQ17T8RPBy69YteWqAahAueP+Wij+H6+n5V4tgjjoaACjNFFABS0lFABmjNFBoABQKKKACiiigAooooAXNJR2ooAKKK1PDGm/2x4gsbQjKSSjeP9kcn9AaAPX/h54fXQvD8TOmLq6AllyOR/dH4D+ddRSAYGAMAUUAL+FFJS4oAKM0fhRQAUUUYoAOlH4UUmKAFrxL4l+H10TXzLCm22uwZV9A2fmH9fxr2z8K474qaWL3ww04GZLVxID3weD/MH8KAPFs0UUUAGaKKKACiijFABRmijmgAoopaAEoooFABRRRQAV2fwntxN4sDkZ8qB3Ht0X/2auMruPhC4TxRMD/FauB/30h/pQB7HzSUtFACUtFFACc0tHSigA5o5oo7UAFFFFABWZ4mtxdeHdTiIzutpMfXacVp1S1xxFouoOei28hP/fJoA+cetFFFABRRRQAUGiigApfwpKMZoAKMUUCgAooozQACiiigAIro/h7fDT/F1gzHCSMYj/wIED9cVzlPilaCVJEJV0YMpHYjmgD6YoxVDQdVTW9HtL1OBKgJA7N0I/PNX8UAFFHejFABRRR2oAKKKKACijvRQAVzvxAvxYeEtQbOGlTyV99xwf0zXRV5b8YdaEk1ppaNnZ++l+p4Uflk/iKAPNsUYoooAMUUUdKACiiigAoxRSigApBRRQAUUCigAopaKAENFFFAHffC3xUum3jaXdPtt7hsxMx4V/T8f5167XzKCQQR1HcV658P/iAmpxx6dqMgW8X5Y5W6Sj0P+1/OgDvs0UlL/OgAzRmikoAWiiigAooqrqWpW2k2cl1dyrDCg5Zu/sPU0AQ69rcHh/S5r24PyoPlXPLt2UV8+6lqE2q3893OxaWZizEn9B7DpWz4z8XzeKr/AHYMVnGSIYT/AOhH3Nc7QAUUUUAHSgGgmigAoNFFABRR0ozQAUtJS0AJRR1ooAKO9FFABRig0GgAoGcgjg+1bfhvwhqHiebbbR7IFOHuJOEX/E+wr1jw78PdL0AJIYxd3Y6zTDOD/sr0H8/egDI+H2r+I7iOOG9snnsgAFupjscD8fvD/Oa7+kpaADFHWjqKKACiiigCrqdxc21lJJaWv2ycD5Yt4TP4mvDfGGq6zqWof8TeOS3K/cgKlUX6Dv8AWvfKq6hplpq1uYby3juIj/C4zj6elAHzdRXpHij4TvCHuNGYyIOTayH5v+Anv9DXnMsLwSNHIjRyKcMrDBB9xQA2iiigAoooNABRRRQAUCgUlAC0UUUAFFFFABRRQaACu38D/DyTXSl7fhobDOVTo0v09B70fD3wN/bswv71CLCJvlQj/XMO30HevY1UIqqoCqOAAOBQBHa2kNlAkEEaxRIMKiDAAqWikoAXFFGKKADFFHaigAooooAKKKKACuY8X+BrTxPCZFAt79R8kwH3vZvUV09FAHzfqml3OjXslrdxGKZDyD0I9R6iqnSvfPGHhK38VWGxsR3ceTDNjofQ+xrwq+sZ9Mu5bW5jMU0TbWU9qAIDQaMcUUAFBo70UAFGaKMUAFFLSUAHaiiigArc8H+GZPFGrpbjK26fPNIP4V/xPQViKpdgqjJJwABXvPgfw2PDWhxxOoF3L+8mP+16fh/jQBuWtrFZW0dvBGI4Y1Coi9ABUtFFAAaKCaKADvRRnFFABRR60ZoAKKKKACiiigAooooADXEfErwgNasDqFsmb63X5gvWRPT6jtXb5o9qAPmTpRXW/Ejwz/YOtGeFMWd0S6Y6K38S/rn8a5LtQAYoNFBoAKKKKACiiloASjpRRQB2Hwx0Eav4gFxIu63sx5h44L/wj+Z/Cva81ynw00YaV4YhkZcTXR85vofuj8ufxrq6AE7UtFFABRRRQAlLRRQAlLzRRigAooooAKKKKACiiigA70UUUAYPjbQh4g8PXEAXdOg82HHXcO348j8a8CIIJBHPpX03Xg3j/Rxovie6jRdsMp86PHo3UfnkUAc7zRRQaACjmjrQP880AFLSUUAHWrWl2TalqVrar96aRY/zOKq11nwwsftfi63YjKwI0p/LA/UigD2yGJYIkjQbURQqj0A6U+iigA6UUlLQAn40tFFACUtFFAB1ooooAKKKKACiiigAooooAKKKDQAV5x8ZNND2djfgfNG5iYj0IyP5H869HrnfiBZfb/COoKBlkQSj/gJB/lmgDwaiig0AAooozQAUUDvQKACvRfgzb7tQ1GfHKRKn5kn/ANlrzrsK9T+DCgWuqN3Lxj8g1AHpFJRmlFABRSUvpQAUUGgUAHeijvR2oAKKD3oxgUAFFAo7UAFFFB4oAKKMUZ60AFFBooAKralb/a9OuoSM+ZEyfmCKs4o60AfMhHNFS3aBLuZR0DkD86ixmgAox7UUuKAP/9k="

/***/ }),

/***/ 486:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 486;


/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(606);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/main.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersService = (function () {
    function UsersService(http, authentication) {
        this.http = http;
        this.authentication = authentication;
        this.url = 'https://localhost:3000/api/';
    }
    // Get all users from the API
    UsersService.prototype.getUsers = function () {
        return this.http.get(this.url + 'users', this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.getUser = function (id) {
        return this.http.get('https://localhost:3000/api/user/' + id, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.deleteUser = function (id) {
        if (this.authentication.currentUserId() === id) {
            this.authentication.logout();
        }
        return this.http.delete(this.url + 'users/' + id, this.authentication.getRequestOptions())
            .map(function (res) { return console.log("Users Service : delete user code : " + res); });
    };
    UsersService.prototype.deleteAddress = function (id) {
        return this.http.delete(this.url + 'addresses/' + id, this.authentication.getRequestOptions())
            .map(function (res) { return console.log("Users Service : delete address code : " + res); });
    };
    UsersService.prototype.getProfile = function () {
        return this.http.get(this.url + 'profile', this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.getAddressById = function (id) {
        return this.http.get(this.url + 'addresses/' + id, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.getAddresses = function () {
        return this.http.get(this.url + 'addresses', this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.getDoctors = function () {
        return this.http.get(this.url + 'doctors', this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    UsersService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], UsersService);
    return UsersService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/users.service.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_users_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__users_users__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__post_post_component__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__not_found_not_found__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__register_register_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_services_authentication_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_services_treatment_service__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__profile_profile_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng_trim_value_accessor__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__medical_file_medical_file_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__medical_file_doctor_profile_doctor_profile_component__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__medical_file_current_treatment_current_treatment_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_services_medical_file_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__profile_settings_settings_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__medical_file_calendar_calendar_component__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__medical_file_reminder_reminder_component__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__doctor_space_doctor_space_component__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__building_space_building_space_component__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__shared_services_doctor_space_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__patient_rdv_google_map_google_map_component__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angular2_google_maps_core__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__medical_file_posts_posts_component__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__organisation_space_organisation_space_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__doctor_space_patient_treatment_patient_treatment_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__patient_rdv_patient_rdv_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__doctor_rdv_doctor_rdv_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__shared_services_rdv_service__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__shared_services_doctor_search_service__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__shared_services_autorisation_service__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__shared_services_mail_service__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__shared_services_log_service__ = __webpack_require__(408);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__contact_contact__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_8__about_about__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__users_users__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__not_found_not_found__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_14__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_19__medical_file_medical_file_component__["a" /* MedicalFileComponent */],
                __WEBPACK_IMPORTED_MODULE_20__medical_file_doctor_profile_doctor_profile_component__["a" /* DoctorProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_21__medical_file_current_treatment_current_treatment_component__["a" /* CurrentTreatmentComponent */],
                __WEBPACK_IMPORTED_MODULE_33__doctor_space_patient_treatment_patient_treatment_component__["a" /* PatientTreatmentComponent */],
                __WEBPACK_IMPORTED_MODULE_23__profile_settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__medical_file_calendar_calendar_component__["a" /* CalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_25__medical_file_reminder_reminder_component__["a" /* ReminderComponent */],
                __WEBPACK_IMPORTED_MODULE_26__doctor_space_doctor_space_component__["a" /* DoctorSpaceComponent */],
                __WEBPACK_IMPORTED_MODULE_27__building_space_building_space_component__["a" /* BuildingSpaceComponent */],
                __WEBPACK_IMPORTED_MODULE_11__post_post_component__["a" /* PostComponent */],
                __WEBPACK_IMPORTED_MODULE_34__patient_rdv_patient_rdv_component__["a" /* PatientRdvComponent */],
                __WEBPACK_IMPORTED_MODULE_35__doctor_rdv_doctor_rdv_component__["a" /* DoctorRdvComponent */],
                __WEBPACK_IMPORTED_MODULE_32__organisation_space_organisation_space_component__["a" /* OrganisationSpaceComponent */],
                __WEBPACK_IMPORTED_MODULE_29__patient_rdv_google_map_google_map_component__["a" /* GoogleMapComponent */],
                __WEBPACK_IMPORTED_MODULE_31__medical_file_posts_posts_component__["a" /* PostsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13__app_routing__["a" /* appRouting */],
                __WEBPACK_IMPORTED_MODULE_18_ng_trim_value_accessor__["a" /* TrimValueAccessorModule */],
                __WEBPACK_IMPORTED_MODULE_30_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDVDZy1qXBBu6ctMvyYcSONy3-cs5PjYNU'
                })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__shared_services_users_service__["a" /* UsersService */],
                __WEBPACK_IMPORTED_MODULE_15__shared_services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_22__shared_services_medical_file_service__["a" /* MedicalFileService */],
                __WEBPACK_IMPORTED_MODULE_28__shared_services_doctor_space_service__["a" /* DoctorSpaceService */],
                __WEBPACK_IMPORTED_MODULE_16__shared_services_treatment_service__["a" /* TreatmentService */],
                __WEBPACK_IMPORTED_MODULE_37__shared_services_doctor_search_service__["a" /* DoctorSearchService */],
                __WEBPACK_IMPORTED_MODULE_36__shared_services_rdv_service__["a" /* RdvService */],
                __WEBPACK_IMPORTED_MODULE_38__shared_services_autorisation_service__["a" /* AutorisationService */],
                __WEBPACK_IMPORTED_MODULE_39__shared_services_mail_service__["a" /* MailService */],
                __WEBPACK_IMPORTED_MODULE_40__shared_services_log_service__["a" /* LogService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/app.module.js.map

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_users__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__not_found_not_found__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__medical_file_medical_file_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_settings_settings_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__doctor_space_doctor_space_component__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__building_space_building_space_component__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__organisation_space_organisation_space_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__doctor_space_patient_treatment_patient_treatment_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__medical_file_current_treatment_current_treatment_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__patient_rdv_patient_rdv_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__doctor_rdv_doctor_rdv_component__ = __webpack_require__(391);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRouting; });



















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_4__contact_contact__["a" /* ContactComponent */] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_3__users_users__["a" /* UsersComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_7__register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'medical-file', component: __WEBPACK_IMPORTED_MODULE_10__medical_file_medical_file_component__["a" /* MedicalFileComponent */] },
    { path: 'doctor-space', component: __WEBPACK_IMPORTED_MODULE_12__doctor_space_doctor_space_component__["a" /* DoctorSpaceComponent */] },
    { path: 'current-treatment', component: __WEBPACK_IMPORTED_MODULE_16__medical_file_current_treatment_current_treatment_component__["a" /* CurrentTreatmentComponent */] },
    { path: 'patient-treatment', component: __WEBPACK_IMPORTED_MODULE_15__doctor_space_patient_treatment_patient_treatment_component__["a" /* PatientTreatmentComponent */] },
    { path: 'building-space', component: __WEBPACK_IMPORTED_MODULE_13__building_space_building_space_component__["a" /* BuildingSpaceComponent */] },
    { path: 'organisation-space', component: __WEBPACK_IMPORTED_MODULE_14__organisation_space_organisation_space_component__["a" /* OrganisationSpaceComponent */] },
    { path: 'patient_rdv', component: __WEBPACK_IMPORTED_MODULE_17__patient_rdv_patient_rdv_component__["a" /* PatientRdvComponent */] },
    { path: 'doctor_rdv', component: __WEBPACK_IMPORTED_MODULE_18__doctor_rdv_doctor_rdv_component__["a" /* DoctorRdvComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_11__profile_settings_settings_component__["a" /* SettingsComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__not_found_not_found__["a" /* NotFoundComponent */] }
];
var appRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/app.routing.js.map

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarComponent = (function () {
    function CalendarComponent() {
    }
    CalendarComponent.prototype.ngOnInit = function () {
    };
    CalendarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(810),
            styles: [__webpack_require__(787)]
        }), 
        __metadata('design:paramtypes', [])
    ], CalendarComponent);
    return CalendarComponent;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/calendar.component.js.map

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_medical_file_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_patient__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_authentication_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DoctorProfileComponent = (function () {
    function DoctorProfileComponent(medicalfile, authentication) {
        this.medicalfile = medicalfile;
        this.authentication = authentication;
        this.image = __webpack_require__(485);
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
            _this.patient = new __WEBPACK_IMPORTED_MODULE_2__shared_models_patient__["a" /* Patient */](pat);
        });
    };
    DoctorProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-doctor-profile',
            template: __webpack_require__(812),
            styles: [__webpack_require__(789)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_medical_file_service__["a" /* MedicalFileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_medical_file_service__["a" /* MedicalFileService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], DoctorProfileComponent);
    return DoctorProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/doctor-profile.component.js.map

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_medical_file_service__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostsComponent = (function () {
    function PostsComponent(medicalService) {
        this.medicalService = medicalService;
    }
    PostsComponent.prototype.ngOnInit = function () {
    };
    PostsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(814),
            styles: [__webpack_require__(791)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_medical_file_service__["a" /* MedicalFileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_medical_file_service__["a" /* MedicalFileService */]) === 'function' && _a) || Object])
    ], PostsComponent);
    return PostsComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/posts.component.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReminderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReminderComponent = (function () {
    function ReminderComponent() {
    }
    ReminderComponent.prototype.ngOnInit = function () {
    };
    ReminderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reminder',
            template: __webpack_require__(815),
            styles: [__webpack_require__(792)]
        }), 
        __metadata('design:paramtypes', [])
    ], ReminderComponent);
    return ReminderComponent;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/reminder.component.js.map

/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_search_service__ = __webpack_require__(407);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoogleMapComponent = (function () {
    // coordonate_list =[{'lng': 50.6315,'lat': 3.056, 'display': false,'id':0},{'lng': 50.6315,'lat': 3.156, 'display': false,'id':1}];
    function GoogleMapComponent(DoctorSearch) {
        this.DoctorSearch = DoctorSearch;
        this.lat = 50.6315144;
        this.lng = 3.056218;
        this.zoom = 8;
        this.response = [];
    }
    GoogleMapComponent.prototype.clikedMark = function (id) {
        for (var _i = 0, _a = this.response; _i < _a.length; _i++) {
            var temp = _a[_i];
            if (temp['_id'] == id) {
                temp['isDisplay'] = true;
            }
            else
                temp['isDisplay'] = false;
        }
    };
    GoogleMapComponent.prototype.rechercheClick = function (searchText) {
        if (searchText != '') {
            this.response = [];
            this.searchMedecins(searchText);
            console.log(searchText);
        }
        else {
            console.log('ya rien');
        }
    };
    GoogleMapComponent.prototype.mapClick = function () {
        for (var _i = 0, _a = this.response; _i < _a.length; _i++) {
            var temp = _a[_i];
            temp['isDisplay'] = false;
        }
    };
    GoogleMapComponent.prototype.searchMedecins = function (searchText) {
        var _this = this;
        this.DoctorSearch.getSearchDoctor(searchText).subscribe(function (pat) {
            console.log(pat);
            for (var i = 0; i < pat.length; i++) {
                if (pat[i].address != null) {
                    pat[i].isDisplay = false;
                    _this.response.push(pat[i]);
                }
            }
            _this.reSetCenter();
        });
    };
    GoogleMapComponent.prototype.reSetCenter = function () {
        var _this = this;
        if (this.response.length != 0) {
            this.zoom = 8;
            var sumLng = 0;
            var sumLat = 0;
            for (var _i = 0, _a = this.response; _i < _a.length; _i++) {
                var temp = _a[_i];
                sumLng += temp['address'].longitude;
                sumLat += temp['address'].latitude;
            }
            this.lng = sumLng / this.response.length + 0.1;
            this.lat = sumLat / this.response.length + 0.1;
            console.log(this.lng);
            console.log(this.lat);
            setTimeout(function () {
                _this.zoom = 10;
                _this.lng = _this.lng - 0.1;
                _this.lat = _this.lat - 0.1;
            }, 100);
        }
        else {
            console.log(this.lng);
            console.log(this.lat);
        }
    };
    GoogleMapComponent.prototype.zoomChange = function () {
        console.log("1111");
    };
    GoogleMapComponent.prototype.ngOnInit = function () {
    };
    GoogleMapComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-google-map',
            template: __webpack_require__(818),
            styles: [__webpack_require__(794)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_search_service__["a" /* DoctorSearchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_search_service__["a" /* DoctorSearchService */]) === 'function' && _a) || Object])
    ], GoogleMapComponent);
    return GoogleMapComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/google-map.component.js.map

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_medical_file_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_user__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_autorisation__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_models_post__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_autorisation_service__ = __webpack_require__(182);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PostComponent = (function () {
    function PostComponent(auth, medicalService, autorisationService) {
        this.auth = auth;
        this.medicalService = medicalService;
        this.autorisationService = autorisationService;
        this.me = new __WEBPACK_IMPORTED_MODULE_3__shared_models_user__["a" /* User */](null);
        this.usersPost = [];
        this.messengerBox = [];
        this.messengerListPosts = [];
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isMessagerieOpen = true;
        this.isLogged = this.auth.isLoggedIn();
        this.autorisation = new __WEBPACK_IMPORTED_MODULE_4__shared_models_autorisation__["a" /* Autorisation */](null);
        this.medicalService.getCurrentPatient()
            .subscribe(function (patient) {
            _this.me = new __WEBPACK_IMPORTED_MODULE_3__shared_models_user__["a" /* User */](patient.user_id); // OK
            // this.testPost.sender = this.me;
            // this.testPost.receiver = this.me;
            // this.testPost.text = "EHHHH";
            // this.testPost.type = TypePost.INFO;
            // this.medicalService.send_post(this.testPost)
            //  .subscribe( resp => {
            //    console.log('Post send');
            //  });
            // this.autorisation.user = this.me; // OK
            // this.autorisation.observer = this.me; // OK
            // this.medicalService.addAutorisation(this.autorisation)
            //  .subscribe( autorisation => {
            //    console.log(autorisation);
            //  });
            _this.getAutorisationList(); // OK
        });
    };
    PostComponent.prototype.minimizeMessagerie = function () {
        this.isMessagerieOpen = false;
    };
    PostComponent.prototype.openMessagerie = function () {
        this.isMessagerieOpen = true;
    };
    PostComponent.prototype.deleteMessageBox = function () {
        this.messengerBox = [];
    };
    // getUserList() {
    //  this.medicalService.getCurrentPatient()
    //    .subscribe(patient => {
    //      this.medicalService.getUserList(patient.user_id)
    //        .subscribe( users => {this.usersMessage = users; });
    //    });
    // }
    // Get a list of all the users who can communicate with the patient connected.
    PostComponent.prototype.getAutorisationList = function () {
        var _this = this;
        this.autorisationService.getPostAutorisation(this.me._id)
            .subscribe(function (autorisations) {
            // on cree une liste d'users a partir des autorisation
            for (var _i = 0, autorisations_1 = autorisations; _i < autorisations_1.length; _i++) {
                var aut = autorisations_1[_i];
                var add = true;
                for (var _a = 0, _b = _this.usersPost; _a < _b.length; _a++) {
                    var user = _b[_a];
                    if (user._id === aut.observer._id) {
                        add = false;
                    }
                }
                //if (add && aut.observer.role[1] === 'medecin') {
                if (add) {
                    _this.usersPost.push(aut.observer);
                }
            }
        });
    };
    PostComponent.prototype.openMessenger = function (user) {
        var _this = this;
        this.messengerBox['name'] = user.first_name + ' ' + user.last_name;
        this.messengerBox['display'] = 'True';
        this.messengerBox['id'] = user._id;
        this.medicalService.getPosts(this.me._id, user._id)
            .subscribe(function (postsRequest) {
            _this.medicalService.getPosts(user._id, _this.me._id)
                .subscribe(function (postsResponse) {
                _this.messengerListPosts = postsResponse;
                for (var i = 0; i < postsRequest.length; i++) {
                    _this.messengerListPosts.push(postsRequest[i]);
                }
                // tri des posts
                var tab_en_ordre = false;
                var taille = _this.messengerListPosts.length;
                while (!tab_en_ordre) {
                    tab_en_ordre = true;
                    for (var i = 0; i < taille - 1; i++) {
                        if (_this.messengerListPosts[i].Created_at > _this.messengerListPosts[i + 1].Created_at) {
                            var tempo = _this.messengerListPosts[i + 1];
                            _this.messengerListPosts[i + 1] = _this.messengerListPosts[i];
                            _this.messengerListPosts[i] = tempo;
                            tab_en_ordre = false;
                        }
                    }
                    taille--;
                }
                console.log(_this.messengerListPosts);
                _this.scrollToBottom();
            });
        });
    };
    PostComponent.prototype.sendPost = function () {
        var _this = this;
        console.log('a new post will be sended with the text : ' + this.newPostText);
        this.newPost = new __WEBPACK_IMPORTED_MODULE_5__shared_models_post__["a" /* Post */](null);
        this.newPost.text = this.newPostText;
        this.newPost.type = __WEBPACK_IMPORTED_MODULE_5__shared_models_post__["b" /* TypePost */].POST;
        this.newPost.sender = this.me;
        this.medicalService.getUserById(this.messengerBox['id'])
            .subscribe(function (user) {
            _this.newPost.receiver = new __WEBPACK_IMPORTED_MODULE_3__shared_models_user__["a" /* User */](user);
            _this.medicalService.addPost(_this.newPost)
                .subscribe(function (resp) {
                _this.openMessenger(user);
            });
        });
    };
    // ne fonctionne pas
    PostComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) {
            console.log(err);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scrollBottom'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object)
    ], PostComponent.prototype, "myScrollContainer", void 0);
    PostComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(820),
            styles: [__webpack_require__(796)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_medical_file_service__["a" /* MedicalFileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_medical_file_service__["a" /* MedicalFileService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_autorisation_service__["a" /* AutorisationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_services_autorisation_service__["a" /* AutorisationService */]) === 'function' && _d) || Object])
    ], PostComponent);
    return PostComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/post.component.js.map

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__doctor__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service__ = __webpack_require__(616);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Building; });




var Building = (function () {
    function Building(buildingInfo) {
        if (buildingInfo) {
            this.user_id = new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */](buildingInfo.user_id);
            for (var _i = 0, _a = buildingInfo.doctor_associated; _i < _a.length; _i++) {
                var elt = _a[_i];
                this.doctor_associated.push(new __WEBPACK_IMPORTED_MODULE_1__doctor__["a" /* Doctor */](elt));
            }
            this.address = buildingInfo.address;
            this.phone = buildingInfo.phone;
            this.name = buildingInfo.name;
            this.email = buildingInfo.email;
            for (var _b = 0, _c = buildingInfo.services; _b < _c.length; _b++) {
                var elt = _c[_b];
                this.services.push(new __WEBPACK_IMPORTED_MODULE_3__service__["a" /* Service */](elt));
            }
            if (buildingInfo.Created_at) {
                this.Created_at = buildingInfo.Created_at;
            }
        }
        else {
            this._id = '';
            this.user_id = new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */](null);
            this.address = new __WEBPACK_IMPORTED_MODULE_2__address__["a" /* Address */](null);
            this.phone = '';
            this.email = '';
            this.name = '';
        }
    }
    ;
    return Building;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/building.js.map

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Log; });

var Log = (function () {
    function Log(logInfo) {
        if (logInfo) {
            this.user = new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */](logInfo.user);
            this.action = logInfo.action;
            if (logInfo.severity > 0 && logInfo.severity <= 5) {
                this.severity = logInfo.severity;
            }
            else {
                this.severity = 1;
            }
            this.ipAddress = logInfo.ipAddress; // comment avoir l'adresse IP ?
        }
        else {
            this._id = '';
            this.user = new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */](null);
            this.action = '';
            this.severity = null;
            this.ipAddress = '';
        }
    }
    return Log;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/log.js.map

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__doctor__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });

var Service = (function () {
    function Service(serviceInfo) {
        if (serviceInfo) {
            this.phone = serviceInfo.phone;
            this.name = serviceInfo.name;
            this.email = serviceInfo.email;
            for (var _i = 0, _a = serviceInfo.doctor_associated; _i < _a.length; _i++) {
                var elt = _a[_i];
                this.doctor_associated.push(new __WEBPACK_IMPORTED_MODULE_0__doctor__["a" /* Doctor */](elt));
            }
            if (serviceInfo.Created_at) {
                this.Created_at = serviceInfo.Created_at;
            }
        }
        else {
            this._id = '';
            this.phone = '';
            this.name = '';
            this.email = '';
        }
    }
    return Service;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/service.js.map

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Treatment; });
/**
 * Created by Pierre on 13/11/17
 */
var Treatment = (function () {
    function Treatment(TreatmentInfo) {
        if (TreatmentInfo) {
            this._id = TreatmentInfo._id;
            this.codeCIS = TreatmentInfo.codeCIS;
            this.userId = TreatmentInfo.userId;
            this.name = TreatmentInfo.name;
            this.takingState = TreatmentInfo.takingState;
            this.quantity = TreatmentInfo.quantity;
            this.frequence = TreatmentInfo.frequence;
            this.typeFrequence = TreatmentInfo.typeFrequence;
            this.info = TreatmentInfo.info;
            this.start = TreatmentInfo.start;
            this.end = TreatmentInfo.end;
            this.substances = TreatmentInfo.substances;
        }
        else {
            this._id = '';
            this.codeCIS = '';
            this.start = null;
            this.end = null;
        }
    }
    return Treatment;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/treatment.js.map

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/environment.js.map

/***/ }),

/***/ 778:
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n    padding: 60px 50px;\n}\n\nvideo {\n    width: 100%;\n    height: auto;\n}\n\n.video-container {\n    position: relative;\n    padding-bottom: 56.25%;\n    padding-top: 30px;\n    height: 0;\n    overflow: hidden;\n}\n\n.video-container iframe,\n.video-container object,\n.video-container embed {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.video-wrapper {\n\n    width: 1200px;\n    max-width: 100%;\n}\n"

/***/ }),

/***/ 779:
/***/ (function(module, exports) {

module.exports = "/*.active {\n  color: white !important;\n}*/\n\n.dropdown-menu {\n  background-color: grey;\n}\n"

/***/ }),

/***/ 780:
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  background-color: white;\n  color: black;\n}\n"

/***/ }),

/***/ 781:
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ 782:
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  background-color: white;\n  color: black;\n}\n\n.modal-dialog {\n  width: 800px;\n  height: 60px;\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  margin-top: -25px;\n  margin-left: -200px;\n  padding: 20px;\n}\n\n"

/***/ }),

/***/ 783:
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  background-color: white;\n  color: black;\n}\n\n.modal {\n  top: 50%;\n  -webkit-transform: translate(0%, -50%);\n          transform: translate(0%, -50%);\n}\n\ntextarea {\n  width: 200px;\n}\n\n[hidden] {\n  display: none;\n}\n\n\n\n.treatment-list {\n  margin-left: 1cm;\n}\n\n.table th {\n  text-align: center;\n}\n\n"

/***/ }),

/***/ 784:
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  background-color: white;\n  color: black;\n}\n@-webkit-keyframes zoom{\n  from{\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: none;\n  }\n  to{\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n    box-shadow: 0 0 6px grey;\n  }\n}\n@keyframes zoom{\n  from{\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: none;\n  }\n  to{\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n    box-shadow: 0 0 6px grey;\n  }\n}\n\n#planningDoctor{\n  position: relative;\n  left:0; right:0; margin:auto;\n  width: 800px;\n}\n#details{\n  background-color: rgb(230,230,230);\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgb(230,230,230);\n}\n.planningDay{\n  display: inline-block;\n  margin-left: 5px;\n  vertical-align: top;\n}\n.timeRdv{\n  background-color: rgb(70,70,70);\n  border-radius: 5px;\n  color: white;\n  font-weight: bold;\n  margin-bottom:5px;\n  font-size: 0.7em;\n  width: 80px;\n  overflow: hidden;\n  cursor: pointer;\n}\n.titleDay{\n  width: 80px;\n  font-size: 0.95em;\n  padding: 5px;\n  background-color: dodgerblue;\n  box-shadow: 0 0 2px grey;\n  border-radius:2px;\n  margin-bottom: 10px;\n  color:white;\n  font-weight:600;\n  cursor:pointer;\n}\n\n.buttonDay{\n  cursor: pointer;\n  background-color: #1e9055;\n}\n.buttonDay:hover{\n  -webkit-animation-name: zoom;\n          animation-name: zoom;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n  box-shadow: 0 0 6px grey;\n}\n\n#detailsRdv{\n  position: fixed;\n  top:50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  left:0; right:0; margin:auto;\n  width:500px;\n  text-align: center;\n  background-color: white;\n  border-radius: 5px;\n  border:1px solid black;\n  z-index: 6;\n}\nh2, h3, h4{\n  color:grey;\n  font-weight: bold;\n}\n#blackBack{\n  position: fixed;\n  top:0; left:0;\n  width: 100%;\n  height:100vh;\n  z-index: 5;\n  background-color: rgba(50,50,50,0.8);\n}\n"

/***/ }),

/***/ 785:
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ 786:
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched {\n  border-left: 5px solid red;\n}\n\ninput.ng-valid.ng-touched {\n  border-left: 5px solid green;\n}\n\nform {\n  text-align: left;\n  margin-left: 10px;\n}\n\n.modal-body {\n  padding: 100px 25px;\n  position: relative;\n}\n\n.jumbotron {\n  background-color: white;\n  color: black;\n}\n\n#myModalHorizontal {\n  top: 10%;\n}\n"

/***/ }),

/***/ 787:
/***/ (function(module, exports) {

module.exports = ".col-xs-1 {\n  width: 13.33333333%;\n}\n"

/***/ }),

/***/ 788:
/***/ (function(module, exports) {

module.exports = ".list-item {\n  text-align: left;\n}\n\n.table th {\n  text-align: center;\n}\n\n.jumbotron {\n  background-color: white;\n  color: black;\n}\n"

/***/ }),

/***/ 789:
/***/ (function(module, exports) {

module.exports = ".well-sm {\n  padding: 9px;\n  border-radius: 3px;\n  margin-right: 15px;\n}\n"

/***/ }),

/***/ 790:
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  background-color: white;\n  color: black;\n}\n\n\n.class{\n  background:grey;\n  color:white;\n}\n"

/***/ }),

/***/ 791:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 792:
/***/ (function(module, exports) {

module.exports = ".list-item {\n  text-align: left;\n}\n"

/***/ }),

/***/ 793:
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  background-color: white;\n  color: black;\n}\n"

/***/ }),

/***/ 794:
/***/ (function(module, exports) {

module.exports = ".agm-map {\n  height: 300px;\n}\nh3{\n  color:dimgrey;\n  font-weight: bold;\n}\n.panel-primary{\n  border-radius: 5px !important;\n  border: 1px solid rgb(200,200,200) !important;\n}\n"

/***/ }),

/***/ 795:
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  background-color: white;\n  color: black;\n}\n#flex_display{\n  padding: 0;\n  list-style-type: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n#listDoctors ul {\n  padding: 0;\n  list-style-type: none;\n}\n#listDoctors ul li{\n  width: 200px;\n  height:100px;\n  border-radius: 5px;\n  background-color: dodgerblue;\n  text-align:center;\n  line-height: 100px;\n  margin-bottom: 10px;\n  color:white;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n@-webkit-keyframes zoom{\n  from{\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: none;\n  }\n  to{\n    -webkit-transform: scale(1.01);\n            transform: scale(1.01);\n    box-shadow: 0 0 6px grey;\n  }\n}\n\n@keyframes zoom{\n  from{\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    box-shadow: none;\n  }\n  to{\n    -webkit-transform: scale(1.01);\n            transform: scale(1.01);\n    box-shadow: 0 0 6px grey;\n  }\n}\n\n#listDoctors ul li:hover, .timeRdv:hover{\n  -webkit-animation-name: zoom;\n          animation-name: zoom;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-transform: scale(1.01);\n          transform: scale(1.01);\n  box-shadow: 0 0 6px grey;\n}\n\n#planningDoctor, #descriptionDoctor{\n  width: 800px;\n  background-color: rgb(230,230,230);\n  border-radius: 5px;\n  box-shadow: 0 0 6px rgb(100,100,100);\n  border:1px solid rgb(200,200,200);\n  margin-bottom:20px;\n}\n#details{\n  margin-left: 10px;\n}\n.planningDay{\n  display: inline-block;\n  margin-left: 5px;\n  vertical-align: top;\n}\n.timeRdv{\n  background-color: rgb(70,70,70);\n  border-radius: 5px;\n  color: white;\n  font-weight: bold;\n  margin-bottom:5px;\n  cursor: pointer;\n}\n.titleDay{\n  width: 80px;\n  font-size: 0.95em;\n  padding: 5px;\n  background-color: dodgerblue;\n  box-shadow: 0 0 2px grey;\n  border-radius:2px;\n  margin-bottom: 10px;\n  color:white;\n  font-weight:600;\n}\n\n.buttonDay{\n  cursor: pointer;\n  background-color: #1e9055;\n}\n.buttonDay:hover{\n  -webkit-animation-name: zoom;\n          animation-name: zoom;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n  box-shadow: 0 0 6px grey;\n}\n\n#reservationBox{\n  position: fixed;\n  top:50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  left:0; right:0; margin:auto;\n  padding: 20px;\n  text-align: center;\n  background-color: white;\n  border-radius: 5px;\n  border: 1px solid black;\n  box-shadow: 0 0 6px black;\n  z-index: 6;\n  width: 400px;\n}\n#blackBack{\n  position: fixed;\n  top:0; left:0;\n  width: 100%;\n  height:100vh;\n  z-index: 5;\n  background-color: rgba(50,50,50,0.8);\n}\n"

/***/ }),

/***/ 796:
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  background-color: white;\n  color: black;\n}\n\n#messagerie{\n  position: fixed;\n  top: 70px;\n  right: 0;\n  height: calc(100vh - 100px);\n  width: 200px;\n  /*background-color: rgb(70, 70, 70);*/\n\n  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#cedce7+0,596a72+100;Grey+3D+%231 */\n  background: #cedce7; /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to bottom, #cedce7 0%,#596a72 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cedce7', endColorstr='#596a72',GradientType=0 ); /* IE6-9 */\n\n\n  box-shadow: -2px 0 6px rgb(50,50,50);\n  text-align:center;\n  overflow-y: auto;\n  border-radius: 10px 0 0 10px;\n  z-index: 999;\n}\n#ouvreMessagerie{\n  position: fixed;\n  bottom: 10px;\n  right:10px;\n  width: 190px;\n  height:50px;\n  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#cedce7+0,596a72+100;Grey+3D+%231 */\n  background: #cedce7; /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to bottom, #cedce7 0%,#596a72 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cedce7', endColorstr='#596a72',GradientType=0 ); /* IE6-9 */\n\n  color:rgb(50,50,50);\n  font-weight: bold;\n  border-radius: 5px;\n  cursor: pointer;\n\n  text-align: center;\n  line-height: 50px;\n  box-shadow: 0 0 4px black;\n}\n\n#message{\n  position: fixed;\n  bottom:0px;\n  right:250px;\n  width: 400px;\n  height:400px;\n  background-color: rgb(230,230,230);\n  overflow: hidden;\n  border-radius: 5px 5px 0 0;\n  border:1px solid grey;\n  box-shadow: 0 0 6px grey;\n  z-index: 999;\n}\n#message h2{\n  border-radius: 5px 5px 0 0;\n  text-align:center;\n  background-color:rgb(200,200,200);\n  margin:0; padding: 0;\n  padding:15px;\n}\n\n#message ul{\n  list-style-type: none;\n  padding: 0; margin:0;\n  overflow-y: scroll;\n  height:300px; width: 100%;\n}\n#message ul li{\n  width: 100%;\n}\n#message ul li div{\n  position:relative;\n  width:80%;\n  background-color: dodgerblue;\n  border-radius: 10px;\n  box-shadow: 0 0 6px 1px grey;\n  color:white;\n  padding:5px;\n  text-align:center;\n  margin-bottom:5px;\n  margin-top: 5px;\n}\n#inputMessage{\n  position: relative;\n  margin:0; padding: 0;\n  left:0;\n  width: 400px;\n  height: 42px;\n  box-shadow: -3px 0px 6px grey;\n  text-align: left !important;\n}\n#newPost{\n  margin:0; padding:0;\n  outline:none;\n  border:none;\n  width:320px;\n  height:100%;\n  color:grey;\n}\n#sendPost{\n  width: 80px;\n  height: 100%;\n  border:none;\n  outline:none;\n  background-color: dodgerblue;\n  color:white;\n  font-weight: bold;\n  font-size: 0.8em;\n  margin:0; padding: 0;\n  margin-left: -5px; /* correction de 5px sur la gauche : petit décalage */\n}\n\n#messagerie h2{\n  position:relative;\n  left:0; right:0; margin:auto;\n  text-align: center;\n  width:90%;\n  color:black;\n  background-color: white;\n  border-radius: 5px;\n  padding:10px;\n  border:1px solid black;\n  box-shadow: 0 0 4px rgb(200,200,200);\n  font-size: 0.95em;\n  margin-top:20px; margin-bottom:20px;\n}\n\n#list_users{\n  padding: 0;\n  margin:0;\n  list-style-type: none;\n  width: 100%;\n}\n#list_users li{\n  position:relative;\n  left:0; right:0; margin:auto;\n  width: 90%;\n  border:1px solid grey;\n  box-shadow: 0 0 4px grey;\n  border-radius: 3px;\n  text-align:center;\n  color:grey;\n  cursor: pointer;\n  background-color: white;\n}\n@-webkit-keyframes liHover{\n  from{\n    color:grey;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    background-color: white;\n  }\n  to{\n    background-color: rgb(50,50,50);\n    color:white;\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n  }\n}\n@keyframes liHover{\n  from{\n    color:grey;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    background-color: white;\n  }\n  to{\n    background-color: rgb(50,50,50);\n    color:white;\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n  }\n}\n@-webkit-keyframes liNotHover {\n  from{\n    background-color: rgb(50,50,50);\n    color:white;\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n  }\n  to{\n    color:grey;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    background-color: white;\n  }\n\n}\n@keyframes liNotHover {\n  from{\n    background-color: rgb(50,50,50);\n    color:white;\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n  }\n  to{\n    color:grey;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    background-color: white;\n  }\n\n}\n\n#list_users li:hover{\n  -webkit-animation-name: liHover;\n          animation-name: liHover;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  background-color: rgb(50,50,50);\n  color:white;\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n}\n#list_users li:not(:hover){\n  -webkit-animation-name: liNotHover;\n          animation-name: liNotHover;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  background-color: white;\n}\n"

/***/ }),

/***/ 797:
/***/ (function(module, exports) {

module.exports = "body{padding-top:30px;}\n\n.glyphicon {  margin-bottom: 10px;margin-right: 10px;}\n\nsmall {\n  display: block;\n  line-height: 1.428571429;\n  color: #999;\n}\n\n\n.row {\n}\n\n[class*=\"col-\"] {\n\n  text-align: center;\n\n}\n\n\n.jumbotron {\n  background-color: white;\n  color: black;\n}\n"

/***/ }),

/***/ 798:
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  background-color: white;\n  color: black;\n}\n"

/***/ }),

/***/ 799:
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  background-color: white;\n  color: black;\n  max-width: 400px;\n    margin-left: auto;\n    margin-right: auto;\n}\n"

/***/ }),

/***/ 800:
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  background-color: white;\n  color: black;\n}\n"

/***/ }),

/***/ 801:
/***/ (function(module, exports) {

module.exports = "<!-- Container (About Section) -->\n<div id=\"about\" class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-sm-8\">\n            <h2>A propos de nous</h2><br>\n            <h4>Nous sommes une jeune start-up dont le but est de centraliser les données de la santé afin de rendre\n                l'accès au soins plus facile.</h4><br>\n            <p>Cette plateforme est en cours de développement, elle sera bientôt disponible. Il sera alors possible de\n                prendre rendez-vous avec votre médecin ou encore de rechercher un spécialiste directement sur la\n                plateforme.</p>\n            <br>\n            <div class=\"video-wrapper\">\n                <div class=\"video-container\">\n                    <iframe width=\"100%\" height=\"800\" src=\"https://www.youtube.com/embed/KXdNGiiHTjk\"\n                            frameborder=\"0\"\n                            allowfullscreen></iframe>\n                </div>\n                <br>\n                <button class=\"btn btn-default btn-lg\">En savoir plus</button>\n            </div>\n            <div class=\"col-sm-4\">\n                <span class=\"glyphicon glyphicon-signal logo\"></span>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 802:
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a routerLink=\"/\" class=\"navbar-brand\"><i class=\"glyphicon glyphicon-apple\"></i>CALM</a>\n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n        <ul class=\"nav navbar-nav navbar-right\">\n\n        <li><a *ngIf=\"isLogged && (user.role[0] == 'patient' && user.role[1] != 'building' && user.role[1] != 'organisation')\" routerLink=\"current-treatment\"\n               routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <i class=\"glyphicon glyphicon-folder-open\"></i> Mes traitements\n        </a></li>\n\n        <li><a *ngIf=\"isLogged && (user.role[0] == 'patient' && user.role[1] != 'building' && user.role[1] != 'organisation')\" routerLink=\"patient_rdv\"\n               routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n          Prendre rendez-vous\n        </a></li>\n\n        <li><a *ngIf=\"isLogged && (user.role[1] == 'medecin')\" routerLink=\"doctor-space\" routerLinkActive=\"active\"\n               [routerLinkActiveOptions]=\"{exact:true}\"><i class=\"glyphicon glyphicon-briefcase\"></i> Espace pro</a></li>\n\n        <li><a *ngIf=\"isLogged && (user.role[1] == 'building')\" routerLink=\"building-space\" routerLinkActive=\"active\"\n               [routerLinkActiveOptions]=\"{exact:true}\"><i class=\"glyphicon glyphicon-briefcase\"></i> Espace infrastructure</a></li>\n\n        <li><a *ngIf=\"isLogged && (user.role[1] == 'organisation')\" routerLink=\"organisation-space\" routerLinkActive=\"active\"\n               [routerLinkActiveOptions]=\"{exact:true}\"><i class=\"glyphicon glyphicon-briefcase\"></i> Espace organisation</a></li>\n\n        <li><a href=\"#about\">A propos</a></li>\n\n        <li><a href=\"#contact\">Contact</a></li>\n\n        <li><a routerLink=\"users\" routerLinkActive=\"active\">Utilisateurs</a></li>\n\n        <!--<li><a href=\"https://localhost:3000/api\">API</a></li>-->\n            <li>\n              <div *ngIf=\"isLogged\" class=\"dropdown\">\n              <button class=\"btn btn-default btn-lg\" type=\"button\" data-toggle=\"dropdown\" *ngIf=\"user\">{{user.first_name}}\n                <span class=\"caret\"></span></button>\n              <ul class=\"dropdown-menu\">\n                <li><a routerLink=\"profile\" routerLinkActive=\"active\"> Profil</a></li>\n                <li><a routerLink=\"settings\" routerLinkActive=\"active\"> Paramètres</a></li>\n                <li><a routerLinkActive=\"active\" (click)=\"logout()\"> Deconnexion</a></li>\n              </ul>\n              </div>\n            </li>\n\n          <li><a *ngIf=\"!isLogged\" routerLink=\"register\" routerLinkActive=\"active\">\n            <span class=\"glyphicon glyphicon-user\"></span> Inscription</a></li>\n          <li><a *ngIf=\"!isLogged\" routerLink=\"login\" routerLinkActive=\"active\">\n            <span class=\"glyphicon glyphicon-log-in\"></span> Connexion</a></li>\n      </ul>\n      </div>\n\n      <!--<ul class=\"nav navbar-nav navbar-right\">-->\n\n        <!--<div *ngIf=\"isLogged\" class=\"dropdown\">-->\n          <!--<button class=\"btn btn-default btn-lg\" type=\"button\" data-toggle=\"dropdown\" *ngIf=\"user\">{{user.first_name}}-->\n            <!--<span class=\"caret\"></span></button>-->\n          <!--<ul class=\"dropdown-menu\">-->\n            <!--<li><a routerLink=\"profile\" routerLinkActive=\"active\"> Profil</a></li>-->\n            <!--<li><a routerLink=\"settings\" routerLinkActive=\"active\"> Paramètres</a></li>-->\n            <!--<li><a routerLinkActive=\"active\" (click)=\"logout()\"> Deconnexion</a></li>-->\n          <!--</ul>-->\n        <!--</div>-->\n\n        <!--<li><a *ngIf=\"!isLogged\" routerLink=\"register\" routerLinkActive=\"active\">-->\n          <!--<span class=\"glyphicon glyphicon-user\"></span> Inscription</a></li>-->\n        <!--<li><a *ngIf=\"!isLogged\" routerLink=\"login\" routerLinkActive=\"active\">-->\n          <!--<span class=\"glyphicon glyphicon-log-in\"></span> Connexion</a></li>-->\n      <!--</ul>-->\n    </div>\n  </nav>\n</header>\n\n<main>\n  <router-outlet></router-outlet>\n</main>\n\n<footer class=\"container-fluid text-center\">\n  <a href=\"#myPage\" title=\"To Top\">\n    <span class=\"glyphicon glyphicon-chevron-up\"></span>\n  </a>\n  <p>CALM Site Copyrights</p>\n</footer>\n"

/***/ }),

/***/ 803:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <div *ngIf=\"isLogged\" class=\"container\">\n    Bienvenue sur la page infrastructure\n  </div>\n  <div *ngIf=\"!isLogged\">\n    <h1>Accès non autorisé, veuillez vous connecter pour accéder à cette page !</h1>\n  </div>\n</div>\n"

/***/ }),

/***/ 804:
/***/ (function(module, exports) {

module.exports = "<!-- Container (Contact Section) -->\n<div id=\"contact\" class=\"container-fluid bg-grey\">\n  <h2 class=\"text-center\">CONTACT</h2>\n  <div class=\"row\">\n    <div class=\"col-sm-5\">\n      <p>Contactez nous et nous vous répondrons dans les 24 heures.</p>\n      <p><span class=\"glyphicon glyphicon-map-marker\"></span> Lille, France</p>\n      <p><span class=\"glyphicon glyphicon-phone\"></span> 03.20.57.84.25</p>\n      <p><span class=\"glyphicon glyphicon-envelope\"></span> calmsite@hotmail.com</p>\n    </div>\n      <div class=\"row\">\n        <div class=\"col-sm-6 form-group\">\n          <input class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Nom\" type=\"text\" required>\n        </div>\n        <div class=\"col-sm-6 form-group\">\n          <input class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email\" type=\"email\" required>\n        </div>\n      </div>\n      <textarea class=\"form-control\" id=\"comments\" name=\"comments\" placeholder=\"Commentaire\" rows=\"5\"></textarea><br>\n      <div class=\"row\">\n        <div class=\"col-sm-12 form-group\">\n          <button class=\"btn btn-default pull-right\" type=\"submit\">Envoyer</button>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 805:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <app-post></app-post>\n\n  <div *ngIf=\"isLogged\" class=\"container\">\n\n    <a type=\"button\" [routerLink]=\"['/doctor_rdv']\">Gérer mes disponibilités</a><br/>\n\n    <div class=\"row\" *ngFor=\"let patient of patients\">\n      <div class=\"card card-block\" *ngIf=\"patient.general_doctor\">\n        <!--Trick to display only the patients from the current doctor. Should NOT be made this way.-->\n        <!--<h4 class=\"card-title\">{{ patient.user_id.first_name}} {{patient.user_id.last_name}}</h4>-->\n        <p class=\"card-text\">{{patient.user_id.email}}</p>\n\n        <a class=\"btn btn-default btn-lg\" (click)=\"change_submit(patient)\">Envoyer un message</a>\n        <a type=\"button\" [routerLink]=\"['/patient-treatment' , {'id' : patient.user_id._id}]\">Traitement</a>\n      </div>\n    </div>\n\n    <form (ngSubmit)=\"send_post()\" *ngIf=\"submitted\" #form=\"ngForm\" role=\"form\">\n      <p><br><br>Laissez votre message pour {{patient_selected.user_id.first_name}}</p>\n      <div class=\"container\">\n      <textarea class=\"form-control\" id=\"comments\" name=\"comments\" placeholder=\"Commentaire\" rows=\"5\"\n                [(ngModel)]=\"post.text\"></textarea><br>\n        <div class=\"row\">\n          <div class=\"col-sm-12 form-group\">\n            <button class=\"btn btn-default pull-right\" type=\"submit\">Envoyer</button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n\n  <div *ngIf=\"!isLogged\">\n    <h1>Accès non autorisé, veuillez vous connecter pour accéder à cette page !</h1>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ 806:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <app-post></app-post>\n\n  <a type=\"button\" routerLink=\"../doctor-space\">Retour</a> <br/>\n  <h2>{{currentUser.first_name}} {{currentUser.last_name}}</h2>\n  <tr class=\"treatment-list\">\n    <table class=\"table\">\n      <tr>\n        <th>Substance</th>\n        <th>Nom</th>\n        <th>Début traitement</th>\n        <th>Fin traitement</th>\n        <th>Quantité</th>\n        <th>Fréquence</th>\n        <th>Type fréquence</th>\n        <th>Prise</th>\n        <th>Info</th>\n      </tr>\n      <tr *ngFor=\"let medic of treatments\">\n        <td>\n          <div style=\"height: 75px; overflow:auto;\">\n            <li *ngFor=\" let substance of medic.substances\">\n              {{substance}}\n            </li>\n          </div>\n        </td>\n\n\n        <td>\n          <select class=\"form-control\" [(ngModel)]=\"medic.name\" [disabled]=\"!isSelected(medic._id)\">\n            <option [value]=\"medic.name\">{{medic.name}}</option>\n            <option *ngFor=\"let c of derivateList\" [ngValue]=\"c.denomination\">{{c.denomination}}</option>\n          </select>\n        </td>\n\n\n        <td><input type=\"text\" class=\"form-control\" [ngModel]=\"medic.start | date:'yyyy-MM-dd'\"\n                   (ngModelChange)=\"medic.start = $event\" type=\"date\" [disabled]=\"!isSelected(medic._id)\"/></td>\n        <td><input type=\"text\" class=\"form-control\" [ngModel]=\"medic.end | date:'yyyy-MM-dd'\"\n                   (ngModelChange)=\"medic.end = $event\" type=\"date\" [disabled]=\"!isSelected(medic._id)\"/></td>\n        <td><input type=\"text\" class=\"form-control\" [(ngModel)]=\"medic.quantity\" [disabled]=\"!isSelected(medic._id)\">\n        </td>\n        <td><input type=\"text\" class=\"form-control\" [(ngModel)]=\"medic.frequence\" [disabled]=\"!isSelected(medic._id)\">\n        </td>\n        <td><select class=\"form-control\" id=\"typeFreq\" [(ngModel)]=\"medic.typeFrequence\"\n                    [disabled]=\"!isSelected(medic._id)\">\n          <option value=\"heures\">Heures</option>\n          <option value=\"jours\">Jours</option>\n          <option value=\"semaines\">Semaines</option>\n          <option value=\"mois\">Mois</option>\n          <option value=\"annees\">Années</option>\n        </select></td>\n        <td><select class=\"form-control\" id=\"state\" [(ngModel)]=\"medic.takingState\" [disabled]=\"!isSelected(medic._id)\">\n          <option value=\"Avant-repas\">Avant repas</option>\n          <option value=\"Pendant-repas\">Pendant repas</option>\n          <option value=\"Apres-repas\">Après repas</option>\n          <option value=\"A-jeun\">A jeun</option>\n          <option value=\"Avant-dormir\">Avant dormir</option>\n          <option value=\"Au-reveil\">Au réveil</option>\n        </select></td>\n        <td><textarea class=\"form-control\" [(ngModel)]=\"medic.info\" [disabled]=\"!isSelected(medic._id)\"></textarea></td>\n        <td>\n          <button class=\"btn btn-info btn-lg\"\n                  (click)=\"updateSelectedTreatment(medic); getDerivateList(medic.substances[0] , medic)\"\n                  [hidden]=\"isSelected(medic._id)\">\n            Update\n          </button>\n          <button class=\"btn btn-info btn-lg\" (click)=\"updateUserTreatment(medic)\" [hidden]=\"!isSelected(medic._id)\">\n            Save\n          </button>\n          <button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModalInfo\"\n                  (click)=\"getTreatmentInfo(medic)\">Info\n          </button>\n        </td>\n        <td>\n          <button class=\"btn btn-info btn-lg\" (click)=\"deleteMedicament(medic._id)\" [hidden]=\"isSelected(medic._id)\">\n            Delete\n          </button>\n          <button class=\"btn btn-info btn-lg\" (click)=\"updateSelectedTreatment(null)\" [hidden]=\"!isSelected(medic._id)\">\n            Cancel\n          </button>\n          <button class=\"btn btn-info btn-lg\" (click)=\"expiredTreatment(medic)\">\n            Fin\n          </button>\n\n        </td>\n      </tr>\n    </table>\n\n    <button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">+</button>\n\n    <!-- Modal -->\n    <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n      <div class=\"modal-dialog modal-lg\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            <h4 class=\"modal-title\">Ajout de traitement</h4>\n          </div>\n          <div class=\"modal-body\">\n            <input type=text [(ngModel)]=\"search\" (ngModelChange)=\"eventHandler($event)\">\n            <table class=\"table\">\n              <tr *ngFor=\"let element of searchList\">\n                <button class=\"btn btn-info\" (click)=\"addTreatment(element.codeCIS , element.denomination)\"\n                        data-dismiss=\"modal\">+\n                </button>\n                <td>{{element.denomination}}</td>\n              </tr>\n            </table>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n\n    <!-- Modal -->\n    <div id=\"myModalInfo\" class=\"modal fade\" role=\"dialog\">\n      <div class=\"modal-dialog modal-lg\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            <h4 class=\"modal-title\">Informations</h4>\n          </div>\n          <div class=\"modal-body\">\n            <div *ngIf=\"treatmentInfo!== undefined\">\n\n              <h2>{{treatmentInfo.denomination}}</h2>\n              <div *ngIf=\"treatmentInfo.presentation?.length > 0\">\n                <label *ngIf=\"treatmentInfo.presentations[0].prix === null\">Prix : (libre)<br/></label>\n                <label *ngIf=\"treatmentInfo.presentations[0].prix !== null\">Prix :\n                  {{treatmentInfo.presentations[0].prix}} €<br/></label>\n              </div>\n              <div *ngIf=\"treatmentInfo.presentation?.length <= 0\">\n                Prix : (libre)\n              </div>\n\n              {{treatmentInfo.statutAdministratifAMM}} - Date AMM : {{treatmentInfo.dateAMM}} -\n              ({{treatmentInfo.typeProcedureAMM}}) - [CIS : {{treatmentInfo.codeCIS}}] <br/>\n              Titulaires : {{treatmentInfo.titulaires}}<br/>\n              Voies d'administration :\n              <span *ngFor=\"let item of treatmentInfo.voiesAdministration; let isLast=last\">\n                {{item}}{{isLast ? '' : ' / '}}\n              </span> <br/>\n\n              <div class=\"panel panel-info\">\n                <div class=\"panel-heading\"><h3>Indications thérapeutiques</h3></div>\n                <div class=\"panel-body\">\n                  <p [innerHTML]='treatmentInfo.indicationsTherapeutiques'></p>\n                </div>\n              </div>\n\n              <div class=\"panel panel-info\">\n                <div class=\"panel-heading\"><h3>Conditions de prescriptions</h3></div>\n                <div class=\"panel-body\">\n                  <li *ngFor=\"let condition of treatmentInfo.conditionsPrescriptionDelivrance\">\n                    {{ condition }}\n                  </li>\n                  <p *ngIf=\"treatmentInfo.conditionsPrescriptionDelivrance?.length <= 0\">Ce médicament ne possède pas\n                    de\n                    conditions de prescription particulières</p>\n                </div>\n              </div>\n\n\n              <div class=\"panel panel-info\">\n                <div class=\"panel-heading\"><h3>Groupe Générique</h3></div>\n                <div class=\"panel-body\">\n                  <div *ngIf=\"treatmentInfo.infosGenerique !== null\">\n                    <li><b>{{treatmentInfo.denomination}}</b> - {{treatmentInfo.infosGenerique.type}}</li>\n                    <li *ngFor=\"let autre of treatmentInfo.infosGenerique.autresMedicamentsGroupe\">\n                      <b>{{autre.denomination}}</b> - {{autre.type}}\n                    </li>\n                  </div>\n                  <p *ngIf=\"treatmentInfo.infosGenerique == null\">Ce médicament n'appartient pas à un groupe générique\n\n                </div>\n              </div>\n\n\n              <div class=\"panel panel-info\">\n                <div class=\"panel-heading\"><h3>Composition</h3></div>\n                <div class=\"panel-body\">\n                  <li *ngFor=\"let composition of treatmentInfo.compositions[0].substancesActives\">\n                    {{composition.denominationSubstance}}\n                  </li>\n                </div>\n              </div>\n\n\n              <div class=\"panel panel-info\">\n                <div class=\"panel-heading\"><h3>Présentations</h3></div>\n                <div class=\"panel-body\">\n                  <div *ngIf=\"treatmentInfo.presentation?.length > 0\">\n                    <div *ngFor=\"let presentation of treatmentInfo.presentations\">\n                      <h3>{{presentation.libelle}}</h3>\n                      {{presentation.etatCommercialisationAMM}} <br/>\n                      <div *ngIf=\"presentation.agrementCollectivites == true\">\n                        Cette présentation est agréée aux collectivités <br/>\n                      </div>\n                      <b>Prix : {{presentation.prix}} € </b> (taux de remboursement :\n                      {{presentation.tauxRemboursement[0]}}) <br/>\n                    </div>\n                  </div>\n                  <div *ngIf=\"treatmentInfo.avisSMR?.length <= 0\">\n                    <p>Aucune présentation n'est disponible pour ce médicament\n                    </p>\n                  </div>\n                </div>\n              </div>\n\n\n              <div class=\"panel panel-info\">\n                <div class=\"panel-heading\"><h3>Service médical rendu (SMR)</h3></div>\n                <div class=\"panel-body\">\n                  <div *ngIf=\"treatmentInfo.avisSMR?.length > 0\">\n                    <table class=\"table\">\n                      <tr>\n                        <th>Valeur du SMR</th>\n                        <th>Date</th>\n                        <th>Motif de l'évaluation</th>\n                        <th>Résumé de l'avis</th>\n                      </tr>\n                      <tr *ngFor=\"let smr of treatmentInfo.avisSMR\" (click)='redirect(smr.urlHAS)'>\n                        <td>\n                          {{smr.valeurSMR}}\n                        </td>\n                        <td>\n                          {{smr.dateAvisCommissionTransparence}}\n                        </td>\n                        <td>\n                          {{smr.motifEvaluation}}\n                        </td>\n                        <td>\n                          <p [innerHTML]='smr.libelleSMR'></p>\n                        </td>\n                      </tr>\n                    </table>\n                  </div>\n                  <div *ngIf=\"treatmentInfo.avisSMR?.length <= 0\">\n                    <p>Aucun SMR n'est disponible pour ce médicament</p>\n                  </div>\n                </div>\n              </div>\n\n\n              <div class=\"panel panel-info\">\n                <div class=\"panel-heading\"><h3>Amélioration du service médical rendu (ASMR)</h3></div>\n                <div class=\"panel-body\">\n                  <div *ngIf=\"treatmentInfo.avisASMR?.length > 0\">\n                    <table class=\"table\">\n                      <tr>\n                        <th>Valeur du SMR</th>\n                        <th>Date</th>\n                        <th>Motif de l'évaluation</th>\n                        <th>Résumé de l'avis</th>\n                      </tr>\n                      <tr *ngFor=\"let smr of treatmentInfo.avisASMR\" (click)='redirect(smr.urlHAS)'>\n                        <td>\n                          <label *ngIf=\"smr.valeurSMR =='I'\">Majeure ({{smr.valeurSMR}})</label>\n                          <label *ngIf=\"smr.valeurSMR =='II'\">Importante ({{smr.valeurSMR}})</label>\n                          <label *ngIf=\"smr.valeurSMR =='III'\">Modérée({{smr.valeurSMR}})</label>\n                          <label *ngIf=\"smr.valeurSMR =='IV'\">Mineure ({{smr.valeurSMR}})</label>\n                          <label *ngIf=\"smr.valeurSMR =='V'\">Inexistante ({{smr.valeurSMR}})</label>\n                        </td>\n                        <td>\n                          {{smr.dateAvisCommissionTransparence}}\n                        </td>\n                        <td>\n                          {{smr.motifEvaluation}}\n                        </td>\n                        <td>\n                          <p [innerHTML]='smr.libelleSMR'></p>\n                        </td>\n                      </tr>\n                    </table>\n                  </div>\n                  <div *ngIf=\"treatmentInfo.avisASMR?.length <= 0\">\n                    <p>Aucune ASMR n'est disponible pour ce médicament</p>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ 807:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n\n  <app-post></app-post>\n\n  <div *ngIf=\"isLogged\" class=\"container\">\n    <h2>Gérer mes rendez-vous et disponibilités</h2>\n\n    <div id=\"planningDoctor\">\n\n      <div class=\"planningDay\">\n        <div class=\"titleDay buttonDay\" (click)=\"beforeDay()\">\n          Précédent\n        </div>\n      </div>\n\n      <div class=\"planningDay\" *ngFor=\"let day of planningDays\">\n        <div class=\"titleDay\" (click)=\"changeStateOfDay(day['numJour'], day['mois'], day['an'])\">\n          {{day['jour']}}<br/>\n          {{day['date']}}\n        </div>\n        <div class=\"timeRdv\" *ngFor=\"let time of day['time']; let i = index\">\n          <div *ngIf=\"day['type'][i] == 'libre'\" style=\"background-color: #1e9055 !important;\" (click)=\"changeState(day['numJour'], day['mois'], day['an'],time)\">\n            {{time}}\n          </div>\n          <div *ngIf=\"day['type'][i] == 'occupe'\" style=\"background-color: rgb(200,200,200) !important;\" (click)=\"changeState(day['numJour'], day['mois'], day['an'],time)\">\n            {{time}}\n          </div>\n          <div *ngIf=\"day['type'][i] == 'rdv'\" style=\"background-color: #f4511e !important;\" (click)=\"openDetailsRdv(day['complement'][i], day['motif'][i])\">\n            {{time}}<br/>\n            {{day['complement'][i].first_name}} {{day['complement'][i].last_name}}\n          </div>\n        </div>\n      </div>\n\n      <div class=\"planningDay\">\n        <div class=\"titleDay buttonDay\" (click)=\"afterDay()\">\n          Suivant\n        </div>\n      </div>\n\n    </div>\n\n    <div *ngIf=\"detailsRdv['visible']\" id=\"detailsRdv\">\n      <h3>Details du rendez-vous</h3>\n      {{detailsRdv['user'].first_name}} {{detailsRdv['user'].last_name}}<br/>\n      Mail: {{detailsRdv['user'].email}}<br/>\n      Adresse: {{detailsRdv['user'].address.num}} {{detailsRdv['user'].address.street_address}} {{detailsRdv['user'].address.city}}<br/>\n      Motif du rendez-vous: {{detailsRdv['motif']}}\n    </div>\n\n  </div>\n\n  <div *ngIf=\"!isLogged\">\n    <h1>Accès non autorisé, veuillez vous connecter pour accéder à cette page !</h1>\n  </div>\n\n</div>\n\n<div *ngIf=\"detailsRdv['visible']\" id=\"blackBack\" (click)=\"closeDetailsRdv()\"></div>\n"

/***/ }),

/***/ 808:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>CALM</h1>\n  <p>L'application de e-santé</p>\n  <form>\n    <div class=\"input-group\">\n      <input type=\"email\" class=\"form-control\" size=\"50\" placeholder=\"Rechercher un médecin\" required>\n      <div class=\"input-group-btn\">\n        <button type=\"button\" class=\"btn btn-danger\">Rechercher</button>\n      </div>\n    </div>\n  </form>\n</div>\n<about-page></about-page>\n<contact-page></contact-page>\n"

/***/ }),

/***/ 809:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h2 class=\"text-center\">Page de connexion</h2>\n\n  <!-- Button trigger modal -->\n  <button class=\"btn btn-primary btn-lg\" data-toggle=\"modal\" data-target=\"#myModalHorizontal\">\n    Connexion\n  </button>\n\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"myModalHorizontal\" tabindex=\"-1\" role=\"dialog\"\n       aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\"\n                  data-dismiss=\"modal\">\n            <span aria-hidden=\"true\">&times;</span>\n            <span class=\"sr-only\">Close</span>\n          </button>\n          <h4 class=\"modal-title\" id=\"myModalLabel\">\n            Connexion\n          </h4>\n        </div>\n\n        <!-- Modal Body -->\n        <div class=\"modal-body\">\n\n          <form (ngSubmit)=\"login()\" *ngIf=\"!submitted\" #form=\"ngForm\" class=\"form-horizontal\" role=\"form\">\n            <div class=\"form-group\" [ngClass]=\"{\n\t\t\t\t\t\t 'has-error': email.invalid && email.touched,\n\t\t\t\t\t\t 'has-success': email.valid && email.touched}\">\n\n              <label class=\"col-sm-2 control-label\"\n                     for=\"inputEmail3\">Email</label>\n              <div class=\"col-sm-10\">\n                <input type=\"email\" class=\"form-control\"\n                       id=\"inputEmail3\" placeholder=\"Email\" required\n                       [(ngModel)]=\"user.email\" name=\"email\"\n                       #email=\"ngModel\"/>\n                <span class=\"help-block\" *ngIf=\"email.invalid && email.touched\">\n\t\t  Email is required\n\t\t</span>\n              </div>\n            </div>\n\n            <div class=\"form-group\" [ngClass]=\"{\n\t\t\t\t\t\t 'has-error': password.invalid && password.touched,\n\t\t\t\t\t\t 'has-success': password.valid && password.touched}\">\n\n              <label class=\"col-sm-2 control-label\"\n                     for=\"inputPassword3\">Mot de passe</label>\n              <div class=\"col-sm-10\">\n                <input type=\"password\" class=\"form-control\"\n                       id=\"inputPassword3\" placeholder=\"Mot de passe\" name=\"password\" required\n                       [(ngModel)]=\"user.password\"\n                       #password=\"ngModel\"/>\n                <span class=\"help-block\" *ngIf=\"password.invalid && password.touched\">\n\t\t  Password is required\n\t\t</span>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"col-sm-offset-2 col-sm-10\">\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"form.invalid\">Connexion</button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 810:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\"><h3><i class=\"glyphicon glyphicon-calendar\"></i> Prendre rendez-vous</h3></div>\n  <div class=\"panel-body\">\n<div class=\"wrapper\">\n  <div class=\"header\">\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    <span class=\"glyphicon glyphicon-chevron-right\"></span>\n    <p>Avril 2017</p>\n  </div><!-- end header -->\n  <div class=\"col-sm-6-offset-2 col-md-4-offset-2\">\n  <div class=\"calendar-body\">\n    <div class=\"row weekdays\">\n      <div class=\"col-xs-1\"><p>L</p></div><!-- end col-xs-1 -->\n      <div class=\"col-xs-1\"><p>Ma</p></div><!-- end col-xs-1 -->\n      <div class=\"col-xs-1\"><p>Me</p></div><!-- end col-xs-1 -->\n      <div class=\"col-xs-1\"><p>J</p></div><!-- end col-xs-1 -->\n      <div class=\"col-xs-1\"><p>V</p></div><!-- end col-xs-1 -->\n      <div class=\"col-xs-1\"><p>S</p></div><!-- end col-xs-1 -->\n      <div class=\"col-xs-1\"><p>D</p></div><!-- end col-xs-1 -->\n    </div><!-- end row -->\n\n    <div class=\"row dates\">\n      <div class=\"col-xs-1\"><a href=\"#\"><p class=\"inactive\">28</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p class=\"inactive\">29</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p class=\"inactive\">30</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p class=\"inactive\">31</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>1</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>2</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>3</p></a></div>\n    </div><!-- end row -->\n\n    <div class=\"row dates\">\n      <div class=\"col-xs-1\"><a href=\"#\"><p>4</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>5</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>6</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>7</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>8</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>9</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>10</p></a></div>\n    </div><!-- end row -->\n\n    <div class=\"row dates\">\n      <div class=\"col-xs-1\"><a href=\"#\"><p>11</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>12</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>13</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>14</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>15</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>16</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>17</p></a></div>\n    </div><!-- end row -->\n\n    <div class=\"row dates\">\n      <div class=\"col-xs-1\"><a href=\"#\"><p>18</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>19</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>20</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>21</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>22</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>23</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>24</p></a></div>\n    </div><!-- end row -->\n\n    <div class=\"row dates\">\n      <div class=\"col-xs-1\"><a href=\"#\"><p>25</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>26</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>27</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>28</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>29</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>30</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>31</p></a></div>\n    </div><!-- end row -->\n\n    <div class=\"line\"></div>\n\n    <div class=\"current-date\">Mardi 25 avril</div>\n  </div><!-- end calendar-body -->\n  </div>\n</div><!-- end wrapper -->\n</div>\n</div>\n"

/***/ }),

/***/ 811:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <app-post></app-post>\n\n  <a type=\"button\" routerLink=\"../medical-file\">Retour</a> <br/>\n  <div class=\"panel panel-primary\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-12 col-xs-12\">\n      <div class=\"panel-heading\"><h3><i class=\"glyphicon glyphicon-plus\"></i> Mon traitement</h3></div>\n      <div class=\"panel-body\">\n        <!--\n        <h4>Contre la Grippe :</h4>\n        <div class=\"list-item\">\n          <ul>\n            <li>Paracétamol : jusqu'à 4 g/jour pour les adultes, soit 1 à 2 comprimés (s) à 500 mg par prise, à\n              renouveler en cas de besoin (jusqu'à 8 par jour). Espacer les prises d'au moins 4 heures.\n            </li>\n            <li>Pseudoéphédrine : 5 jours maximum, voir indications sur la notice</li>\n            <li>Sirops antitussifs opiacés (dextrométorphane, codéine, codéthyline, etc.) : 120 mg/j</li>\n          </ul>\n\n\n          <div class=\"row\" *ngFor=\"let medic of treatments\">\n            <div class=\"card card-block\">\n              <h3>{{medic.name}}</h3>\n              {{medic.quantity}} dose tous les {{medic.frequence}} {{medic.typeFrequence}}, à prendre {{medic.takingState}}<br/>\n              {{medic.info}}<br/>\n              Début traitement : {{medic.start.toLocaleDateString('fr-FR')}}<br/>\n              Fin traitement : {{medic.end.toLocaleDateString('fr-FR')}}<br/>\n            </div>\n          </div>\n  -->\n        <table class=\"table\">\n          <tr>\n            <th>Nom</th>\n            <th>Début traitement</th>\n            <th>Fin traitement</th>\n            <th>Quantité</th>\n            <th>Fréquence</th>\n            <th>Type fréquence</th>\n            <th>Prise</th>\n            <th>Info</th>\n          </tr>\n          <tr *ngFor=\"let medic of treatments\">\n            <td>{{medic.name}}</td>\n            <td>{{medic.start.toLocaleDateString('fr-FR')}}</td>\n            <td>{{medic.end.toLocaleDateString('fr-FR')}}</td>\n            <td>{{medic.quantity}}</td>\n            <td>{{medic.frequence}}</td>\n            <td>{{medic.typeFrequence}}</td>\n            <td>{{medic.takingState}}</td>\n            <td>{{medic.info}}</td>\n          </tr>\n        </table>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ 812:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\" *ngIf=\"isLogged\">\n  <div class=\"panel-heading\"><h3><i class=\"glyphicon glyphicon-user\"></i> Mon médecin traitant</h3></div>\n  <div class=\"panel-body\">\n  <div class=\"row\" *ngIf=\"patient\">\n    <div class=\"col-sm-6 col-md-4\">\n      <img src=\"{{image}}\"\n           class=\"img-rounded\" alt=\"Image Profil\"/>\n    </div>\n    <div class=\"col-sm-6 col-md-8\">\n      <h4>{{patient.general_doctor.user_id.first_name}} {{patient.general_doctor.user_id.last_name}}</h4>\n      <small><cite title=\"Cabinet\"> {{patient.general_doctor.cabinet}} <i class=\"glyphicon glyphicon-map-marker\">\n      </i></cite></small>\n      <p>\n        <i class=\"glyphicon glyphicon-envelope\"></i> {{patient.general_doctor.user_id.email}}\n        <br />\n        <i class=\"glyphicon glyphicon-earphone\"></i> {{patient.general_doctor.phone}}<br />\n      </p>\n      <br><button class=\"btn btn-default btn-lg\">Contacter</button>\n    </div>\n  </div>\n</div>\n</div>\n\n  <!--<div class=\"row\" *ngIf=\"!patient.general_doctor.user_id\">-->\n    <!--<div class=\"col-sm-6 col-md-4\">-->\n      <!--<img src=\"{{image}}\"-->\n           <!--class=\"img-rounded\" alt=\"Image Profil\"/>-->\n    <!--</div>-->\n    <!--<div class=\"col-sm-6 col-md-8\">-->\n      <!--<h3>Votre médecin traitant</h3>-->\n        <!--<p>Veuillez renseigner votre médecin traitant dans les paramètres de votre compte</p>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n\n\n\n"

/***/ }),

/***/ 813:
/***/ (function(module, exports) {

module.exports = "<<div class=\"jumbotron text-center\">\n<div *ngIf=\"isLogged\">\n  <div class=\"row\">\n    <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n      <!--Hello-->\n    </div>\n  </div>\n\n  <button>Message</button>\n  <button [routerLink]=\"['/current-treatment']\">Traitement</button>\n\n  <br/>\n  <button>Rendez-vous</button>\n  <button>Médecin traitant</button>\n\n  <div class=\"row\">\n    <div class=\"col-xlg-6 col-xl-6 col-lg-12 col-sm-12 col-xs-12\">\n      <app-posts></app-posts>\n    </div>\n\n    <div class=\"col-xlg-6 col-xl-6 col-lg-12 col-sm-12 col-xs-12\">\n      <!--<app-current-treatment></app-current-treatment>-->\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-xlg-9 col-xl-6 col-lg-6  col-md-12 col-sm-12 col-xs-12\">\n      <div class=\"row\">\n        <div class=\"col-xlg-8 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n          <app-reminder></app-reminder>\n        </div>\n        <div class=\"col-xlg-4 col-xl-12 col-lg-12 col-md-5 col-sm-12 col-xs-12\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-xlg-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n      <div>\n        <app-google-map></app-google-map>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"row shift-up\">\n    <div class=\"col-xlg-3 col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n      <app-calendar></app-calendar>\n\n    </div>\n    <div class=\"col-xlg-6 col-lg-6 col-md-12 col-sm-12 col-xs-12\" >\n      <app-doctor-profile></app-doctor-profile>\n    </div>\n  </div>\n\n</div>\n\n<div *ngIf=\"!isLogged\">\n  <h1>Accès non autorisé, veuillez vous connecter pour accéder à cette page !</h1>\n</div>\n\n</div>\n"

/***/ }),

/***/ 814:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-12 col-xs-12\">\n      <div class=\"panel-heading\"><h3><i class=\"glyphicon glyphicon-comment\"></i> Mes messages</h3></div>\n      <div class=\"panel-body\">\n        <div class=\"row\" *ngFor=\"let post of posts\">\n          <div class=\"card card-block\">\n            <h4 class=\"card-title\">{{ post.doctor.first_name }} {{ post.doctor.last_name }}</h4>\n            <p class=\"card-text\">{{post.text}}</p>\n          </div>\n        </div>\n        </div>\n      </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ 815:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-12 col-md-12 col-xs-12\">\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\"><h3><i class=\"glyphicon glyphicon-bell\"></i> Mes rappels</h3></div>\n        <div class=\"panel-body\"><ul>\n          <div class=\"list-item\">\n          <li>Tests de PAP à effectuer</li>\n          <li>Vaccins à administrer</li>\n          </div>\n        </ul></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 816:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>404 Not Found</h1>\n  <p>You may be lost. Follow the breadcrumbs back <a routerLink=\"/\">home</a>.</p>\n</div>\n"

/***/ }),

/***/ 817:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <div *ngIf=\"isLogged\" class=\"container\">\n    Bienvenue sur la page infrastructure\n  </div>\n  <div *ngIf=\"!isLogged\">\n    <h1>Accès non autorisé, veuillez vous connecter pour accéder à cette page !</h1>\n  </div>\n</div>\n"

/***/ }),

/***/ 818:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <h3> Trouver le médecin le plus proche</h3>\n  <div class=\"panel-body\">\n    <div class=\"input-group\">\n      <input type=\"search\" #searchBox class=\"form-control\" size=\"50\" placeholder=\"Rechercher un médecin\" required>\n      <div class=\"input-group-btn\">\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"rechercheClick(searchBox.value)\">Rechercher</button>\n      </div>\n    </div>\n\n<sebm-google-map class=\"agm-map\" [usePanning]=\"true\" [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" (setZoom)=\"setZoom(2)\" (mapClick)=\"mapClick()\" (zoomChange)=\"zoomChange()\"  >\n  <div *ngIf=\"response.length!=0\">\n    <sebm-google-map-marker *ngFor=\"let n of response\" [latitude]=n.address.latitude [longitude]=n.address.longitude (markerClick)=\"clikedMark(n._id)\" >\n      <sebm-google-map-info-window [isOpen]=\"n.isDisplay\">\n        <div>\n          <h3>Doctor: {{n.last_name}} {{n.first_name}}</h3>\n          <p>address: {{n.address.num}},{{n.address.street_address}}</p>\n        </div>\n      </sebm-google-map-info-window>\n    </sebm-google-map-marker>\n  </div>\n</sebm-google-map>\n  </div>\n</div>\n"

/***/ }),

/***/ 819:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <app-post></app-post>\n\n  <div *ngIf=\"isLogged\" class=\"container\">\n    <h2>Prendre rendez-vous</h2>\n\n    <div id=\"flex_display\">\n      <div id=\"listDoctors\">\n        <ul>\n          <li *ngFor=\"let doctor of myDoctors\" (click)=\"openDetails(doctor._id)\">\n            {{doctor.first_name}} {{doctor.last_name}}\n          </li>\n        </ul>\n      </div>\n\n      <div id=\"details\">\n        <div *ngIf=\"doctorDetails\" id=\"descriptionDoctor\">\n          <h3>Description</h3>\n          {{doctorDetails['description']}}\n        </div>\n\n\n\n        <div *ngIf=\"doctorDetails\" id=\"planningDoctor\">\n          <h3>Planning</h3>\n\n          <div class=\"planningDay\">\n            <div class=\"titleDay buttonDay\" (click)=\"beforeDay()\">\n              Précédent\n            </div>\n          </div>\n\n          <div class=\"planningDay\" *ngFor=\"let day of planningDays\">\n            <div class=\"titleDay\">\n              {{day['jour']}}<br/>\n              {{day['date']}}\n            </div>\n            <div class=\"timeRdv\" *ngFor=\"let time of day['time']\" (click)=\"openReservationBox(day['numJour'],day['mois'], day['an'], time)\">\n              {{time}}\n            </div>\n          </div>\n\n          <div class=\"planningDay\">\n            <div class=\"titleDay buttonDay\" (click)=\"afterDay()\">\n              Suivant\n            </div>\n          </div>\n\n        </div>\n        <div *ngIf=\"!doctorDetails\" id=\"googleMap\">\n          <app-google-map></app-google-map>\n        </div>\n\n        <div *ngIf=\"reservationBox['open'] == 'true'\" id=\"reservationBox\">\n          <h3>Prendre un rendez-vous</h3>\n          <p>Le {{reservationBox['jour']}}/{{reservationBox['mois']}}/{{reservationBox['an']}} à {{reservationBox['time']}}</p>\n          <input type=\"text\" name=\"motif\" [(ngModel)]=\"motif\" placeholder=\"Motif de la consultation\"/><br/>\n          <button (click)=\"reserver()\">Valider</button>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n  <div *ngIf=\"!isLogged\">\n    <h1>Accès non autorisé, veuillez vous connecter pour accéder à cette page !</h1>\n  </div>\n</div>\n\n<div *ngIf=\"reservationBox['open'] == 'true'\" id=\"blackBack\" (click)=\"closeReservationBox()\"></div>\n"

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__patient__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__building__ = __webpack_require__(614);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Doctor; });



var Doctor = (function () {
    function Doctor(DoctorInfo) {
        this.patients = [];
        this.infrastructure = [];
        if (DoctorInfo) {
            this._id = DoctorInfo._id;
            this.user_id = new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */](DoctorInfo.user_id);
            this.phone = DoctorInfo.phone;
            if (DoctorInfo.patients) {
                for (var _i = 0, _a = DoctorInfo.patients; _i < _a.length; _i++) {
                    var elt = _a[_i];
                    this.patients.push(new __WEBPACK_IMPORTED_MODULE_1__patient__["a" /* Patient */](elt));
                }
            }
            if (DoctorInfo.infrastructure) {
                for (var _b = 0, _c = DoctorInfo.infrastructure; _b < _c.length; _b++) {
                    var elt = _c[_b];
                    this.infrastructure.push(new __WEBPACK_IMPORTED_MODULE_2__building__["a" /* Building */](elt));
                }
            }
        }
        else {
            this._id = "";
            this.user_id = new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */](null);
            this.phone = "";
        }
    }
    return Doctor;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/doctor.js.map

/***/ }),

/***/ 820:
/***/ (function(module, exports) {

module.exports = " <div *ngIf=\"isLogged\">\n    <!-- details -->\n    <div id=\"messagerie\" *ngIf=\"isMessagerieOpen\">\n      <h2>Messagerie</h2>\n      <button (click)=\"minimizeMessagerie()\">Minimize messagerie</button>\n      <ul id=\"list_users\">\n        <li *ngFor=\"let user of usersPost\" (click)=\"openMessenger(user)\">\n          {{user.first_name}} {{user.last_name}}\n        </li>\n      </ul>\n    </div>\n\n    <div id=\"ouvreMessagerie\" (click)=\"openMessagerie()\" *ngIf=\"!isMessagerieOpen\">\n      Rétablir messagerie\n    </div>\n\n    <div *ngIf=\"messengerBox['display'] == 'True'\" id=\"message\">\n      <h2>{{messengerBox['name']}}  <button (click)=\"deleteMessageBox()\">X</button></h2>\n      <ul>\n        <li *ngFor=\"let post of messengerListPosts\">\n          <div *ngIf=\"post.sender==me._id\" style=\"left: 19%;\">{{post.text}}<br/>\n            à {{post.Created_at}}\n          </div>\n          <div *ngIf=\"!(post.sender==me._id)\" style=\"left: 1%;\">{{post.text}}<br/>\n            à {{post.Created_at}}\n          </div>\n        </li>\n      </ul>\n      <div id=\"inputMessage\">\n        <input type=\"text\" name=\"newPost\" placeholder=\"Nouveau message\" id=\"newPost\" [(ngModel)]=\"newPostText\"/>\n        <input type=\"submit\" value=\"Envoyer\" id=\"sendPost\" (click)=\"sendPost()\"/>\n      </div>\n    </div>\n </div>\n\n\n\n\n\n"

/***/ }),

/***/ 821:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n<h3>Page de profil</h3>\n\n<app-post></app-post>\n\n<div class=\"container\" *ngIf=\"isLogged\">\n  <div class=\"row\" *ngIf=\"user\">\n    <div class=\"col-xs-12 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2\">\n      <div class=\"well well-sm\">\n        <div class=\"row\">\n          <div class=\"col-sm-6 col-md-4\">\n            <img src=\"{{image}}\"\n                 class=\"img-rounded\" alt=\"Image Profil\"/>\n          </div>\n          <div class=\"col-sm-6 col-md-8\">\n            <h4>\n              {{user.first_name}} {{user.last_name}}</h4>\n            <small><cite title=\"address\">{{user.address.city}}, {{user.address.country}} <i class=\"glyphicon glyphicon-map-marker\">\n            </i></cite></small>\n            <p>\n              <i class=\"glyphicon glyphicon-envelope\"></i>{{user.email}}\n              <br />\n              <i class=\"glyphicon glyphicon-gift\"></i>{{user.birth_date | date: 'dd/MM/yyyy'}}<br />\n              <i class=\"glyphicon glyphicon-info-sign\"></i>{{user.role}}\n            </p>\n            <!-- button -->\n            <div class=\"btn-group\">\n              <a type=\"button\" href=\"/settings\" routerLinkActive=\"active\" class=\"btn btn-default btn-lg\">\n                <i class=\"glyphicon glyphicon-cog\"></i> Paramètres</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n\n<!--<div class=\"form-group\" [ngClass] = \"{\n         'has-error': profile_img.invalid && profile_img.touched,\n         'has-success': profile_img.valid && profile_img.touched}\">\n  <label class=\"control-label\">Image de profil</label>\n  <input name=\"profile_img\" type=\"file\" class=\"form-control\" [(ngModel)]=\"user.profile_img\"\n         (change)=\"handleFileSelect($event)\" #profile_img=\"ngModel\" accept=\"image/*\">\n  <span class=\"help-block\" *ngIf=\"profile_img.invalid && profile_img.touched\">\n            Image de profil requise\n    </span>\n</div>-->\n\n"

/***/ }),

/***/ 822:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n\n  <app-post></app-post>\n\n  <div *ngIf=\"isLogged\">\n    <h2>Paramètres</h2>\n\n    <div *ngIf=\"user.role[1]=='patient' || user.role[1]=='medecin'\">\n      <h3>Choisissez votre médecin généraliste</h3>\n      <div *ngFor=\"let doctor of doctors\">\n        <a class=\"btn btn-default btn-lg\" routerLinkActive=\"active\" (click)=\"addDoctor(doctor)\">\n          {{doctor.user_id.first_name}} {{doctor.user_id.last_name}}</a>\n        <h5><br></h5>\n      </div>\n\n      <h3>Gestion des autorisations</h3>\n      <button (click)=\"openAddAutorisation()\">Ajouter</button>\n      <div *ngIf=\"addAutorisationForm['show']\">\n          <!-- system de recherche d'un utilisateur a mettre en place -->\n          <input type=\"email\" placeholder=\"Adresse email de l'utilisateur\" [(ngModel)]=\"addAutorisationForm['email']\" required/><br/>\n          <label for=\"subject\">Element concerné par l'aurisation :</label><br/>\n          <select name=\"subject\" id=\"subject\" [(ngModel)]=\"addAutorisationForm['subject']\">\n            <option value=\"POST\" selected>Message</option>\n            <option value=\"DOSSIER\">Accès dossier médical</option>\n            <option value=\"RDV\" >Prise de rendez-vous</option>\n          </select><br/>\n          <label for=\"type\">Type d'autorisation : </label><br/>\n          <select id=\"type\" name=\"type\" [(ngModel)]=\"addAutorisationForm['type']\">\n            <option value=\"READ\" selected>Lecture</option>\n            <option value=\"READ_WRITE\">Lecture & Modification</option>\n          </select><br/>\n          <button (click)=\"addNewAutorisation()\">Ajouter</button>\n      </div>\n      <table>\n        <tr>\n          <td>Role</td>\n          <td>Prénom</td>\n          <td>Nom</td>\n          <td>Autorisations</td>\n          <td>Gestion</td>\n        </tr>\n          <tr *ngFor=\"let autorisation of autorisations\">\n            <td>{{autorisation.observer.role[1]}}</td>\n            <td>{{autorisation.observer.first_name}}</td>\n            <td>{{autorisation.observer.last_name}}</td>\n            <td>{{autorisation.subject}} => {{autorisation.type}}</td>\n            <td>\n              <button (click)=\"deleteAutorisation(autorisation._id)\">Supprimer</button>\n            </td>\n          </tr>\n      </table>\n\n      <button (click)=\"sendTestMail()\">Send test mail</button>\n\n      <h2>Send perso mail : </h2>\n      <form>\n        <input type=\"email\" [(ngModel)]=\"to\" placeholder=\"to ?\" [ngModelOptions]=\"{standalone: true}\"/><br/>\n        <input type=\"text\" [(ngModel)]=\"subject\" placeholder=\"subject ?\" [ngModelOptions]=\"{standalone: true}\"/><br/>\n        <input type=\"text\" [(ngModel)]=\"text\" placeholder=\"text ?\" [ngModelOptions]=\"{standalone: true}\"/><br/>\n        <button (click)=\"sendPersoMail(to, subject, text)\">Envoyer</button>\n      </form>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 823:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h2 class=\"text-center\">Page d'inscription</h2>\n\n<div *ngIf=\"!submitted\" >\n  <h3>Email already exist</h3>\n</div>\n\n<form (ngSubmit)=\"register()\" #form=\"ngForm\">\n\n  <div class=\"form-group\"\n       [ngClass] = \"{\n         'has-error': first_name.invalid && first_name.touched,\n         'has-success': first_name.valid && first_name.touched}\">\n    <label class=\"control-label\">Prénom</label>\n    <input type=\"text\" class=\"form-control\" name=\"first_name\" required\n           [(ngModel)]=\"user.first_name\"\n           #first_name=\"ngModel\">\n    <span class=\"help-block\" *ngIf=\"first_name.invalid && first_name.touched\">\n            Prénom requis\n        </span>\n  </div>\n\n  <div class=\"form-group\"\n       [ngClass] = \"{\n         'has-error': last_name.invalid && last_name.touched,\n         'has-success': last_name.valid && last_name.touched}\">\n    <label class=\"control-label\">Nom</label>\n    <input type=\"text\" class=\"form-control\" name=\"last_name\" required\n           [(ngModel)]=\"user.last_name\"\n           #last_name=\"ngModel\">\n    <span class=\"help-block\" *ngIf=\"last_name.invalid && last_name.touched\">\n            Nom requis\n        </span>\n  </div>\n\n  <div class=\"form-group\"\n       [ngClass] = \"{\n         'has-error': email.invalid && email.touched,\n         'has-success': email.valid && email.touched}\">\n    <label class=\"control-label\">Email</label>\n    <input type=\"email\" class=\"form-control\" name=\"email\" required\n           [(ngModel)]=\"user.email\"\n           #email=\"ngModel\">\n    <span class=\"help-block\" *ngIf=\"email.invalid && email.touched\">\n            Email requis\n        </span>\n  </div>\n\n  <div class=\"form-group\" [ngClass] = \"{\n         'has-error': password.invalid && password.touched,\n         'has-success': password.valid && password.touched}\">\n    <label class=\"control-label\">Mot de passe</label>\n    <input type=\"password\" class=\"form-control\" name=\"password\" required\n           [(ngModel)]=\"user.password\"\n           #password=\"ngModel\">\n    <span class=\"help-block\" *ngIf=\"password.invalid && password.touched\">\n            Mot de passe requis\n        </span>\n  </div>\n\n  <div class=\"form-group\" [ngClass] = \"{\n         'has-error': password.invalid && password.touched,\n         'has-success': password.valid && password.touched}\">\n    <label class=\"control-label\">Date de naissance</label>\n    <input type=\"date\" class=\"form-control\" name=\"birth_date\" required\n      [(ngModel)]=\"user.birth_date\" #birth_date=\"ngModel\" max=\"2017-01-01\">\n    <span class=\"help-block\" *ngIf=\"birth_date.invalid && birth_date.touched\">\n            Date de naissance requise\n    </span>\n  </div>\n\n  <div class=\"form-group\" [ngClass] = \"{\n         'has-error': role.invalid && role.touched,\n         'has-success': role.valid && role.touched}\">\n    <label class=\"control-label\">Choisissez votre profil</label>\n  <select name=\"role\" class=\"form-control\" required [(ngModel)]=\"user.role\" #role=\"ngModel\">\n    <option value=\"patient\">Patient</option>\n    <option value=\"medecin\">Medecin</option>\n    <option value=\"building\">Infrastructure</option>\n    <option value=\"organisation\">Organisation</option>\n  </select>\n    <span class=\"help-block\" *ngIf=\"role.invalid && role.touched\">\n            Profil requis\n    </span>\n  </div>\n\n  <div class=\"form-group\" [ngClass] = \"{\n         'has-error': country.invalid && country.touched,\n         'has-success': country.valid && country.touched}\">\n    <label class=\"control-label\">Pays</label>\n    <input type=\"text\" class=\"form-control\" name=\"country\" required\n           [(ngModel)]=\"user.address.country\"\n           #country=\"ngModel\">\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"control-label\">Ville</label>\n    <input type=\"text\" class=\"form-control\" name=\"city\" required\n           [(ngModel)]=\"user.address.city\"\n           #city=\"ngModel\">\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"control-label\">Rue</label>\n    <input type=\"text\" class=\"form-control\" name=\"street_address\" required\n           [(ngModel)]=\"user.address.street_address\"\n           #street_adress=\"ngModel\">\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"control-label\">Numéro de rue</label>\n    <input type=\"text\" class=\"form-control\" name=\"num\" required\n           [(ngModel)]=\"user.address.num\"\n           #num=\"ngModel\">\n  </div>\n\n  <div class=\"form-group\">\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"form.invalid\">S'inscrire</button>\n  </div>\n\n</form>\n</div>\n"

/***/ }),

/***/ 824:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n<h2>\n  Bienvenue sur la page utilisateurs\n</h2>\n<div class=\"container\">\n  <div class=\"row\" *ngFor=\"let user of users\">\n    <div class=\"card card-block\">\n      <h4 class=\"card-title\">{{ user.email }}</h4>\n      <p class=\"card-text\">{{user._id}}</p>\n      <a class=\"btn btn-default btn-lg\" (click)=\"buttonDelete(user)\"><i class=\"glyphicon glyphicon-trash\"></i> Delete</a>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicalFileService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MedicalFileService = (function () {
    function MedicalFileService(http, authentication) {
        this.http = http;
        this.authentication = authentication;
        this.url = 'https://localhost:3000/api/';
    }
    MedicalFileService.prototype.getCurrentPatient = function () {
        return this.http.get(this.url + 'patients/' + this.authentication.currentUserId(), this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    MedicalFileService.prototype.getUserByEmail = function (email) {
        return this.http.get(this.url + 'users/byEmail/' + email, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    MedicalFileService.prototype.getUserById = function (id) {
        return this.http.get(this.url + 'users/' + id, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    MedicalFileService.prototype.addGeneralDoctor = function (doctor, id) {
        console.log('id of the patient: ', id);
        return this.http.put(this.url + 'patient/' + id, doctor, this.authentication.getRequestOptions())
            .map(function (res) { return res; });
    };
    MedicalFileService.prototype.getPosts = function (sender_id, receiver_id) {
        return this.http.get(this.url + 'post/' + sender_id + '/' + receiver_id, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    MedicalFileService.prototype.addPost = function (post) {
        return this.http.post(this.url + 'post', post, this.authentication.getRequestOptions())
            .map(function (res) { return res; });
    };
    MedicalFileService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], MedicalFileService);
    return MedicalFileService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/medical-file.service.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorSpaceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DoctorSpaceService = (function () {
    function DoctorSpaceService(http, authentication) {
        this.http = http;
        this.authentication = authentication;
        this.url = 'https://localhost:3000/api/';
    }
    DoctorSpaceService.prototype.getPatientFromDoctor = function (id) {
        return this.http.get(this.url + 'patientsdoctor/' + id, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    DoctorSpaceService.prototype.getConsultations = function (doctor_id) {
        return this.http.get(this.url + 'consultation/' + doctor_id, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    DoctorSpaceService.prototype.getConsultationOfThisDay = function (doctor_id, date) {
        console.log('trying to get consultation of a particular date time');
        var myFormatDate = date.getDate() + ':' + (date.getMonth() + 1) + ':' + date.getFullYear() + ':' + date.getHours() + ':' + date.getMinutes();
        return this.http.get(this.url + 'consultation/date/' + doctor_id + '/' + myFormatDate, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    DoctorSpaceService.prototype.getDoctorByUserId = function (user_id) {
        return this.http.get(this.url + 'userToDoctor/' + user_id, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    DoctorSpaceService.prototype.addConsultation = function (consult) {
        return this.http.put(this.url + 'consultation/', consult, this.authentication.getRequestOptions())
            .map(function (res) { return res; });
    };
    DoctorSpaceService.prototype.getPatientByUserId = function (user_id) {
        return this.http.get(this.url + 'userToPatient/' + user_id, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    DoctorSpaceService.prototype.getDisponnibiliteOf = function (doctor_id) {
        return this.http.get(this.url + 'disponnibilite/doctor/' + doctor_id, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    DoctorSpaceService.prototype.getDisponnibilite = function (id) {
        return this.http.get(this.url + 'disponnibilite/' + id, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    DoctorSpaceService.prototype.getDisponnibiliteOfThisDay = function (date, doctor_id) {
        var myFormatDate = date.getDate() + ':' + (date.getMonth() + 1) + ':' + date.getFullYear() + ':' + date.getHours() + ':' + date.getMinutes();
        return this.http.get(this.url + 'disponnibilite/date/' + doctor_id + '/' + myFormatDate, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    DoctorSpaceService.prototype.addDisponnibilite = function (disp) {
        return this.http.put(this.url + 'disponnibilite/', disp, this.authentication.getRequestOptions())
            .map(function (res) { return res; });
    };
    DoctorSpaceService.prototype.modifyDisponnibilite = function (disp) {
        return this.http.post(this.url + 'disponnibilite/', disp, this.authentication.getRequestOptions())
            .map(function (res) { return res; });
    };
    DoctorSpaceService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], DoctorSpaceService);
    return DoctorSpaceService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/sanga/Documents/Projets/CALM/CALM/src/doctor-space.service.js.map

/***/ })

},[1098]);
//# sourceMappingURL=main.bundle.map