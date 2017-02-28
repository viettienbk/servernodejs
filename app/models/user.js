'use strict'

var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs')

var Schema = mongoose.Schema;
var UserSchema = new Schema({
    email: String,
    password: String,
    fullName: String,
    age: Number,
    numberPhone: String,
    coordinates: {
        latitude: Number,
        longitude: Number
    }
});

//  encrypt password
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//  check password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

var UserMeta = mongoose.model('UserMeta', UserSchema);

module.exports = UserMeta;