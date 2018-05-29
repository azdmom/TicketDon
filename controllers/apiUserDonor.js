//Requires necessary dependencies & DB models.
var express = require("express");
var db = require("../models");

module.exports = function(app) {
  //POST route for creating a new donor.
  app.post("/api/userDonor", function(req, res) {
    //Sequelize code that creates a new donor record in the DB based on what was submitted by the Donate form.
    db.userDonors
      .create({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        phone: req.body.phone,
        street_address: req.body.street_address,
        city: req.body.city,
        state: req.body.state,
        zip_code: req.body.zip_code
      })
      .then(function(dbuserDonors) {
        res.json(dbuserDonors);
      });
  });


  //Displays all the registed Donors as a JSON object
  app.get("/api/userDonor", function(req, res) {
    db.userDonors.findAll({}).then(function(data) {
      res.json(data);
    });
  });
  
};
