/**
 * Created by Romain on 28/03/2017.
 */
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var dbcrypt = require('../controllers/encryption');
var jwt = require('jsonwebtoken');
var Address = require('../models/address');

//define the schema
var userSchema = mongoose.Schema ({
  first_name : String,
  last_name : String,
  birth_date : String,
  email : String,
  password: String,
  role :  [String],
  profile_img : { data: Buffer, contentType: String },
  address : {type: mongoose.Schema.Types.ObjectId, ref: 'Address'}
});


// generating a password
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    exp: parseInt(expiry.getTime() / 1000)
  }, "CALM_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

userSchema.methods.encrypt = function(){
  this.first_name = dbcrypt.encrypt(this.first_name);
  this.last_name = dbcrypt.encrypt(this.last_name);
  this.birth_date = dbcrypt.encrypt(this.birth_date);
  //this.email = this.encrypt(this.email);
  this.role[1] = dbcrypt.encrypt(this.role[1]);
}

userSchema.methods.decrypt = function(){
  this.first_name = dbcrypt.decrypt(this.first_name);
  this.last_name = dbcrypt.decrypt(this.last_name);
  this.birth_date = dbcrypt.decrypt(this.birth_date);
  //this.email = this.decrypt(this.email);
  this.role = ['patient', dbcrypt.decrypt(this.role[1])];
}

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);

