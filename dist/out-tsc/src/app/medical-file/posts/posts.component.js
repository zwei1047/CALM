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
import { MedicalFileService } from "../../shared/services/medical-file.service";
export var PostsComponent = (function () {
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
        Component({
            selector: 'app-posts',
            templateUrl: './posts.component.html',
            styleUrls: ['./posts.component.css']
        }), 
        __metadata('design:paramtypes', [MedicalFileService])
    ], PostsComponent);
    return PostsComponent;
}());
//# sourceMappingURL=F:/CALM/src/src/app/medical-file/posts/posts.component.js.map