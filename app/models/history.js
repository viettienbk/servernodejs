'use strict'

var mongoose = require('mongoose');

var historySchema = new mongoose.Schema({
    id_user: mongoose.Types.ObjectId,
    id_biker: mongoose.Types.ObjectId,
    time_call: Date,
    place_from: String,
    latitude_from: Number,
    longitude_from: Number,
    distance: Number,
    price: Number,
    time_spend: Number,
    timestamp_created: Date
});

module.exports = mongoose.model('HistoryMeta', historySchema);