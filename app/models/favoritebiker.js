'use strict'

var mongoose = require('mongoose');

var favoriteBiker = new mongoose.Schema({
    id_user: mongoose.Schema.Types.ObjectId,
    id_biker: mongoose.Schema.Types.ObjectId,
    isFavorite: Number,
    timestamp_created: Date,
    timestamp_updated: Date
});

module.exports = mongoose.model('FavoriteBikerMeta', favoriteBiker);