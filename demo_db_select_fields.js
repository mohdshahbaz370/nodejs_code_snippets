var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql@123",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT name, address FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(fields);
        //To return e.g. the name of the second field, just refer to the second array item's name property
        //console.log(fields[1].name);
    });
});