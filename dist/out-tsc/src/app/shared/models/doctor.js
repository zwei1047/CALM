import { User } from "./user";
import { Patient } from "./patient";
import { Building } from './building';
export var Doctor = (function () {
    function Doctor(DoctorInfo) {
        if (DoctorInfo) {
            this._id = DoctorInfo._id;
            this.user_id = new User(DoctorInfo.user_id);
            this.phone = DoctorInfo.phone;
            for (var _i = 0, _a = DoctorInfo.patients; _i < _a.length; _i++) {
                var elt = _a[_i];
                this.patients.push(new Patient(elt));
            }
            for (var _b = 0, _c = DoctorInfo.infrastructure; _b < _c.length; _b++) {
                var elt = _c[_b];
                this.infrastructure.push(new Building(elt));
            }
        }
        else {
            this._id = "";
            this.user_id = new User(null);
            this.phone = "";
        }
    }
    return Doctor;
}());
//# sourceMappingURL=F:/CALM/src/src/app/shared/models/doctor.js.map