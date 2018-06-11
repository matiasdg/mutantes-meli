var XMen = require('../models/xMen.model');

var xmenService = {

  save: function(dna, isMutant){

	XMen.create({ dna: dna.toString(), mutant: isMutant }).then(xMen => {
	  console.log("Xmen has saved with ID: ", xMen.id);
	}).catch(error => {
		console.log("Error on save XMen: ", error);
	})
  },
  getAll: function(cb, cbError){
	XMen.findAll().then(function (xmen) {
	  return cb(xmen);
	}).catch(function(err) {
	  return cbError(err);
	});  }

};

module.exports = xmenService;