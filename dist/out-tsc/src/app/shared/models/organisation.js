import { User } from "./user";
import { Address } from "./address";
export var Organisation = (function () {
    function Organisation(organisationInfo) {
        if (organisationInfo) {
            this.user_id = new User(organisationInfo.user_id);
            this.name = organisationInfo.name;
            this.email = organisationInfo.email;
            this.phone = organisationInfo.phone;
            this.address = new Address(organisationInfo.address);
            if (organisationInfo.Created_at) {
                this.Created_at = organisationInfo.Created_at;
            }
        }
        else {
            this._id = '';
            this.user_id = new User(null);
            this.name = '';
            this.phone = '';
            this.email = '';
            this.address = new Address(null);
        }
    }
    return Organisation;
}());
//# sourceMappingURL=F:/CALM/src/src/app/shared/models/organisation.js.map