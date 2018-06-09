var XMen = require('../models/xMen.model');

var xmenService = {

  save: function(dna, isMutant){

	XMen.create({ dna: dna.toString(), mutant: isMutant }).then(xMen => {
	  console.log("Xmen has saved with ID: ", xMen.id);
	}).catch(error => {
		console.log("Error on save XMen: ", error);
	})
  }

};

module.exports = xmenService;