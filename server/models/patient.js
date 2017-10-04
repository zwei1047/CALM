/**
 * Created by ISEN on 11/04/2017.
 */
var mongoose = require('mongoose');
var User = require('../models/user');
var Doctor = require('../models/doctor');

//define the schema
var patientSchema = mongoose.Schema ({
  user_id : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  general_doctor : {type: mongoose.Schema.Types.ObjectId, ref: 'Doctor'}
});


// create the model for users and expose it to our app
module.exports = mongoose.model('Patient', patientSchema);
