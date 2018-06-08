var expect  = require('chai').expect;
var request = require('request');
var xMen = require('../core/xMen.core');
var Stat = require('../models/stat.model');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../index.js');


describe('Status and content', function() {


  describe ('xMen Core isMutant', function() {
	it('should return true', function(){

	  var body = {"dna":["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]};
	  xMen.isMutant(body, function(response){

		expect(response).assert(true);

	  });
	});

	it('should return false', function(){

	  var body = {"dna":["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]};
	  xMen.isMutant(body, function(response){

		expect(response).assert(false);

	  });
	});
  });


  describe('Stats', () => {

	it('Returns a 200 response', (done) => {

	  chai.request(app)
		  .get('/api/xMen/stats')
		  .end((error, response) => {
			if (error) done(error);
			// Now let's check our response
			expect(response).to.have.status(200);
			done();
		  });
	});
  });


  describe('Xmen Mutant Request', () => {

	it('Returns a 200 response', (done) => {
	  var body = {"dna":["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]};

	  chai.request(app)
		  .post('/api/xMen/mutant')
		  .send(body)
		  .end((error, response) => {
			if (error) done(error);
			// Now let's check our response
			expect(response).to.have.status(200);
			done();
		  });
	});


	it('Returns a 403 response', (done) => {
	  var body = {"dna":["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCTTTA","TCACTG"]};

	  chai.request(app)
		  .post('/api/xMen/mutant')
		  .send(body)
		  .end((error, response) => {
			if (error) done(error);
			// Now let's check our response
			expect(response).to.have.status(403);
			done();
		  });
	});
  });

});