import { async, TestBed } from '@angular/core/testing';
import { BuildingSpaceComponent } from './building-space.component';
describe('BuildingSpaceComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BuildingSpaceComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BuildingSpaceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=F:/CALM/src/src/app/building-space/building-space.component.spec.js.map