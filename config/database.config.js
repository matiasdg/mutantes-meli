var config = require('../config/app.config.js').get(process.env.NODE_ENV);
const Sequelize = require('sequelize');

var sequelize = new Sequelize(config.database.url, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: config.database.ssl
  }
});


sequelize.authenticate()
    .then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;