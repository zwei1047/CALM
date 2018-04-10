/**
 * Created by ISEN on 12/04/2017.
 */
var mongoose = require('mongoose');
var dbcrypt = require('../controllers/encryption');

//define the schema
var addressSchema = mongoose.Schema ({
  num : String,
  street_address : String,
  city : String,
  postal_code : String,
  country : String,
  latitude : String,
  longitude : String,
  precision : Boolean
});

addressSchema.methods.encrypt = function(){
	this.num = dbcrypt.encrypt(this.num);
	this.street_address = dbcrypt.encrypt(this.street_address);
	this.city = dbcrypt.encrypt(this.city);
	//this.postal_code = dbcrypt.encrypt(this.postal_code);
	this.country = dbcrypt.encrypt(this.country);
	//this.latitude = dbcrypt.encrypt(this.latitude);
	//this.longitude = dbcrypt.encrypt(this.longitude);
	//this.precision = dbcrypt.encrypt(this.precision);
};

addressSchema.methods.decrypt = function(){
	this.num = dbcrypt.decrypt(this.num);
	this.street_address = dbcrypt.decrypt(this.street_address);
	this.city = dbcrypt.decrypt(this.city);
	//this.postal_code = this.decrypt(this.postal_code);
	this.country = dbcrypt.decrypt(this.country);
	//this.latitude = this.decrypt(this.latitude);
	//this.longitude = this.decrypt(this.longitude);
	//this.precision = this.decrypt(this.precision);
}


// create the model for users and expose it to our app
module.exports = mongoose.model('Address', addressSchema);
