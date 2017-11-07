import { async, TestBed } from '@angular/core/testing';
import { CurrentTreatmentComponent } from './current-treatment.component';
describe('CurrentTreatmentComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CurrentTreatmentComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CurrentTreatmentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=F:/CALM/src/src/app/medical-file/current-treatment/current-treatment.component.spec.js.map