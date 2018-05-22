// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  app.get("/", function(req, res) {
    res.render('index', {});
  });

  app.get("/about", function(req, res) {
    res.render('about', {});
  });

  app.get("/apply", function(req, res) {
    res.render('apply', {}); 
  });

  app.get("/donate", function(req, res) {
    res.render('donate', {});
  });

  app.get("/donorhome", function(req, res) {
    res.render('donorhome', {});
  });

  app.get("/recpthome", function(req, res) {
    res.render('recpthome', {});
  });

  app.get("/newEvents", function(req, res) {
    res.render('newEvents', {});
  });

  app.get("/events", function(req, res) {
    res.render('events', {});
  });

};
