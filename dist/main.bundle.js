webpackJsonp([1,4],{

/***/ 1176:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(563);


/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__(28);
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

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(28);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(28);
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

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__patient__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__building__ = __webpack_require__(690);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(52);
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

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(893);
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

/***/ 400:
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
            template: __webpack_require__(872),
            styles: [__webpack_require__(853)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=F:/CALM/src/about.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_user__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_users_service__ = __webpack_require__(120);
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
            template: __webpack_require__(873),
            styles: [__webpack_require__(854)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_services_users_service__["a" /* UsersService */]) === 'function' && _c) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=F:/CALM/src/app.component.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_space_service__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__ = __webpack_require__(28);
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
            template: __webpack_require__(874),
            styles: [__webpack_require__(855)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_space_service__["a" /* DoctorSpaceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_space_service__["a" /* DoctorSpaceService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], BuildingSpaceComponent);
    return BuildingSpaceComponent;
    var _a, _b;
}());
//# sourceMappingURL=F:/CALM/src/building-space.component.js.map

/***/ }),

/***/ 403:
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
            template: __webpack_require__(875),
            styles: [__webpack_require__(856)]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
//# sourceMappingURL=F:/CALM/src/contact.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_space_service__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_post__ = __webpack_require__(691);
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
            template: __webpack_require__(876),
            styles: [__webpack_require__(857)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_space_service__["a" /* DoctorSpaceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_space_service__["a" /* DoctorSpaceService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], DoctorSpaceComponent);
    return DoctorSpaceComponent;
    var _a, _b;
}());
//# sourceMappingURL=F:/CALM/src/doctor-space.component.js.map

/***/ }),

/***/ 405:
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
            template: __webpack_require__(877),
            styles: [__webpack_require__(858)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=F:/CALM/src/home.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_user__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_authentication_service__ = __webpack_require__(28);
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
            template: __webpack_require__(878),
            styles: [__webpack_require__(859)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=F:/CALM/src/login.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__ = __webpack_require__(28);
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
            template: __webpack_require__(883),
            styles: [__webpack_require__(864)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object])
    ], MedicalFileComponent);
    return MedicalFileComponent;
    var _a;
}());
//# sourceMappingURL=F:/CALM/src/medical-file.component.js.map

/***/ }),

/***/ 408:
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
            template: __webpack_require__(886)
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
//# sourceMappingURL=F:/CALM/src/not-found.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_space_service__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__ = __webpack_require__(28);
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
            template: __webpack_require__(887),
            styles: [__webpack_require__(867)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_space_service__["a" /* DoctorSpaceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_doctor_space_service__["a" /* DoctorSpaceService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], OrganisationSpaceComponent);
    return OrganisationSpaceComponent;
    var _a, _b;
}());
//# sourceMappingURL=F:/CALM/src/organisation-space.component.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_users_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_user__ = __webpack_require__(52);
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
        this.image = __webpack_require__(561);
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
            template: __webpack_require__(888),
            styles: [__webpack_require__(868)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_users_service__["a" /* UsersService */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=F:/CALM/src/profile.component.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_users_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_user__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_patient__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_medical_file_service__ = __webpack_require__(183);
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
    function SettingsComponent(authentication, usersService, medicalService) {
        this.authentication = authentication;
        this.usersService = usersService;
        this.medicalService = medicalService;
        this.doctors = [];
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.patient = new __WEBPACK_IMPORTED_MODULE_4__shared_models_patient__["a" /* Patient */](null);
        this.user = new __WEBPACK_IMPORTED_MODULE_3__shared_models_user__["a" /* User */](null);
        this.loadAllDoctors();
        this.isLogged = this.authentication.isLoggedIn();
        if (this.isLogged) {
            this.getProfile();
        }
    };
    SettingsComponent.prototype.getProfile = function () {
        var _this = this;
        this.usersService.getProfile()
            .subscribe(function (user) {
            _this.user = new __WEBPACK_IMPORTED_MODULE_3__shared_models_user__["a" /* User */](user);
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
    SettingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(889),
            styles: [__webpack_require__(869)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_users_service__["a" /* UsersService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_medical_file_service__["a" /* MedicalFileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_services_medical_file_service__["a" /* MedicalFileService */]) === 'function' && _c) || Object])
    ], SettingsComponent);
    return SettingsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=F:/CALM/src/settings.component.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_user__ = __webpack_require__(52);
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
            template: __webpack_require__(890),
            styles: [__webpack_require__(870)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b;
}());
//# sourceMappingURL=F:/CALM/src/register.component.js.map

/***/ }),

