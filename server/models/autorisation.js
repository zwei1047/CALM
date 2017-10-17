var mongoose = require('mongoose');
var User = require('../models/user');

var autorisationSchema = mongoose.Schema({
  user : {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  observer : {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  type : {type: String, enum:['Read','Read_Write']},
  subject : {type: String, enum:['Dossier','Post','Rdv']},
  Created_at: {type:Date,default:Date.now},
  valide : Boolean
});

module.exports = mongoose.model('Autorisation',autorisationSchema);
