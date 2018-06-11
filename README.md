# mutantes-meli

#### Technologies involved
 - [NodeJS](https://nodejs.org/es/)
 - [Postgres](https://www.postgresql.org/)
 - [Sequelize](http://docs.sequelizejs.com/)
 - [NPM](https://www.npmjs.com/)
 - [Mocha](https://mochajs.org/)
 - [Istanbul](https://istanbul.js.org/)
 - [Heroku](https://www.heroku.com/)
 - [Docker](https://www.docker.com/)


#### How to run the app locally
Make sure Docker is installed.
```sh
$ cd mutantes
$ ./run-app.sh
```

###### If you don't have Docker installed or for develop purposes:
Make sure NPM and Node (v8 or higher) is installed.
```sh
$ cd mutantes
$ sh ./run-db.sh
$ npm install
$ npm run local
```

#### How to run tests:
```sh
$ cd mutantes
$ sh ./run-db.sh
$ npm install
$ npm test
```




#### How to use the app on the cloud

The app is hosted on https://mutantes-meli.herokuapp.com

Endpoint for check if a human is mutant or not
[https://mutantes-meli.herokuapp.com/api/xmen/mutant](https://mutantes-meli.herokuapp.com/api/xmen/mutant)

Endpoint for get the stats
[https://mutantes-meli.herokuapp.com/api/xmen/stats](https://mutantes-meli.herokuapp.com/api/xmen/stats)