/***/ 413:
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
        }
        else {
            this._id = "";
            this.num = 0;
            this.street_address = "";
            this.city = "";
            this.postal_code = 0;
            this.country = "France";
        }
    }
    return Address;
}());
//# sourceMappingURL=F:/CALM/src/address.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_users_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(117);
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
            template: __webpack_require__(891),
            styles: [__webpack_require__(871)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_users_service__["a" /* UsersService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_users_service__["a" /* UsersService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], UsersComponent);
    return UsersComponent;
    var _a, _b;
}());
//# sourceMappingURL=F:/CALM/src/users.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__address__ = __webpack_require__(413);
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

/***/ 561:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgA3ADcAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A+t+lGaKBQAUZoooAM0Zoo6UAFFFFACmkoooAKWkooABRRRQAtJS0lABRRS0AGaSjNFABS0lLQAlFFFABQaKM0AFFFGaAA0UGgCgAooxRQACiiigAooIooAKOtFAoAKKKKACiig0ALSUUUAFFFGKACiiigAooooADRRRQAdqKMUdBQAUYoooAKKKKACiiigAooxRQAUUYooAMUUUUALSVc0vSLzWbkQWVu88h67RwPcntXoWi/B4ACTVLs5/54239WI/pQB5jRivfbHwNoWnqBHpsLkfxTDzD+ua1E0uzjGEtIFHoIgKAPm+ivou40DTLoETafayf70K5/lXP6p8LtEvwTDHJZSHo0Lcfkc/pigDxMUvSuv8AEPwy1TRUeaAC/thzmIfOB7r/AIZrjyMcEYoAWkoooAKWkooAKBRRQAvSikooAKWkowaACiiigAooooAKKKKACig0UAFdP4N8EXPimfzGJgsEOHmxyx/ur7/yql4T8NS+J9XS2XKwr880n91f8T0Fe82NlBptpFbW0YjgjG1VHYUARaTo9nolottZwLDGOuOrH1J7mrtFFABRmijNABSZpaKADNcb4y+Hlrr8b3VmFttQxnIGFk/3vf3rsqPwoA+ary0m0+5kt7iNoZ4ztZGHINQ17T8RPBy69YteWqAahAueP+Wij+H6+n5V4tgjjoaACjNFFABS0lFABmjNFBoABQKKKACiiigAooooAXNJR2ooAKKK1PDGm/2x4gsbQjKSSjeP9kcn9AaAPX/h54fXQvD8TOmLq6AllyOR/dH4D+ddRSAYGAMAUUAL+FFJS4oAKM0fhRQAUUUYoAOlH4UUmKAFrxL4l+H10TXzLCm22uwZV9A2fmH9fxr2z8K474qaWL3ww04GZLVxID3weD/MH8KAPFs0UUUAGaKKKACiijFABRmijmgAoopaAEoooFABRRRQAV2fwntxN4sDkZ8qB3Ht0X/2auMruPhC4TxRMD/FauB/30h/pQB7HzSUtFACUtFFACc0tHSigA5o5oo7UAFFFFABWZ4mtxdeHdTiIzutpMfXacVp1S1xxFouoOei28hP/fJoA+cetFFFABRRRQAUGiigApfwpKMZoAKMUUCgAooozQACiiigAIro/h7fDT/F1gzHCSMYj/wIED9cVzlPilaCVJEJV0YMpHYjmgD6YoxVDQdVTW9HtL1OBKgJA7N0I/PNX8UAFFHejFABRRR2oAKKKKACijvRQAVzvxAvxYeEtQbOGlTyV99xwf0zXRV5b8YdaEk1ppaNnZ++l+p4Uflk/iKAPNsUYoooAMUUUdKACiiigAoxRSigApBRRQAUUCigAopaKAENFFFAHffC3xUum3jaXdPtt7hsxMx4V/T8f5167XzKCQQR1HcV658P/iAmpxx6dqMgW8X5Y5W6Sj0P+1/OgDvs0UlL/OgAzRmikoAWiiigAooqrqWpW2k2cl1dyrDCg5Zu/sPU0AQ69rcHh/S5r24PyoPlXPLt2UV8+6lqE2q3893OxaWZizEn9B7DpWz4z8XzeKr/AHYMVnGSIYT/AOhH3Nc7QAUUUUAHSgGgmigAoNFFABRR0ozQAUtJS0AJRR1ooAKO9FFABRig0GgAoGcgjg+1bfhvwhqHiebbbR7IFOHuJOEX/E+wr1jw78PdL0AJIYxd3Y6zTDOD/sr0H8/egDI+H2r+I7iOOG9snnsgAFupjscD8fvD/Oa7+kpaADFHWjqKKACiiigCrqdxc21lJJaWv2ycD5Yt4TP4mvDfGGq6zqWof8TeOS3K/cgKlUX6Dv8AWvfKq6hplpq1uYby3juIj/C4zj6elAHzdRXpHij4TvCHuNGYyIOTayH5v+Anv9DXnMsLwSNHIjRyKcMrDBB9xQA2iiigAoooNABRRRQAUCgUlAC0UUUAFFFFABRRQaACu38D/DyTXSl7fhobDOVTo0v09B70fD3wN/bswv71CLCJvlQj/XMO30HevY1UIqqoCqOAAOBQBHa2kNlAkEEaxRIMKiDAAqWikoAXFFGKKADFFHaigAooooAKKKKACuY8X+BrTxPCZFAt79R8kwH3vZvUV09FAHzfqml3OjXslrdxGKZDyD0I9R6iqnSvfPGHhK38VWGxsR3ceTDNjofQ+xrwq+sZ9Mu5bW5jMU0TbWU9qAIDQaMcUUAFBo70UAFGaKMUAFFLSUAHaiiigArc8H+GZPFGrpbjK26fPNIP4V/xPQViKpdgqjJJwABXvPgfw2PDWhxxOoF3L+8mP+16fh/jQBuWtrFZW0dvBGI4Y1Coi9ABUtFFAAaKCaKADvRRnFFABRR60ZoAKKKKACiiigAooooADXEfErwgNasDqFsmb63X5gvWRPT6jtXb5o9qAPmTpRXW/Ejwz/YOtGeFMWd0S6Y6K38S/rn8a5LtQAYoNFBoAKKKKACiiloASjpRRQB2Hwx0Eav4gFxIu63sx5h44L/wj+Z/Cva81ynw00YaV4YhkZcTXR85vofuj8ufxrq6AE7UtFFABRRRQAlLRRQAlLzRRigAooooAKKKKACiiigA70UUUAYPjbQh4g8PXEAXdOg82HHXcO348j8a8CIIJBHPpX03Xg3j/Rxovie6jRdsMp86PHo3UfnkUAc7zRRQaACjmjrQP880AFLSUUAHWrWl2TalqVrar96aRY/zOKq11nwwsftfi63YjKwI0p/LA/UigD2yGJYIkjQbURQqj0A6U+iigA6UUlLQAn40tFFACUtFFAB1ooooAKKKKACiiigAooooAKKKDQAV5x8ZNND2djfgfNG5iYj0IyP5H869HrnfiBZfb/COoKBlkQSj/gJB/lmgDwaiig0AAooozQAUUDvQKACvRfgzb7tQ1GfHKRKn5kn/ANlrzrsK9T+DCgWuqN3Lxj8g1AHpFJRmlFABRSUvpQAUUGgUAHeijvR2oAKKD3oxgUAFFAo7UAFFFB4oAKKMUZ60AFFBooAKralb/a9OuoSM+ZEyfmCKs4o60AfMhHNFS3aBLuZR0DkD86ixmgAox7UUuKAP/9k="

/***/ }),

/***/ 562:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 562;


