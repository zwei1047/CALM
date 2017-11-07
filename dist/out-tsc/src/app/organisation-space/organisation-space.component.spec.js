import { async, TestBed } from '@angular/core/testing';
import { OrganisationSpaceComponent } from './organisation-space.component';
describe('OrganisationSpaceComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [OrganisationSpaceComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(OrganisationSpaceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=F:/CALM/src/src/app/organisation-space/organisation-space.component.spec.js.map