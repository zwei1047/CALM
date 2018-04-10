/**
 * Created by Pierre on 13/11/17
 */

var mongoose = require('mongoose');
var dbcrypt = require('../controllers/encryption');

//define the schema
var treatmentSchema = mongoose.Schema ({
  userId : String,
  codeCIS : String,
  name: String,
  takingState : {type:String, enum:['','Avant-repas','Pendant-repas','Apres-repas','A-jeun','Avant-dormir','Au-reveil']},
  quantity: String,
  frequence : String,
  typeFrequence : {type:String, enum:['','heures','jours','semaines','mois','annees']},
  info : String,
  start: String,
  end: String,
  expired: String,
  substances: {type: String},
  doctor : {type: mongoose.Schema.Types.ObjectId, ref: 'Doctor'}
});

treatmentSchema.methods.encrypt = function(){
  this.userId = dbcrypt.encrypt(this.userId);
  this.codeCIS = dbcrypt.encrypt(this.codeCIS);
  this.name = dbcrypt.encrypt(this.name);
  this.quantity = dbcrypt.encrypt(this.quantity);
  this.frequence = dbcrypt.encrypt(this.frequence);
  this.info = dbcrypt.encrypt(this.info);
  this.start = dbcrypt.encrypt(this.start);
  this.end = dbcrypt.encrypt(this.end);
  this.expired = dbcrypt.encrypt(this.expired);
}

treatmentSchema.methods.decrypt = function(){
  this.userId = dbcrypt.decrypt(this.userId);
  this.codeCIS = dbcrypt.decrypt(this.codeCIS);
  this.name = dbcrypt.decrypt(this.name);
  this.quantity = dbcrypt.decrypt(this.quantity);
  this.frequence = dbcrypt.decrypt(this.frequence);
  this.info = dbcrypt.decrypt(this.info);
  this.start = dbcrypt.decrypt(this.start);
  this.end = dbcrypt.decrypt(this.end);
  this.expired = dbcrypt.decrypt(this.expired);
}

// create the model for users and expose it to our app
module.exports = mongoose.model('Treatment', treatmentSchema);
