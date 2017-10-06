
import {User} from "./user";
import {Address} from "./address";

export class Organisation {
  _id: string;
  user_id: User;
  name: string;
  email: string;
  phone: string;
  address: Address;
  Created_at: Date;

  constructor(organisationInfo: any) {
    if (organisationInfo) {
      this.user_id = new User(organisationInfo.user_id);
      this.name = organisationInfo.name;
      this.email = organisationInfo.email;
      this.phone = organisationInfo.phone;
      this.address = new Address(organisationInfo.address);
      if (organisationInfo.Created_at) {
        this.Created_at = organisationInfo.Created_at;
      }
    } else {
      this._id = '';
      this.user_id = new User(null);
      this.name = '';
      this.phone = '';
      this.email = '';
      this.address = new Address(null);
    }
  }
}
