var express = require('express');
var router = express.Router();

var xMenController = require('../controllers/xMen.controller');

router.post('/mutant', xMenController.mutant);

router.get('/stats', xMenController.stats);

module.exports = router;