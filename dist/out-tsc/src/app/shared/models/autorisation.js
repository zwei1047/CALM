import { User } from './user';
export var Autorisation = (function () {
    function Autorisation(autorisationInfo) {
        this.subjectList = ['POST', 'DOSSIER', 'RDV'];
        this.typeList = ['READ', 'READ_WRITE'];
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
            this.confirm = autorisationInfo.confirm;
        }
        else {
            this.user = new User(null);
            this.observer = new User(null);
            this.type = 'READ';
            this.subject = 'POST';
            this.valide = false;
            this.confirm = false;
        }
    }
    return Autorisation;
}());
//# sourceMappingURL=F:/CALM/src/src/app/shared/models/autorisation.js.map