/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(682);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=F:/CALM/src/main.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_users_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__users_users__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__not_found_not_found__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__register_register_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_services_authentication_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__profile_profile_component__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng_trim_value_accessor__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__medical_file_medical_file_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__medical_file_doctor_profile_doctor_profile_component__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__medical_file_current_treatment_current_treatment_component__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_services_medical_file_service__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__profile_settings_settings_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__medical_file_calendar_calendar_component__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__medical_file_reminder_reminder_component__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__doctor_space_doctor_space_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__building_space_building_space_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_services_doctor_space_service__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__medical_file_google_map_google_map_component__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angular2_google_maps_core__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__medical_file_posts_posts_component__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__organisation_space_organisation_space_component__ = __webpack_require__(409);
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
                __WEBPACK_IMPORTED_MODULE_29__medical_file_posts_posts_component__["a" /* PostsComponent */]
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
                __WEBPACK_IMPORTED_MODULE_26__shared_services_doctor_space_service__["a" /* DoctorSpaceService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=F:/CALM/src/app.module.js.map

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_users__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__not_found_not_found__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__medical_file_medical_file_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_settings_settings_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__doctor_space_doctor_space_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__building_space_building_space_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__organisation_space_organisation_space_component__ = __webpack_require__(409);
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

/***/ 684:
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
            template: __webpack_require__(879),
            styles: [__webpack_require__(860)]
        }), 
        __metadata('design:paramtypes', [])
    ], CalendarComponent);
    return CalendarComponent;
}());
//# sourceMappingURL=F:/CALM/src/calendar.component.js.map

/***/ }),

/***/ 685:
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
            template: __webpack_require__(880),
            styles: [__webpack_require__(861)]
        }), 
        __metadata('design:paramtypes', [])
    ], CurrentTreatmentComponent);
    return CurrentTreatmentComponent;
}());
//# sourceMappingURL=F:/CALM/src/current-treatment.component.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_medical_file_service__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_patient__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_authentication_service__ = __webpack_require__(28);
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
        this.image = __webpack_require__(561);
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
            template: __webpack_require__(881),
            styles: [__webpack_require__(862)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_medical_file_service__["a" /* MedicalFileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_medical_file_service__["a" /* MedicalFileService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], DoctorProfileComponent);
    return DoctorProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=F:/CALM/src/doctor-profile.component.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
    function GoogleMapComponent() {
        this.lat = 50.6315144;
        this.lng = 3.056218;
    }
    GoogleMapComponent.prototype.ngOnInit = function () {
    };
    GoogleMapComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-google-map',
            template: __webpack_require__(882),
            styles: [__webpack_require__(863)]
        }), 
        __metadata('design:paramtypes', [])
    ], GoogleMapComponent);
    return GoogleMapComponent;
}());
//# sourceMappingURL=F:/CALM/src/google-map.component.js.map

/***/ }),

/***/ 688:
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
            template: __webpack_require__(884),
            styles: [__webpack_require__(865)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_medical_file_service__["a" /* MedicalFileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_medical_file_service__["a" /* MedicalFileService */]) === 'function' && _a) || Object])
    ], PostsComponent);
    return PostsComponent;
    var _a;
}());
//# sourceMappingURL=F:/CALM/src/posts.component.js.map

/***/ }),

/***/ 689:
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
            template: __webpack_require__(885),
            styles: [__webpack_require__(866)]
        }), 
        __metadata('design:paramtypes', [])
    ], ReminderComponent);
    return ReminderComponent;
}());
//# sourceMappingURL=F:/CALM/src/reminder.component.js.map

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__doctor__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service__ = __webpack_require__(692);
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

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__(52);
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

/***/ 692:
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

/***/ 693:
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

/***/ 853:
/***/ (function(module, exports) {

module.exports = ".container-fluid {\r\n    padding: 60px 50px;\r\n}\r\n\r\nvideo {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.video-container {\r\n    position: relative;\r\n    padding-bottom: 56.25%;\r\n    padding-top: 30px;\r\n    height: 0;\r\n    overflow: hidden;\r\n}\r\n\r\n.video-container iframe,\r\n.video-container object,\r\n.video-container embed {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.video-wrapper {\r\n\r\n    width: 1200px;\r\n    max-width: 100%;\r\n}\r\n"

/***/ }),

/***/ 854:
/***/ (function(module, exports) {

module.exports = "/*.active {\r\n  color: white !important;\r\n}*/\r\n\r\n.dropdown-menu {\r\n  background-color: grey;\r\n}\r\n"

/***/ }),

/***/ 855:
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n  background-color: white;\r\n  color: black;\r\n}\r\n"

/***/ }),

/***/ 856:
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ 857:
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n  background-color: white;\r\n  color: black;\r\n}\r\n"

/***/ }),

/***/ 858:
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ 859:
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched {\r\n  border-left: 5px solid red;\r\n}\r\n\r\ninput.ng-valid.ng-touched {\r\n  border-left: 5px solid green;\r\n}\r\n\r\nform {\r\n  text-align: left;\r\n  margin-left: 10px;\r\n}\r\n\r\n.modal-body {\r\n  padding: 100px 25px;\r\n  position: relative;\r\n}\r\n\r\n.jumbotron {\r\n  background-color: white;\r\n  color: black;\r\n}\r\n\r\n#myModalHorizontal {\r\n  top: 10%;\r\n}\r\n"

/***/ }),

/***/ 860:
/***/ (function(module, exports) {

module.exports = ".col-xs-1 {\r\n  width: 13.33333333%;\r\n}\r\n"

/***/ }),

/***/ 861:
/***/ (function(module, exports) {

module.exports = ".list-item {\r\n  text-align: left;\r\n}\r\n"

/***/ }),

/***/ 862:
/***/ (function(module, exports) {

module.exports = ".well-sm {\r\n  padding: 9px;\r\n  border-radius: 3px;\r\n  margin-right: 15px;\r\n}\r\n"

/***/ }),

/***/ 863:
/***/ (function(module, exports) {

module.exports = ".sebm-google-map-container {\r\n  height: 300px;\r\n}\r\n"

/***/ }),

/***/ 864:
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n  background-color: white;\r\n  color: black;\r\n}\r\n\r\n\r\n.class{\r\n  background:grey;\r\n}\r\n"

/***/ }),

/***/ 865:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 866:
/***/ (function(module, exports) {

module.exports = ".list-item {\r\n  text-align: left;\r\n}\r\n"

/***/ }),

/***/ 867:
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n  background-color: white;\r\n  color: black;\r\n}\r\n"

/***/ }),

