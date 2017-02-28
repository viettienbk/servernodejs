'use strict'

var User = require('../models/user');

module.exports = function(app, passport) {

    app.post('/login', function(req, res, next) {
        passport.authenticate('local-login', function(err, user, info) {
            console.log(err);
            console.log(user);
            console.log(info);
            if (err) {
                res.json({ error: 'login error' });
            } else if (!user) {
                res.json({ error: req.flash('message') });
            } else {
                res.json({ user: user });
            }
        })(req, res, next);
    });

    app.post('/signup', function(req, res, next) {
        passport.authenticate('local-signup', function(err, user, info) {
            console.log(err);
            console.log(user);
            console.log(info);
            if (err) {
                res.json({ error: 'sign up error' });
            } else if (!user) {
                res.json({ error: req.flash('message') });
            } else {
                res.json({ user: user });
            }
        })(req, res, next);
    });
}