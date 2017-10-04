/**
 * Created by ISEN on 11/04/2017.
 */
var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');
var Patient = mongoose.model('Patient');
var Doctor = mongoose.model('Doctor');

//define the schema
var consultationSchema = mongoose.Schema ({
  patient : {type: mongoose.Schema.Types.ObjectId, ref: 'Patient'},
  doctor : {type: mongoose.Schema.Types.ObjectId, ref: 'Doctor'},
  date: Date
});

consultationSchema.plugin(findOrCreate);

// create the model for users and expose it to our app
module.exports = mongoose.model('Consultation', consultationSchema);
