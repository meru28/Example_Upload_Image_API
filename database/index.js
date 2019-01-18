const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'db4free.net',
    user: 'meru_rendy',
    password: 'meru',
    database: 'popokpedia_ku',
    port: 3306
});

module.exports = conn;