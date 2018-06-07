var expect  = require('chai').expect;
var request = require('request');
var xMen = require('../models/xMen.model');

describe('Status and content', function() {
/*
  describe ('Main page', function() {
	it('status', function(){
	  request('http://localhost:8010/', function(error, response, body) {
		expect(response.statusCode).to.equal(404);
	  });
	});
	it('content', function() {
	  request('http://localhost:8010/' , function(error, response, body) {
		expect(body).to.equal('Hello World');
	  });
	});
  });

  describe ('About page', function() {
	it('status', function(){
	  request('http://localhost:8010/about', function(error, response, body) {
		expect(response.statusCode).to.equal(404);
	  });
	});
  });*/

  describe ('xMen isMutant', function() {
	it('should return true', function(){

	  var body = {"dna":["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]};
	  xMen.isMutant(body, function(response){

		expect(response).assert(true);

	  }, function(error){

	  });

	});
  });
});