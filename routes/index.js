var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('get all the users');

  connect.query(`SELECT * FROM base`, (error, rows)=> {
    if (error) {
      throw error;
      console.log(error);
    } else {
      console.log('rows:', rows);
      res.render('index', { rows: rows });
    }
  });
});

module.exports = router;
