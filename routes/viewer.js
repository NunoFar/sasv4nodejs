var express = require('express');
var router = express.Router();

/* GET Report View */

router.param('id', function (req, res, next, id) {
  next();
});
router.get('/viewer/:id', function(req, res, next) {
  res.render('viewer', {
    title: 'The Report Viewer',
    sastag: '<sas-report url="https://uqbi11.uq.pt" reportUri="/reports/reports/' + req.params.id + '" authenticationType="credentials" class="my-report" hideNavigation></sas-report>'
  });
});

module.exports = router;
