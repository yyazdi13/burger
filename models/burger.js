const orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    insertOne: function(tableColumn, tableValue, cb) {
        orm.insertOne("burgers", tableColumn, tableValue, function(res){
            cb(res);
        });
    },

    updateOne: function (objColVal, condition, cb) {
        orm.updateOne("burgers", objColVal, condition, function(res){
            cb(res);
        });
    }
}

module.exports(burger);