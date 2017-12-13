import { User } from "./user";
import { Doctor } from "./doctor";
export var Reminder = (function () {
    function Reminder(rappelInfo) {
        if (rappelInfo) {
            this._id = rappelInfo._id;
            this.user = rappelInfo.user;
            this.rappel = rappelInfo.rappel;
            this.date = rappelInfo.date;
            this.expire = rappelInfo.expire;
            this.doctor = rappelInfo.doctor;
        }
        else {
            this._id = '';
            this.rappel = {
                name: '',
                quantity: '',
                takingState: '',
                frequence: '',
                typeFrequence: '',
                info: ''
            };
            this.expire = true;
            this.user = new User(null);
            this.doctor = new Doctor(null);
        }
    }
    return Reminder;
}());
//# sourceMappingURL=F:/CALM/src/src/app/shared/models/reminder.js.map