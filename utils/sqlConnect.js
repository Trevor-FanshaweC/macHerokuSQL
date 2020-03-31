var mysql = require('mysql');
var config = require('../config');

var connect = mysql.createPool({
	host: config.host,
	port: process.env.port,
	user: config.user,
	password: config.password,
	database: config.database
});

module.exports = connect;
