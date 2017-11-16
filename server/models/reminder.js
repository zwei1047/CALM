/**
 * Created by hongchang on 2/11/2017.
 */
var mongoose = require('mongoose');

//define the schema
var reminderSchema = mongoose.Schema ({
  userId: String,
  rappel: String,
  traitementId: String,
  date : Date,
  expire: Boolean

});


// create the model for users and expose it to our app
module.exports = mongoose.model('Reminder', reminderSchema);
