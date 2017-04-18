var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mayu' });
});
router.get('/inicio', function(req, res, next) {
  res.redirect('/');
});

module.exports = router;
