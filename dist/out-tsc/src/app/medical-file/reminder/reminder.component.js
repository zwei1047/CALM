var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { ReminderService } from "../../shared/services/reminder.service";
import { UsersService } from "../../shared/services/users.service";
import { User } from "../../shared/models/user";
import { AuthenticationService } from "../../shared/services/authentication.service";
import { DialogAnchorDirective } from "./dialoganchor.directive";
import { DialogComponent } from "./dialog.component";
export var ReminderComponent = (function () {
    function ReminderComponent(reminderService, userService, authentication) {
        this.reminderService = reminderService;
        this.userService = userService;
        this.authentication = authentication;
        this.rappeles = [];
    }
    ReminderComponent.prototype.openDialogBox = function () {
        this.dialogAnchor.createDialog(DialogComponent);
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
            _this.user = new User(user);
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
        ViewChild(DialogAnchorDirective), 
        __metadata('design:type', DialogAnchorDirective)
    ], ReminderComponent.prototype, "dialogAnchor", void 0);
    ReminderComponent = __decorate([
        Component({
            selector: 'app-reminder',
            templateUrl: './reminder.component.html',
            styleUrls: ['./reminder.component.css'],
            entryComponents: [DialogComponent]
        }), 
        __metadata('design:paramtypes', [ReminderService, UsersService, AuthenticationService])
    ], ReminderComponent);
    return ReminderComponent;
}());
//# sourceMappingURL=F:/CALM/src/src/app/medical-file/reminder/reminder.component.js.map