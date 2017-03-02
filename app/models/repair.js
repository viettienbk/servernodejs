'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var RepairSchema = new Schema({
    name: String,
    address: String,
    numberPhone: String,
    type: Number    // 0: store 1 : people
});

var RepairMeta = mongoose.model('RepairMeta', RepairSchema);

module.exports = RepairMeta;