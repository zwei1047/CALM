/**
 * Created by Romain on 22/04/2017.
 */
import {Doctor} from './doctor';
import {User} from './user';
import {Address} from "./address";
import {forEach} from "@angular/router/src/utils/collection";


export class Post {
  _id: string;
  sender: User;
  receiver: User[];
  text: String;
  Created_at: Date;
  type: ['INFO', 'ALERT', 'POST', 'TREATMENT'];



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
      this._id = "";
      this.sender = new User(null);
      this.text = "";
      this.Created_at = null;
    }
  }

}




