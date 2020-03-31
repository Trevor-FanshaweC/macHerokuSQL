var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  connect.getConnection((err, connection) => {
    console.log('get all the userss');

    connection.query(`SELECT * FROM base`, (error, rows) => {
      connection.release();

      if (error) {
        //throw error;
        console.log(error);
      } else {
        //console.log('rows:', rows);
        res.render('index', { rows: rows });
      }
    });
  });
});


module.exports = router;
