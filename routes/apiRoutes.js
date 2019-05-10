var db = require("../models");

var Sequelize = require('sequelize');

var path = require("path");

module.exports = function (app) {
    // localhost:3001/api/loperItems/true
    app.get("/api/loperItems/:myStash", function (req, res) {
        console.log(req.params);
        var whereCondition = {
            where: {
                myStash: req.params.myStash === 'true'
            }
        };
        // console.log(db.loperItems);
        db.loperItems.findAll(whereCondition)
            .then(function (db) {
                res.json(db);
            });
    });
    app.patch("/api/loperItems/:id", function (req, res) {
        // TODO: See if req.body has the updatedStatus
        console.log(req.body);
        var whereCondition = {
            where: {
                id: req.params.id,
            }
        };
        db.loperItems.update({ myStash: true }, whereCondition)
            .then(function (db) {
                res.json(db);
            });
    });
};





// var path = require("path");

// var Sequelize = require('sequelize');

// var db = require("../models");

// //Export API rout
// module.exports = function (app) {

//     // Get selected games (based off of quiz results)
//     app.get("/api/loperItems/:myStash", function (req, res) {
//         var whereCondition = {
//             where: {
//                 myStash: req.query.myStash,
//             }
//         };

//         if (req.query.myStash) {
//             whereCondition.where.myStash = {
//                 [Sequelize.Op.gt]: 0
//             }
//         } else {
//             whereCondition.where.myStash = 0
//         }

//         whereCondition.where[req.query.myStash] = 1;


//         console.log(db);
//         db.myStash.findAll(whereCondition).then(function (db) {
//             res.json(db);
//         });
//     });
// };

