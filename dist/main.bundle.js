webpackJsonp([1,4],{

/***/ 1185:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(568);


/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(21);
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
    }
    DoctorSpaceService.prototype.getPatientFromDoctor = function (id) {
        return this.http.get('https://localhost:3000/api/patientsdoctor/' + id, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    DoctorSpaceService.prototype.send_post = function (post) {
        return this.http.post('https://localhost:3000/api/post', post, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    DoctorSpaceService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], DoctorSpaceService);
    return DoctorSpaceService;
    var _a, _b;
}());
//# sourceMappingURL=F:/CALM/src/doctor-space.service.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(21);
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
    }
    MedicalFileService.prototype.getCurrentPatient = function () {
        return this.http.get('https://localhost:3000/api/patients/' + this.authentication.currentUserId(), this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    MedicalFileService.prototype.getUserByEmail = function (email) {
        return this.http.get('https://localhost:3000/api/users/' + email, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    MedicalFileService.prototype.addGeneralDoctor = function (doctor, id) {
        return this.http.put('https://localhost:3000/api/patient/' + id, doctor, this.authentication.getRequestOptions())
            .map(function (res) { return res; });
    };
    MedicalFileService.prototype.get_posts = function (patient_id) {
        return this.http.get('https://localhost:3000/api/post/' + patient_id, this.authentication.getRequestOptions())
            .map(function (res) { return res.json(); });
    };
    MedicalFileService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], MedicalFileService);
    return MedicalFileService;
    var _a, _b;
}());
//# sourceMappingURL=F:/CALM/src/medical-file.service.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(902);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
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
//# sourceMappingURL=F:/CALM/src/authentication.service.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__patient__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__building__ = __webpack_require__(697);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Doctor; });



var Doctor = (function () {
    function Doctor(DoctorInfo) {
        if (DoctorInfo) {
            this._id = DoctorInfo._id;
            this.user_id = new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */](DoctorInfo.user_id);
            this.phone = DoctorInfo.phone;
            for (var _i = 0, _a = DoctorInfo.patients; _i < _a.length; _i++) {
                var elt = _a[_i];
                this.patients.push(new __WEBPACK_IMPORTED_MODULE_1__patient__["a" /* Patient */](elt));
            }
            for (var _b = 0, _c = DoctorInfo.infrastructure; _b < _c.length; _b++) {
                var elt = _c[_b];
                this.infrastructure.push(new __WEBPACK_IMPORTED_MODULE_2__building__["a" /* Building */](elt));
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
//# sourceMappingURL=F:/CALM/src/doctor.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__doctor__ = __webpack_require__(261);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Patient; });


var Patient = (function () {
    function Patient(patientInfo) {
        if (patientInfo) {
            this._id = patientInfo._id;
            this.user_id = new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */](patientInfo.user_id);
            this.general_doctor = new __WEBPACK_IMPORTED_MODULE_1__doctor__["a" /* Doctor */](patientInfo.general_doctor);
            for (var _i = 0, _a = patientInfo.patient_followed; _i < _a.length; _i++) {
                var elt = _a[_i];
                this.patient_followed.push(new Patient(elt));
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
//# sourceMappingURL=F:/CALM/src/patient.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(21);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], AutorisationService);
    return AutorisationService;
    var _a, _b;
}());
//# sourceMappingURL=F:/CALM/src/autorisation.service.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__address__ = __webpack_require__(416);
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
//# sourceMappingURL=F:/CALM/src/user.js.map

/***/ }),

/***/ 401:
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
            template: __webpack_require__(880),
            styles: [__webpack_require__(860)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=F:/CALM/src/about.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_user__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_users_service__ = __webpack_require__(93);
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
            template: __webpack_require__(882),
            styles: [__webpack_require__(862)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_users_service__["a" /* UsersService */]) === 'function' && _c) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=F:/CALM/src/app.component.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_space_service__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__ = __webpack_require__(21);
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
            template: __webpack_require__(883),
            styles: [__webpack_require__(863)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_space_service__["a" /* DoctorSpaceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_space_service__["a" /* DoctorSpaceService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], BuildingSpaceComponent);
    return BuildingSpaceComponent;
    var _a, _b;
}());
//# sourceMappingURL=F:/CALM/src/building-space.component.js.map

/***/ }),

/***/ 404:
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
            template: __webpack_require__(884),
            styles: [__webpack_require__(864)]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
//# sourceMappingURL=F:/CALM/src/contact.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_space_service__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_post__ = __webpack_require__(698);
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
    DoctorSpaceComponent.prototype.change_submit = function (patient) {
        this.patient_selected = patient;
        this.submitted = !this.submitted;
    };
    DoctorSpaceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-doctor-space',
            template: __webpack_require__(885),
            styles: [__webpack_require__(865)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_space_service__["a" /* DoctorSpaceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_space_service__["a" /* DoctorSpaceService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], DoctorSpaceComponent);
    return DoctorSpaceComponent;
    var _a, _b;
}());
//# sourceMappingURL=F:/CALM/src/doctor-space.component.js.map

/***/ }),

/***/ 406:
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
            template: __webpack_require__(886),
            styles: [__webpack_require__(866)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=F:/CALM/src/home.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_user__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_authentication_service__ = __webpack_require__(21);
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
        console.log("start");
        console.log(document.getElementById('modal'));
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        console.log("destroy");
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
            template: __webpack_require__(887),
            styles: [__webpack_require__(867)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=F:/CALM/src/login.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__ = __webpack_require__(21);
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
            template: __webpack_require__(892),
            styles: [__webpack_require__(872)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object])
    ], MedicalFileComponent);
    return MedicalFileComponent;
    var _a;
}());
//# sourceMappingURL=F:/CALM/src/medical-file.component.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DialogComponent = (function () {
    function DialogComponent() {
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DialogComponent.prototype.onClickedExit = function () {
        this.close.emit('event');
    };
    DialogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dlg',
            template: "\n    <div class=\"dialog\">\n        <header>\n          <div class=\"title\">Dialog box</div>\n          <div class=\"exit-button\" (click)=\"onClickedExit()\">x</div>\n        </header>\n        <p>Hello, I'm a dialog box!</p>\n    </div>\n    ",
            styles: ["\n        .dialog {\n            height: 300px;\n            width: 250px;\n            position: absolute;\n            border: 1px solid black;\n            border-radius: 5px;\n            overflow: hidden;\n            position: fixed;\n            left: calc(50% - 125px);\n            top: 100px;\n            z-index: 1000;\n            background: #fff;\n        }\n        .dialog p {\n            text-align: center;\n        }\n        .dialog header {\n            border-bottom: 1px solid black;\n            font-size: 12px;\n            padding: 5px;\n            display: flex;\n        }\n        .dialog header .title {\n            flex-grow: 1;\n            cursor: default;\n        }\n        .dialog header .exit-button {\n            cursor: pointer;\n            padding: 0 5px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], DialogComponent);
    return DialogComponent;
}());
//# sourceMappingURL=F:/CALM/src/dialog.component.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogAnchorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DialogAnchorDirective = (function () {
    function DialogAnchorDirective(viewContainer, componentFactoryResolver) {
        this.viewContainer = viewContainer;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    DialogAnchorDirective.prototype.createDialog = function (dialogComponent) {
        this.viewContainer.clear();
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(dialogComponent);
        var dialogComponentRef = this.viewContainer.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.close.subscribe(function () {
            dialogComponentRef.destroy();
        });
        return dialogComponentRef;
    };
    DialogAnchorDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[dialogAnchor]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === 'function' && _b) || Object])
    ], DialogAnchorDirective);
    return DialogAnchorDirective;
    var _a, _b;
}());
//# sourceMappingURL=F:/CALM/src/dialoganchor.directive.js.map

/***/ }),

/***/ 411:
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
            template: __webpack_require__(895)
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
//# sourceMappingURL=F:/CALM/src/not-found.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_space_service__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__ = __webpack_require__(21);
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
            template: __webpack_require__(896),
            styles: [__webpack_require__(875)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_space_service__["a" /* DoctorSpaceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_space_service__["a" /* DoctorSpaceService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], OrganisationSpaceComponent);
    return OrganisationSpaceComponent;
    var _a, _b;
}());
//# sourceMappingURL=F:/CALM/src/organisation-space.component.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_users_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_user__ = __webpack_require__(37);
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
        this.image = __webpack_require__(566);
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
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(897),
            styles: [__webpack_require__(876)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_users_service__["a" /* UsersService */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=F:/CALM/src/profile.component.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_users_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_user__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_patient__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_medical_file_service__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_models_autorisation__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_autorisation_service__ = __webpack_require__(263);
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
        this.patient = new __WEBPACK_IMPORTED_MODULE_4__shared_models_patient__["a" /* Patient */](null);
        this.user = new __WEBPACK_IMPORTED_MODULE_3__shared_models_user__["a" /* User */](null);
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
                        console.log('inverse user et observer???');
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
            template: __webpack_require__(898),
            styles: [__webpack_require__(877)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_users_service__["a" /* UsersService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_medical_file_service__["a" /* MedicalFileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_services_medical_file_service__["a" /* MedicalFileService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_autorisation_service__["a" /* AutorisationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__shared_services_autorisation_service__["a" /* AutorisationService */]) === 'function' && _d) || Object])
    ], SettingsComponent);
    return SettingsComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=F:/CALM/src/settings.component.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_user__ = __webpack_require__(37);
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
        this.lat = 50.6315144;
        this.lng = 3.056218;
        this.zoom = 8;
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
            template: __webpack_require__(899),
            styles: [__webpack_require__(878)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b;
}());
//# sourceMappingURL=F:/CALM/src/register.component.js.map

/***/ }),

/***/ 416:
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
//# sourceMappingURL=F:/CALM/src/address.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(21);
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
//# sourceMappingURL=F:/CALM/src/doctor-search.service.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReminderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReminderService = (function () {
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], ReminderService);
    return ReminderService;
    var _a, _b;
}());
//# sourceMappingURL=F:/CALM/src/reminder.service.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_users_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(118);
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
            template: __webpack_require__(900),
            styles: [__webpack_require__(879)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_users_service__["a" /* UsersService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_users_service__["a" /* UsersService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], UsersComponent);
    return UsersComponent;
    var _a, _b;
}());
//# sourceMappingURL=F:/CALM/src/users.js.map

/***/ }),

