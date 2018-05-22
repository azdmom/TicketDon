var express = require("express");

var db = require("../models");

module.exports = function(app) {  

  // POST route for saving a new event
  app.post("/api/userDonor", function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json

    db.userDonor.create({
      email: req.body.email,
      password: req.body.password,
      street_address: req.body.street_address,
      city: req.body.city,
      state: req.body.state, 
      zip_code: req.body.zip_code, 
      phone: req.body.phone

    }).then(function(dbPost) {

      res.json(dbPost);
    });


  });
  

};