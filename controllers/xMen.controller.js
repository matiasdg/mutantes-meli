var express = require('express');

var xMenCore = require('../core/xMen.core');
var Stat = require('../models/stat.model');


exports.mutant = function(req, res) {

  var body = req.body;
  //validar

  xMenCore.isMutant(body.dna, function(response){
	
	if(response.isMutant)
	  res.status(200).send(response);
	else
	  res.status(403);

	Stat.findOne().then(stat => {
	  if (stat) {
		var newCountMutantDna = stat.countMutantDna;
		var newCountHumanDna = stat.countHumanDna;
		var newRatio = stat.ratio;

		if(response.isMutant)
		  newCountMutantDna++;
		else
		  newCountHumanDna++;

		newRatio = newCountMutantDna / newCountHumanDna;

		stat.update({
		  countMutantDna: newCountMutantDna,
		  countHumanDna: newCountHumanDna,
		  ratio: newRatio
		}).then(function () {
			console.log("Stats updated")
		})
	  }
	});

  }, function(error){
	res.send('Error: ', error);
  });

};

exports.stats = function(req, res) {

  Stat.findOne().then(s => {
	res.send(s);
  });
};