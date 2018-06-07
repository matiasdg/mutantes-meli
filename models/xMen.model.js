
var xMen = {

  isMutant: function(dna, callbackSuccess, callbackError){

	console.log("dna is:", dna);

	return callbackSuccess(true);
  },

  getStats: function(callbackSuccess, callbackError){
	var data = {count_mutant_dna:40, count_human_dna:100, ratio:0.4};

	return callbackSuccess(data);
  }

};

module.exports = xMen;