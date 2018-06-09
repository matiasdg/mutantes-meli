var _ = require('underscore');


var xMen = {

  /***
   * @method isMutant
   * @params {dna, callbackSucces, callbackError}
   * @return boolean
   */
  isMutant: function(dna, callbackSuccess, callbackError){

	console.log("DNA requested is: ", dna);

	if(this.checkHorizontal(dna) || this.checkVertical(dna) || this.checkOblique(dna))
	  return callbackSuccess({isMutant:true});

	return callbackSuccess({isMutant:false});
  },
  checkHorizontal: function(dna){
	var self = this;
	return _.some(dna, function(d){
	  return self.evaluateValue(d)
	});
  },
  checkVertical: function(dna){
	var arrayDna = [];

	_.each(dna, function(d){
	  arrayDna.push(d.split(''));
	});

	var size = arrayDna.length;
	for(var i= 0; i < size; i++){
	  var chain = "";
	  for(var x= 0; x < size; x++){
		chain = chain + arrayDna[x][i];
	  }

	  if(this.evaluateValue(chain))
		return true;
	}

	return false;
  },
  checkOblique: function(dna){

	var arrayDna = [];

	_.each(dna, function(d){
	  arrayDna.push(d.split(''));
	});

	if(this.obliqueOnTheRight(arrayDna) || this.obliqueOnTheLeft(arrayDna)
		|| this.obliqueOnTheRight(arrayDna.reverse()) || this.obliqueOnTheLeft(arrayDna.reverse()))
		return true;
	else
		return false;
  },
  obliqueOnTheRight: function(arrayDna){
	var x = 0;
	var size = arrayDna.length;
	for(var i=size; i > 2; i--){
	  var chain = "";
	  for(var y=0, z=x; y < i; y++){
		chain = chain + arrayDna[y][z];
		z++;
	  }

	  console.log(chain);
	  x++;

	  if(this.evaluateValue(chain))
		  return true;
	}
	return false;
  },
  obliqueOnTheLeft: function(arrayDna){
	var size = arrayDna.length -1;
	for(var i=1; i < size -1; i++){
	  var chain = "";
	  for(var y=i, z=0; y < size +1; y++){
		chain = chain + arrayDna[y][z];
		z++;
	  }

	  console.log(chain);
	  if(this.evaluateValue(chain))
		return true;
	}

	return false;
  },
  evaluateValue: function(value){
	return value.match(/([ATCG])\1{3,}/);
  }
};

module.exports = xMen;