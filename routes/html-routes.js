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
    res.sendFile(path.join(__dirname, "../views/about.html"));
  });

  app.get("/apply", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/apply.html"));
  });

  app.get("/donate", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/donate.html"));
  });

  app.get("/donorhome", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/donorhome.html"));
  });

  app.get("/recipienthome", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/recipienthome.html"));
  });

  app.get("/newEvents", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/newEvents.html"));
  });

};
