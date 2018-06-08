var sequelize = require('../config/database.config');
const Sequelize = require('sequelize');

const Stat = sequelize.define('stat', {
	countMutantDna: {
	  type: Sequelize.INTEGER
	},
	countHumanDna: {
	  type: Sequelize.INTEGER
	},
	ratio: {
	  type: Sequelize.DOUBLE
	}
});

/*Stat.sync({force: true}).then(() => {
  // Table created
  return Stat.create({
	countMutantDna: 0,
	countHumanDna: 0,
	ratio: 0
  });
});*/

module.exports = Stat;