//Requires necessary dependencies & DB models.
var express = require("express");
var db = require("../models");

module.exports = function(app) {
  //POST route for creating a new recipient.
  app.post("/api/userRcpts", function(req, res) {
    //Sequelize code that creates a new recipient record in the DB based on what was submitted by the Apply form.
    db.userRcpts
      .create({
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
      })
      .then(function(dbuserRcpts) {
        res.json(dbuserRcpts);
      });
  });

  //Displays all the registed Donors as a JSON object
  app.get("/api/userRcpts", function(req, res) {
    db.userRcpts.findAll({}).then(function(data) {
      res.json(data);
    });
  });
};
