"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
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
        core_1.Component({
            selector: 'alert-info',
            templateUrl: 'alert-info.component.html',
            styleUrls: ['alert-info.component.css'],
            inputs: ['user']
        })
    ], AlertInfoComponent);
    return AlertInfoComponent;
}());
exports.AlertInfoComponent = AlertInfoComponent;
