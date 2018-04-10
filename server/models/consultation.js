/**
 * Created by ISEN on 11/04/2017.
 */
var mongoose = require('mongoose');
var Patient = require('../models/patient');
var Doctor = require('../models/doctor');
var dbcrypt = require('../controllers/encryption');

//define the schema
var consultationSchema = mongoose.Schema ({
  patient : {type: mongoose.Schema.Types.ObjectId, ref: 'Patient'},
  doctor : {type: mongoose.Schema.Types.ObjectId, ref: 'Doctor'},
  motif: String,
  date: String
});

consultationSchema.methods.encrypt = function(){
	this.motif = dbcrypt.encrypt(this.motif);
	this.date = dbcrypt.encrypt(this.date);
}

consultationSchema.methods.decrypt = function(){
	this.motif = dbcrypt.decrypt(this.motif);
	this.date = dbcrypt.decrypt(this.date);
}

// create the model for users and expose it to our app
module.exports = mongoose.model('Consultation', consultationSchema);
