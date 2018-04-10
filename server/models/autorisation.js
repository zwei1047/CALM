var mongoose = require('mongoose');
var User = require('../models/user');
var dbcrypt = require('../controllers/encryption');

var autorisationSchema = mongoose.Schema({
  user : {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  observer : {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  type : String,
  subject : String,
  Created_at: {type:Date,default:Date.now},
  valide : {type:Boolean,default:true},
  confirm : {type:Boolean, default: false}

});

autorisationSchema.methods.encrypt = function(){
	this.type = dbcrypt.encrypt(this.type);
	this.subject = dbcrypt.encrypt(this.subject);
}

autorisationSchema.methods.decrypt = function(){
	this.type = dbcrypt.decrypt(this.type);
	this.subject = dbcrypt.decrypt(this.subject);
}

module.exports = mongoose.model('Autorisation',autorisationSchema);
