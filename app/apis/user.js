'use strict'

var User = require('../models/user');

module.exports = function(app) {

    //  get all user
    app.get('/users', function(req, res) {
        User.find(function(err, data) {
            if (err) {
                res.json({ error: true, data: null, message: 'Lấy thông tin người dùng bị lỗi' });
            } else {
                res.json({ error: false, data: data, message: 'Lấy thông tin người dùng thành công' });
            }
        });
    });

    //  get user by id
    app.get('/users/:id_user', function(req, res) {
        var id = req.params.id_user;

        User.find({ _id: id }, function(err, data) {
            if (err) {
                res.json({ error: true, data: null, message: 'Lấy thông tin người dùng bị lỗi' });
            } else if (data.length == 0) {
                res.json({ error: true, data: null, message: 'Người dùng không tồn tại' });
            } else {
                res.json({ error: false, data: data[0], message: 'Lấy thông tin người dùng thành công' });
            }
        });
    });

    //  change password
    app.put('/users/change-pass', function(req, res) {
        var id = req.body.id_user;
        var password = req.body.new_pass;

        if (id === undefined || password === undefined) {
            res.json({ error: true, message: 'Thiếu tham số' });
        } else {
            var user = new User();
            var hash = user.generateHash(password);
            User.findByIdAndUpdate(id, { password: hash }, function(err, data) {
                if (err) {
                    res.json({ error: true, message: 'Đổi mật khẩu thất bại' });
                } else if (data === null) {
                    res.json({ error: true, message: 'Tài khoản không tồn tại' });
                } else {
                    res.json({ error: false, message: 'Đổi mật khẩu thành công' });
                }
            });
        }
    });

    //  update coordinate biker
    app.put('/users/update/coordinate', function(req, res) {
        var id = req.body.id_user;
        var latitude = req.body.latitude;
        var longitude = req.body.longitude;

        if (id == undefined || latitude === undefined || longitude === undefined) {
            res.json({ error: true, message: 'Thiếu tham số' });
        } else {
            try {
                var lat = parseInt(latitude);
                var long = parseInt(longitude);
                User.findByIdAndUpdate(id, { latitude: lat, longitude: long }, function(err, data) {
                    if (err) {
                        res.json({ error: true, message: 'Cập nhật tọa độ thất bại' });
                    } else {
                        res.json({ error: false, message: 'Cập nhật tọa độ thành công' });
                    }
                });
            } catch (error) {
                res.json({ error: true, message: 'Tham số không đúng định dạng' });
            }
        }
    });

    //  update user by id
    app.put('/users/update/profile', function(req, res) {
        var id = req.body.id_user;
        var fullname = req.body.full_name;
        var numberphone = req.body.number_phone;
        var image_path = req.body.image_avatar_path;

        if (id === undefined || fullname === undefined || numberphone === undefined || image_path === undefined) {
            res.json({ error: true, data: null, message: 'Thiếu tham số' });
        } else {
            User.findByIdAndUpdate(id, {
                fullname: fullname,
                number_phone: numberphone,
                image_avatar_path: image_path
            }, function(err, data) {
                if (err) {
                    res.json({ error: true, data: null, message: 'Cập nhật thông tin thất bại' });
                } else if (data === null) {
                    res.json({ error: true, data: null, message: 'Tài khoản không tồn tại' })
                } else {
                    data.fullname = fullname;
                    data.number_phone = numberphone;
                    data.image_avatar_path = image_path;
                    console.log(data);
                    res.json({ error: false, data: data, message: 'Cập nhật thông tin thành công' });
                }
            });
        }
    });
}