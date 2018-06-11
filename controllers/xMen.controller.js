var XMenCoreModule = require('../core/xMen.core');
var StatCoreModule = require('../core/Stat.core');
var xMenService = require('../services/xMen.service');

exports.mutant = function(req, res) {

  var body = req.body;

  var xMenCore = new XMenCoreModule();

  xMenCore.isMutant(body.dna, function(response){
	
	if(response.isMutant)
	  res.status(200).send(response);
	else
	  res.status(403).send(response);
	
	xMenService.save(body.dna, response.isMutant);

  }, function(error){
	res.status(500).send(error);
  });

};

exports.stats = function(req, res) {

  var statCore = new StatCoreModule();
  xMenService.getAll(function(xmenList){

	statCore.calculateStats(xmenList, function(response){
	  res.status(200).send(response);
	}, function(){
	  res.status(500).send(error);
	});
  }, function(error){
	res.status(500).send(error);
  });
};