
var xMen = {

  /***
   * @method isMutant
   * @params {dna, callbackSucces, callbackError}
   * @return boolean
   */
  isMutant: function(dna, callbackSuccess, callbackError){

	console.log("DNA requested is: ", dna);

	


	return callbackSuccess({isMutant:true});
  }

};

module.exports = xMen;