/***/ 566:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgA3ADcAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A+t+lGaKBQAUZoooAM0Zoo6UAFFFFACmkoooAKWkooABRRRQAtJS0lABRRS0AGaSjNFABS0lLQAlFFFABQaKM0AFFFGaAA0UGgCgAooxRQACiiigAooIooAKOtFAoAKKKKACiig0ALSUUUAFFFGKACiiigAooooADRRRQAdqKMUdBQAUYoooAKKKKACiiigAooxRQAUUYooAMUUUUALSVc0vSLzWbkQWVu88h67RwPcntXoWi/B4ACTVLs5/54239WI/pQB5jRivfbHwNoWnqBHpsLkfxTDzD+ua1E0uzjGEtIFHoIgKAPm+ivou40DTLoETafayf70K5/lXP6p8LtEvwTDHJZSHo0Lcfkc/pigDxMUvSuv8AEPwy1TRUeaAC/thzmIfOB7r/AIZrjyMcEYoAWkoooAKWkooAKBRRQAvSikooAKWkowaACiiigAooooAKKKKACig0UAFdP4N8EXPimfzGJgsEOHmxyx/ur7/yql4T8NS+J9XS2XKwr880n91f8T0Fe82NlBptpFbW0YjgjG1VHYUARaTo9nolottZwLDGOuOrH1J7mrtFFABRmijNABSZpaKADNcb4y+Hlrr8b3VmFttQxnIGFk/3vf3rsqPwoA+ary0m0+5kt7iNoZ4ztZGHINQ17T8RPBy69YteWqAahAueP+Wij+H6+n5V4tgjjoaACjNFFABS0lFABmjNFBoABQKKKACiiigAooooAXNJR2ooAKKK1PDGm/2x4gsbQjKSSjeP9kcn9AaAPX/h54fXQvD8TOmLq6AllyOR/dH4D+ddRSAYGAMAUUAL+FFJS4oAKM0fhRQAUUUYoAOlH4UUmKAFrxL4l+H10TXzLCm22uwZV9A2fmH9fxr2z8K474qaWL3ww04GZLVxID3weD/MH8KAPFs0UUUAGaKKKACiijFABRmijmgAoopaAEoooFABRRRQAV2fwntxN4sDkZ8qB3Ht0X/2auMruPhC4TxRMD/FauB/30h/pQB7HzSUtFACUtFFACc0tHSigA5o5oo7UAFFFFABWZ4mtxdeHdTiIzutpMfXacVp1S1xxFouoOei28hP/fJoA+cetFFFABRRRQAUGiigApfwpKMZoAKMUUCgAooozQACiiigAIro/h7fDT/F1gzHCSMYj/wIED9cVzlPilaCVJEJV0YMpHYjmgD6YoxVDQdVTW9HtL1OBKgJA7N0I/PNX8UAFFHejFABRRR2oAKKKKACijvRQAVzvxAvxYeEtQbOGlTyV99xwf0zXRV5b8YdaEk1ppaNnZ++l+p4Uflk/iKAPNsUYoooAMUUUdKACiiigAoxRSigApBRRQAUUCigAopaKAENFFFAHffC3xUum3jaXdPtt7hsxMx4V/T8f5167XzKCQQR1HcV658P/iAmpxx6dqMgW8X5Y5W6Sj0P+1/OgDvs0UlL/OgAzRmikoAWiiigAooqrqWpW2k2cl1dyrDCg5Zu/sPU0AQ69rcHh/S5r24PyoPlXPLt2UV8+6lqE2q3893OxaWZizEn9B7DpWz4z8XzeKr/AHYMVnGSIYT/AOhH3Nc7QAUUUUAHSgGgmigAoNFFABRR0ozQAUtJS0AJRR1ooAKO9FFABRig0GgAoGcgjg+1bfhvwhqHiebbbR7IFOHuJOEX/E+wr1jw78PdL0AJIYxd3Y6zTDOD/sr0H8/egDI+H2r+I7iOOG9snnsgAFupjscD8fvD/Oa7+kpaADFHWjqKKACiiigCrqdxc21lJJaWv2ycD5Yt4TP4mvDfGGq6zqWof8TeOS3K/cgKlUX6Dv8AWvfKq6hplpq1uYby3juIj/C4zj6elAHzdRXpHij4TvCHuNGYyIOTayH5v+Anv9DXnMsLwSNHIjRyKcMrDBB9xQA2iiigAoooNABRRRQAUCgUlAC0UUUAFFFFABRRQaACu38D/DyTXSl7fhobDOVTo0v09B70fD3wN/bswv71CLCJvlQj/XMO30HevY1UIqqoCqOAAOBQBHa2kNlAkEEaxRIMKiDAAqWikoAXFFGKKADFFHaigAooooAKKKKACuY8X+BrTxPCZFAt79R8kwH3vZvUV09FAHzfqml3OjXslrdxGKZDyD0I9R6iqnSvfPGHhK38VWGxsR3ceTDNjofQ+xrwq+sZ9Mu5bW5jMU0TbWU9qAIDQaMcUUAFBo70UAFGaKMUAFFLSUAHaiiigArc8H+GZPFGrpbjK26fPNIP4V/xPQViKpdgqjJJwABXvPgfw2PDWhxxOoF3L+8mP+16fh/jQBuWtrFZW0dvBGI4Y1Coi9ABUtFFAAaKCaKADvRRnFFABRR60ZoAKKKKACiiigAooooADXEfErwgNasDqFsmb63X5gvWRPT6jtXb5o9qAPmTpRXW/Ejwz/YOtGeFMWd0S6Y6K38S/rn8a5LtQAYoNFBoAKKKKACiiloASjpRRQB2Hwx0Eav4gFxIu63sx5h44L/wj+Z/Cva81ynw00YaV4YhkZcTXR85vofuj8ufxrq6AE7UtFFABRRRQAlLRRQAlLzRRigAooooAKKKKACiiigA70UUUAYPjbQh4g8PXEAXdOg82HHXcO348j8a8CIIJBHPpX03Xg3j/Rxovie6jRdsMp86PHo3UfnkUAc7zRRQaACjmjrQP880AFLSUUAHWrWl2TalqVrar96aRY/zOKq11nwwsftfi63YjKwI0p/LA/UigD2yGJYIkjQbURQqj0A6U+iigA6UUlLQAn40tFFACUtFFAB1ooooAKKKKACiiigAooooAKKKDQAV5x8ZNND2djfgfNG5iYj0IyP5H869HrnfiBZfb/COoKBlkQSj/gJB/lmgDwaiig0AAooozQAUUDvQKACvRfgzb7tQ1GfHKRKn5kn/ANlrzrsK9T+DCgWuqN3Lxj8g1AHpFJRmlFABRSUvpQAUUGgUAHeijvR2oAKKD3oxgUAFFAo7UAFFFB4oAKKMUZ60AFFBooAKralb/a9OuoSM+ZEyfmCKs4o60AfMhHNFS3aBLuZR0DkD86ixmgAox7UUuKAP/9k="

/***/ }),

/***/ 567:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 567;


/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(688);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=F:/CALM/src/main.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_autorisation_service__ = __webpack_require__(263);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertInfoComponent = (function () {
    function AlertInfoComponent(autorisationService) {
        this.autorisationService = autorisationService;
        this.demands = [];
    }
    AlertInfoComponent.prototype.ngOnInit = function () {
        console.log("start");
        var _this = this;
        setTimeout(function () {
            console.log("hello");
            _this.getAutorisationDemands();
        }, 1000);
    };
    AlertInfoComponent.prototype.getAutorisationDemands = function () {
        var _this = this;
        this.autorisationService.getAutorisationDemands(this.user._id)
            .subscribe(function (demands) {
            if (demands.length) {
                _this.alertNumber = demands.length;
                _this.demands = demands;
                _this.demands.forEach(function (element) {
                    element.Created_at = new Date(element.Created_at);
                    var year = element.Created_at.getFullYear();
                    var month = element.Created_at.getMonth() + 1;
                    var day = element.Created_at.getDate();
                    var hour = element.Created_at.getHours() - 1;
                    var minute = element.Created_at.getMinutes();
                    var newDate = new Date(year, month, day, hour, minute);
                    element.Created_at = newDate;
                });
            }
            else {
                _this.alertNumber = 0;
            }
        });
    };
    AlertInfoComponent.prototype.liClick = function (event) {
        event.stopPropagation();
        return false;
    };
    AlertInfoComponent.prototype.autoriserClick = function (demand_id) {
        if (confirm('vous etes sure?')) {
            console.log('yes');
            this.autorisationService.acceptAutorisation(demand_id).subscribe(function (info) {
                console.log(info);
            });
            for (var _i = 0, _a = this.demands; _i < _a.length; _i++) {
                var n = _a[_i];
                if (n['_id'] === demand_id) {
                    n['confirm'] = true;
                }
            }
            this.alertNumber = this.alertNumber - 1;
        }
        else {
            console.log('no');
        }
    };
    AlertInfoComponent.prototype.nonAutoriserClick = function (demand_id) {
        if (confirm('vous etes sure?')) {
            console.log('yes');
            // this.openDialogBox();
            console.log('it has been done:' + demand_id);
            this.autorisationService.refuseAutorisation(demand_id).subscribe(function (info) {
                console.log(info);
            });
            for (var _i = 0, _a = this.demands; _i < _a.length; _i++) {
                var n = _a[_i];
                if (n['_id'] === demand_id) {
                    n['confirm'] = true;
                }
            }
            this.alertNumber = this.alertNumber - 1;
        }
        else {
            console.log('no');
        }
    };
    AlertInfoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'alert-info',
            template: __webpack_require__(881),
            styles: [__webpack_require__(861)],
            inputs: ['user']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_autorisation_service__["a" /* AutorisationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_autorisation_service__["a" /* AutorisationService */]) === 'function' && _a) || Object])
    ], AlertInfoComponent);
    return AlertInfoComponent;
    var _a;
}());
//# sourceMappingURL=F:/CALM/src/alert-info.component.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_users_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__users_users__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__not_found_not_found__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__register_register_component__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_services_authentication_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__profile_profile_component__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng_trim_value_accessor__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__medical_file_medical_file_component__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__medical_file_doctor_profile_doctor_profile_component__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__medical_file_current_treatment_current_treatment_component__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_services_medical_file_service__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__profile_settings_settings_component__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__medical_file_calendar_calendar_component__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__medical_file_reminder_reminder_component__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__doctor_space_doctor_space_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__building_space_building_space_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_services_doctor_space_service__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__medical_file_google_map_google_map_component__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angular2_google_maps_core__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__medical_file_posts_posts_component__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__organisation_space_organisation_space_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__shared_services_doctor_search_service__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__shared_services_reminder_service__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__medical_file_reminder_dialog_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__medical_file_reminder_dialoganchor_directive__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__shared_services_autorisation_service__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__alert_alert_info_component__ = __webpack_require__(687);
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
                __WEBPACK_IMPORTED_MODULE_11__not_found_not_found__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_13__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_17__medical_file_medical_file_component__["a" /* MedicalFileComponent */],
                __WEBPACK_IMPORTED_MODULE_18__medical_file_doctor_profile_doctor_profile_component__["a" /* DoctorProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_19__medical_file_current_treatment_current_treatment_component__["a" /* CurrentTreatmentComponent */],
                __WEBPACK_IMPORTED_MODULE_21__profile_settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__medical_file_calendar_calendar_component__["a" /* CalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_23__medical_file_reminder_reminder_component__["a" /* ReminderComponent */],
                __WEBPACK_IMPORTED_MODULE_24__doctor_space_doctor_space_component__["a" /* DoctorSpaceComponent */],
                __WEBPACK_IMPORTED_MODULE_25__building_space_building_space_component__["a" /* BuildingSpaceComponent */],
                __WEBPACK_IMPORTED_MODULE_30__organisation_space_organisation_space_component__["a" /* OrganisationSpaceComponent */],
                __WEBPACK_IMPORTED_MODULE_27__medical_file_google_map_google_map_component__["a" /* GoogleMapComponent */],
                __WEBPACK_IMPORTED_MODULE_29__medical_file_posts_posts_component__["a" /* PostsComponent */],
                __WEBPACK_IMPORTED_MODULE_33__medical_file_reminder_dialog_component__["a" /* DialogComponent */],
                __WEBPACK_IMPORTED_MODULE_34__medical_file_reminder_dialoganchor_directive__["a" /* DialogAnchorDirective */],
                __WEBPACK_IMPORTED_MODULE_36__alert_alert_info_component__["a" /* AlertInfoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_routing__["a" /* appRouting */],
                __WEBPACK_IMPORTED_MODULE_16_ng_trim_value_accessor__["a" /* TrimValueAccessorModule */],
                __WEBPACK_IMPORTED_MODULE_28_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDVDZy1qXBBu6ctMvyYcSONy3-cs5PjYNU'
                })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__shared_services_users_service__["a" /* UsersService */],
                __WEBPACK_IMPORTED_MODULE_14__shared_services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_20__shared_services_medical_file_service__["a" /* MedicalFileService */],
                __WEBPACK_IMPORTED_MODULE_26__shared_services_doctor_space_service__["a" /* DoctorSpaceService */],
                __WEBPACK_IMPORTED_MODULE_31__shared_services_doctor_search_service__["a" /* DoctorSearchService */],
                __WEBPACK_IMPORTED_MODULE_32__shared_services_reminder_service__["a" /* ReminderService */],
                __WEBPACK_IMPORTED_MODULE_35__shared_services_autorisation_service__["a" /* AutorisationService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=F:/CALM/src/app.module.js.map

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_users__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__not_found_not_found__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register_component__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__medical_file_medical_file_component__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_settings_settings_component__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__doctor_space_doctor_space_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__building_space_building_space_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__organisation_space_organisation_space_component__ = __webpack_require__(412);
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
    { path: 'building-space', component: __WEBPACK_IMPORTED_MODULE_13__building_space_building_space_component__["a" /* BuildingSpaceComponent */] },
    { path: 'organisation-space', component: __WEBPACK_IMPORTED_MODULE_14__organisation_space_organisation_space_component__["a" /* OrganisationSpaceComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_11__profile_settings_settings_component__["a" /* SettingsComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__not_found_not_found__["a" /* NotFoundComponent */] }
];
var appRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=F:/CALM/src/app.routing.js.map

