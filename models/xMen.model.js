var sequelize = require('../config/database.config');
const Sequelize = require('sequelize');

const XMen = sequelize.define('xmen', {
  dna: {
	type: Sequelize.STRING
  },
  mutant: {
	type: Sequelize.BOOLEAN
  }
});

XMen.sync({force: true}).then(() => {
 // Table created

 });

module.exports = XMen;