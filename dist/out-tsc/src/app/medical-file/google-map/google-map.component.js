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
import { DoctorSearchService } from "../../shared/services/doctor-search.service";
export var GoogleMapComponent = (function () {
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
        Component({
            selector: 'app-google-map',
            templateUrl: './google-map.component.html',
            styleUrls: ['./google-map.component.css']
        }), 
        __metadata('design:paramtypes', [DoctorSearchService])
    ], GoogleMapComponent);
    return GoogleMapComponent;
}());
//# sourceMappingURL=F:/CALM/src/src/app/medical-file/google-map/google-map.component.js.map