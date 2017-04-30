'user strict'

var Favorite = require('../models/favoritebiker');

module.exports = function(app) {

    //  get count not favorite
    app.get('/users/count-not-favorite/:id_user', function(req, res) {
        var id = req.params.id_user;

        Favorite.count({
            is_favorite: -1,
            id_biker: id
        }, function(err, data) {
            if (err) {
                res.json({ error: true, data: -1, message: 'Lấy thông tin bị lỗi' });
            } else {
                res.json({ error: false, data: data, message: 'Lấy thông tin thành công' });
            }
        });

    });

    //  get count favorite
    app.get('/users/count-favorite/:id_user', function(req, res) {
        var id = req.params.id_user;

        Favorite.count({
            is_favorite: 1,
            id_biker: id
        }, function(err, data) {
            if (err) {
                res.json({ error: true, data: -1, message: 'Lấy thông tin bị lỗi' });
            } else {
                res.json({ error: false, data: data, message: 'Lấy thông tin thành công' });
            }
        });
    });

    //  get list favorite
    app.get('/users/favorite/:id_user', function(req, res) {

        Favorite.find({
            id_user: req.params.id_user
        }, function(err, data) {
            if (err) {
                res.json({ error: true, data: null, message: 'Lấy thông tin thất bại' });
            } else {
                res.json({ error: false, data: data, message: 'Lấy thông tin thành công' });
            }
        });
    });
}