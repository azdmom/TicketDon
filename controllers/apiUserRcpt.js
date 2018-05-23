var express = require("express");

var db = require("../models");

module.exports = function(app) {  

  // POST route for saving a new event
  app.post("/api/userRcpts", function(req, res) {

    console.log('in the post route');
    console.log(req.body); 
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json

    db.userRcpts.create({
      email: req.body.email,
      password: req.body.password,
      street_address: req.body.street_address,
      city: req.body.city,
      state: req.body.state, 
      zip_code: req.body.zip_code, 
      AARP_num: req.body.AARP_num,
      DOB: req.body.DOB

    }).then(function(dbPost) {

      res.json(dbPost);
    });
    

  });
  

};