import { Patient } from "./patient";
import { Doctor } from "./doctor";
export var Consultation = (function () {
    function Consultation(consultationInfo) {
        if (consultationInfo) {
            this.doctor = new Doctor(consultationInfo.doctor);
            this.patient = new Patient(consultationInfo.patient);
            this.date = consultationInfo.date;
        }
        else {
            this.doctor = new Doctor(null);
            this.patient = new Patient(null);
            this.date = null;
        }
    }
    return Consultation;
}());
//# sourceMappingURL=F:/CALM/src/src/app/shared/models/consultation.js.map