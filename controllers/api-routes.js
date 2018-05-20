// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// Requiring our Todo model
var db = require("../models");

module.exports = function(app) {  

  // POST route for saving a new event
  app.post("/api/tickets", function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json

    db.Tickets.create({
      donation_id: req.body.donation_id,
      event_id: req.body.event_id,
      event_name: req.body.event_name,
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
 
 app.delete('/api/tickets/:id', function(req, res) {
  db.tickets.findOne({
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

 
 app.get("/api/tickets/:id") 
  // Get route for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    // Add sequelize code to find a single post where the id is equal to req.params.id,
    // return the result to the user with res.json

    db.Post.findOne({
      where: {
        event_id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });




  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json

    db.Post.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category,

    }).then(function(dbPost) {

      res.json(dbPost);
    });


  });





  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    // Add sequelize code to delete a post where the id is equal to req.params.id,
    // then return the result to the user using res.json

    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });



  });



  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    // Add code here to update a post using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
    
    
    db.Post.update({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category,
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });



    
  });



};
