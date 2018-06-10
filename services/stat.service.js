var Stat = require('../models/stat.model');

var statService = {
  
  update: function(isMutant){
	
	Stat.findOne().then(stat => {
	  if (stat) {
		var newCountMutantDna = stat.countMutantDna;
		var newCountHumanDna = stat.countHumanDna;
		var newRatio = stat.ratio;

		if(isMutant)
		  newCountMutantDna++;
		else
		  newCountHumanDna++;


		newRatio = newCountMutantDna / newCountHumanDna;
		if(newCountHumanDna == 0)
			newRatio = 0;

		stat.update({
		  countMutantDna: newCountMutantDna,
		  countHumanDna: newCountHumanDna,
		  ratio: newRatio
		}).then(function () {
		  console.log("Stats updated")
		}).catch(error => {
		  console.log("Error updating stats", error);
		})
	  }
	}).catch(error => {
	  console.log("Error getting stats", error);
	})
  },
  getStat: function(callbackSuccess, callbackError){
	Stat.findOne().then(s => {
	  callbackSuccess({count_mutant_dna: s.countMutantDna, count_human_dna: s.countHumanDna, ratio: s.ratio});
	}).catch(error => {
	  console.log("Error getting stats", error);
	  callbackError(error);
	});
  }
  
};

module.exports = statService;