var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node SAS DDC' });
});


// 
router.param('id', function (req, res, next, id) {
  next();
});

router.get('/viewer/:id', function (req, res) {
  res.render('viewer', { title: 'The Report Viewer' });
});

module.exports = router;
