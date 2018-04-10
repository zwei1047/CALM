var mongoose = require('mongoose');
var Doctor = require('../models/doctor');
var dbcrypt = require('../controllers/encryption');

//define the schema
var disponnibiliteSchema = mongoose.Schema ({
  doctor : {type: mongoose.Schema.Types.ObjectId, ref: 'Doctor'},
  jour: String,
  mois: String,
  an: String,
  disponnibilite: {type: [Date]}
});

disponnibiliteSchema.methods.encrypt = function(){
	this.jour = dbcrypt.encrypt(this.jour);
	this.mois = dbcrypt.encrypt(this.mois);
	this.an = dbcrypt.encrypt(this.an);
}

disponnibiliteSchema.methods.decrypt = function(){
	this.jour = dbcrypt.decrypt(this.jour);
	this.mois = dbcrypt.decrypt(this.mois);
	this.an = dbcrypt.decrypt(this.an);
}

// create the model for users and expose it to our app
module.exports = mongoose.model('Disponnibilite', disponnibiliteSchema);