/***/ 868:
/***/ (function(module, exports) {

module.exports = "body{padding-top:30px;}\r\n\r\n.glyphicon {  margin-bottom: 10px;margin-right: 10px;}\r\n\r\nsmall {\r\n  display: block;\r\n  line-height: 1.428571429;\r\n  color: #999;\r\n}\r\n\r\n\r\n.row {\r\n}\r\n\r\n[class*=\"col-\"] {\r\n\r\n  text-align: center;\r\n\r\n}\r\n\r\n\r\n.jumbotron {\r\n  background-color: white;\r\n  color: black;\r\n}\r\n"

/***/ }),

/***/ 869:
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n  background-color: white;\r\n  color: black;\r\n}\r\n"

/***/ }),

/***/ 870:
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n  background-color: white;\r\n  color: black;\r\n  max-width: 400px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n"

/***/ }),

/***/ 871:
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n  background-color: white;\r\n  color: black;\r\n}\r\n"

/***/ }),

/***/ 872:
/***/ (function(module, exports) {

module.exports = "<!-- Container (About Section) -->\r\n<div id=\"about\" class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-8\">\r\n            <h2>A propos de nous</h2><br>\r\n            <h4>Nous sommes une jeune start-up dont le but est de centraliser les données de la santé afin de rendre\r\n                l'accès au soins plus facile.</h4><br>\r\n            <p>Cette plateforme est en cours de développement, elle sera bientôt disponible. Il sera alors possible de\r\n                prendre rendez-vous avec votre médecin ou encore de rechercher un spécialiste directement sur la\r\n                plateforme.</p>\r\n            <br>\r\n            <div class=\"video-wrapper\">\r\n                <div class=\"video-container\">\r\n                    <iframe width=\"100%\" height=\"800\" src=\"https://www.youtube.com/embed/KXdNGiiHTjk\"\r\n                            frameborder=\"0\"\r\n                            allowfullscreen></iframe>\r\n                </div>\r\n                <br>\r\n                <button class=\"btn btn-default btn-lg\">En savoir plus</button>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n                <span class=\"glyphicon glyphicon-signal logo\"></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 873:
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"container\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a routerLink=\"/\" class=\"navbar-brand\"><i class=\"glyphicon glyphicon-apple\"></i>CALM</a>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n        <li><a *ngIf=\"isLogged && (user.role[0] == 'patient' && user.role[1] != 'building' && user.role[1] != 'organisation')\" routerLink=\"medical-file\" routerLinkActive=\"active\"\r\n               [routerLinkActiveOptions]=\"{exact:true}\"><i class=\"glyphicon glyphicon-folder-open\"></i> Mon dossier</a></li>\r\n        <li><a *ngIf=\"isLogged && (user.role[1] == 'medecin')\" routerLink=\"doctor-space\" routerLinkActive=\"active\"\r\n               [routerLinkActiveOptions]=\"{exact:true}\"><i class=\"glyphicon glyphicon-briefcase\"></i> Espace médecin</a></li>\r\n        <li><a *ngIf=\"isLogged && (user.role[1] == 'building')\" routerLink=\"building-space\" routerLinkActive=\"active\"\r\n               [routerLinkActiveOptions]=\"{exact:true}\"><i class=\"glyphicon glyphicon-briefcase\"></i> Espace infrastructure</a></li>\r\n        <li><a *ngIf=\"isLogged && (user.role[1] == 'organisation')\" routerLink=\"organisation-space\" routerLinkActive=\"active\"\r\n               [routerLinkActiveOptions]=\"{exact:true}\"><i class=\"glyphicon glyphicon-briefcase\"></i> Espace organisation</a></li>\r\n        <li><a href=\"#about\">A propos</a></li>\r\n        <li><a href=\"#contact\">Contact</a></li>\r\n        <li><a routerLink=\"users\" routerLinkActive=\"active\">Utilisateurs</a></li>\r\n        <!--<li><a href=\"https://localhost:3000/api\">API</a></li>-->\r\n            <li>\r\n              <div *ngIf=\"isLogged\" class=\"dropdown\">\r\n              <button class=\"btn btn-default btn-lg\" type=\"button\" data-toggle=\"dropdown\" *ngIf=\"user\">{{user.first_name}}\r\n                <span class=\"caret\"></span></button>\r\n              <ul class=\"dropdown-menu\">\r\n                <li><a routerLink=\"profile\" routerLinkActive=\"active\"> Profil</a></li>\r\n                <li><a routerLink=\"settings\" routerLinkActive=\"active\"> Paramètres</a></li>\r\n                <li><a routerLinkActive=\"active\" (click)=\"logout()\"> Deconnexion</a></li>\r\n              </ul>\r\n              </div>\r\n            </li>\r\n\r\n          <li><a *ngIf=\"!isLogged\" routerLink=\"register\" routerLinkActive=\"active\">\r\n            <span class=\"glyphicon glyphicon-user\"></span> Inscription</a></li>\r\n          <li><a *ngIf=\"!isLogged\" routerLink=\"login\" routerLinkActive=\"active\">\r\n            <span class=\"glyphicon glyphicon-log-in\"></span> Connexion</a></li>\r\n      </ul>\r\n      </div>\r\n\r\n      <!--<ul class=\"nav navbar-nav navbar-right\">-->\r\n\r\n        <!--<div *ngIf=\"isLogged\" class=\"dropdown\">-->\r\n          <!--<button class=\"btn btn-default btn-lg\" type=\"button\" data-toggle=\"dropdown\" *ngIf=\"user\">{{user.first_name}}-->\r\n            <!--<span class=\"caret\"></span></button>-->\r\n          <!--<ul class=\"dropdown-menu\">-->\r\n            <!--<li><a routerLink=\"profile\" routerLinkActive=\"active\"> Profil</a></li>-->\r\n            <!--<li><a routerLink=\"settings\" routerLinkActive=\"active\"> Paramètres</a></li>-->\r\n            <!--<li><a routerLinkActive=\"active\" (click)=\"logout()\"> Deconnexion</a></li>-->\r\n          <!--</ul>-->\r\n        <!--</div>-->\r\n\r\n        <!--<li><a *ngIf=\"!isLogged\" routerLink=\"register\" routerLinkActive=\"active\">-->\r\n          <!--<span class=\"glyphicon glyphicon-user\"></span> Inscription</a></li>-->\r\n        <!--<li><a *ngIf=\"!isLogged\" routerLink=\"login\" routerLinkActive=\"active\">-->\r\n          <!--<span class=\"glyphicon glyphicon-log-in\"></span> Connexion</a></li>-->\r\n      <!--</ul>-->\r\n    </div>\r\n  </nav>\r\n</header>\r\n\r\n<main>\r\n  <router-outlet></router-outlet>\r\n</main>\r\n\r\n<footer class=\"container-fluid text-center\">\r\n  <a href=\"#myPage\" title=\"To Top\">\r\n    <span class=\"glyphicon glyphicon-chevron-up\"></span>\r\n  </a>\r\n  <p>CALM Site Copyrights</p>\r\n</footer>\r\n"

/***/ }),

