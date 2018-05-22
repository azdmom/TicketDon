var express = require("express");

var db = require("../models");

module.exports = function(app) {  

  // POST route for saving a new event
  app.post("/api/userRcpts", function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json

    db.userRcpts.create({
      email: req.body.email,
      password: req.body.password,
      street_address: req.body.street_address,
      city: req.body.city,
      state: req.body.state, 
      zip_code: req.body.zip_code, 
      phone: req.body.phone,
      AARP_num: req.body.AARP_num,
      DOB: req.body.DOB

    }).then(function(dbPost) {

      res.json(dbPost);
    });
    
    //create api signin route
    $.ajax('/api/signin', {
      method:'POST',
      data: {
        email: email,
        password: password
      }
    }).then(function(response) {
      sessionStorage.setItem('email', response.email);
    })
  
    const userEmail = sessionStorage.getItem('email');
  });
  

};