/**
 * Created by hongchang on 2/11/2017.
 */
var mongoose = require('mongoose');

//define the schema
var reminderSchema = mongoose.Schema ({
  userId: String,
  rappel: String,
  date : Date,
  expire: Boolean,
  doctor: {type: mongoose.Schema.Types.ObjectId, ref: 'Doctor'}
});


// create the model for users and expose it to our app
module.exports = mongoose.model('Reminder', reminderSchema);
