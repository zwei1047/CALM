/**
 * Created by Pierre on 13/11/17
 */

export class Treatment {
  _id: string;
  userId: string;
  codeCIS: string;
  name: string;
  takingState: string;
  quantity: number;
  frequence: number;
  typeFrequence: string;
  info: string;
  start: Date;
  end: Date;
  expired: boolean;
  substances: string[];

  constructor(TreatmentInfo: any) {
    if (TreatmentInfo) {
      this._id = TreatmentInfo._id;
      this.codeCIS = TreatmentInfo.codeCIS;
      this.userId = TreatmentInfo.userId;
      this.name = TreatmentInfo.name;
      this.takingState = TreatmentInfo.takingState;
      this.quantity = TreatmentInfo.quantity;
      this.frequence = TreatmentInfo.frequence;
      this.typeFrequence = TreatmentInfo.typeFrequence;
      this.info = TreatmentInfo.info;
      this.start = TreatmentInfo.start;
      this.end = TreatmentInfo.end;
      this.substances = TreatmentInfo.substances;
    } else {
      this._id = '';
      this.codeCIS = '';
      this.start = null;
      this.end = null;
    }


  }

}
