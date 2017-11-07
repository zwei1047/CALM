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
  latitude: number;
  longitude: number;
  precision: boolean;

  constructor(AdressInfo: any) {
    // console.log("AdressInfo : ", AdressInfo);
    if (AdressInfo) {
      this._id = AdressInfo._id;
      this.num = AdressInfo.num;
      this.street_address = AdressInfo.street_address;
      this.city = AdressInfo.city;
      this.postal_code = AdressInfo.postal_code;
      this.country = AdressInfo.country;
      this.latitude = AdressInfo.latitude;
      this.longitude = AdressInfo.longitude;
      this.precision = AdressInfo.precision;
    } else {
      this._id = "";
      this.num = 0;
      this.street_address = "";
      this.city = "";
      this.postal_code = 0;
      this.country = "France";
      this.latitude = 0;
      this.longitude = 0;
      this.precision = false;
    }



  }

}
