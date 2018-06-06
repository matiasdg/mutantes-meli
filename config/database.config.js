var config = require('../config/app.config.js').get(process.env.NODE_ENV);

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: config.database.url,
  ssl: true
});
