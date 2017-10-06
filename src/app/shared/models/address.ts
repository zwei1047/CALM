/**
 * Created by ISEN on 11/04/2017.
 */

export class Address {
  _id: string;
  num: number;
  street_address: string;
  city: string;
  postal_code: number;
  country: string;

  constructor(AdressInfo: any) {
    // console.log("AdressInfo : ", AdressInfo);
    if (AdressInfo) {
      this._id = AdressInfo._id;
      this.num = AdressInfo.num;
      this.street_address = AdressInfo.street_address;
      this.city = AdressInfo.city;
      this.postal_code = AdressInfo.postal_code;
      this.country = AdressInfo.country;
    } else {
      this._id = "";
      this.num = 0;
      this.street_address = "";
      this.city = "";
      this.postal_code = 0;
      this.country = "France";
    }



  }

}
