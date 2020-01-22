const express = require('express');
const burger = require('../models/burger.js');
var path = require('path');

const router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbs = {
            burgers: data
        };
        res.render("index", hbs);
        console.log((path.join(__dirname, "views/index.handlebars")));
    });
});

router.post("/api/burgers", function(req, res){
    burger.insertOne(["burger_name", "devoured"], [req.body.name, req.body.devoured], function(result){
        console.log(result);
    });
});

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        function(result){
            if (result.changedRows === 0) {
                return res.status(404).end();
              }
              res.status(200).end();
        }
    );
});

module.exports = router;