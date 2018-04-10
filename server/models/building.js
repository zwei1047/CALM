var mongoose = require('mongoose');
var Doctor = require('../models/doctor');
var Address = require('../models/address');
var Service = require('../models/service');
var User = require('../models/user');
var dbcrypt = require('../controllers/encryption');

//define the schema
var buildingSchema = mongoose.Schema ({
  user_id: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
  doctor_associated : {type: [mongoose.Schema.Types.ObjectId], ref:'Doctor'},
  address : {type: mongoose.Schema.Types.ObjectId, ref:'Address'},
  phone : String,
  name: String,
  email: String,
  services: {type: [mongoose.Schema.Types.ObjectId], ref:'Service'},
  Created_at: {type: Date, default:Date.now}
});

buildingSchema.methods.encrypt = function(){
  this.phone = dbcrypt.encrypt(this.phone);
  this.name = dbcrypt.encrypt(this.name);
  this.email = dbcrypt.encrypt(this.email);
}

buildingSchema.methods.decrypt = function(){
  this.phone = dbcrypt.decrypt(this.phone);
  this.name = dbcrypt.decrypt(this.name);
  this.email = dbcrypt.decrypt(this.email);
}

// create the model for users and expose it to our app
module.exports = mongoose.model('Building', buildingSchema);
