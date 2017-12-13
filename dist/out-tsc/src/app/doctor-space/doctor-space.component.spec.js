import { async, TestBed } from '@angular/core/testing';
import { DoctorSpaceComponent } from './doctor-space.component';
describe('DoctorSpaceComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DoctorSpaceComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DoctorSpaceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=F:/CALM/src/src/app/doctor-space/doctor-space.component.spec.js.map