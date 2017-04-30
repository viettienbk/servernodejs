'user strict'

var History = require('../models/history');

module.exports = function(app) {

    //  add history
    app.post('/journey/create', function(req, res) {
        var id_user = req.body.id_user;
        var id_biker = req.body.id_biker;
        var time_call = req.body.time_call;
        var place_from = req.body.place_from;
        var latitude_from = req.body.latitude_from;
        var longitude_from = req.body.longitude_from;
        var place_to = req.body.place_to;
        var latitude_to = req.body.latitude_to;
        var longitude_to = req.body.longitude_to;
        var distance = req.body.distance;
        var price = req.body.price;
        var time_spend = req.body.time_spend;

        if (id_user === undefined || id_biker === undefined || time_call === undefined ||
            place_from === undefined || latitude_from === undefined || longitude_from == undefined ||
            place_to === undefined || latitude_to === undefined || longitude_to === undefined ||
            distance === undefined || price === undefined || time_spend === undefined) {
            res.json({ error: true, data: null, message: 'Thiếu tham số' });
        } else {
            History.create({
                    id_user: id_user,
                    id_biker: id_biker,
                    time_call: time_call,
                    place_from: place_from,
                    latitude_from: latitude_from,
                    longitude_from: longitude_from,
                    place_to: place_to,
                    place_to: place_to,
                    distance: distance,
                    price: price,
                    time_spend: time_spend,
                    timestamp_created: new Date()
                },
                function(err, data) {
                    if (err) {
                        res.json({ error: true, data: null, message: 'Tạo lịch sử thất bại' });
                    } else {
                        res.json({ error: false, data: data, message: 'Tạo lịch sử thành công' });
                    }
                });
        }
    });

    //  get history by id
    app.get('/journey/:id_user', function(req, res) {
        var id = req.params.id_user;

        History.find({ id_user: id }, function(err, data) {
            if (err) {
                res.json({ error: true, data: null, message: 'Lấy lịch sử thất bại' });
            } else {
                res.json({ error: false, data: data, message: 'Lấy thông tin thành công' });
            }
        });
    });
}