//this file offers a set of routes for displaying and saving data to the cards list in db
//require dependencies
// =============================================================
var path = require("path");

//require model
// =============================================================
var db = require("../models");

// Gift Routes
// =============================================================
module.exports = function (app) {

    // GET route for getting all of the gifts data
    app.get("/giftsList/", function (req, res) {
        db.giftsList.findAll({})
        .then(function (dbGift) {
            res.json(dbGift);
        });
    });

    // POST route for saving a new gift 
    app.post("/giftsList", function (req, res) {
        db.giftsList.create({
            whichList: req.body.whichList,
            giftName: req.body.giftName,
            giftBudget: req.body.giftBudget,
            giftBought: req.body.giftBought,
            complete: req.body.complete,
        })
        .then(function (dbGift) {
            res.json(dbGift);
        });
    });

    // DELETE route for deleting gifts
    // app.delete("/giftsList/:id", function (req, res) {
    //     db.giftsList.destroy({where: {id: req.params.id}})
    //     .then(function (dbGift) {
    //         res.json(dbGift);
    //     });
    // });

    // PUT route for updating gifts
    // app.put("/giftsList", function (req, res) {          
    //     db.giftsList.update({
    //         giftName: req.body.giftName,
    //         giftBudget: req.body.giftBudget,
    //         complete: req.body.complete
    //     }, { where: { id: req.body.id }
    //     }).then(function (dbGift) {
    //         res.json(dbGift);
    //     });
    // });
  
}