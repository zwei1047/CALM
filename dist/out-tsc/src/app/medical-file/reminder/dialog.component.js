var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter } from '@angular/core';
export var DialogComponent = (function () {
    function DialogComponent() {
        this.close = new EventEmitter();
    }
    DialogComponent.prototype.onClickedExit = function () {
        this.close.emit('event');
    };
    DialogComponent = __decorate([
        Component({
            selector: 'app-dlg',
            template: "\n    <div class=\"dialog\">\n        <header>\n          <div class=\"title\">Dialog box</div>\n          <div class=\"exit-button\" (click)=\"onClickedExit()\">x</div>\n        </header>\n        <p>Hello, I'm a dialog box!</p>\n    </div>\n    ",
            styles: ["\n        .dialog {\n            height: 300px;\n            width: 250px;\n            position: absolute;\n            border: 1px solid black;\n            border-radius: 5px;\n            overflow: hidden;\n            position: fixed;\n            left: calc(50% - 125px);\n            top: 100px;\n            z-index: 1000;\n            background: #fff;\n        }\n        .dialog p {\n            text-align: center;\n        }\n        .dialog header {\n            border-bottom: 1px solid black;\n            font-size: 12px;\n            padding: 5px;\n            display: flex;\n        }\n        .dialog header .title {\n            flex-grow: 1;\n            cursor: default;\n        }\n        .dialog header .exit-button {\n            cursor: pointer;\n            padding: 0 5px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], DialogComponent);
    return DialogComponent;
}());
//# sourceMappingURL=F:/CALM/src/src/app/medical-file/reminder/dialog.component.js.map