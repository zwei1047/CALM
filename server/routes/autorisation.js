module.exports = function(passport) {
  const express = require('express');
  const router = express.Router();
  var jwt = require('express-jwt');
  var auth = jwt({
    secret: 'CALM_SECRET',
    userProperty: 'payload'
  });

  var Autorisation = require('../models/autorisation');

  //Get the post autorisation
  router.get('/autorisation/post/:id', auth, function(req, res, next){
    Autorisation.find({user: req.params.id, subject: 'POST'})
      .populate('observer')
      .exec(function (err, docs) {
        if(!err && docs) {
          res.json(docs);
        } else {
          res.json(err);
        }
      });
  });

  router.get('/autorisation/rdv/:id', auth, function(req, res, next) {
    Autorisation.find({user: req.params.id, subject: 'RDV'})
      .populate('observer')
      .exec(function(err, docs) {
        if(!err && docs) {
          res.json(docs);
        } else {
          res.json(err);
        }
      })
  });

  //Get the autorisations for a user
  router.get('/autorisation/:id', auth, function (req, res, next) {
    Autorisation.find({user: req.params.id})
      .populate('observer')
      .exec(function (err, docs) {
        if(!err && docs) {
          res.json(docs);
        } else {
          res.json(err);
        }
      });
  });

  //add an autorisation
  router.put('/autorisation/', auth, function (req, res, next){
    var autorisation = new Autorisation();
    autorisation.user = req.body.user;
    autorisation.observer = req.body.observer;
    autorisation.type =req.body.type;
    autorisation.subject =req.body.subject;
    autorisation.valide = req.body.valide;
    // a completer
    autorisation.save(function(err){
      if(err){
        console.log(err);
      } else {
        res.sendStatus(200);
      }
    });
  });

  //delete autorisation
  router.delete('/autorisation/:id', auth, function(req, res) {
    console.log('delete : ' + req.params.id)
    Autorisation.remove({_id: req.params.id}, function (err) {
      if(err) {
        res.json(err);
      } else {
        res.sendStatus(200);
      }
    });
  });


  return router;
};
