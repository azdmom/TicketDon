var express = require("express");

var db = require("../models");

module.exports = function(app) {  

  // POST route for saving a new event
  app.post("/api/userDonor", function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json

    db.userDonors.create({
      email: req.body.email,
      password: req.body.password,
      street_address: req.body.street_address,
      city: req.body.city,
      state: req.body.state, 
      zip_code: req.body.zip_code

    }).then(function(dbuserDonors) {

      res.json(dbUserDonors);
      
    });


  });
  

};