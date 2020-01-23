var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-05.cleardb.net",
  port: 3306,
  user: "b8b364d7a8a8a5",
  password: "2035da46",
  database: "heroku_be42f8ae3690ed0",
  pool: {
    max:5,
    min: 0,
    idle: 10000
  }
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

setInterval(function () {
  connection.query('SELECT 1');
}, 5000);

module.exports = connection;