/***/ 874:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n  <div *ngIf=\"isLogged\" class=\"container\">\r\n    Bienvenue sur la page infrastructure\r\n  </div>\r\n  <div *ngIf=\"!isLogged\">\r\n    <h1>Accès non autorisé, veuillez vous connecter pour accéder à cette page !</h1>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 875:
/***/ (function(module, exports) {

module.exports = "<!-- Container (Contact Section) -->\r\n<div id=\"contact\" class=\"container-fluid bg-grey\">\r\n  <h2 class=\"text-center\">CONTACT</h2>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-5\">\r\n      <p>Contactez nous et nous vous répondrons dans les 24 heures.</p>\r\n      <p><span class=\"glyphicon glyphicon-map-marker\"></span> Lille, France</p>\r\n      <p><span class=\"glyphicon glyphicon-phone\"></span> 03.20.57.84.25</p>\r\n      <p><span class=\"glyphicon glyphicon-envelope\"></span> calmsite@hotmail.com</p>\r\n    </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6 form-group\">\r\n          <input class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Nom\" type=\"text\" required>\r\n        </div>\r\n        <div class=\"col-sm-6 form-group\">\r\n          <input class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email\" type=\"email\" required>\r\n        </div>\r\n      </div>\r\n      <textarea class=\"form-control\" id=\"comments\" name=\"comments\" placeholder=\"Commentaire\" rows=\"5\"></textarea><br>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 form-group\">\r\n          <button class=\"btn btn-default pull-right\" type=\"submit\">Envoyer</button>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 876:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n  <div *ngIf=\"isLogged\" class=\"container\">\r\n    <div class=\"row\" *ngFor=\"let patient of patients\">\r\n      <div class=\"card card-block\" *ngIf=\"patient.general_doctor\">\r\n        <!--Trick to display only the patients from the current doctor. Should NOT be made this way.-->\r\n        <h4 class=\"card-title\">{{ patient.user_id.first_name}} {{patient.user_id.last_name}}</h4>\r\n        <p class=\"card-text\">{{patient.user_id.email}}</p>\r\n\r\n        <a class=\"btn btn-default btn-lg\" (click)=\"change_submit(patient)\">Envoyer un message</a>\r\n\r\n      </div>\r\n    </div>\r\n    <form (ngSubmit)=\"send_post()\" *ngIf=\"submitted\" #form=\"ngForm\" role=\"form\">\r\n      <p><br><br>Laissez votre message pour {{patient_selected.user_id.first_name}}</p>\r\n    <div class=\"container\">\r\n      <textarea class=\"form-control\" id=\"comments\" name=\"comments\" placeholder=\"Commentaire\" rows=\"5\" [(ngModel)]=\"post.text\"></textarea><br>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 form-group\">\r\n          <button class=\"btn btn-default pull-right\" type=\"submit\">Envoyer</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </form>\r\n  </div>\r\n\r\n  <div *ngIf=\"!isLogged\">\r\n    <h1>Accès non autorisé, veuillez vous connecter pour accéder à cette page !</h1>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 877:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n  <h1>CALM</h1>\r\n  <p>L'application de e-santé</p>\r\n  <form>\r\n    <div class=\"input-group\">\r\n      <input type=\"email\" class=\"form-control\" size=\"50\" placeholder=\"Rechercher un médecin\" required>\r\n      <div class=\"input-group-btn\">\r\n        <button type=\"button\" class=\"btn btn-danger\">Rechercher</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<about-page></about-page>\r\n<contact-page></contact-page>\r\n"

/***/ }),

