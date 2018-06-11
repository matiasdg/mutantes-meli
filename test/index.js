var expect  = require('chai').expect;
var request = require('request');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index.js');
var xmenService = require('../services/xMen.service');

chai.use(chaiHttp);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function wait(done) {
  console.log('Waiting...');
  await sleep(3000);
  done();
}

before(function (done) {
  wait(done);
});


describe('Xmen Mutant Request', () => {

  it('Returns a 200 response', (done) => {
	var body = {"dna":["TTTTGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]};

	chai.request(app)
		.post('/api/xMen/mutant')
		.send(body)
		.end((error, response) => {
		  if (error) done(error);

		  expect(response).to.have.status(200);
		  done();
		});
  });


  it('Returns a 200 response', (done) => {
	var body = {"dna":["TTTTGA","CTGTGC","TATTGT","AGATGG","CCTCTA","TCACTG"]};

	chai.request(app)
		.post('/api/xMen/mutant')
		.send(body)
		.end((error, response) => {
		  if (error) done(error);

		  expect(response).to.have.status(200);
		  done();
		});
  });

  it('Returns a 200 response', (done) => {
	var body = {"dna":[
	  "TTTTATTC",
	  "CTCCACCC",
	  "TTAAGTTC",
	  "CGATACGG",
	  "CCCATAAC",
	  "ACACTGGC",
	  "AAACCGGG",
	  "ACACTGGC"]};

	chai.request(app)
		.post('/api/xMen/mutant')
		.send(body)
		.end((error, response) => {
		  if (error) done(error);

		  expect(response).to.have.status(200);
		  done();
		});
  });


  it('Should returns a 403 response', (done) => {
	var body = {"dna":[
	  "TTATTC",
	  "CTGTAC",
	  "TTXAGT",
	  "CGATGG",
	  "CCCTTA",
	  "ACACTG"]};

	chai.request(app)
		.post('/api/xMen/mutant')
		.send(body)
		.end((error, response) => {
		  if (error) done(error);
		  expect(response).to.have.status(403);
		  done();
		});
  });

  it('Should returns a 500 response', (done) => {
	var body = {"adn":[
	  "TTATTC",
	  "CTGTAC",
	  "TTXAGT",
	  "CGATGG",
	  "CCCTTA",
	  "ACACTG"]};

	chai.request(app)
		.post('/api/xMen/mutant')
		.send(body)
		.end((error, response) => {
		  if (error) done(error);
		  expect(response).to.have.status(500);
		  done();
		});
  });
});

describe('Stats Requests OK', () => {

  it('Returns a 500 response', (done) => {
	chai.request(app)
		.get('/api/xMen/stats')
		.end((error, response) => {
		  if (error) done(error);
		  expect(response).to.have.status(200);
		  done();
		});
  });
});
