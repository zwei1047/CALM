
import {Doctor} from './doctor';

export class Service {
  _id: string;
  doctor_associated: Doctor[];
  phone: string;
  name: string;
  email: string;
  Created_at: Date;

  constructor(serviceInfo: any) {
    if (serviceInfo) {
      this.phone = serviceInfo.phone;
      this.name = serviceInfo.name;
      this.email = serviceInfo.email;
      for (const elt of serviceInfo.doctor_associated) {
        this.doctor_associated.push(new Doctor(elt));
      }
      if (serviceInfo.Created_at) {
        this.Created_at = serviceInfo.Created_at;
      }
    } else {
      this._id = '';
      this.phone = '';
      this.name = '';
      this.email = '';
    }
  }
}
