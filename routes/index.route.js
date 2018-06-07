var express = require('express');
var router = express.Router();
var xMenRoute = require('./xMen.route');

router.use('/xMen', xMenRoute);

module.exports = router;