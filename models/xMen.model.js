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
  console.log("Table XMens created");
 });

module.exports = XMen;