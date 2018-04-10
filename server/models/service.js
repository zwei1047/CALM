var mongoose = require('mongoose');
var User = require('../models/user');
var Patient = require('../models/patient');
var dbcrypt = require('../controllers/encryption');

//define the schema
var serviceSchema = mongoose.Schema ({
  doctor_associated : {type: [mongoose.Schema.Types.ObjectId], ref:'Doctor'},
  phone : String,
  name: String,
  email: String,
  Created_at: {type: Date, default:Date.now}
});

serviceSchema.methods.encrypt = function(){
	this.phone = dbcrypt.encrypt(this.phone);
	this.name = dbcrypt.encrypt(this.name);
	this.email = dbcrypt.encrypt(this.email);
}

serviceSchema.methods.decrypt = function(){
	this.phone = dbcrypt.decrypt(this.phone);
	this.name = dbcrypt.decrypt(this.name);
	this.email = dbcrypt.decrypt(this.email);
}


// create the model for users and expose it to our app
module.exports = mongoose.model('Service', serviceSchema);