/***/ }),

/***/ 690:
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
            template: __webpack_require__(888),
            styles: [__webpack_require__(868)]
        }), 
        __metadata('design:paramtypes', [])
    ], CalendarComponent);
    return CalendarComponent;
}());
//# sourceMappingURL=F:/CALM/src/calendar.component.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
    function CurrentTreatmentComponent() {
    }
    CurrentTreatmentComponent.prototype.ngOnInit = function () {
    };
    CurrentTreatmentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-current-treatment',
            template: __webpack_require__(889),
            styles: [__webpack_require__(869)]
        }), 
        __metadata('design:paramtypes', [])
    ], CurrentTreatmentComponent);
    return CurrentTreatmentComponent;
}());
//# sourceMappingURL=F:/CALM/src/current-treatment.component.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_medical_file_service__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_patient__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_authentication_service__ = __webpack_require__(21);
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
        this.image = __webpack_require__(566);
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
            template: __webpack_require__(890),
            styles: [__webpack_require__(870)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_medical_file_service__["a" /* MedicalFileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_medical_file_service__["a" /* MedicalFileService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], DoctorProfileComponent);
    return DoctorProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=F:/CALM/src/doctor-profile.component.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_search_service__ = __webpack_require__(417);
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
    function GoogleMapComponent(DoctorSearch) {
        this.DoctorSearch = DoctorSearch;
        this.lat = 50.6315144;
        this.lng = 3.056218;
        this.zoom = 8;
        this.response = [];
    }
    // coordonate_list =[{'lng': 50.6315,'lat': 3.056, 'display': false,'id':0},{'lng': 50.6315,'lat': 3.156, 'display': false,'id':1}];
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
            template: __webpack_require__(891),
            styles: [__webpack_require__(871)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_search_service__["a" /* DoctorSearchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_search_service__["a" /* DoctorSearchService */]) === 'function' && _a) || Object])
    ], GoogleMapComponent);
    return GoogleMapComponent;
    var _a;
}());
//# sourceMappingURL=F:/CALM/src/google-map.component.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_medical_file_service__ = __webpack_require__(183);
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
        this.posts = [];
    }
    PostsComponent.prototype.ngOnInit = function () {
        this.get_posts();
    };
    PostsComponent.prototype.get_posts = function () {
        var _this = this;
        this.medicalService.getCurrentPatient()
            .subscribe(function (patient) {
            _this.medicalService.get_posts(patient._id)
                .subscribe(function (posts) { _this.posts = posts; });
        });
    };
    PostsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(893),
            styles: [__webpack_require__(873)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_medical_file_service__["a" /* MedicalFileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_medical_file_service__["a" /* MedicalFileService */]) === 'function' && _a) || Object])
    ], PostsComponent);
    return PostsComponent;
    var _a;
}());
//# sourceMappingURL=F:/CALM/src/posts.component.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_reminder_service__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_users_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_user__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_authentication_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dialoganchor_directive__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialog_component__ = __webpack_require__(409);
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
    function ReminderComponent(reminderService, userService, authentication) {
        this.reminderService = reminderService;
        this.userService = userService;
        this.authentication = authentication;
        this.rappeles = [];
    }
    ReminderComponent.prototype.openDialogBox = function () {
        this.dialogAnchor.createDialog(__WEBPACK_IMPORTED_MODULE_6__dialog_component__["a" /* DialogComponent */]);
    };
    ReminderComponent.prototype.ngOnInit = function () {
        this.isLogged = this.authentication.isLoggedIn();
        if (this.isLogged) {
            this.getUser();
        }
    };
    ReminderComponent.prototype.liClick = function (event) {
        event.stopPropagation();
        return false;
    };
    ReminderComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getProfile()
            .subscribe(function (user) {
            _this.user = new __WEBPACK_IMPORTED_MODULE_3__shared_models_user__["a" /* User */](user);
            console.log(_this.user);
            _this.getRappels(_this.user._id);
        });
    };
    ReminderComponent.prototype.getRappels = function (userId) {
        var _this = this;
        this.reminderService.getRappel(userId)
            .subscribe(function (rappeles) {
            _this.rappeles = rappeles;
            _this.rappelesNum = _this.rappeles.length;
            console.log(_this.rappeles);
        });
    };
    ReminderComponent.prototype.reminderDone = function (reminder_id) {
        if (confirm('vous etes sure?')) {
            console.log('yes');
            // this.openDialogBox();
            console.log('it has been done:' + reminder_id);
            console.log(this.rappeles[0]['expire']);
            this.reminderService.reminderDone(reminder_id).subscribe(function (info) {
                console.log(info);
            });
            for (var _i = 0, _a = this.rappeles; _i < _a.length; _i++) {
                var n = _a[_i];
                if (n['_id'] === reminder_id) {
                    n['expire'] = true;
                }
            }
            this.rappelesNum = this.rappelesNum - 1;
        }
        else {
            console.log('no');
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__dialoganchor_directive__["a" /* DialogAnchorDirective */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__dialoganchor_directive__["a" /* DialogAnchorDirective */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__dialoganchor_directive__["a" /* DialogAnchorDirective */]) === 'function' && _a) || Object)
    ], ReminderComponent.prototype, "dialogAnchor", void 0);
    ReminderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reminder',
            template: __webpack_require__(894),
            styles: [__webpack_require__(874)],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_6__dialog_component__["a" /* DialogComponent */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_reminder_service__["a" /* ReminderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_reminder_service__["a" /* ReminderService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_users_service__["a" /* UsersService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _d) || Object])
    ], ReminderComponent);
    return ReminderComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=F:/CALM/src/reminder.component.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(37);
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
            this.confirm = autorisationInfo.confirm;
        }
        else {
            this.user = new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */](null);
            this.observer = new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */](null);
            this.type = 'READ';
            this.subject = 'POST';
            this.valide = false;
            this.confirm = false;
        }
    }
    return Autorisation;
}());
//# sourceMappingURL=F:/CALM/src/autorisation.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__doctor__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service__ = __webpack_require__(699);
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
//# sourceMappingURL=F:/CALM/src/building.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });

var Post = (function () {
    function Post(postInfo) {
        if (postInfo) {
            this._id = postInfo._id;
            this.sender = new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */](postInfo.sender);
            for (var _i = 0, _a = postInfo.receiver; _i < _a.length; _i++) {
                var elt = _a[_i];
                this.receiver.push(new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */](elt));
            }
            this.text = postInfo.text;
            this.type = postInfo.type;
        }
        else {
            this._id = "";
            this.sender = new __WEBPACK_IMPORTED_MODULE_0__user__["a" /* User */](null);
            this.text = "";
            this.Created_at = null;
        }
    }
    return Post;
}());
//# sourceMappingURL=F:/CALM/src/post.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__doctor__ = __webpack_require__(261);
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
//# sourceMappingURL=F:/CALM/src/service.js.map

/***/ }),

/***/ 700:
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
//# sourceMappingURL=F:/CALM/src/environment.js.map

/***/ }),

/***/ 860:
/***/ (function(module, exports) {

module.exports = ".container-fluid {\r\n    padding: 60px 50px;\r\n}\r\n\r\nvideo {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.video-container {\r\n    position: relative;\r\n    padding-bottom: 56.25%;\r\n    padding-top: 30px;\r\n    height: 0;\r\n    overflow: hidden;\r\n}\r\n\r\n.video-container iframe,\r\n.video-container object,\r\n.video-container embed {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.video-wrapper {\r\n\r\n    width: 1200px;\r\n    max-width: 100%;\r\n}\r\n"

/***/ }),

/***/ 861:
/***/ (function(module, exports) {

module.exports = "#infoSign .badge {\r\n  background: red;\r\n}\r\n#alertTable {\r\n  width: 300px;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  max-height: 600px;\r\n  background-color: white;\r\n}\r\n#alertTable li {\r\n  color: #000000 !important;\r\n}\r\n\r\n.dropdown-menu li {\r\n  border-top:1px solid black;\r\n  padding-bottom:3px;\r\n  opacity: 0.7;\r\n}\r\n\r\n.dropdown-menu .liConfirm{\r\n  opacity: 1;\r\n}\r\n.dropdown-menu .buttonConfirm{\r\n  display: none;\r\n}\r\n"

/***/ }),

/***/ 862:
/***/ (function(module, exports) {

module.exports = "/*.active {\n  color: white !important;\n}*/\n\n.dropdown-menu {\n  background-color: grey;\n}\n#infoSign button{\n  margin-left: 10px;\n}\n"

/***/ }),

/***/ 863:
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n  background-color: white;\r\n  color: black;\r\n}\r\n"

/***/ }),

/***/ 864:
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ 865:
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  background-color: white;\n  color: black;\n}\n"

/***/ }),

/***/ 866:
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ 867:
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched {\r\n  border-left: 5px solid red;\r\n}\r\n\r\ninput.ng-valid.ng-touched {\r\n  border-left: 5px solid green;\r\n}\r\n\r\nform {\r\n  text-align: left;\r\n  margin-left: 10px;\r\n}\r\n\r\n.modal-body {\r\n  padding: 100px 25px;\r\n  position: relative;\r\n}\r\n\r\n.jumbotron {\r\n  background-color: white;\r\n  color: black;\r\n}\r\n\r\n#myModalHorizontal {\r\n  top: 10%;\r\n}\r\n"

/***/ }),

/***/ 868:
/***/ (function(module, exports) {

module.exports = ".col-xs-1 {\n  width: 13.33333333%;\n}\n"

/***/ }),

/***/ 869:
/***/ (function(module, exports) {

module.exports = ".list-item {\n  text-align: left;\n}\n"

/***/ }),

/***/ 870:
/***/ (function(module, exports) {

module.exports = ".well-sm {\n  padding: 9px;\n  border-radius: 3px;\n  margin-right: 15px;\n}\n"

/***/ }),

/***/ 871:
/***/ (function(module, exports) {

module.exports = ".agm-map {\n  height: 300px;\n}\n"

/***/ }),

/***/ 872:
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n  background-color: white;\r\n  color: black;\r\n}\r\n\r\n\r\n.class{\r\n  background:grey;\r\n  color:white;\r\n}\r\n"

/***/ }),

