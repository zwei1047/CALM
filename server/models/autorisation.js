var mongoose = require('mongoose');
var User = require('../models/user');

var autorisationSchema = mongoose.Schema({
  user : {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  observer : {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  type : {type: String, enum:['Read','Read_Write'], default:'Read'},
  subject : {type: String, enum:['Dossier','Post','Rdv'], default:'Post'},
  Created_at: {type:Date,default:Date.now},
  valide : {type:Boolean,default:true}
});

module.exports = mongoose.model('Autorisation',autorisationSchema);