/***/ 878:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n  <h2 class=\"text-center\">Page de connexion</h2>\r\n\r\n  <!-- Button trigger modal -->\r\n  <button class=\"btn btn-primary btn-lg\" data-toggle=\"modal\" data-target=\"#myModalHorizontal\">\r\n    Connexion\r\n  </button>\r\n\r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"myModalHorizontal\" tabindex=\"-1\" role=\"dialog\"\r\n       aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n\t<!-- Modal Header -->\r\n\t<div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\"\r\n                  data-dismiss=\"modal\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n            <span class=\"sr-only\">Close</span>\r\n          </button>\r\n          <h4 class=\"modal-title\" id=\"myModalLabel\">\r\n            Connexion\r\n          </h4>\r\n\t</div>\r\n\r\n\t<!-- Modal Body -->\r\n\t<div class=\"modal-body\">\r\n\r\n          <form (ngSubmit)=\"login()\" *ngIf=\"!submitted\" #form=\"ngForm\" class=\"form-horizontal\" role=\"form\">\r\n            <div class=\"form-group\" [ngClass] = \"{\r\n\t\t\t\t\t\t 'has-error': email.invalid && email.touched,\r\n\t\t\t\t\t\t 'has-success': email.valid && email.touched}\">\r\n\r\n              <label  class=\"col-sm-2 control-label\"\r\n                      for=\"inputEmail3\">Email</label>\r\n              <div class=\"col-sm-10\">\r\n\t\t<input type=\"email\" class=\"form-control\"\r\n                       id=\"inputEmail3\" placeholder=\"Email\" required\r\n                       [(ngModel)]=\"user.email\" name=\"email\"\r\n                       #email=\"ngModel\"/>\r\n\t\t<span class=\"help-block\" *ngIf=\"email.invalid && email.touched\">\r\n\t\t  Email is required\r\n\t\t</span>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\" [ngClass] = \"{\r\n\t\t\t\t\t\t 'has-error': password.invalid && password.touched,\r\n\t\t\t\t\t\t 'has-success': password.valid && password.touched}\">\r\n\r\n              <label class=\"col-sm-2 control-label\"\r\n                     for=\"inputPassword3\" >Mot de passe</label>\r\n              <div class=\"col-sm-10\">\r\n\t\t<input type=\"password\" class=\"form-control\"\r\n                       id=\"inputPassword3\" placeholder=\"Mot de passe\" name=\"password\" required\r\n                       [(ngModel)]=\"user.password\"\r\n                       #password=\"ngModel\"/>\r\n\t\t<span class=\"help-block\" *ngIf=\"password.invalid && password.touched\">\r\n\t\t  Password is required\r\n\t\t</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"col-sm-offset-2 col-sm-10\">\r\n\t\t<button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"form.invalid\">Connexion</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n\t</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 879:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\r\n  <div class=\"panel-heading\"><h3><i class=\"glyphicon glyphicon-calendar\"></i> Prendre rendez-vous</h3></div>\r\n  <div class=\"panel-body\">\r\n<div class=\"wrapper\">\r\n  <div class=\"header\">\r\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n    <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n    <p>Avril 2017</p>\r\n  </div><!-- end header -->\r\n  <div class=\"col-sm-6-offset-2 col-md-4-offset-2\">\r\n  <div class=\"calendar-body\">\r\n    <div class=\"row weekdays\">\r\n      <div class=\"col-xs-1\"><p>L</p></div><!-- end col-xs-1 -->\r\n      <div class=\"col-xs-1\"><p>Ma</p></div><!-- end col-xs-1 -->\r\n      <div class=\"col-xs-1\"><p>Me</p></div><!-- end col-xs-1 -->\r\n      <div class=\"col-xs-1\"><p>J</p></div><!-- end col-xs-1 -->\r\n      <div class=\"col-xs-1\"><p>V</p></div><!-- end col-xs-1 -->\r\n      <div class=\"col-xs-1\"><p>S</p></div><!-- end col-xs-1 -->\r\n      <div class=\"col-xs-1\"><p>D</p></div><!-- end col-xs-1 -->\r\n    </div><!-- end row -->\r\n\r\n    <div class=\"row dates\">\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p class=\"inactive\">28</p></a></div>\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p class=\"inactive\">29</p></a></div>\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p class=\"inactive\">30</p></a></div>\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p class=\"inactive\">31</p></a></div>\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p>1</p></a></div>\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p>2</p></a></div>\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p>3</p></a></div>\r\n    </div><!-- end row -->\r\n\r\n    <div class=\"row dates\">\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p>4</p></a></div>\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p>5</p></a></div>\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p>6</p></a></div>\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p>7</p></a></div>\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p>8</p></a></div>\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p>9</p></a></div>\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p>10</p></a></div>\r\n    </div><!-- end row -->\r\n\r\n    <div class=\"row dates\">\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p>11</p></a></div>\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p>12</p></a></div>\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p>13</p></a></div>\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p>14</p></a></div>\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p>15</p></a></div>\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p>16</p></a></div>\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p>17</p></a></div>\r\n    </div><!-- end row -->\r\n\r\n    <div class=\"row dates\">\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p>18</p></a></div>\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p>19</p></a></div>\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p>20</p></a></div>\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p>21</p></a></div>\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p>22</p></a></div>\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p>23</p></a></div>\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p>24</p></a></div>\r\n    </div><!-- end row -->\r\n\r\n    <div class=\"row dates\">\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p>25</p></a></div>\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p>26</p></a></div>\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p>27</p></a></div>\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p>28</p></a></div>\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p>29</p></a></div>\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p>30</p></a></div>\r\n      <div class=\"col-xs-1\"><a href=\"#\"><p>31</p></a></div>\r\n    </div><!-- end row -->\r\n\r\n    <div class=\"line\"></div>\r\n\r\n    <div class=\"current-date\">Mardi 25 avril</div>\r\n  </div><!-- end calendar-body -->\r\n  </div>\r\n</div><!-- end wrapper -->\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ 880:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-12 col-xs-12\">\r\n      <div class=\"panel-heading\"><h3><i class=\"glyphicon glyphicon-plus\"></i> Mon traitement</h3></div>\r\n      <div class=\"panel-body\">\r\n      <h4>Contre la Grippe :</h4>\r\n      <div class=\"list-item\">\r\n        <ul>\r\n          <li>Paracétamol : jusqu'à 4 g/jour pour les adultes, soit 1 à 2 comprimés (s) à 500 mg par prise, à renouveler en cas de besoin (jusqu'à 8 par jour). Espacer les prises d'au moins 4 heures.</li>\r\n          <li>Pseudoéphédrine : 5 jours maximum, voir indications sur la notice</li>\r\n          <li>Sirops antitussifs opiacés (dextrométorphane, codéine, codéthyline, etc.) : 120 mg/j</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ 881:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\" *ngIf=\"isLogged\">\r\n  <div class=\"panel-heading\"><h3><i class=\"glyphicon glyphicon-user\"></i> Mon médecin traitant</h3></div>\r\n  <div class=\"panel-body\">\r\n  <div class=\"row\" *ngIf=\"patient\">\r\n    <div class=\"col-sm-6 col-md-4\">\r\n      <img src=\"{{image}}\"\r\n           class=\"img-rounded\" alt=\"Image Profil\"/>\r\n    </div>\r\n    <div class=\"col-sm-6 col-md-8\">\r\n      <h4>{{patient.general_doctor.user_id.first_name}} {{patient.general_doctor.user_id.last_name}}</h4>\r\n      <small><cite title=\"Cabinet\"> {{patient.general_doctor.cabinet}} <i class=\"glyphicon glyphicon-map-marker\">\r\n      </i></cite></small>\r\n      <p>\r\n        <i class=\"glyphicon glyphicon-envelope\"></i> {{patient.general_doctor.user_id.email}}\r\n        <br />\r\n        <i class=\"glyphicon glyphicon-earphone\"></i> {{patient.general_doctor.phone}}<br />\r\n      </p>\r\n      <br><button class=\"btn btn-default btn-lg\">Contacter</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n  <!--<div class=\"row\" *ngIf=\"!patient.general_doctor.user_id\">-->\r\n    <!--<div class=\"col-sm-6 col-md-4\">-->\r\n      <!--<img src=\"{{image}}\"-->\r\n           <!--class=\"img-rounded\" alt=\"Image Profil\"/>-->\r\n    <!--</div>-->\r\n    <!--<div class=\"col-sm-6 col-md-8\">-->\r\n      <!--<h3>Votre médecin traitant</h3>-->\r\n        <!--<p>Veuillez renseigner votre médecin traitant dans les paramètres de votre compte</p>-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n<!--</div>-->\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 882:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\r\n  <div class=\"panel-heading\"><h3><i class=\"glyphicon glyphicon-map-marker\"></i> Trouver le médecin le plus proche</h3></div>\r\n  <div class=\"panel-body\">\r\n    <div class=\"input-group\">\r\n      <input type=\"email\" class=\"form-control\" size=\"50\" placeholder=\"Rechercher un médecin\" required>\r\n      <div class=\"input-group-btn\">\r\n        <button type=\"button\" class=\"btn btn-danger\">Rechercher</button>\r\n      </div>\r\n    </div>\r\n<sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\"></sebm-google-map>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 883:
/***/ (function(module, exports) {

module.exports = "<<div class=\"jumbotron text-center\">\r\n<div *ngIf=\"isLogged\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n      <!--Hello-->\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-xlg-6 col-xl-6 col-lg-12 col-sm-12 col-xs-12\">\r\n      <app-posts></app-posts>\r\n    </div>\r\n\r\n    <div class=\"col-xlg-6 col-xl-6 col-lg-12 col-sm-12 col-xs-12\">\r\n      <app-current-treatment></app-current-treatment>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-xlg-9 col-xl-6 col-lg-6  col-md-12 col-sm-12 col-xs-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xlg-8 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n          <app-reminder></app-reminder>\r\n        </div>\r\n        <div class=\"col-xlg-4 col-xl-12 col-lg-12 col-md-5 col-sm-12 col-xs-12\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-xlg-3 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12\">\r\n      <div>\r\n        <app-google-map></app-google-map>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"row shift-up\">\r\n    <div class=\"col-xlg-3 col-lg-6 col-md-12 col-sm-12 col-xs-12\">\r\n      <app-calendar></app-calendar>\r\n\r\n    </div>\r\n    <div class=\"col-xlg-6 col-lg-6 col-md-12 col-sm-12 col-xs-12\" >\r\n      <app-doctor-profile></app-doctor-profile>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div *ngIf=\"!isLogged\">\r\n  <h1>Accès non autorisé, veuillez vous connecter pour accéder à cette page !</h1>\r\n</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 884:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-12 col-xs-12\">\r\n      <div class=\"panel-heading\"><h3><i class=\"glyphicon glyphicon-comment\"></i> Mes messages</h3></div>\r\n      <div class=\"panel-body\">\r\n        <div class=\"row\" *ngFor=\"let post of posts\">\r\n          <div class=\"card card-block\">\r\n            <h4 class=\"card-title\">{{ post.doctor.first_name }} {{ post.doctor.last_name }}</h4>\r\n            <p class=\"card-text\">{{post.text}}</p>\r\n          </div>\r\n        </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 885:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-12 col-xs-12\">\r\n      <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\"><h3><i class=\"glyphicon glyphicon-bell\"></i> Mes rappels</h3></div>\r\n        <div class=\"panel-body\"><ul>\r\n          <div class=\"list-item\">\r\n          <li>Tests de PAP à effectuer</li>\r\n          <li>Vaccins à administrer</li>\r\n          </div>\r\n        </ul></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 886:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n  <h1>404 Not Found</h1>\r\n  <p>You may be lost. Follow the breadcrumbs back <a routerLink=\"/\">home</a>.</p>\r\n</div>\r\n"

/***/ }),

