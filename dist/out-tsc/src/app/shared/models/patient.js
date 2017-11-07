import { User } from "./user";
import { Doctor } from "./doctor";
export var Patient = (function () {
    function Patient(patientInfo) {
        if (patientInfo) {
            this._id = patientInfo._id;
            this.user_id = new User(patientInfo.user_id);
            this.general_doctor = new Doctor(patientInfo.general_doctor);
            for (var _i = 0, _a = patientInfo.patient_followed; _i < _a.length; _i++) {
                var elt = _a[_i];
                this.patient_followed.push(new Patient(elt));
            }
        }
        else {
            this._id = '';
            this.user_id = new User(null);
            this.general_doctor = new Doctor(null);
            this.phone = '';
        }
    }
    return Patient;
}());
//# sourceMappingURL=F:/CALM/src/src/app/shared/models/patient.js.map