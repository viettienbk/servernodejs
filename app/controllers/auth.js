'use strict'

var User = require('../models/user');

module.exports = function(app, passport) {
    app.post('/login', passport.authenticate('local-login', {
        failureFlash: 'login failed'
    }), function(req, res) {
        //  login success
        res.json({ message: 'login success' });
    });
    /*
    app.post('/signup', passport.authenticate('local-signup', {
        failureFlash: 'signup failed'
    }), function(req, res) {
        //  signup success
        res.json({ message: 'signup success' });
    });
    */
    app.post('/signup', function(req, res, next) {
        passport.authenticate('local-signup', function(err, user, info) {
            console.log(err);
            console.log(user);
            console.log(info);
            if (err) {
                res.json({ message: 'sign up error' });
            } else if (!user) {
                res.json({ error: req.flash('message') });
            } else {
                res.json({ user: user });
            }
        })(req, res, next);
    });
}