/***/ 887:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n  <div *ngIf=\"isLogged\" class=\"container\">\r\n    Bienvenue sur la page infrastructure\r\n  </div>\r\n  <div *ngIf=\"!isLogged\">\r\n    <h1>Accès non autorisé, veuillez vous connecter pour accéder à cette page !</h1>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 888:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n<h3>Page de profil</h3>\r\n\r\n<div class=\"container\" *ngIf=\"isLogged\">\r\n  <div class=\"row\" *ngIf=\"user\">\r\n    <div class=\"col-xs-12 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2\">\r\n      <div class=\"well well-sm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6 col-md-4\">\r\n            <img src=\"{{image}}\"\r\n                 class=\"img-rounded\" alt=\"Image Profil\"/>\r\n          </div>\r\n          <div class=\"col-sm-6 col-md-8\">\r\n            <h4>\r\n              {{user.first_name}} {{user.last_name}}</h4>\r\n            <small><cite title=\"address\">{{user.address.city}}, {{user.address.country}} <i class=\"glyphicon glyphicon-map-marker\">\r\n            </i></cite></small>\r\n            <p>\r\n              <i class=\"glyphicon glyphicon-envelope\"></i>{{user.email}}\r\n              <br />\r\n              <i class=\"glyphicon glyphicon-gift\"></i>{{user.birth_date | date: 'dd/MM/yyyy'}}<br />\r\n              <i class=\"glyphicon glyphicon-info-sign\"></i>{{user.role}}\r\n            </p>\r\n            <!-- button -->\r\n            <div class=\"btn-group\">\r\n              <a type=\"button\" href=\"/settings\" routerLinkActive=\"active\" class=\"btn btn-default btn-lg\">\r\n                <i class=\"glyphicon glyphicon-cog\"></i> Paramètres</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n<!--<div class=\"form-group\" [ngClass] = \"{\r\n         'has-error': profile_img.invalid && profile_img.touched,\r\n         'has-success': profile_img.valid && profile_img.touched}\">\r\n  <label class=\"control-label\">Image de profil</label>\r\n  <input name=\"profile_img\" type=\"file\" class=\"form-control\" [(ngModel)]=\"user.profile_img\"\r\n         (change)=\"handleFileSelect($event)\" #profile_img=\"ngModel\" accept=\"image/*\">\r\n  <span class=\"help-block\" *ngIf=\"profile_img.invalid && profile_img.touched\">\r\n            Image de profil requise\r\n    </span>\r\n</div>-->\r\n\r\n"

/***/ }),

