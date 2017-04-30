'use strict'

var mongoose = require('mongoose');

var favoriteBiker = new mongoose.Schema({
    id_user: mongoose.Schema.Types.ObjectId,
    id_biker: mongoose.Schema.Types.ObjectId,
    is_favorite: Number,
    timestamp_created: Date,
    timestamp_updated: Date
});

module.exports = mongoose.model('FavoriteBikerMeta', favoriteBiker);