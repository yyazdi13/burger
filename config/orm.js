const connection = require('./connection.js');

function objToSql(ob) {
    var arr = [];
  
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
  
    return arr.toString();
};


var orm = {
    selectAll: function(tableInput) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, res) {
            if (err) throw err;
            console.log(res);
        });
    },
    insertOne: function (tableInput, tableColumn, tablValue) {
        var queryString = "INSERT INTO ?? (??) VALUES(?)";
        connection.query(queryString, [tableInput, tableColumn, tableInput], function (err, res) {
            if (err) throw err;
            console.log(res);
        });
        
    },
    updateOne: function (table, objColVal, condition, cb) {
        var queryString = "UPDATE " + table + " SET " + objToSql(objColVal) + " WHERE " + condition;
        connection.query(queryString, [tableInput, tablValue, ], function (err, res) {
            if (err) throw err;
            console.log(res);
        });
    }
};

module.exports(orm);