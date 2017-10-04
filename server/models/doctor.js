/**
 * Created by ISEN on 11/04/2017.
 */
var mongoose = require('mongoose');
var User = require('../models/user');
var Patient = require('../models/patient');

//define the schema
var doctorSchema = mongoose.Schema ({
  user_id : {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  cabinet : String,
  phone : String,
  patients : [String]
});


// create the model for users and expose it to our app
module.exports = mongoose.model('Doctor', doctorSchema);
