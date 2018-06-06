var express = require('express');
var port = ( process.env.PORT || require('./config/app.config.js').get(process.env.NODE_ENV).port);
//var router = require('./routes/router.js');
//var healthChecker = require('./models/healthChecker.js');

var app = express();

var config = require('./config/app.config.js').get(process.env.NODE_ENV);

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: config.database.url,
  ssl: true
});


app.get('/db', async (req, res) => {
    try {
      const client = await pool.connect();
    const result = await client.query('SELECT * FROM test_table');
console.log(result);
    res.send(result);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});

app.listen(port, function(){
  console.log('Servidor corriendo en el puerto: ' + port + '. Ambiente: ' + process.env.NODE_ENV);
});

