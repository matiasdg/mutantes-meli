var express = require('express');
var port = require('./config/app.config.js').get(process.env.NODE_ENV).port;
var api = require('./routes/index.route.js');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/api', api);

app.listen(port, function(){
  console.log('Server running at: ' + port + '. Envinronment: ' + (process.env.NODE_ENV || 'default'));
});

module.exports = app;