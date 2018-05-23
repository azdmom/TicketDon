// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var passport = require('passport');
var session = require('express-session');
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

app.use(session({
  secret: 'ninety tuba spike',
  resave: true,
  saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//load passport strategy
require('./controllers/passportD.js')(passport, db.userDonor);
require('./controllers/passportR.js')(passport, db.userRcpts);

// what is going on with passport
app.use((req, res, next) => {
    console.log(req.body);
    next();
});

// nodemailer
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport')

app.post("/mailer", function(req, res){
  var body = req.body
    console.log(body)

    var transporter = nodemailer.createTransport(smtpTransport({
      service: 'gmail',
      secure: false,
      port: 25,
      auth: {
        user: 'ticketDon2018@gmail.com',
        pass: 'Penncode12'
      },
      tls: {
        rejectUnauthorized: false
      },
    }))

    var rcptLost = {
      from: '"Message from TicketDon" ticketDon2018@gmail.com',
      to: body.email,
      subject: 'New message',
      text: "<p><b>Congratulations!</b> You have won the ticket you requested via TicketDon!</p> + <p>Further information will be sent shortly by express mail.</p>"}

    transporter.sendMail(rcptLost, (error, info) => {
      if (error){
      return res.json({error: error})
      }
     // res.json({info: "this message was sent successfully"})
      console.log(info);
    })

    var rcptWon = {
      from: '"Message from TicketDon" ticketDon2018@gmail.com',
      to: body.email,
      subject: 'New message',
      text: "you lost"}

    transporter.sendMail(rcptWon, (error, info) => {
      if (error){
      return res.json({error: error})
      }
      res.json({info: "this message was sent successfully"})
      console.log(info);
    })

})

// Routes
// =============================================================
require("./controllers/apiTickets.js")(app);
require("./controllers/apiUserDonor.js")(app);
require("./controllers/apiUserRcpt.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({force:true}).then(function () {
  console.log('database sync okay');
  app.listen(PORT, function (err) {
      if (!err) {
          // Log (server-side) when our server has started
          console.log("Server listening on: http://localhost:" + PORT);
      }
      else {
          console.log(err);
      }
  });
}).catch(function (err) {
  console.log(err, "database synch failed");
});