/**
 * Created by Romain on 22/04/2017.
 */
var mongoose = require('mongoose');
var Patient = require('../models/patient');
var User = require('../models/user');

//define the schema
var postSchema = mongoose.Schema ({
  patient : {type: mongoose.Schema.Types.ObjectId, ref: 'Patient'},
  doctor : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  text : String
});


// create the model for users and expose it to our app
module.exports = mongoose.model('Post', postSchema);
