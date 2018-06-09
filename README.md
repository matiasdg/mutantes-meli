# mutantes-meli

#### Technologies involved
 - NodeJS
 - Docker
 - Postgres

#### How to run the app locally
Make sure Docker is installed.
```sh
$ cd mutantes
$ ./run-app.sh
```

###### If you don't have Docker installed or for develop purposes:
Make sure NPM is installed.
```sh
$ cd mutantes
$ ./run-db.sh
$ npm install
$ npm start
```

#### How to run tests:
```sh
$ cd mutantes
$ ./run-db.sh
$ npm install
$ npm test
```




#### How to use the app on the cloud

The app is hosted on sarasa.heroku

Endpoint for check if a human is mutant or not
[sarasa.heroku/api/xmen/mutant](sarasa.heroku/api/xmen/mutatant)

Endpoint for get the stats
[sarasa.heroku/api/xmen/stats](sarasa.heroku/api/xmen/stats)
