var express = require("express");

var db = require("../models");

module.exports = function(app, passport) {  

  // register signin route loads new_members.handlebars
  app.post('/api/rcptSignup',
    passport.authenticate('local-signup', {
      failWithError: true
    }),
    (req, res, next) => {
      res.status(200).send({
        redirectTo: "/api/getTickets"
      });
    },
    (err, req, res, next) => {
      console.log(err);
      res.status(500).send(err);
    });

  // POST route for saving a new event
  app.post("/api/rcptSignup", isLoggedIn, function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json

    var data = {
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      phone: req.body.phone,
      street_address: req.body.street_address,
      city: req.body.city,
      state: req.body.state, 
      zip_code: req.body.zip_code, 
      AARP_num: req.body.AARP_num,
      DOB: req.body.DOB
      };
      db.userRcpts.update(data, {
       where: {
        id: req.user.id
      },
      returning: true,
      plain: true
    })
    .then(function(dbuserRcpts) {
      res.json(dbuserRcpts);
    });
  });


app.post("/api/rcptSignin",
  passport.authenticate('rcpt-signin', {
    failWithError: true
  }),
  (req, res, next) => {
    res.status(200).send({
      redirectTo: "/api/getTickets"
    });
  },
  (err, req, res, next) => {
    console.log(err);
    res.status(500).send(err);
  });

  app.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
      res.redirect('/');
    });
  });
  
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.redirect('/');
  }

};