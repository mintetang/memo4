var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('will do it later');
});
router.get('/cool/', function(req, res, next) {
  res.send('I am cool!');
});

module.exports = router;