/***/ 889:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n  <div *ngIf=\"user\"><h2>Paramètres</h2>\r\n\r\n    <div *ngIf=\"user.role=='patient'\">\r\n      <h3>Choisissez votre médecin généraliste</h3>\r\n      <div *ngFor=\"let doctor of doctors\">\r\n        <a class=\"btn btn-default btn-lg\" routerLinkActive=\"active\" (click)=\"addDoctor(doctor)\">\r\n          {{doctor.user_id.first_name}} {{doctor.user_id.last_name}}</a>\r\n        <h5><br></h5>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 890:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n  <h2 class=\"text-center\">Page d'inscription</h2>\r\n\r\n<div *ngIf=\"!submitted\" >\r\n  <h3>Email already exist</h3>\r\n</div>\r\n\r\n<form (ngSubmit)=\"register()\" #form=\"ngForm\">\r\n\r\n  <div class=\"form-group\"\r\n       [ngClass] = \"{\r\n         'has-error': first_name.invalid && first_name.touched,\r\n         'has-success': first_name.valid && first_name.touched}\">\r\n    <label class=\"control-label\">Prénom</label>\r\n    <input type=\"text\" class=\"form-control\" name=\"first_name\" required\r\n           [(ngModel)]=\"user.first_name\"\r\n           #first_name=\"ngModel\">\r\n    <span class=\"help-block\" *ngIf=\"first_name.invalid && first_name.touched\">\r\n            Prénom requis\r\n        </span>\r\n  </div>\r\n\r\n  <div class=\"form-group\"\r\n       [ngClass] = \"{\r\n         'has-error': last_name.invalid && last_name.touched,\r\n         'has-success': last_name.valid && last_name.touched}\">\r\n    <label class=\"control-label\">Nom</label>\r\n    <input type=\"text\" class=\"form-control\" name=\"last_name\" required\r\n           [(ngModel)]=\"user.last_name\"\r\n           #last_name=\"ngModel\">\r\n    <span class=\"help-block\" *ngIf=\"last_name.invalid && last_name.touched\">\r\n            Nom requis\r\n        </span>\r\n  </div>\r\n\r\n  <div class=\"form-group\"\r\n       [ngClass] = \"{\r\n         'has-error': email.invalid && email.touched,\r\n         'has-success': email.valid && email.touched}\">\r\n    <label class=\"control-label\">Email</label>\r\n    <input type=\"email\" class=\"form-control\" name=\"email\" required\r\n           [(ngModel)]=\"user.email\"\r\n           #email=\"ngModel\">\r\n    <span class=\"help-block\" *ngIf=\"email.invalid && email.touched\">\r\n            Email requis\r\n        </span>\r\n  </div>\r\n\r\n  <div class=\"form-group\" [ngClass] = \"{\r\n         'has-error': password.invalid && password.touched,\r\n         'has-success': password.valid && password.touched}\">\r\n    <label class=\"control-label\">Mot de passe</label>\r\n    <input type=\"password\" class=\"form-control\" name=\"password\" required\r\n           [(ngModel)]=\"user.password\"\r\n           #password=\"ngModel\">\r\n    <span class=\"help-block\" *ngIf=\"password.invalid && password.touched\">\r\n            Mot de passe requis\r\n        </span>\r\n  </div>\r\n\r\n  <div class=\"form-group\" [ngClass] = \"{\r\n         'has-error': password.invalid && password.touched,\r\n         'has-success': password.valid && password.touched}\">\r\n    <label class=\"control-label\">Date de naissance</label>\r\n    <input type=\"date\" class=\"form-control\" name=\"birth_date\" required\r\n      [(ngModel)]=\"user.birth_date\" #birth_date=\"ngModel\" max=\"2017-01-01\">\r\n    <span class=\"help-block\" *ngIf=\"birth_date.invalid && birth_date.touched\">\r\n            Date de naissance requise\r\n    </span>\r\n  </div>\r\n\r\n  <div class=\"form-group\" [ngClass] = \"{\r\n         'has-error': role.invalid && role.touched,\r\n         'has-success': role.valid && role.touched}\">\r\n    <label class=\"control-label\">Choisissez votre profil</label>\r\n  <select name=\"role\" class=\"form-control\" required [(ngModel)]=\"user.role\" #role=\"ngModel\">\r\n    <option value=\"patient\">Patient</option>\r\n    <option value=\"medecin\">Medecin</option>\r\n    <option value=\"building\">Infrastructure</option>\r\n    <option value=\"organisation\">Organisation</option>\r\n  </select>\r\n    <span class=\"help-block\" *ngIf=\"role.invalid && role.touched\">\r\n            Profil requis\r\n    </span>\r\n  </div>\r\n\r\n  <div class=\"form-group\" [ngClass] = \"{\r\n         'has-error': country.invalid && country.touched,\r\n         'has-success': country.valid && country.touched}\">\r\n    <label class=\"control-label\">Pays</label>\r\n    <input type=\"text\" class=\"form-control\" name=\"country\" required\r\n           [(ngModel)]=\"user.address.country\"\r\n           #country=\"ngModel\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label\">Ville</label>\r\n    <input type=\"text\" class=\"form-control\" name=\"city\" required\r\n           [(ngModel)]=\"user.address.city\"\r\n           #city=\"ngModel\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label\">Rue</label>\r\n    <input type=\"text\" class=\"form-control\" name=\"street_address\" required\r\n           [(ngModel)]=\"user.address.street_address\"\r\n           #street_adress=\"ngModel\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label\">Numéro de rue</label>\r\n    <input type=\"text\" class=\"form-control\" name=\"num\" required\r\n           [(ngModel)]=\"user.address.num\"\r\n           #num=\"ngModel\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"form.invalid\">S'inscrire</button>\r\n  </div>\r\n\r\n</form>\r\n</div>\r\n"

/***/ }),

/***/ 891:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n<h2>\r\n  Bienvenue sur la page utilisateurs\r\n</h2>\r\n<div class=\"container\">\r\n  <div class=\"row\" *ngFor=\"let user of users\">\r\n    <div class=\"card card-block\">\r\n      <h4 class=\"card-title\">{{ user.email }}</h4>\r\n      <p class=\"card-text\">{{user._id}}</p>\r\n      <a class=\"btn btn-default btn-lg\" (click)=\"buttonDelete(user)\"><i class=\"glyphicon glyphicon-trash\"></i> Delete</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ })

},[1176]);
//# sourceMappingURL=main.bundle.map