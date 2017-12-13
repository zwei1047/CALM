import { async, TestBed } from '@angular/core/testing';
import { GoogleMapComponent } from './google-map.component';
describe('GoogleMapComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [GoogleMapComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(GoogleMapComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=F:/CALM/src/src/app/medical-file/google-map/google-map.component.spec.js.map