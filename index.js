var express = require('express');
var port = require('./config/app.config.js').get(process.env.NODE_ENV).port;
//var router = require('./routes/router.js');
//var healthChecker = require('./models/healthChecker.js');

var app = express();

app.listen(port, function(){
  console.log('Servidor corriendo en el puerto: ' + port + '. Ambiente: ' + process.env.NODE_ENV);
});
