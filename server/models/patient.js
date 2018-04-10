/**
 * Created by ISEN on 11/04/2017.
 */
var mongoose = require('mongoose');
var User = require('../models/user');
var Doctor = require('../models/doctor');
var Patient = require('../models/patient');
var dbcrypt = require('../controllers/encryption');

//define the schema
var patientSchema = mongoose.Schema ({
  user_id : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  phone:String,
  general_doctor : {type: mongoose.Schema.Types.ObjectId, ref: 'Doctor'},
  patient_followed:{type: [mongoose.Schema.Types.ObjectId], ref:'Patient'}
});

patientSchema.methods.encrypt = function(){
  //this.phone = dbcrypt.encrypt(this.phone);
}

patientSchema.methods.decrypt = function(){
  //this.phone = dbcrypt.decrypt(this.phone);
}

// create the model for users and expose it to our app
module.exports = mongoose.model('Patient', patientSchema);
