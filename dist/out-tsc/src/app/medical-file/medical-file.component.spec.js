import { async, TestBed } from '@angular/core/testing';
import { MedicalFileComponent } from './medical-file.component';
describe('MedicalFileComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MedicalFileComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MedicalFileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=F:/CALM/src/src/app/medical-file/medical-file.component.spec.js.map