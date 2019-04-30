var db = require("../models");

module.exports = function(app) {
    app.get("/api/loperItems", function (req, res) {
        db.loperItems.findAll({})
            .then(function (dbloperItems) {
                res.json(dbloperItems);
            });
    });
};