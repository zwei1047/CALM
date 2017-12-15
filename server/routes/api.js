/**
 * Created by Romain on 22/03/2017.
 */

module.exports = function (passport) {
  const express = require('express');
  const router = express.Router();
  var jwt = require('express-jwt');
  var auth = jwt({
    secret: 'CALM_SECRET',
    userProperty: 'payload'
  });

  var ctrlProfile = require('../controllers/profile');
  var ctrlAuth = require('../controllers/authentication');

  var User = require('../models/user');
  var Doctor = require('../models/doctor');
  var Patient = require('../models/patient');
  var Address = require('../models/address');
  var Post = require('../models/post');
  var Reminder = require('../models/reminder')

  /* GET api listing. */
  router.get('/', function (req, res) {
    res.send("<h1>API Home</h1> <br>" +
      "<a href='/api/users'>Show Users</a><br>" +
      "<a href='/api/doctors'>Show Doctors</a><br>" +
      "<a href='/api/patients'>Show Patients</a><br>" +
      "<a href='/api/addresses'>Show Addresses</a><br>" +
      "<a href='/api/treatments'>Show Treatments</a><br>" +
      "<a href='/api/post'>Show Posts</a><br>" +
      "<a href='/'>Return to the website</a>");
  });


  router.get('/user/:id', auth, function (req, res) {
    User.findOne({_id: req.params.id})
      .exec(function (err, docs) {
        res.json(docs);
      });
  });

  //get all users
  router.get('/users', auth, function (req, res) {
    User.find({})
      .populate('address')
      .exec(function (err, docs) {
        res.json(docs);
      });
  });

  router.get('/doctors', auth, function (req, res) {
    Doctor.find({})
      .populate({path: 'user_id', populate: {path: 'address'}})
      .exec(function (err, docs) {
        res.json(docs);
      });
  });

  router.get('/users/doctor', auth, function (req, res) {
    User.find({role: ['patient','medecin']})
      .populate('address')
      .exec(function(err, docs) {
        if(err){
          res.json(err);
        } else {
          res.json(docs);
        }
      });
  });

  router.get('/patients', auth, function (req, res) {
    Patient.find({})
      .populate('user_id')
      .populate('general_doctor')
      .exec(function (err, docs) {
        res.json(docs);
      });
  });

  router.get('/patients/:id', auth, function (req, res) {
    Patient
      .findOne({user_id: req.params.id})
      // Find the right patient
      .populate({
        path: 'user_id'
      })
      // Find the informations about his doctor
      .populate({
        path: 'general_doctor',
        populate: {path: 'user_id', populate: {path: 'address'}}
      })
      .exec(function (err, docs) {
        res.json(docs);
      });
  });

  // Find the patients of a doctor
  router.get('/patientsdoctor/:doctor', auth, function (req, res) {
    Patient.find({})
      .populate({
        path: 'general_doctor',
        match: {user_id: req.params.doctor}
      })
      .populate({
        path: 'user_id'
      })
      .exec(function (err, docs) {
        res.json(docs);
      });
  });

  router.get('/addresses', auth, function (req, res) {
    Address.find({})
      .exec(function (err, docs) {
        res.json(docs);
      });
  });

  router.get('/addresses/:id', auth, function (req, res) {
    if (req.params.id) {
      Address.findById(req.params.id)
        .exec(function (err, user) {
          res.json(user);
        });
    }
  });

  //get one user by his id.
  router.get('/users/:id', auth, function (req, res) {
    if (req.params.id) {
      User.findOne({_id: req.params.id}, function (err, docs) {
        res.json(docs);
      });
    }
  });

  //get one user by his email
  router.get('/users/byEmail/:email', auth, function (req, res) {
    if (req.params.email) {
      User.findOne({email: req.params.email}, function (err, docs) {
        if (err) {
          res.json(err);
        } else {
          res.json(docs);
        }
      });
    }
  });

  // Profile page
  router.get('/profile', auth, ctrlProfile.profileRead);

  // Authentication
  router.post('/register', ctrlAuth.register);
  router.post('/login', ctrlAuth.login);

  // Delete a user
  router.delete('/users/:id', auth, function (req, res, next) {
    deleteCollectionsRelated(req);

    User.remove({_id: req.params.id}, function (err, docs) {
      if (err) return (err);
      else {
        // deleteUser!
        res.sendStatus(200);
      }
    });
  });

  function deleteCollectionsRelated(req) {
    Patient.remove({user_id: req.params.id}, function (err) {
      if (err) return (err);
    });
    Doctor.remove({user_id: req.params.id}, function (err) {
      if (err) return (err);
    });
  }

  // delete address with id
  router.delete('/addresses/:id', auth, function (req, res, next) {
    Address.remove({_id: req.params.id}, function (err) {
      if (err) return err;
      else {
        // Adress deleted
        res.sendStatus(200);
      }
    });
  });

  // Add a general doctor to a patient
  router.put('/patient/:id', auth, function (req, res, next) {

    // Add the patient in the patients list
    Doctor.findByIdAndUpdate(req.body._id, {$push: {patients: req.params.id}}, {new: true}, function (err, doctor) {
      if (err) return handleError(err);
    });

    // Add the doctor in the general_doctor field
    Patient.findByIdAndUpdate(req.params.id, {$set: {general_doctor: req.body._id}}, {new: true}, function (err, patient) {
      if (err) return handleError(err);
      if (patient) {
        res.sendStatus(200);
      }
    });
  });


  router.get('/userToDoctor/:id', auth, function (req, res) {
    Doctor.find({user_id: req.params.id})
      .populate('user_id')
      .exec(function (err, docs) {
        if (!err && docs) {
          res.json(docs);
        } else {
          res.json(err);
        }
      });
  });

  router.get('/userToPatient/:id', auth, function (req, res) {
    Patient.find({user_id: req.params.id})
      .populate('user_id')
      .exec(function (err, docs) {
        if (!err && docs) {
          res.json(docs);
        } else {
          res.json(err);
        }
      });
  });

  // Get all search medecin
  router.get('/searchDoctor/:city', auth, function (req, res, next) {
    var tempUser = User.find({role: ['patient', 'medecin']}).populate({
      path: 'address',
      match: {city: req.params.city}
    }).populate('doctor').exec(function (err, docs) {
      res.json(docs);
    });
  });

  // Get rappels by the userID
  router.get('/getRappels/:userId', auth, function (req, res, next) {
    console.log(req.params.userId);
    Reminder.find({
      userId: req.params.userId,
      expire: 'false'
    }).sort({_id: -1})
      .exec(function (err, docs) {
        res.json(docs);
      });
  });

  router.get('/reminderDone/:reminderId', auth, function (req, res, next) {
    console.log("i ma here");
    Reminder.update({
      _id: req.params.reminderId
    }, {
      expire: 'True'
    }).exec(function (err, docs) {
      console.log("erro info" + err);
      res.json(docs);
    });

  });

  router.put('/createFirstRappel/', auth, function (req, res, next) {
    var treatment = req.body;
    var start = new Date();
    start = start.toString();
    console.log(start);
    console.log(treatment);
    start = new Date(start);
    var rappel = {
      name: '',
      quantity: '',
      takingState: '',
      frequence: '',
      typeFrequence: '',
      info: ''
    };
    rappel.name = req.body.name;
    rappel.quantity = req.body.quantity;
    rappel.takingState = req.body.takingState;
    rappel.frequence = req.body.frequence;
    rappel.typeFrequence = req.body.typeFrequence;
    rappel.info = req.body.info;
    start = start.getDate() + "-" + (start.getMonth() + 1) + "-" + start.getFullYear();
    console.log(rappel);
    new Reminder({
      userId: req.body.userId,
      rappel: rappel,
      traitementId: req.body._id,
      date: start,
      expire: false
    }).save().then(function (content) {
      res.json(content);
    });
    console.log(treatment.quantity);

  });

  router.put('/createNextRappel/', auth, function (req, res, next) {
    var treatment = req.body;
    new Reminder({
      userId: req.body.userId,
      rappel: req.body.info,
      traitementId: req.body._id,
      date: new Date(),
      expire: false
    }).save().then(function (content) {
      res.json(content);
    });
    console.log(treatment.quantity);
    res.json(treatment);

  });

  router.put('/testapi/', auth, function (req, res, next) {
    if (createNextRappel()) {
      res.json('succeed in creating next rappel');
    }
    else {
      res.json('false create next rappel');
    }


  });

  function createNextRappel() {
    // .find({})
    // .populate('doctor')
    // .populate('patient')
    // .exec(function (err, docs) {
    //   res.json(docs);
    // });
    var traitement = {
      __v: 0,
      takingState: 'Avant-repas',
      quantity: 10,
      frequence: 2,
      typeFrequence: 'jours',
      info: 'Comprimé aspirine 500mg',
      name: 'Aspirine',
      start: '2017-11-21T08:54:38.000Z',
      end: '2017-11-28T08:54:38.000Z',
      codeCIS: '42',
      userId: '59fdc54b9712113764f39694',
      _id: '5a0b0936fecaf0101d591ff9'
    };

    var rappels = traitementToRappel(traitement);
    if (rappels != null) {
      // rappels[0].save().then(function (content) {
      //
      // });
      console.log(rappels.length);
      for (var i = 0; i < rappels.length; i++) {

        rappels[i].save().then(function (content) {
          // res.json(content);
        });

      }
      return true;
    }
    else {
      console.log('false');
      return false;
      // res.json("create next rappel failed");
    }

  }

  const DATETRANSLATION = {
    'Avant-repas': ['11:00', '19:00'],
    'Pendant-repas': ['12:00', '20:00'],
    'Apres-repas': ['13:00', '21:00'],
    'A-jeun': ['7:00'],
    'Avant-dormir': ['22:00'],
    'Au-reveil': ['6:30']
  };

  function traitementToRappel(traitement) {
    var today = new Date();
    var endday = new Date(traitement.end);
    if (valideDate(today, endday)) {
      var newRappels = [];
      var rappel = {
        name: '',
        quantity: '',
        takingState: '',
        frequence: '',
        typeFrequence: '',
        info: ''
      };
      rappel.name = traitement.name;
      rappel.quantity = traitement.quantity;
      rappel.takingState = traitement.takingState;
      rappel.frequence = traitement.frequence;
      rappel.typeFrequence = traitement.typeFrequence;
      rappel.info = traitement.info;
      console.log(DATETRANSLATION[traitement.takingState][0]);
      switch (traitement.takingState) {
        case 'Avant-repas':

          for (var i = 0; i < rappel.frequence; i++) {
            let tempRappel = new Reminder({
              userId: traitement.userId,
              rappel: rappel,
              traitementId: traitement._id,
              date: DATETRANSLATION[traitement.takingState][i],
              expire: false
            });
            newRappels.push(tempRappel);
          }
          break;

      }
      console.log(newRappels);
      return newRappels;

    }
    else {
      return null;
    }
  }

  function valideDate(today, endday) {
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var newToday = new Date(year, month, day);
    var yearend = endday.getFullYear();
    var monthend = endday.getMonth() + 1;
    var dayend = endday.getDate();
    var newendday = new Date(yearend, monthend, dayend);
    if (newendday.getTime() >= newToday.getTime()) {
      return true;
    }
    else {
      return false;
    }
  }

  return router;

};

