var mysql = require('mysql2');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'notes'
});

module.exports = connection;