var express = require('express');

var xMen = require('../models/xMen.model');

exports.mutant = function(req, res) {

  var body = req.body;

  xMen.isMutant(body.dna, function(response){
	
	res.status(200).send(response);

  }, function(error){
	res.send('Error: ', error);
  });

};

exports.mutantTest = function(req, res) {
  
/*  try {
	const client = await pool.connect();
	const result = await client.query('SELECT * FROM test_table');
	console.log(result);
	res.send(result);
	client.release();
  } catch (err) {
	console.error(err);
	res.send("Error " + err);
  }*/

};

exports.stats = function(req, res) {

  xMen.getStats(function(response){
	res.send(response);
  }, function(error){
	res.send("Error " + err);
  });
};