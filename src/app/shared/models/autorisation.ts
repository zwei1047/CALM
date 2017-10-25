import {User} from './user';

export enum TypeAutorisation {READ, READ_WRITE};
export enum SubjectAutorisation {DOSSIER, POST, RDV};

export class Autorisation {
  _id: string;
  user: User;
  observer: User;
  type: TypeAutorisation;
  subject: SubjectAutorisation;
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
      this.type = TypeAutorisation.READ;
      this.subject = SubjectAutorisation.POST;

    }
  }
}
