/**
 * Created by Romain on 22/04/2017.
 */
import {Doctor} from './doctor';
import {User} from './user';
import {Address} from "./address";
import {forEach} from "@angular/router/src/utils/collection";

type TypeEnum = 'INFO' | 'ALERT' | 'POST' | 'TREATMENT';
const TypeEnum = {
  INFO: 'INFO' as TypeEnum,
  ALERT: 'ALERT' as TypeEnum,
  POST: 'POST' as TypeEnum,
  TREATMENT: 'TREATMENT' as TypeEnum
};


export class Post {
  _id: string;
  sender: User;
  receiver: User[];
  text: String;
  Created_at: Date;
  type: TypeEnum;



  constructor(postInfo: any) {
    if (postInfo) {
      this._id = postInfo._id;
      this.sender = new User(postInfo.sender);
      for (const elt of postInfo.receiver){
        this.receiver.push(new User(elt));
      }
      this.text = postInfo.text;
      this.type = postInfo.type;

    } else {
      this.sender = new User(null);
      this.text = '';
      this.Created_at = null;
    }
  }

}