/***/ 873:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 874:
/***/ (function(module, exports) {

module.exports = ".btn-group {\r\n  position: fixed;\r\n  z-index: 10000;\r\n  top:50px;\r\n}\r\n.dropdown-menu {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  max-height: 600px;\r\n\r\n}\r\n.dropdown-menu li {\r\n  border-top:1px solid black;\r\n  padding-bottom:3px;\r\n  background: #66CCFF;\r\n}\r\n\r\n.dropdown-menu .liNonDisplay{\r\n  display: none;\r\n}\r\n.dropdown-menu li:hover{\r\n  background: #333399;\r\n}\r\n.dropdown-menu li .displaybox {\r\n  margin-left: 10px;\r\n  width: 100%;\r\n  float: left;\r\n}\r\n.dropdown-menu li button {\r\n  float: right;\r\n}\r\n\r\n.btn-primary {\r\n  width:300px;\r\n}\r\n/*.dropdown-menu div{*/\r\n  /*width:10%;*/\r\n  /*display: inline-block;*/\r\n/*}*/\r\n/*.list-item {*/\r\n  /*text-align: left;*/\r\n/*}*/\r\n/*[dialogAnchor] {*/\r\n  /*display: none;*/\r\n/*}*/\r\n\r\n/*#animationTipBox {*/\r\n  /*font-family: \"Microsoft Yahei\",\"微软雅黑\",Arial,Tahoma;*/\r\n  /*font-size: 14px;*/\r\n  /*width: 250px;*/\r\n  /*height: auto;*/\r\n  /*background-color: #fff;*/\r\n  /*border-radius: 8px;*/\r\n  /*position: fixed;*/\r\n  /*left: 50%;*/\r\n  /*top: 50%;*/\r\n  /*margin-left: -125px;*/\r\n  /*margin-top: -85px;*/\r\n  /*z-index: 1001;*/\r\n  /*-webkit-animation: alertAnimation .3s ease-in-out 0 1;*/\r\n  /*-moz-animation: alertAnimation .3s ease-in-out 0 1;*/\r\n  /*animation: alertAnimation .3s ease-in-out 0 1*/\r\n/*}*/\r\n\r\n/*#sm-load {*/\r\n  /*width: 20px;*/\r\n  /*height: 20px;*/\r\n  /*padding: 0;*/\r\n  /*background: 0;*/\r\n  /*padding: 0;*/\r\n  /*position: relative;*/\r\n  /*float: left;*/\r\n  /*vertical-align: middle;*/\r\n  /*margin-right: 5px;*/\r\n  /*top: 0;*/\r\n  /*left: 0;*/\r\n  /*margin: 0;*/\r\n  /*-webkit-animation: none;*/\r\n  /*-moz-animation: none;*/\r\n  /*animation: none*/\r\n/*}*/\r\n\r\n/*#sm-load .load {*/\r\n  /*width: 20px;*/\r\n  /*height: 20px;*/\r\n  /*border: 0;*/\r\n  /*margin: 0 auto;*/\r\n  /*top: 0*/\r\n/*}*/\r\n\r\n/*#sm-load .icon_box {*/\r\n  /*margin: 0 auto*/\r\n/*}*/\r\n\r\n/*#sm-load .load .cirBox1,#sm-load .load .cirBox2,#sm-load .load .cirBox3 {*/\r\n  /*width: 20px;*/\r\n  /*height: 20px;*/\r\n  /*position: absolute;*/\r\n  /*left: 0;*/\r\n  /*top: 0*/\r\n/*}*/\r\n\r\n/*#sm-load .load .cirBox1>div,#sm-load .load .cirBox2>div,#sm-load .load .cirBox3>div {*/\r\n  /*width: 4px;*/\r\n  /*height: 4px;*/\r\n  /*border-radius: 100%;*/\r\n  /*background-color: #fff;*/\r\n  /*position: absolute*/\r\n/*}*/\r\n\r\n/*#sm-load .load .icon_box {*/\r\n  /*width: 20px;*/\r\n  /*height: 20px*/\r\n/*}*/\r\n\r\n/*#animationTipBox .icon {*/\r\n  /*position: relative;*/\r\n  /*width: 80px;*/\r\n  /*height: 80px;*/\r\n  /*border-radius: 50px;*/\r\n  /*border: 4px solid #6c3;*/\r\n  /*margin: 15px auto 5px auto*/\r\n/*}*/\r\n\r\n/*#animationTipBox .icon_box {*/\r\n  /*width: 80px;*/\r\n  /*height: 80px;*/\r\n  /*margin: 0 auto;*/\r\n  /*text-align: center;*/\r\n  /*position: relative*/\r\n/*}*/\r\n\r\n/*.tip .icon {*/\r\n  /*width: 80px;*/\r\n  /*height: 80px;*/\r\n  /*background-color: #6c3;*/\r\n  /*border-radius: 100%;*/\r\n  /*color: #fff;*/\r\n  /*font-size: 80px;*/\r\n  /*text-align: center;*/\r\n  /*line-height: 80px*/\r\n/*}*/\r\n\r\n/*#animationTipBox .lose .icon {*/\r\n  /*border-color: #ff9090*/\r\n/*}*/\r\n\r\n/*#animationTipBox .lose .icon_box {*/\r\n  /*-webkit-animation: lose_Animation .5s;*/\r\n  /*-moz-animation: lose_Animation .5s;*/\r\n  /*animation: lose_Animation .5s*/\r\n/*}*/\r\n\r\n/*#animationTipBox .dec_txt {*/\r\n  /*font-size: 16px;*/\r\n  /*text-align: center;*/\r\n  /*color: #666;*/\r\n  /*line-height: 26px;*/\r\n  /*height: 26px;*/\r\n  /*padding: 5px 0 10px 0*/\r\n/*}*/\r\n\r\n/*.success .line_short {*/\r\n  /*width: 25px;*/\r\n  /*height: 5px;*/\r\n  /*position: absolute;*/\r\n  /*left: 14px;*/\r\n  /*top: 46px;*/\r\n  /*border-radius: 4px;*/\r\n  /*background-color: #6c3;*/\r\n  /*-webkit-transform: rotate(45deg);*/\r\n  /*-moz-transform: rotate(45deg);*/\r\n  /*transform: rotate(45deg);*/\r\n  /*-webkit-animation: success_short_Animation .65s;*/\r\n  /*-moz-animation: success_short_Animation .65s;*/\r\n  /*animation: success_short_Animation .65s*/\r\n/*}*/\r\n\r\n/*.success .line_long {*/\r\n  /*width: 47px;*/\r\n  /*height: 5px;*/\r\n  /*position: absolute;*/\r\n  /*right: 8px;*/\r\n  /*top: 38px;*/\r\n  /*border-radius: 4px;*/\r\n  /*background-color: #6c3;*/\r\n  /*-webkit-transform: rotate(-45deg);*/\r\n  /*-moz-transform: rotate(-45deg);*/\r\n  /*transform: rotate(-45deg);*/\r\n  /*-webkit-animation: success_long_Animation .65s;*/\r\n  /*-moz-animation: success_long_Animation .65s;*/\r\n  /*animation: success_long_Animation .65s*/\r\n/*}*/\r\n\r\n/*.lose .line_left,.lose .line_right {*/\r\n  /*width: 47px;*/\r\n  /*height: 5px;*/\r\n  /*position: absolute;*/\r\n  /*left: 17px;*/\r\n  /*top: 37px;*/\r\n  /*border-radius: 4px;*/\r\n  /*background-color: #ff9090;*/\r\n  /*-webkit-transform: rotate(45deg);*/\r\n  /*-moz-transform: rotate(45deg);*/\r\n  /*transform: rotate(45deg)*/\r\n/*}*/\r\n\r\n/*.lose .line_right {*/\r\n  /*right: 11px;*/\r\n  /*top: 37px;*/\r\n  /*-webkit-transform: rotate(-45deg);*/\r\n  /*-moz-transform: rotate(-45deg);*/\r\n  /*transform: rotate(-45deg)*/\r\n/*}*/\r\n\r\n/*@keyframes alertAnimation {*/\r\n  /*0% {*/\r\n    /*transform: scale(0.5)*/\r\n  /*}*/\r\n\r\n  /*45% {*/\r\n    /*transform: scale(1.25)*/\r\n  /*}*/\r\n\r\n  /*80% {*/\r\n    /*transform: scale(0.95)*/\r\n  /*}*/\r\n\r\n  /*100% {*/\r\n    /*transform: scale(1)*/\r\n  /*}*/\r\n/*}*/\r\n\r\n/*@-webkit-keyframes alertAnimation {*/\r\n  /*0% {*/\r\n    /*-webkit-transform: scale(0.5)*/\r\n  /*}*/\r\n\r\n  /*45% {*/\r\n    /*-webkit-transform: scale(1.25)*/\r\n  /*}*/\r\n\r\n  /*80% {*/\r\n    /*-webkit-transform: scale(0.95)*/\r\n  /*}*/\r\n\r\n  /*100% {*/\r\n    /*-webkit-transform: scale(1)*/\r\n  /*}*/\r\n/*}*/\r\n\r\n/*@-moz-keyframes alertAnimation {*/\r\n  /*0% {*/\r\n    /*-moz-transform: scale(0.5)*/\r\n  /*}*/\r\n\r\n  /*45% {*/\r\n    /*-moz-transform: scale(1.25)*/\r\n  /*}*/\r\n\r\n  /*80% {*/\r\n    /*-moz-transform: scale(0.95)*/\r\n  /*}*/\r\n\r\n  /*100% {*/\r\n    /*-moz-transform: scale(1)*/\r\n  /*}*/\r\n/*}*/\r\n\r\n/*@-webkit-keyframes success_short_Animation {*/\r\n  /*0% {*/\r\n    /*width: 0;*/\r\n    /*left: 1px;*/\r\n    /*top: 19px*/\r\n  /*}*/\r\n\r\n  /*54% {*/\r\n    /*width: 0;*/\r\n    /*left: 1px;*/\r\n    /*top: 19px*/\r\n  /*}*/\r\n\r\n  /*70% {*/\r\n    /*width: 50px;*/\r\n    /*left: -4px;*/\r\n    /*top: 37px*/\r\n  /*}*/\r\n\r\n  /*84% {*/\r\n    /*width: 17px;*/\r\n    /*left: 21px;*/\r\n    /*top: 48px*/\r\n  /*}*/\r\n\r\n  /*100% {*/\r\n    /*width: 25px;*/\r\n    /*left: 14px;*/\r\n    /*top: 45px*/\r\n  /*}*/\r\n/*}*/\r\n\r\n/*@-moz-keyframes success_short_Animation {*/\r\n  /*0% {*/\r\n    /*width: 0;*/\r\n    /*left: 1px;*/\r\n    /*top: 19px*/\r\n  /*}*/\r\n\r\n  /*54% {*/\r\n    /*width: 0;*/\r\n    /*left: 1px;*/\r\n    /*top: 19px*/\r\n  /*}*/\r\n\r\n  /*70% {*/\r\n    /*width: 50px;*/\r\n    /*left: -4px;*/\r\n    /*top: 37px*/\r\n  /*}*/\r\n\r\n  /*84% {*/\r\n    /*width: 17px;*/\r\n    /*left: 21px;*/\r\n    /*top: 48px*/\r\n  /*}*/\r\n\r\n  /*100% {*/\r\n    /*width: 25px;*/\r\n    /*left: 14px;*/\r\n    /*top: 45px*/\r\n  /*}*/\r\n/*}*/\r\n\r\n/*@keyframes success_short_Animation {*/\r\n  /*0% {*/\r\n    /*width: 0;*/\r\n    /*left: 1px;*/\r\n    /*top: 19px*/\r\n  /*}*/\r\n\r\n  /*54% {*/\r\n    /*width: 0;*/\r\n    /*left: 1px;*/\r\n    /*top: 19px*/\r\n  /*}*/\r\n\r\n  /*70% {*/\r\n    /*width: 50px;*/\r\n    /*left: -4px;*/\r\n    /*top: 37px*/\r\n  /*}*/\r\n\r\n  /*84% {*/\r\n    /*width: 17px;*/\r\n    /*left: 21px;*/\r\n    /*top: 48px*/\r\n  /*}*/\r\n\r\n  /*100% {*/\r\n    /*width: 25px;*/\r\n    /*left: 14px;*/\r\n    /*top: 45px*/\r\n  /*}*/\r\n/*}*/\r\n\r\n/*@-webkit-keyframes success_long_Animation {*/\r\n  /*0% {*/\r\n    /*width: 0;*/\r\n    /*right: 46px;*/\r\n    /*top: 54px*/\r\n  /*}*/\r\n\r\n  /*65% {*/\r\n    /*width: 0;*/\r\n    /*right: 46px;*/\r\n    /*top: 54px*/\r\n  /*}*/\r\n\r\n  /*84% {*/\r\n    /*width: 55px;*/\r\n    /*right: 0;*/\r\n    /*top: 35px*/\r\n  /*}*/\r\n\r\n  /*100% {*/\r\n    /*width: 47px;*/\r\n    /*right: 8px;*/\r\n    /*top: 38px*/\r\n  /*}*/\r\n/*}*/\r\n\r\n/*@-moz-keyframes success_long_Animation {*/\r\n  /*0% {*/\r\n    /*width: 0;*/\r\n    /*right: 46px;*/\r\n    /*top: 54px*/\r\n  /*}*/\r\n\r\n  /*65% {*/\r\n    /*width: 0;*/\r\n    /*right: 46px;*/\r\n    /*top: 54px*/\r\n  /*}*/\r\n\r\n  /*84% {*/\r\n    /*width: 55px;*/\r\n    /*right: 0;*/\r\n    /*top: 35px*/\r\n  /*}*/\r\n\r\n  /*100% {*/\r\n    /*width: 47px;*/\r\n    /*right: 8px;*/\r\n    /*top: 38px*/\r\n  /*}*/\r\n/*}*/\r\n\r\n/*@keyframes success_long_Animation {*/\r\n  /*0% {*/\r\n    /*width: 0;*/\r\n    /*right: 46px;*/\r\n    /*top: 54px*/\r\n  /*}*/\r\n\r\n  /*65% {*/\r\n    /*width: 0;*/\r\n    /*right: 46px;*/\r\n    /*top: 54px*/\r\n  /*}*/\r\n\r\n  /*84% {*/\r\n    /*width: 55px;*/\r\n    /*right: 0;*/\r\n    /*top: 35px*/\r\n  /*}*/\r\n\r\n  /*100% {*/\r\n    /*width: 47px;*/\r\n    /*right: 8px;*/\r\n    /*top: 38px*/\r\n  /*}*/\r\n/*}*/\r\n\r\n/*@-webkit-keyframes lose_Animation {*/\r\n  /*0% {*/\r\n    /*-webkit-transform: scale(0.6);*/\r\n    /*opacity: .2*/\r\n  /*}*/\r\n\r\n  /*50% {*/\r\n    /*-webkit-transform: scale(0.6);*/\r\n    /*opacity: .5*/\r\n  /*}*/\r\n\r\n  /*80% {*/\r\n    /*-webkit-transform: scale(1.15);*/\r\n    /*opacity: .8*/\r\n  /*}*/\r\n\r\n  /*100% {*/\r\n    /*-webkit-transform: scale(1);*/\r\n    /*opacity: 1.0*/\r\n  /*}*/\r\n/*}*/\r\n\r\n/*@-moz-keyframes lose_Animation {*/\r\n  /*0% {*/\r\n    /*-moz-transform: scale(0.6);*/\r\n    /*opacity: .2*/\r\n  /*}*/\r\n\r\n  /*50% {*/\r\n    /*-moz-transform: scale(0.6);*/\r\n    /*opacity: .5*/\r\n  /*}*/\r\n\r\n  /*80% {*/\r\n    /*-moz-transform: scale(1.15);*/\r\n    /*opacity: .8*/\r\n  /*}*/\r\n\r\n  /*100% {*/\r\n    /*-moz-transform: scale(1);*/\r\n    /*opacity: 1.0*/\r\n  /*}*/\r\n/*}*/\r\n\r\n/*@keyframes lose_Animation {*/\r\n  /*0% {*/\r\n    /*transform: scale(0.6);*/\r\n    /*opacity: .2*/\r\n  /*}*/\r\n\r\n  /*50% {*/\r\n    /*transform: scale(0.6);*/\r\n    /*opacity: .5*/\r\n  /*}*/\r\n\r\n  /*80% {*/\r\n    /*transform: scale(1.15);*/\r\n    /*opacity: .8*/\r\n  /*}*/\r\n\r\n  /*100% {*/\r\n    /*transform: scale(1);*/\r\n    /*opacity: 1.0*/\r\n  /*}*/\r\n/*}*/\r\n\r\n/*@-webkit-keyframes load_Animation {*/\r\n  /*0% {*/\r\n    /*-webkit-transform: scale(0.6);*/\r\n    /*opacity: .2*/\r\n  /*}*/\r\n\r\n  /*50% {*/\r\n    /*-webkit-transform: scale(0.6);*/\r\n    /*opacity: .5*/\r\n  /*}*/\r\n\r\n  /*80% {*/\r\n    /*-webkit-transform: scale(1.15);*/\r\n    /*opacity: .8*/\r\n  /*}*/\r\n\r\n  /*100% {*/\r\n    /*-webkit-transform: scale(1);*/\r\n    /*opacity: 1.0*/\r\n  /*}*/\r\n/*}*/\r\n\r\n/*@-moz-keyframes load_Animation {*/\r\n  /*0% {*/\r\n    /*-moz-transform: scale(0.6);*/\r\n    /*opacity: .2*/\r\n  /*}*/\r\n\r\n  /*50% {*/\r\n    /*-moz-transform: scale(0.6);*/\r\n    /*opacity: .5*/\r\n  /*}*/\r\n\r\n  /*80% {*/\r\n    /*-moz-transform: scale(1.15);*/\r\n    /*opacity: .8*/\r\n  /*}*/\r\n\r\n  /*100% {*/\r\n    /*-moz-transform: scale(1);*/\r\n    /*opacity: 1.0*/\r\n  /*}*/\r\n/*}*/\r\n\r\n/*@keyframes load_Animation {*/\r\n  /*0% {*/\r\n    /*transform: scale(0.6);*/\r\n    /*opacity: .2*/\r\n  /*}*/\r\n\r\n  /*50% {*/\r\n    /*transform: scale(0.6);*/\r\n    /*opacity: .5*/\r\n  /*}*/\r\n\r\n  /*80% {*/\r\n    /*transform: scale(1.15);*/\r\n    /*opacity: .8*/\r\n  /*}*/\r\n\r\n  /*100% {*/\r\n    /*transform: scale(1);*/\r\n    /*opacity: 1.0*/\r\n  /*}*/\r\n/*}*/\r\n\r\n/*.load {*/\r\n  /*position: relative;*/\r\n  /*width: 60px;*/\r\n  /*height: 80px;*/\r\n  /*border-radius: 50px;*/\r\n  /*border: 4px solid #fff;*/\r\n  /*margin: 15px auto 5px auto;*/\r\n  /*top: 10px*/\r\n/*}*/\r\n\r\n/*.load .icon_box {*/\r\n  /*margin: 10px auto;*/\r\n  /*width: 60px;*/\r\n  /*height: 60px*/\r\n/*}*/\r\n\r\n/*.load .cirBox1,.load .cirBox2,.load .cirBox3 {*/\r\n  /*width: 60px;*/\r\n  /*height: 60px;*/\r\n  /*position: absolute;*/\r\n  /*left: 0;*/\r\n  /*top: 0*/\r\n/*}*/\r\n\r\n/*.load .cirBox1>div,.load .cirBox2>div,.load .cirBox3>div {*/\r\n  /*width: 10px;*/\r\n  /*height: 10px;*/\r\n  /*border-radius: 100%;*/\r\n  /*background-color: #ccc;*/\r\n  /*position: absolute*/\r\n/*}*/\r\n\r\n/*.load .cirBox1 {*/\r\n  /*-webkit-transform: rotate(30deg);*/\r\n  /*-moz-transform: rotate(30deg);*/\r\n  /*transform: rotate(30deg)*/\r\n/*}*/\r\n\r\n/*.load .cirBox2 {*/\r\n  /*-webkit-transform: rotate(60deg);*/\r\n  /*-moz-transform: rotate(60deg);*/\r\n  /*transform: rotate(60deg)*/\r\n/*}*/\r\n\r\n/*.load .cirBox3 {*/\r\n  /*-webkit-transform: rotate(90deg);*/\r\n  /*-moz-transform: rotate(90deg);*/\r\n  /*transform: rotate(90deg)*/\r\n/*}*/\r\n\r\n/*.load .cir1 {*/\r\n  /*left: 0;*/\r\n  /*top: 0*/\r\n/*}*/\r\n\r\n/*.load .cir2 {*/\r\n  /*right: 0;*/\r\n  /*top: 0*/\r\n/*}*/\r\n\r\n/*.load .cir3 {*/\r\n  /*right: 0;*/\r\n  /*bottom: 0*/\r\n/*}*/\r\n\r\n/*.load .cir4 {*/\r\n  /*left: 0;*/\r\n  /*bottom: 0*/\r\n/*}*/\r\n\r\n/*.load .cir1,.load .cir2,.load .cir3,.load .cir4 {*/\r\n  /*-webkit-animation: cir_Animation 1.2s ease 0 infinite;*/\r\n  /*-moz-animation: cir_Animation 1.2s ease 0 infinite;*/\r\n  /*animation: cir_Animation 1.2s ease 0 infinite*/\r\n/*}*/\r\n\r\n/*.cirBox1 .cir2 {*/\r\n  /*-webkit-animation-delay: -1.1s;*/\r\n  /*-moz-animation-delay: -1.1s;*/\r\n  /*animation-delay: -1.1s*/\r\n/*}*/\r\n\r\n/*.cirBox1 .cir3 {*/\r\n  /*-webkit-animation-delay: -0.8s;*/\r\n  /*-moz-animation-delay: -0.8s;*/\r\n  /*animation-delay: -0.8s*/\r\n/*}*/\r\n\r\n/*.cirBox1 .cir4 {*/\r\n  /*-webkit-animation-delay: -0.5s;*/\r\n  /*-moz-animation-delay: -0.5s;*/\r\n  /*animation-delay: -0.5s*/\r\n/*}*/\r\n\r\n/*.cirBox2 .cir2 {*/\r\n  /*-webkit-animation-delay: -1.0s;*/\r\n  /*-moz-animation-delay: -1.0s;*/\r\n  /*animation-delay: -1.0s*/\r\n/*}*/\r\n\r\n/*.cirBox2 .cir3 {*/\r\n  /*-webkit-animation-delay: -0.7s;*/\r\n  /*-moz-animation-delay: -0.7s;*/\r\n  /*animation-delay: -0.7s*/\r\n/*}*/\r\n\r\n/*.cirBox2 .cir4 {*/\r\n  /*-webkit-animation-delay: -0.4s;*/\r\n  /*-moz-animation-delay: -0.4s;*/\r\n  /*animation-delay: -0.4s*/\r\n/*}*/\r\n\r\n/*.cirBox3 .cir2 {*/\r\n  /*-webkit-animation-delay: -0.9s;*/\r\n  /*-moz-animation-delay: -0.9s;*/\r\n  /*animation-delay: -0.9s*/\r\n/*}*/\r\n\r\n/*.cirBox3 .cir3 {*/\r\n  /*-webkit-animation-delay: -0.6s;*/\r\n  /*-moz-animation-delay: -0.6s;*/\r\n  /*animation-delay: -0.6s*/\r\n/*}*/\r\n\r\n/*.cirBox3 .cir4 {*/\r\n  /*-webkit-animation-delay: -0.3s;*/\r\n  /*-moz-animation-delay: -0.3s;*/\r\n  /*animation-delay: -0.3s*/\r\n/*}*/\r\n\r\n/*@-webkit-keyframes cir_Animation {*/\r\n  /*0%,80%,100% {*/\r\n    /*-webkit-transform: scale(0.4)*/\r\n  /*}*/\r\n\r\n  /*40% {*/\r\n    /*-webkit-transform: scale(1.0)*/\r\n  /*}*/\r\n/*}*/\r\n\r\n/*.mask {*/\r\n  /*width: 100%;*/\r\n  /*height: 100%;*/\r\n  /*background-color: #000;*/\r\n  /*opacity: .8;*/\r\n  /*position: fixed;*/\r\n  /*left: 0;*/\r\n  /*top: 0;*/\r\n  /*z-index: 1000*/\r\n/*}*/\r\n\r\n/*#animationTipBox .okoButton {*/\r\n  /*width: 80px;*/\r\n  /*display: block;*/\r\n  /*height: 35px;*/\r\n  /*margin: 0 auto;*/\r\n  /*border: 0;*/\r\n  /*padding: 0;*/\r\n  /*border-radius: 5px;*/\r\n  /*background: #6c3;*/\r\n  /*color: #fff;*/\r\n  /*font-size: 22px;*/\r\n/*}*/\r\n\r\n/*#animationTipBox .redOkoButton {*/\r\n  /*background: #ff9090*/\r\n/*}*/\r\n"

/***/ }),

