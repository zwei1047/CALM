                                                    /**
 * Created by Romain on 22/04/2017.
 */
var mongoose = require('mongoose');
var User = require('../models/user');
var dbcrypt = require('../controllers/encryption');

//define the schema
var postSchema = mongoose.Schema ({
  sender : {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  receiver : {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  text : String,
  Created_at: {type:Date,default:Date.now},
  type: {type:String, enum:['INFO','ALERT','POST','TREATMENT']}
});

postSchema.methods.encrypt = function(){
	this.text = dbcrypt.encrypt(this.text);
}

postSchema.methods.decrypt = function(){
	this.text = dbcrypt.decrypt(this.text);
}


// create the model for users and expose it to our app
module.exports = mongoose.model('Post', postSchema);
