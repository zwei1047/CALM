var mongoose = require('mongoose');
var User = require('../models/user');
var Patient = require('../models/patient');
var Address = require('../models/address');
var dbcrypt = require('../controllers.encryption');

//define the schema
var organisationSchema = mongoose.Schema ({
  user_id: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
  name: String,
  email: String,
  phone: String,
  address: {type:mongoose.Schema.Types.ObjectId, ref:'Address'},
  Created_at: {type:Date,default:Date.now}
});

organisationSchema.methods.encrypt = function(){
	this.name = dbcrypt.encrypt(this.name);
	this.email = dbcrypt.encrypt(this.email);
	this.phone = dbcrypt.encrypt(this.phone);
}

organisationSchema.methods.decrypt = function(){
	this.name = dbcrypt.decrypt(this.name);
	this.email = dbcrypt.decrypt(this.email);
	this.phone = dbcrypt.decrypt(this.phone);
}


// create the model for users and expose it to our app
module.exports = mongoose.model('Organisation', organisationSchema);
