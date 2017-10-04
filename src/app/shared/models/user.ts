import {DatePipe} from "@angular/common";
import DateTimeFormat = Intl.DateTimeFormat;
import {Address} from "./address";
/**
 * Created by ISEN on 15/03/2017.
 */
export class User {
    _id : string;
    first_name : string;
    last_name : string;
    birth_date : DatePipe;
    email : string;
    password: string;
    role : string;
    profile_img : File;
    address : Address;

    constructor(UserInfo: any){
      // console.log("UserInfo : ", UserInfo);
      if (UserInfo) {
        this._id = UserInfo._id;
        this.first_name = UserInfo.first_name;
        this.last_name = UserInfo.last_name;
        this.birth_date = UserInfo.birth_date;
        this.email = UserInfo.email;
        this.password= UserInfo.password;
        this.role = UserInfo.role;
        this.profile_img = UserInfo.profile_img;
        this.address = new Address(UserInfo.address);
      }
      else {
        this._id = "";
        this.first_name = "";
        this.last_name = "";
        this.birth_date = null;
        this.email = "";
        this.password= "";
        this.role = "";
        this.profile_img = null;
        this.address = new Address(null);
      }

    };

}
