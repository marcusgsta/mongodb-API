[![Build Status](https://travis-ci.org/marcusgsta/mongodb-API.svg?branch=master)](https://travis-ci.org/marcusgsta/mongodb-API)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/marcusgsta/mongodb-API/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/marcusgsta/mongodb-API/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/marcusgsta/mongodb-API/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/marcusgsta/mongodb-API/?branch=master)
[![Build Status](https://scrutinizer-ci.com/g/marcusgsta/mongodb-API/badges/build.png?b=master)](https://scrutinizer-ci.com/g/marcusgsta/mongodb-API/build-status/master)
# mongodb-API

Connect to Mongodb and use a simple Express API with Create, Read, Update and Delete routes.


Create a project:
```
mkdir my_project
cd my_project
npm init
npm install @marcusgsta/mongodb-api
```


Download module with:
```
git clone https://github.com/marcusgsta/mongodb-API.git
```

Test with
```
npm test
```

You also need Mongodb.

To install globally:
```
npm install mongodb --save
```

As an alternative you can install Docker according to your operative system:
https://docs.docker.com/engine/installation/#server

Download mongodbs Docker image
```
docker pull mongo
```

Run mongodb
```
docker -up mongodb
```

Configure your mongodb adress in the file model.js
```
"mongodb://localhost:27017/math";
```
where 'math' is the name of your database.


Reset database and fill with default data
```
npm run reset-database
```

# Dependencies:
mongodb
express.js
