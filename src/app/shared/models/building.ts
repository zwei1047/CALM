
import {User} from "./user";
import {Doctor} from "./doctor";
import {Address} from "./address";
import {Service} from './service';

export class Building {
  _id: string;
  user_id: User;
  doctor_associated: Doctor[];
  address: Address;
  phone: String;
  name: String;
  email: String;
  services: Service[];
  Created_at: Date;

  constructor(buildingInfo: any) {
    if (buildingInfo) {
      this.user_id = new User(buildingInfo.user_id);
      for (const elt of buildingInfo.doctor_associated) {
        this.doctor_associated.push(new Doctor(elt));
      }
      this.address = buildingInfo.address;
      this.phone = buildingInfo.phone;
      this.name = buildingInfo.name;
      this.email = buildingInfo.email;
      for (const elt of buildingInfo.services){
        this.services.push(new Service(elt));
      }
      if (buildingInfo.Created_at) {
        this.Created_at = buildingInfo.Created_at;
      }
    } else {
      this._id = '';
      this.user_id = new User(null);
      this.address = new Address(null);
      this.phone = '';
      this.email = '';
      this.name = '';
    }
  };
}
