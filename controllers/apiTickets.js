var path = require("path");
var express = require("express");
var db = require("../models");

module.exports = function(app) {
  app.post("/api/Events", function(req, res) {


    // db.userDonors
    //   .findOne({
    //     where: {
    //       email: req.body.email
    //     }
    //   })
    //   .then(function(donor) {
    //       console.log(donor.id);
    //   });



    db.Tickets
      .create({
        event_name: req.body.event_name,
        date: req.body.date,
        location: req.body.location,
        venue_name: req.body.venue_name,
        ticket_qty: req.body.ticket_qty
      })
      .then(function(dbEvents) {
        res.json(dbEvents);
      });
  });




  // // POST route for saving a new event
  // app.post("/api/Tickets", isLoggedIn, function(req, res) {
  //   // Add sequelize code for creating a post using req.body,
  //   // then return the result using res.json

  //   db.userDonors
  //     .findOne({
  //       where: {
  //         email: req.body.email
  //       }
  //     })
  //     .then(function(user) {
  //       db.Tickets.create({
  //         donor_id: user.id,
  //         event_id: req.body.event_id,
  //         event_name: req.body.event_name,
  //         ticket_qty: req.body.ticket_count,
  //         venue_name: req.body.venue_name,
  //         event_street_address: req.body.event_street_address,
  //         event_city: req.body.event_city,
  //         event_state: req.body.event_state,
  //         event_zip_code: req.body.event_zip_code,
  //         information: req.body.information,
  //         ticket_barcode: req.body.ticket_barcode,
  //         ticketScan: req.body.information
  //       }).then(function(dbTickets) {
  //         res.json(dbTickets);
  //       });
  //     });
  // });

  app.put("api/ticketRqst", isLoggedIn, function(req, res) {
    db.Tickets.update(
      {
        userRcpts: user.id
      },
      {
        where: { email: req.body.email }
      }
    ).then(function(dbTickets) {
      res.json(dbTickets);
    });
  });

  app.get("/api/getTickets", isLoggedIn, function(req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
    //implement find where cluase where rcpt_id is null
    db.Tickets.findAll({
      where: { userRcpts: null }
    }).then(function(data) {
      // We have access to the todos as an argument inside of the callback function
      console.log(data);
      res.json(data);
    });
  });

  app.get("/api/ticketEmail", isLoggedIn, function(req, res) {
    db.Tickets.findAll({
      where: { [userRcpts.ne]: null }
    }).then(function(user) {
      console.log(user);
      res.send(user);
    });
  });


  //Populates the events table on the Events page with all of the events in the DB

  app.get("/events", function(req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
    db.Tickets.findAll({}).then(function(data) {
      // We have access to the todos as an argument inside of the callback function
      var tixObject = {
        tickets: data
      };

      console.log(data);
      res.render("events", tixObject);
    });
  });




  app.get("/logout", function(req, res) {
    req.session.destroy(function(err) {
      res.redirect("/");
    });
  });

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/");
  }
};
