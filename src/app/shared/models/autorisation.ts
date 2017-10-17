import {User} from './user';

type TypeEnum = 'Read' | 'Read_Write';
const TypeEnum = {
  Read: 'Read' as TypeEnum,
  Read_Write: 'Read_Write' as TypeEnum
};

type SubjectEnum = 'Dossier' | 'Post' | 'Rdv';
const SubjectEnum = {
  Dossier: 'Dossier' as SubjectEnum,
  Post: 'Post' as SubjectEnum,
  Rdv: 'Rdv' as SubjectEnum
};

export class Autorisation {
  _id: string;
  user: User;
  observer: User;
  type: TypeEnum;
  subject: SubjectEnum;
  Created_at: Date;
  valide: Boolean;

  constructor(autorisationInfo: any) {
    if (autorisationInfo) {
      this.user = new User(autorisationInfo.user);
      this.observer = new User(autorisationInfo.observer);
      this.type = autorisationInfo.type;
      this.subject = autorisationInfo.subject;
      this.Created_at = autorisationInfo.Created_at;
      this.valide = autorisationInfo.valide;
    } else {
      this.user = new User(null);
      this.observer = new User(null);
      this.type = TypeEnum.Read;
      this.subject = SubjectEnum.Post;

    }
  }
}
