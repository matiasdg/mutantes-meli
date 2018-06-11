var _ = require('underscore');

function Stat()  {
  
  this.calculateStats = function(xmenList, callbackSuccess, callbackError) {

	var newCountMutantDna = 0;
	var newCountHumanDna = 0;
	var newRatio = 0;
	xmenList.forEach(function (xmen) {
	  
	  if (xmen.mutant)
		newCountMutantDna++;
	  else
		newCountHumanDna++;
	  
	  newRatio = newCountMutantDna / newCountHumanDna;
	  if (newCountHumanDna == 0)
		newRatio = 0;
	  
	});
	
	return callbackSuccess({
	  count_mutant_dna:newCountMutantDna,
	  count_human_dna:newCountHumanDna,
	  ratio:newRatio
	})
  };
};

module.exports = Stat;