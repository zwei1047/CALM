/**
 * Created by Romain on 06/04/2017.
 */
var mongoose = require('mongoose');
//var User = mongoose.model('User');
var User = require('../models/user');
var Address = mongoose.model('Address');

module.exports.profileRead = function(req, res) {
  // If no user ID exists in the JWT return a 401
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    // Otherwise continue
    User
      .findById(req.payload._id)
      .populate({path: 'address'})
      .exec(function(err, user) {
        user.decrypt();
        user.address.decrypt();

        //user.first_name = user.decrypt(user.first_name);
        //user.last_name = user.decrypt(user.last_name);
        //user.role = ['patient', user.decrypt(user.role[1])];
        //user.birth_date = user.decrypt(user.birth_date);

        //user.address.decryptAll();
        //user.address.country = user.address.decrypt(user.address.country);
        //user.address.city = user.address.decrypt(user.address.city);
        //user.address.street_address = user.address.decrypt(user.address.street_address);
        //user.address.num = user.address.decrypt(user.address.num);
        //user.address.latitude = user.address.decrypt(user.address.latitude);
        //user.address.longitude = user.address.decrypt(user.address.longitude);

        res.json(user);
      });
  }

};