/***/ 875:
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n  background-color: white;\r\n  color: black;\r\n}\r\n"

/***/ }),

/***/ 876:
/***/ (function(module, exports) {

module.exports = "body{padding-top:30px;}\n\n.glyphicon {  margin-bottom: 10px;margin-right: 10px;}\n\nsmall {\n  display: block;\n  line-height: 1.428571429;\n  color: #999;\n}\n\n\n.row {\n}\n\n[class*=\"col-\"] {\n\n  text-align: center;\n\n}\n\n\n.jumbotron {\n  background-color: white;\n  color: black;\n}\n"

/***/ }),

/***/ 877:
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  background-color: white;\n  color: black;\n}\n"

/***/ }),

/***/ 878:
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n  background-color: white;\r\n  color: black;\r\n  max-width: 400px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.agm-map {\r\n  width: 700px;\r\n  height: 500px;\r\n}\r\n"

/***/ }),

/***/ 879:
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  background-color: white;\n  color: black;\n}\n"

/***/ }),

/***/ 880:
/***/ (function(module, exports) {

module.exports = "<!-- Container (About Section) -->\r\n<div id=\"about\" class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-8\">\r\n            <h2>A propos de nous</h2><br>\r\n            <h4>Nous sommes une jeune start-up dont le but est de centraliser les données de la santé afin de rendre\r\n                l'accès au soins plus facile.</h4><br>\r\n            <p>Cette plateforme est en cours de développement, elle sera bientôt disponible. Il sera alors possible de\r\n                prendre rendez-vous avec votre médecin ou encore de rechercher un spécialiste directement sur la\r\n                plateforme.</p>\r\n            <br>\r\n            <div class=\"video-wrapper\">\r\n                <div class=\"video-container\">\r\n                    <iframe width=\"100%\" height=\"800\" src=\"https://www.youtube.com/embed/KXdNGiiHTjk\"\r\n                            frameborder=\"0\"\r\n                            allowfullscreen></iframe>\r\n                </div>\r\n                <br>\r\n                <button class=\"btn btn-default btn-lg\">En savoir plus</button>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <span class=\"glyphicon glyphicon-signal logo\"></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 881:
/***/ (function(module, exports) {

module.exports = "<li id=\"infoSign\">\r\n  <button type=\"button\" class=\"btn btn-default btn-lg\" aria-label=\"Left Align\" data-toggle=\"dropdown\">\r\n    <span class=\"glyphicon glyphicon-info-sign\" aria-hidden=\"true\"></span><span class=\"badge\">{{alertNumber}}</span>\r\n  </button>\r\n  <ul class=\"dropdown-menu\" id=\"alertTable\">\r\n    <li *ngFor=\"let n of demands\" class=\"clearfix\" (click)=\"liClick($event)\" [ngClass]=\"{'liConfirm': n.confirm}\">\r\n        <div class=\"displaybox\">\r\n           user:{{n.user.first_name}} {{n.user.last_name}}<br />\r\n           user Mail:{{n.user.email}} <br />\r\n           demande autorisation:{{n.subject}} <br />\r\n           autorisation type: {{n.type}}<br />\r\n           data:{{n.Created_at.toLocaleString()}}\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-danger success\" [ngClass]=\"{'buttonConfirm': n.confirm}\" (click)=\"nonAutoriserClick(n._id)\">non autoriser</button>\r\n        <button type=\"button\" class=\"btn btn-danger success\" [ngClass]=\"{'buttonConfirm': n.confirm}\" (click)=\"autoriserClick(n._id)\">autoriser</button>\r\n\r\n    </li>\r\n  </ul>\r\n</li>\r\n"

/***/ }),

/***/ 882:
/***/ (function(module, exports) {

module.exports = "<app-reminder></app-reminder>\n<header>\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a routerLink=\"/\" class=\"navbar-brand\"><i class=\"glyphicon glyphicon-apple\"></i>CALM</a>\n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n        <ul class=\"nav navbar-nav navbar-right\">\n        <li><a *ngIf=\"isLogged && (user.role[0] == 'patient' && user.role[1] != 'building' && user.role[1] != 'organisation')\" routerLink=\"medical-file\" routerLinkActive=\"active\"\n               [routerLinkActiveOptions]=\"{exact:true}\"><i class=\"glyphicon glyphicon-folder-open\"></i> Mon dossier</a></li>\n        <li><a *ngIf=\"isLogged && (user.role[1] == 'medecin')\" routerLink=\"doctor-space\" routerLinkActive=\"active\"\n               [routerLinkActiveOptions]=\"{exact:true}\"><i class=\"glyphicon glyphicon-briefcase\"></i> Espace médecin</a></li>\n        <li><a *ngIf=\"isLogged && (user.role[1] == 'building')\" routerLink=\"building-space\" routerLinkActive=\"active\"\n               [routerLinkActiveOptions]=\"{exact:true}\"><i class=\"glyphicon glyphicon-briefcase\"></i> Espace infrastructure</a></li>\n        <li><a *ngIf=\"isLogged && (user.role[1] == 'organisation')\" routerLink=\"organisation-space\" routerLinkActive=\"active\"\n               [routerLinkActiveOptions]=\"{exact:true}\"><i class=\"glyphicon glyphicon-briefcase\"></i> Espace organisation</a></li>\n        <li><a href=\"#about\">A propos</a></li>\n        <li><a href=\"#contact\">Contact</a></li>\n        <li><a routerLink=\"users\" routerLinkActive=\"active\">Utilisateurs</a></li>\n        <!--<li><a href=\"https://localhost:3000/api\">API</a></li>-->\n            <li>\n              <div *ngIf=\"isLogged\" class=\"dropdown\">\n              <button class=\"btn btn-default btn-lg\" type=\"button\" data-toggle=\"dropdown\" *ngIf=\"user\">{{user.first_name}}\n                <span class=\"caret\"></span></button>\n              <ul class=\"dropdown-menu\">\n                <li><a routerLink=\"profile\" routerLinkActive=\"active\"> Profil</a></li>\n                <li><a routerLink=\"settings\" routerLinkActive=\"active\"> Paramètres</a></li>\n                <li><a routerLinkActive=\"active\" (click)=\"logout()\"> Deconnexion</a></li>\n              </ul>\n              </div>\n            </li>\n          <li *ngIf=\"isLogged\">\n            <alert-info [user]=\"user||null\" class=\"dropdown\"></alert-info>\n          </li>\n\n          <li><a *ngIf=\"!isLogged\" routerLink=\"register\" routerLinkActive=\"active\">\n            <span class=\"glyphicon glyphicon-user\"></span> Inscription</a></li>\n          <li><a *ngIf=\"!isLogged\" routerLink=\"login\" routerLinkActive=\"active\">\n            <span class=\"glyphicon glyphicon-log-in\"></span> Connexion</a></li>\n      </ul>\n      </div>\n\n      <!--<ul class=\"nav navbar-nav navbar-right\">-->\n\n        <!--<div *ngIf=\"isLogged\" class=\"dropdown\">-->\n          <!--<button class=\"btn btn-default btn-lg\" type=\"button\" data-toggle=\"dropdown\" *ngIf=\"user\">{{user.first_name}}-->\n            <!--<span class=\"caret\"></span></button>-->\n          <!--<ul class=\"dropdown-menu\">-->\n            <!--<li><a routerLink=\"profile\" routerLinkActive=\"active\"> Profil</a></li>-->\n            <!--<li><a routerLink=\"settings\" routerLinkActive=\"active\"> Paramètres</a></li>-->\n            <!--<li><a routerLinkActive=\"active\" (click)=\"logout()\"> Deconnexion</a></li>-->\n          <!--</ul>-->\n        <!--</div>-->\n\n        <!--<li><a *ngIf=\"!isLogged\" routerLink=\"register\" routerLinkActive=\"active\">-->\n          <!--<span class=\"glyphicon glyphicon-user\"></span> Inscription</a></li>-->\n        <!--<li><a *ngIf=\"!isLogged\" routerLink=\"login\" routerLinkActive=\"active\">-->\n          <!--<span class=\"glyphicon glyphicon-log-in\"></span> Connexion</a></li>-->\n      <!--</ul>-->\n    </div>\n  </nav>\n</header>\n\n<main>\n  <router-outlet></router-outlet>\n</main>\n\n<footer class=\"container-fluid text-center\">\n  <a href=\"#myPage\" title=\"To Top\">\n    <span class=\"glyphicon glyphicon-chevron-up\"></span>\n  </a>\n  <p>CALM Site Copyrights</p>\n</footer>\n"

/***/ }),

/***/ 883:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n  <div *ngIf=\"isLogged\" class=\"container\">\r\n    Bienvenue sur la page infrastructure\r\n  </div>\r\n  <div *ngIf=\"!isLogged\">\r\n    <h1>Accès non autorisé, veuillez vous connecter pour accéder à cette page !</h1>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 884:
/***/ (function(module, exports) {

module.exports = "<!-- Container (Contact Section) -->\n<div id=\"contact\" class=\"container-fluid bg-grey\">\n  <h2 class=\"text-center\">CONTACT</h2>\n  <div class=\"row\">\n    <div class=\"col-sm-5\">\n      <p>Contactez nous et nous vous répondrons dans les 24 heures.</p>\n      <p><span class=\"glyphicon glyphicon-map-marker\"></span> Lille, France</p>\n      <p><span class=\"glyphicon glyphicon-phone\"></span> 03.20.57.84.25</p>\n      <p><span class=\"glyphicon glyphicon-envelope\"></span> calmsite@hotmail.com</p>\n    </div>\n      <div class=\"row\">\n        <div class=\"col-sm-6 form-group\">\n          <input class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Nom\" type=\"text\" required>\n        </div>\n        <div class=\"col-sm-6 form-group\">\n          <input class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email\" type=\"email\" required>\n        </div>\n      </div>\n      <textarea class=\"form-control\" id=\"comments\" name=\"comments\" placeholder=\"Commentaire\" rows=\"5\"></textarea><br>\n      <div class=\"row\">\n        <div class=\"col-sm-12 form-group\">\n          <button class=\"btn btn-default pull-right\" type=\"submit\">Envoyer</button>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 885:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <div *ngIf=\"isLogged\" class=\"container\">\n    <div class=\"row\" *ngFor=\"let patient of patients\">\n      <div class=\"card card-block\" *ngIf=\"patient.general_doctor\">\n        <!--Trick to display only the patients from the current doctor. Should NOT be made this way.-->\n        <h4 class=\"card-title\">{{ patient.user_id.first_name}} {{patient.user_id.last_name}}</h4>\n        <p class=\"card-text\">{{patient.user_id.email}}</p>\n\n        <a class=\"btn btn-default btn-lg\" (click)=\"change_submit(patient)\">Envoyer un message</a>\n\n      </div>\n    </div>\n    <form (ngSubmit)=\"send_post()\" *ngIf=\"submitted\" #form=\"ngForm\" role=\"form\">\n      <p><br><br>Laissez votre message pour {{patient_selected.user_id.first_name}}</p>\n    <div class=\"container\">\n      <textarea class=\"form-control\" id=\"comments\" name=\"comments\" placeholder=\"Commentaire\" rows=\"5\" [(ngModel)]=\"post.text\"></textarea><br>\n      <div class=\"row\">\n        <div class=\"col-sm-12 form-group\">\n          <button class=\"btn btn-default pull-right\" type=\"submit\">Envoyer</button>\n        </div>\n      </div>\n    </div>\n    </form>\n  </div>\n\n  <div *ngIf=\"!isLogged\">\n    <h1>Accès non autorisé, veuillez vous connecter pour accéder à cette page !</h1>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ 886:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>CALM</h1>\n  <p>L'application de e-santé</p>\n  <form>\n    <div class=\"input-group\">\n      <input type=\"email\" class=\"form-control\" size=\"50\" placeholder=\"Rechercher un médecin\" required>\n      <div class=\"input-group-btn\">\n        <button type=\"button\" class=\"btn btn-danger\">Rechercher</button>\n      </div>\n    </div>\n  </form>\n</div>\n<about-page></about-page>\n<contact-page></contact-page>\n"

/***/ }),

/***/ 887:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n  <h2 class=\"text-center\">Page de connexion</h2>\r\n\r\n  <!-- Button trigger modal -->\r\n  <button class=\"btn btn-primary btn-lg\" data-toggle=\"modal\" data-target=\"#myModalHorizontal\">\r\n    Connexion\r\n  </button>\r\n\r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"myModalHorizontal\" tabindex=\"-1\" role=\"dialog\"\r\n       aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n\t<!-- Modal Header -->\r\n\t<div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\"\r\n                  data-dismiss=\"modal\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n            <span class=\"sr-only\">Close</span>\r\n          </button>\r\n          <h4 class=\"modal-title\" id=\"myModalLabel\">\r\n            Connexion\r\n          </h4>\r\n\t</div>\r\n\r\n\t<!-- Modal Body -->\r\n\t<div class=\"modal-body\">\r\n\r\n          <form (ngSubmit)=\"login()\" *ngIf=\"!submitted\" #form=\"ngForm\" class=\"form-horizontal\" role=\"form\">\r\n            <div class=\"form-group\" [ngClass] = \"{\r\n\t\t\t\t\t\t 'has-error': email.invalid && email.touched,\r\n\t\t\t\t\t\t 'has-success': email.valid && email.touched}\">\r\n\r\n              <label  class=\"col-sm-2 control-label\"\r\n                      for=\"inputEmail3\">Email</label>\r\n              <div class=\"col-sm-10\">\r\n\t\t<input type=\"email\" class=\"form-control\"\r\n                       id=\"inputEmail3\" placeholder=\"Email\" required\r\n                       [(ngModel)]=\"user.email\" name=\"email\"\r\n                       #email=\"ngModel\"/>\r\n\t\t<span class=\"help-block\" *ngIf=\"email.invalid && email.touched\">\r\n\t\t  Email is required\r\n\t\t</span>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\" [ngClass] = \"{\r\n\t\t\t\t\t\t 'has-error': password.invalid && password.touched,\r\n\t\t\t\t\t\t 'has-success': password.valid && password.touched}\">\r\n\r\n              <label class=\"col-sm-2 control-label\"\r\n                     for=\"inputPassword3\" >Mot de passe</label>\r\n              <div class=\"col-sm-10\">\r\n\t\t<input type=\"password\" class=\"form-control\"\r\n                       id=\"inputPassword3\" placeholder=\"Mot de passe\" name=\"password\" required\r\n                       [(ngModel)]=\"user.password\"\r\n                       #password=\"ngModel\"/>\r\n\t\t<span class=\"help-block\" *ngIf=\"password.invalid && password.touched\">\r\n\t\t  Password is required\r\n\t\t</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"col-sm-offset-2 col-sm-10\">\r\n\t\t<button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"form.invalid\">Connexion</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n\t</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 888:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\"><h3><i class=\"glyphicon glyphicon-calendar\"></i> Prendre rendez-vous</h3></div>\n  <div class=\"panel-body\">\n<div class=\"wrapper\">\n  <div class=\"header\">\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    <span class=\"glyphicon glyphicon-chevron-right\"></span>\n    <p>Avril 2017</p>\n  </div><!-- end header -->\n  <div class=\"col-sm-6-offset-2 col-md-4-offset-2\">\n  <div class=\"calendar-body\">\n    <div class=\"row weekdays\">\n      <div class=\"col-xs-1\"><p>L</p></div><!-- end col-xs-1 -->\n      <div class=\"col-xs-1\"><p>Ma</p></div><!-- end col-xs-1 -->\n      <div class=\"col-xs-1\"><p>Me</p></div><!-- end col-xs-1 -->\n      <div class=\"col-xs-1\"><p>J</p></div><!-- end col-xs-1 -->\n      <div class=\"col-xs-1\"><p>V</p></div><!-- end col-xs-1 -->\n      <div class=\"col-xs-1\"><p>S</p></div><!-- end col-xs-1 -->\n      <div class=\"col-xs-1\"><p>D</p></div><!-- end col-xs-1 -->\n    </div><!-- end row -->\n\n    <div class=\"row dates\">\n      <div class=\"col-xs-1\"><a href=\"#\"><p class=\"inactive\">28</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p class=\"inactive\">29</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p class=\"inactive\">30</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p class=\"inactive\">31</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>1</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>2</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>3</p></a></div>\n    </div><!-- end row -->\n\n    <div class=\"row dates\">\n      <div class=\"col-xs-1\"><a href=\"#\"><p>4</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>5</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>6</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>7</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>8</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>9</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>10</p></a></div>\n    </div><!-- end row -->\n\n    <div class=\"row dates\">\n      <div class=\"col-xs-1\"><a href=\"#\"><p>11</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>12</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>13</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>14</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>15</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>16</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>17</p></a></div>\n    </div><!-- end row -->\n\n    <div class=\"row dates\">\n      <div class=\"col-xs-1\"><a href=\"#\"><p>18</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>19</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>20</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>21</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>22</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>23</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>24</p></a></div>\n    </div><!-- end row -->\n\n    <div class=\"row dates\">\n      <div class=\"col-xs-1\"><a href=\"#\"><p>25</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>26</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>27</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>28</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>29</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>30</p></a></div>\n      <div class=\"col-xs-1\"><a href=\"#\"><p>31</p></a></div>\n    </div><!-- end row -->\n\n    <div class=\"line\"></div>\n\n    <div class=\"current-date\">Mardi 25 avril</div>\n  </div><!-- end calendar-body -->\n  </div>\n</div><!-- end wrapper -->\n</div>\n</div>\n"

/***/ }),

