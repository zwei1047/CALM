var mongoose = require('mongoose');
var Patient = require('../models/patient');
var Doctor = require('../models/doctor');
var dbcrypt = require('../controllers/encryption');

var diseaseSchema = mongoose.Schema({
  patient: {type:mongoose.Schema.Types.ObjectId, ref:'Patient'},
  doctor: {type:mongoose.Schema.Types.ObjectId, ref:'Doctor'},
  name: String,
  severity: String,
  comments: String,
  Created_at: {type:Date, default:Date.now}
});

diseaseSchema.methods.encrypt = function(){
	this.name = dbcrypt.encrypt(this.name);
	this.severity = dbcrypt.encrypt(this.severity);
	this.comments = dbcrypt.encrypt(this.comments);
}

diseaseSchema.methods.decrypt = function(){
	this.name = dbcrypt.decrypt(this.name);
	this.severity = dbcrypt.decrypt(this.severity);
	this.comments = dbcrypt.decrypt(this.comments);
}

module.exports = mongoose.model('Disease',diseaseSchema);
