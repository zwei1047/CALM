import { async, TestBed } from '@angular/core/testing';
import { ReminderComponent } from './reminder.component';
describe('ReminderComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ReminderComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ReminderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=F:/CALM/src/src/app/medical-file/reminder/reminder.component.spec.js.map