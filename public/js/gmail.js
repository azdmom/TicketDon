var nodemailer = require('nodemailer');
var db = require('')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'ticketDon2018@gmail.com',
           pass: 'Penncode12'
       },
       logger: true, // log to console
       debug: true // include SMTP traffic in the logs
   });

   const mailOptions = {
    from: 'ticketDon2018@gmail.com', // sender address
    to: recptEmails, // list of receivers
    subject: 'A message from TicketDon', // Subject line
    html: '<p><b>Congratulations!</b> You have won the ticket you requested via TicketDon!</p> + <p>Further information will be sent shortly by express mail.</p>'// plain text body
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if(err){
    console.log('Error occurred');
    console.log(error.message);
    }
    else
    console.log('Message sent successfully!');
    console.log('Server responded with "%s"', info.response);
 });