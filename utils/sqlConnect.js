var mysql = require('mysql');
var config = require('../config');

var connect = mysql.createConnection({
	host : config.host,//process.env.host,//'localhost',
	port : process.env.port,//process.env.port,//8889,
	user : config.user,//process.env.user,//'root',
	password : config.password,//process.env.password,//'root',
	database : config.database//process.env.database//'a3_cooperInfo'
});

module.exports = connect;
