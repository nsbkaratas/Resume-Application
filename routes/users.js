var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {
  console.log(req.body.application)
  res.send('Training program has started');
});

module.exports = router;
