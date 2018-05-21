// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// Requiring our Todo model
var db = require("../models");

module.exports = function(app) {  

  // POST route for saving a new event
  app.post("/api/Tickets", function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json

    db.Tickets.create({
      donation_id: req.body.donation_id,
      event_id: req.body.event_id,
      event_name: req.body.event_name,
      ticket_count: req.body.ticket_count,
      venue_name: req.body.venue_name, 
      event_street_address: req.body.event_street_address, 
      event_city: req.body.event_city,
      event_state: req.body.event_state,  
      event_zip_code: req.body.event_zip_code,
      information: req.body.information,
      ticketScan: req.body.information

    }).then(function(dbPost) {

      res.json(dbPost);
    });


  });
  
  app.get("/api/Tickets", function(req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
 
    db.Tickets.findAll({}).then(function(dbPost) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbPost);
    });
  });

 app.delete('/api/tickets/:id', function(req, res) {
  db.Tickets.findOne({
    where: {
      id: id
    }
  }).then(function(data) {
    if(data.ticket_qty === 1){
      db.tickets.destroy({where: { id: id}})
    } else {
      db.tickets.update({where:{id:req.params.id}}, {ticket_qty: data.ticket_qty - req.body.qty})
    }
  })
 });

};
