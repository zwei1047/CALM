/**
 * Created by ISEN on 11/04/2017.
 */
var mongoose = require('mongoose');
var User = require('../models/user');
var Patient = require('../models/patient');
var Building = require('./building');
var dbcrypt = require('../controllers/encryption');

//define the schema
var doctorSchema = mongoose.Schema ({
  user_id : {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  phone : String,
  infrastructure: {type:[mongoose.Schema.Types.ObjectId], ref:'Building'},
  patients : {type: [mongoose.Schema.Types.ObjectId], ref:'Patient'}
});

doctorSchema.methods.encrypt = function(){
	//this.phone = dbcrypt.encrypt(this.phone);
};

doctorSchema.methods.decrypt = function(){
	//this.phone = dbcrypt.decrypt(this.phone);
}

// create the model for users and expose it to our app
module.exports = mongoose.model('Doctor', doctorSchema);
