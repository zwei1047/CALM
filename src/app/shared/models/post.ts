
import {User} from './user';


export enum TypePost {
  INFO = <any>'INFO',
  ALERT = <any>'ALERT',
  POST = <any>'POST',
  TREATMENT = <any>'TREATMENT'};


export class Post {
  _id: string;
  sender: User;
  receiver: User;
  text: String;
  Created_at: Date;
  type: TypePost;

// lle type de post ne fonctionne pas

  constructor(postInfo: any) {
    if (postInfo) {
      this._id = postInfo._id;
      this.sender = new User(postInfo.sender);
      this.receiver = new User(postInfo.receiver);
      this.text = postInfo.text;
      this.type = postInfo.type;

    } else {
      this.sender = new User(null);
      this.receiver = new User(null);
      this.text = '';
      this.Created_at = null;
    }
  }

}




