var XMenCoreModule = require('../core/xMen.core');
var xMenService = require('../services/xMen.service');
var statService = require('../services/stat.service');

exports.mutant = function(req, res) {

  var body = req.body;

  var xMenCore = new XMenCoreModule();

  xMenCore.isMutant(body.dna, function(response){
	
	if(response.isMutant)
	  res.status(200).send(response);
	else
	  res.status(403).send(response);

	statService.update(response.isMutant);

	xMenService.save(body.dna, response.isMutant);

  }, function(error){
	res.status(500).send(error);
  });

};

exports.stats = function(req, res) {

  statService.getStat(function(response){
	res.status(200).send(response);
  }, function(error){
	res.status(500).send(error);
  });
};