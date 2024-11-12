var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node SAS DDC' });
});


// report viewer
router.param('id', function (req, res, next, id) {
  next();
});

router.get('/viewer/:id', function (req, res) {
  res.render('viewer', {
    title: 'The Report Viewer',
    sastag: '<sas-report url="http://bi.uq.pt" reportUri="/reports/reports/' + req.id +'" authenticationType="credentials" class="my-report" hideNavigation></sas-report>'
  });
});

module.exports = router;
