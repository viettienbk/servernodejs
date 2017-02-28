'use strict'

var LocalStrategy = require('passport-local').Strategy;
var User = require('../app/models/user');

module.exports = function(passport) {

    passport.serializeUser(function(user, cb) {
        cb(null, user);
    });

    passport.deserializeUser(function(id, cb) {
        User.findById(id, function(err, user) {
            cb(err, user)
        });
    });

    passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function(req, email, password, done) {
        User.findOne({ 'email': email }, function(err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                console.log('Incorrect email');
                return done(null, false, req.flash('message', 'Incorrect email'));
            }
            console.log(password);
            if (!user.validPassword(password)) {
                console.log('Incorrect password');
                return done(null, false, req.flash('message', 'Incorrect password'));
            }
            console.log('success');
            return done(null, user);
        });
    }));

    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function(req, email, password, done) {
        User.findOne({ 'email': email }, function(err, user) {
            console.log(user);
            if (err) {
                return done(err);
            }
            if (user) {
                console.log('User exists');
                return done(null, false, req.flash('message', 'User exists'));
            }

            var _user = new User();
            _user.email = req.body.email;
            _user.password = _user.generateHash(req.body.password);
            _user.fullName = req.body.fullname;
            _user.age = req.body.age;
            _user.numberPhone = req.body.numberPhone;
            _user.coordinates.latitude = req.body.latitude;
            _user.coordinates.longitude = req.body.longitude;
            _user.save(function(err) {
                if (err) {
                    return done(null, false, req.flash('message', 'Sign up error. Try again'));
                } else {
                    return done(null, _user);
                }
            });
        });
    }));
}