var bCrypt = require('bcrypt-nodejs');
var db = require('../models');

module.exports = function (passport, signin) {

    var Signin = signin;
    var LocalStrategy = require('passport-local').Strategy;

    passport.serializeUser(function (signin, done) {
        done(null, signin.id);
    });

    // used to deserialize the login
    passport.deserializeUser(function (id, done) {
        db.userDonors.findById(id).then(function (user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
    });

    // create new member
    passport.use('donor-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },

        function (req, email, password, done) {
            var generateHash = function (password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };

            db.userDonors.findOne({
                where: {
                    email: email
                }
            }).then(function (accountFound) {
                if (accountFound) {
                    return done(null, false, {
                        message: 'email address already in use. please try again'
                    });
                } else {
                    var hashPassword = generateHash(password);
                    var data = {
                        email: req.body.email,
                        password: req.body.password,
                        street_address: req.body.street_address,
                        city: req.body.city,
                        state: req.body.state, 
                        zip_code: req.body.zip_code, 
                        phone: req.body.phone
                    };

                    db.userDonors.create(data).then(function (newUser, created) {
                        if (!newUser) {
                            return done(null, false, {
                                message: 'an error occured. please try again.'
                            });
                        }
                        if (newUser) {
                            return done(null, newUser, {
                                message: 'success! account created.'
                            });
                        }
                    });
                }
                // return done(null, accountFound);
            }).catch(function (err) {
                console.log("Error:", err);
                return done(null, false, {
                    message: 'an error occured. please try again.'
                });
            });
        }
    ))

    //LOCAL SIGNIN
    passport.use('donor-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
        function (req, email, password, done) {

            var isValidPassword = function (userpass, password) {
                return bCrypt.compareSync(password, userpass);
            };

            db.userDonors.findOne({
                where: {
                    email: email
                }
            }).then(function (signin) {
                if (!signin) {
                    return done(null, null, {
                        message: 'email/password combination incorrect. please try again.'
                    });
                }
                if (!isValidPassword(signin.password, password)) {
                    return done(null, null, {
                        message: 'email/password combination incorrect. please try again.'
                    });
                }

                return done(null, signin);
            }).catch(function (err) {
                console.log("Error:", err);
                return done(null, false, {
                    message: 'an error occured. please try again.'
                });
            });
        }
    ));
};
