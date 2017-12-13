import {User} from './user';


export class Autorisation {
  _id: string;
  user: User;
  observer: User;
  private subjectList: string[] = ['POST', 'DOSSIER', 'RDV'];
  type: string;
  private typeList: string[] = ['READ', 'READ_WRITE'];
  subject: string;
  Created_at: Date;
  valide: Boolean;

  constructor(autorisationInfo: any) {
    if (autorisationInfo) {
      this.user = new User(autorisationInfo.user);
      this.observer = new User(autorisationInfo.observer);
      if (autorisationInfo.type && autorisationInfo.subject) {
        if (this.typeList.indexOf(autorisationInfo.type) !== -1 && this.subjectList.indexOf(autorisationInfo.subject) !== -1) {
          console.log('type & subject valid');
          this.type = autorisationInfo.type;
          this.subject = autorisationInfo.subject;
        }
      }
      this.Created_at = autorisationInfo.Created_at;
      this.valide = autorisationInfo.valide;
    } else {
      this.user = new User(null);
      this.observer = new User(null);
      this.type = 'READ';
      this.subject = 'POST';
      this.valide = true;

    }
  }
}