/***/ 889:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-12 col-xs-12\">\n      <div class=\"panel-heading\"><h3><i class=\"glyphicon glyphicon-plus\"></i> Mon traitement</h3></div>\n      <div class=\"panel-body\">\n      <h4>Contre la Grippe :</h4>\n      <div class=\"list-item\">\n        <ul>\n          <li>Paracétamol : jusqu'à 4 g/jour pour les adultes, soit 1 à 2 comprimés (s) à 500 mg par prise, à renouveler en cas de besoin (jusqu'à 8 par jour). Espacer les prises d'au moins 4 heures.</li>\n          <li>Pseudoéphédrine : 5 jours maximum, voir indications sur la notice</li>\n          <li>Sirops antitussifs opiacés (dextrométorphane, codéine, codéthyline, etc.) : 120 mg/j</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ 890:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\" *ngIf=\"isLogged\">\n  <div class=\"panel-heading\"><h3><i class=\"glyphicon glyphicon-user\"></i> Mon médecin traitant</h3></div>\n  <div class=\"panel-body\">\n  <div class=\"row\" *ngIf=\"patient\">\n    <div class=\"col-sm-6 col-md-4\">\n      <img src=\"{{image}}\"\n           class=\"img-rounded\" alt=\"Image Profil\"/>\n    </div>\n    <div class=\"col-sm-6 col-md-8\">\n      <h4>{{patient.general_doctor.user_id.first_name}} {{patient.general_doctor.user_id.last_name}}</h4>\n      <small><cite title=\"Cabinet\"> {{patient.general_doctor.cabinet}} <i class=\"glyphicon glyphicon-map-marker\">\n      </i></cite></small>\n      <p>\n        <i class=\"glyphicon glyphicon-envelope\"></i> {{patient.general_doctor.user_id.email}}\n        <br />\n        <i class=\"glyphicon glyphicon-earphone\"></i> {{patient.general_doctor.phone}}<br />\n      </p>\n      <br><button class=\"btn btn-default btn-lg\">Contacter</button>\n    </div>\n  </div>\n</div>\n</div>\n\n  <!--<div class=\"row\" *ngIf=\"!patient.general_doctor.user_id\">-->\n    <!--<div class=\"col-sm-6 col-md-4\">-->\n      <!--<img src=\"{{image}}\"-->\n           <!--class=\"img-rounded\" alt=\"Image Profil\"/>-->\n    <!--</div>-->\n    <!--<div class=\"col-sm-6 col-md-8\">-->\n      <!--<h3>Votre médecin traitant</h3>-->\n        <!--<p>Veuillez renseigner votre médecin traitant dans les paramètres de votre compte</p>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n\n\n\n"

