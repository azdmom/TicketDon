var path = require("path");
var express = require("express");
var db = require("../models");

module.exports = function(app, passport) {  

// register signin route 
  app.post('/api/donorSignup',
  passport.authenticate('local-signup', {
    failWithError: true
  }),
  (req, res, next) => {
    res.status(200).send({
      redirectTo: "/newEvents"
    });
  },
  (err, req, res, next) => {
    console.log(err);
    res.status(500).send(err);
  });

  // POST route for saving a new event
  app.post("/api/userDonor", isLoggedIn, function(req, res) {
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
      zip_code: req.body.zip_code
    };
    db.userDonors.update(data, {
      where: {
        id: req.user.id
      },
      returning: true,
      plain: true
    })
    .then(function(dbuserDonors) {
      res.json(dbuserDonors);
    });
  });
  
  app.post("/api/donorSignin",
  passport.authenticate("donor-signin", {
    failWithError: true
  }),
  (req, res, next) => {
    res.status(200).send({
      redirectTo: "/newEvents"
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