/**
 * Created by Romain on 22/04/2017.
 */
import {Patient} from "./patient";
import {User} from "./user";

export class Post {
  _id : string;
  patient: Patient;
  doctor: User;
  text: string;

  constructor(postInfo:any) {
    if (postInfo){
      this._id = postInfo._id;
      this.patient = new Patient(postInfo.patient);
      this.doctor = new User(postInfo.doctor);
      this.text = postInfo.text;

    }
    else {
      this._id = "";
      this.patient = new Patient(null);
      this.doctor = new User(null);
      this.text = "";
    }
  }

}