/***/ }),

/***/ 891:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\"><h3><i class=\"glyphicon glyphicon-map-marker\"></i> Trouver le médecin le plus proche</h3></div>\n  <div class=\"panel-body\">\n    <div class=\"input-group\">\n      <input type=\"search\" #searchBox class=\"form-control\" size=\"50\" placeholder=\"Rechercher un médecin\" required>\n      <div class=\"input-group-btn\">\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"rechercheClick(searchBox.value)\">Rechercher</button>\n      </div>\n    </div>\n\n<sebm-google-map class=\"agm-map\" [usePanning]=\"true\" [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" (setZoom)=\"setZoom(2)\" (mapClick)=\"mapClick()\" (zoomChange)=\"zoomChange()\"  >\n  <div *ngIf=\"response.length!=0\">\n    <sebm-google-map-marker *ngFor=\"let n of response\" [latitude]=n.address.latitude [longitude]=n.address.longitude (markerClick)=\"clikedMark(n._id)\" >\n      <sebm-google-map-info-window [isOpen]=\"n.isDisplay\">\n        <div>\n          <h3>Doctor: {{n.last_name}} {{n.first_name}}</h3>\n          <p>address: {{n.address.num}},{{n.address.street_address}}</p>\n        </div>\n      </sebm-google-map-info-window>\n    </sebm-google-map-marker>\n  </div>\n</sebm-google-map>\n  </div>\n</div>\n"

/***/ }),

/***/ 892:
/***/ (function(module, exports) {

module.exports = "<<div class=\"jumbotron text-center\">\r\n<div *ngIf=\"isLogged\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n      <!--Hello-->\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-xlg-6 col-xl-6 col-lg-12 col-sm-12 col-xs-12\">\r\n      <app-posts></app-posts>\r\n    </div>\r\n\r\n    <div class=\"col-xlg-6 col-xl-6 col-lg-12 col-sm-12 col-xs-12\">\r\n      <app-current-treatment></app-current-treatment>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <!--<div class=\"col-xlg-9 col-xl-6 col-lg-6  col-md-12 col-sm-12 col-xs-12\">-->\r\n      <!--<div class=\"row\">-->\r\n        <!--<div class=\"col-xlg-8 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">-->\r\n          <!--<app-reminder></app-reminder>-->\r\n        <!--</div>-->\r\n        <!--<div class=\"col-xlg-4 col-xl-12 col-lg-12 col-md-5 col-sm-12 col-xs-12\">-->\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n\r\n    <div class=\"col-xlg-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12\">\r\n      <div>\r\n        <app-google-map></app-google-map>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"row shift-up\">\r\n    <div class=\"col-xlg-3 col-lg-6 col-md-12 col-sm-12 col-xs-12\">\r\n      <app-calendar></app-calendar>\r\n\r\n    </div>\r\n    <div class=\"col-xlg-6 col-lg-6 col-md-12 col-sm-12 col-xs-12\" >\r\n      <app-doctor-profile></app-doctor-profile>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div *ngIf=\"!isLogged\">\r\n  <h1>Accès non autorisé, veuillez vous connecter pour accéder à cette page !</h1>\r\n</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 893:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-12 col-xs-12\">\n      <div class=\"panel-heading\"><h3><i class=\"glyphicon glyphicon-comment\"></i> Mes messages</h3></div>\n      <div class=\"panel-body\">\n        <div class=\"row\" *ngFor=\"let post of posts\">\n          <div class=\"card card-block\">\n            <h4 class=\"card-title\">{{ post.doctor.first_name }} {{ post.doctor.last_name }}</h4>\n            <p class=\"card-text\">{{post.text}}</p>\n          </div>\n        </div>\n        </div>\n      </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ 894:
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"row\">-->\r\n    <!--<div class=\"col-sm-12 col-md-12 col-xs-12\">-->\r\n      <!--<div class=\"panel panel-primary\">-->\r\n        <!--<div class=\"panel-heading\"><h3><i class=\"glyphicon glyphicon-bell\"></i> Mes rappels</h3></div>-->\r\n        <!--<div class=\"panel-body\"><ul>-->\r\n          <!--<div class=\"list-item\">-->\r\n            <!--<div dialogAnchor></div>-->\r\n          <!--<div *ngFor=\"let n of rappeles\" >-->\r\n            <!--<div *ngIf=\"n.expire==false\">-->\r\n              <!--<li>{{n.rappel}}</li>-->\r\n              <!--<button type=\"button\" class=\"btn btn-danger success\" (click)=\"reminderDone(n._id)\">déjà fait</button>-->\r\n            <!--</div>-->\r\n\r\n          <!--</div>-->\r\n          <!--<li>Tests de PAP à effectuer</li>-->\r\n          <!--<li>Vaccins à administrer</li>-->\r\n          <!--</div>-->\r\n        <!--</ul></div>-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n<!--</div>-->\r\n\r\n<!--<button class=\"btn btn-primary reminder\" type=\"button\">-->\r\n  <!--Mes Rappels <span class=\"badge\">4</span>-->\r\n<!--</button>-->\r\n<div class=\"btn-group\" *ngIf=\"isLogged==true\">\r\n  <button type=\"button\" class=\"btn btn-primary reminder dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n    Mes  Rappels <span class=\"badge\">{{rappelesNum}}</span>\r\n  </button>\r\n  <ul class=\"dropdown-menu\">\r\n\r\n    <li *ngFor=\"let n of rappeles\" class=\"clearfix\" (click)=\"liClick($event)\" [ngClass]=\"{'liNonDisplay': n.expire}\">\r\n      <div *ngIf=\"n.expire==false\">\r\n        <div class=\"displaybox\">\r\n          {{n.rappel.name}}*{{n.rappel.quantity}}  {{n.rappel.takingState}}<br />\r\n          {{n.rappel.frequence}}fois par {{n.rappel.typeFrequence}} <br />\r\n          info:{{n.rappel.info}} <br />\r\n          data:{{n.date}}\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-danger success\" (click)=\"reminderDone(n._id)\">déjà fait</button>\r\n      </div>\r\n\r\n    </li>\r\n\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ 895:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>404 Not Found</h1>\n  <p>You may be lost. Follow the breadcrumbs back <a routerLink=\"/\">home</a>.</p>\n</div>\n"

/***/ }),

