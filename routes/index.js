var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send("This is a GET!");
});

router.post('/', function(req, res, next) {
  res.send("This is a POST!");
});

router.put('/', function(req, res, next) {
  res.send("This is a PUT!");
});

router.delete('/', function(req, res, next) {
  res.send("This is a DELETE!");
});

module.exports = router;
