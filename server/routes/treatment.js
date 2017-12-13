/**
 * Created by Neko on 21/11/2017
 */

module.exports = function (passport) {
  const express = require('express');
  const router = express.Router();
  var jwt = require('express-jwt');
  var auth = jwt({
    secret: 'CALM_SECRET',
    userProperty: 'payload'
  });

  var Treatment = require('../models/treatment');

  //get Treatment for a specific patient
  router.get('/treatment/:id', auth, function (req, res) {
    Treatment
      .find({userId: req.params.id , expired:false})
      .exec(function (err, docs) {
        res.json(docs);
      });
  });

  router.put('/treatment/:id', auth, function (req, res, next) {
    var treatment = new Treatment();
    treatment.userId = req.params.id;
    treatment.codeCIS = req.body.codeCIS;
    treatment.name = req.body.name;
    treatment.info = req.body.info;
    treatment.typeFrequence = req.body.typeFrequence;
    treatment.frequence = req.body.frequence;
    treatment.quantity = req.body.quantity;
    treatment.takingState = req.body.takingState;
    treatment.start = req.body.start;
    treatment.end = req.body.end;
    treatment.substances = [];
    treatment.expired = false;

    treatment.save(function (err, response) {
      if (err) res.json(err);
      res.json(response);
    });
  });

  router.put('/updateTreatment/:id', auth, function (req, res, next) {
    Treatment.findByIdAndUpdate(req.params.id, {
      $set: {
        name: req.body.name,
        end: req.body.end,
        takingState: req.body.takingState,
        quantity: req.body.quantity,
        frequence: req.body.frequence,
        typeFrequence: req.body.typeFrequence,
        info: req.body.info,
        expired: req.body.expired
      }
    }, {new: true}, function (err, response) {
      if (err) {
        res.json(err)
      }
      if (response) {
        res.json(response);
      }
    });
  });

  router.delete('/treatment/:id', auth, function (req, res, next) {
    Treatment.remove({_id: req.params.id}, function (err, docs) {
      if (err) return (err);
      else
        res.json(docs);
    });
  });

  router.get('/getMedicName/:medic', auth, function (req, res, next) {
    var request = require('request');
    request('https://open-medicaments.fr/api/v1/medicaments?query=' + req.params.medic, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body);
      }
    })

    //res.json('https://open-medicaments.fr/api/v1/medicaments?query=doliprane');
  });


  router.get('/getMedicInfo/:codeCIS', auth, function (req, res, next) {
    var request = require('request');
    request('https://open-medicaments.fr/api/v1/medicaments/'+ req.params.codeCIS, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body);
      }
    })

    //res.json('https://open-medicaments.fr/api/v1/medicaments?query=doliprane');
  });



  return router;

};