/***/ 896:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n  <div *ngIf=\"isLogged\" class=\"container\">\r\n    Bienvenue sur la page infrastructure\r\n  </div>\r\n  <div *ngIf=\"!isLogged\">\r\n    <h1>Accès non autorisé, veuillez vous connecter pour accéder à cette page !</h1>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 897:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n<h3>Page de profil</h3>\n\n<div class=\"container\" *ngIf=\"isLogged\">\n  <div class=\"row\" *ngIf=\"user\">\n    <div class=\"col-xs-12 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2\">\n      <div class=\"well well-sm\">\n        <div class=\"row\">\n          <div class=\"col-sm-6 col-md-4\">\n            <img src=\"{{image}}\"\n                 class=\"img-rounded\" alt=\"Image Profil\"/>\n          </div>\n          <div class=\"col-sm-6 col-md-8\">\n            <h4>\n              {{user.first_name}} {{user.last_name}}</h4>\n            <small><cite title=\"address\">{{user.address.city}}, {{user.address.country}} <i class=\"glyphicon glyphicon-map-marker\">\n            </i></cite></small>\n            <p>\n              <i class=\"glyphicon glyphicon-envelope\"></i>{{user.email}}\n              <br />\n              <i class=\"glyphicon glyphicon-gift\"></i>{{user.birth_date | date: 'dd/MM/yyyy'}}<br />\n              <i class=\"glyphicon glyphicon-info-sign\"></i>{{user.role}}\n            </p>\n            <!-- button -->\n            <div class=\"btn-group\">\n              <a type=\"button\" href=\"/settings\" routerLinkActive=\"active\" class=\"btn btn-default btn-lg\">\n                <i class=\"glyphicon glyphicon-cog\"></i> Paramètres</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n\n<!--<div class=\"form-group\" [ngClass] = \"{\n         'has-error': profile_img.invalid && profile_img.touched,\n         'has-success': profile_img.valid && profile_img.touched}\">\n  <label class=\"control-label\">Image de profil</label>\n  <input name=\"profile_img\" type=\"file\" class=\"form-control\" [(ngModel)]=\"user.profile_img\"\n         (change)=\"handleFileSelect($event)\" #profile_img=\"ngModel\" accept=\"image/*\">\n  <span class=\"help-block\" *ngIf=\"profile_img.invalid && profile_img.touched\">\n            Image de profil requise\n    </span>\n</div>-->\n\n"

/***/ }),

/***/ 898:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <div *ngIf=\"isLogged\">\n    <h2>Paramètres</h2>\n\n    <div *ngIf=\"user.role[1]=='patient' || user.role[1]=='medecin'\">\n      <h3>Choisissez votre médecin généraliste</h3>\n      <div *ngFor=\"let doctor of doctors\">\n        <a class=\"btn btn-default btn-lg\" routerLinkActive=\"active\" (click)=\"addDoctor(doctor)\">\n          {{doctor.user_id.first_name}} {{doctor.user_id.last_name}}</a>\n        <h5><br></h5>\n      </div>\n\n      <h3>Gestion des autorisations</h3>\n      <button (click)=\"openAddAutorisation()\">Ajouter</button>\n      <div *ngIf=\"addAutorisationForm['show']\">\n          <!-- system de recherche d'un utilisateur a mettre en place -->\n          <input type=\"email\" placeholder=\"Adresse email de l'utilisateur\" [(ngModel)]=\"addAutorisationForm['email']\" required/><br/>\n          <label for=\"subject\">Element concerné par l'aurisation :</label><br/>\n          <select name=\"subject\" id=\"subject\" [(ngModel)]=\"addAutorisationForm['subject']\">\n            <option value=\"POST\" selected>Message</option>\n            <option value=\"DOSSIER\">Accès dossier médical</option>\n            <option value=\"RDV\" >Prise de rendez-vous</option>\n          </select><br/>\n          <label for=\"type\">Type d'autorisation : </label><br/>\n          <select id=\"type\" name=\"type\" [(ngModel)]=\"addAutorisationForm['type']\">\n            <option value=\"READ\" selected>Lecture</option>\n            <option value=\"READ_WRITE\">Lecture & Modification</option>\n          </select><br/>\n          <button (click)=\"addNewAutorisation()\">Ajouter</button>\n      </div>\n      <table>\n        <tr>\n          <td>Role</td>\n          <td>Prénom</td>\n          <td>Nom</td>\n          <td>Autorisations</td>\n          <td>Gestion</td>\n        </tr>\n          <tr *ngFor=\"let autorisation of autorisations\">\n            <td>{{autorisation.observer.role[1]}}</td>\n            <td>{{autorisation.observer.first_name}}</td>\n            <td>{{autorisation.observer.last_name}}</td>\n            <td>{{autorisation.subject}} => {{autorisation.type}}</td>\n            <td>\n              <button (click)=\"deleteAutorisation(autorisation._id)\">Supprimer</button>\n            </td>\n          </tr>\n      </table>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 899:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h2 class=\"text-center\">Page d'inscription</h2>\n\n<div *ngIf=\"!submitted\" >\n  <h3>Email already exist</h3>\n</div>\n\n<form (ngSubmit)=\"register()\" #form=\"ngForm\">\n\n  <div class=\"form-group\"\n       [ngClass] = \"{\n         'has-error': first_name.invalid && first_name.touched,\n         'has-success': first_name.valid && first_name.touched}\">\n    <label class=\"control-label\">Prénom</label>\n    <input type=\"text\" class=\"form-control\" name=\"first_name\" required\n           [(ngModel)]=\"user.first_name\"\n           #first_name=\"ngModel\">\n    <span class=\"help-block\" *ngIf=\"first_name.invalid && first_name.touched\">\n            Prénom requis\n        </span>\n  </div>\n\n  <div class=\"form-group\"\n       [ngClass] = \"{\n         'has-error': last_name.invalid && last_name.touched,\n         'has-success': last_name.valid && last_name.touched}\">\n    <label class=\"control-label\">Nom</label>\n    <input type=\"text\" class=\"form-control\" name=\"last_name\" required\n           [(ngModel)]=\"user.last_name\"\n           #last_name=\"ngModel\">\n    <span class=\"help-block\" *ngIf=\"last_name.invalid && last_name.touched\">\n            Nom requis\n        </span>\n  </div>\n\n  <div class=\"form-group\"\n       [ngClass] = \"{\n         'has-error': email.invalid && email.touched,\n         'has-success': email.valid && email.touched}\">\n    <label class=\"control-label\">Email</label>\n    <input type=\"email\" class=\"form-control\" name=\"email\" required\n           [(ngModel)]=\"user.email\"\n           #email=\"ngModel\">\n    <span class=\"help-block\" *ngIf=\"email.invalid && email.touched\">\n            Email requis\n        </span>\n  </div>\n\n  <div class=\"form-group\" [ngClass] = \"{\n         'has-error': password.invalid && password.touched,\n         'has-success': password.valid && password.touched}\">\n    <label class=\"control-label\">Mot de passe</label>\n    <input type=\"password\" class=\"form-control\" name=\"password\" required\n           [(ngModel)]=\"user.password\"\n           #password=\"ngModel\">\n    <span class=\"help-block\" *ngIf=\"password.invalid && password.touched\">\n            Mot de passe requis\n        </span>\n  </div>\n\n  <div class=\"form-group\" [ngClass] = \"{\n         'has-error': password.invalid && password.touched,\n         'has-success': password.valid && password.touched}\">\n    <label class=\"control-label\">Date de naissance</label>\n    <input type=\"date\" class=\"form-control\" name=\"birth_date\" required\n      [(ngModel)]=\"user.birth_date\" #birth_date=\"ngModel\" max=\"2017-01-01\">\n    <span class=\"help-block\" *ngIf=\"birth_date.invalid && birth_date.touched\">\n            Date de naissance requise\n    </span>\n  </div>\n\n  <div class=\"form-group\" [ngClass] = \"{\n         'has-error': role.invalid && role.touched,\n         'has-success': role.valid && role.touched}\">\n    <label class=\"control-label\">Choisissez votre profil</label>\n  <select name=\"role\" class=\"form-control\" required [(ngModel)]=\"user.role\" #role=\"ngModel\">\n    <option value=\"patient\">Patient</option>\n    <option value=\"medecin\">Medecin</option>\n    <option value=\"building\">Infrastructure</option>\n    <option value=\"organisation\">Organisation</option>\n  </select>\n    <span class=\"help-block\" *ngIf=\"role.invalid && role.touched\">\n            Profil requis\n    </span>\n  </div>\n\n  <div class=\"form-group\" [ngClass] = \"{\n         'has-error': country.invalid && country.touched,\n         'has-success': country.valid && country.touched}\">\n    <label class=\"control-label\">Pays</label>\n    <input type=\"text\" class=\"form-control\" name=\"country\" required\n           [(ngModel)]=\"user.address.country\"\n           #country=\"ngModel\">\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"control-label\">Ville</label>\n    <input type=\"text\" class=\"form-control\" name=\"city\" required\n           [(ngModel)]=\"user.address.city\"\n           #city=\"ngModel\">\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"control-label\">Rue</label>\n    <input type=\"text\" class=\"form-control\" name=\"street_address\" required\n           [(ngModel)]=\"user.address.street_address\"\n           #street_adress=\"ngModel\">\n  </div>\n\n  <div class=\"form-group\">\n    <label class=\"control-label\">Numéro de rue</label>\n    <input type=\"text\" class=\"form-control\" name=\"num\" required\n           [(ngModel)]=\"user.address.num\"\n           #num=\"ngModel\">\n  </div>\n\n  <!--//google map pour preciser l'address-->\n  <sebm-google-map  class=\"agm-map\" [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" ></sebm-google-map>\n\n  <div class=\"form-group\">\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"form.invalid\">S'inscrire</button>\n  </div>\n\n</form>\n</div>\n"

/***/ }),

/***/ 900:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n<h2>\n  Bienvenue sur la page utilisateurs\n</h2>\n<div class=\"container\">\n  <div class=\"row\" *ngFor=\"let user of users\">\n    <div class=\"card card-block\">\n      <h4 class=\"card-title\">{{ user.email }}</h4>\n      <p class=\"card-text\">{{user._id}}</p>\n      <a class=\"btn btn-default btn-lg\" (click)=\"buttonDelete(user)\"><i class=\"glyphicon glyphicon-trash\"></i> Delete</a>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__(21);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], UsersService);
    return UsersService;
    var _a, _b;
}());
//# sourceMappingURL=F:/CALM/src/users.service.js.map

/***/ })

},[1185]);
//# sourceMappingURL=main.bundle.map