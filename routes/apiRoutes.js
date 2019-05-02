var db = require("../models");

var Sequelize = require('sequelize');

var path = require("path");

module.exports = function (app) {
    // localhost:3001/api/loperItems/true
    app.get("/api/loperItems/:myStash", function (req, res) {
        var whereCondition = {
            where: {
                myStash: req.params.myStash
            }
        };

        db.loperItems.findAll(whereCondition)
            .then(function (db) {
                res.json(db);
            });
    });
};