[![Build Status](https://travis-ci.org/marcusgsta/mongodb-API.svg?branch=master)](https://travis-ci.org/marcusgsta/mongodb-API)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/marcusgsta/mongodb-API/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/marcusgsta/mongodb-API/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/marcusgsta/mongodb-API/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/marcusgsta/mongodb-API/?branch=master)
[![Build Status](https://scrutinizer-ci.com/g/marcusgsta/mongodb-API/badges/build.png?b=master)](https://scrutinizer-ci.com/g/marcusgsta/mongodb-API/build-status/master)

# @marcusgsta/mongodb-api

Connect to Mongodb and use a simple API with Create, Read, Update and Delete routes.

This module is not recommended for using as is - it was created for educational purpose.


Install:

```
npm install @marcusgsta/mongodb-api
```

The api contains the following self-explanatory methods:
```
findInCollection(colName, criteria, projection, limit)
addToCollection(colName, item)
removeFromCollection(colName, id)
updateItemFromCollection(colName, id, item)
resetCollection(colName, doc)
```

There are example routes in /api, using the Express router module.

Use api as following:

Set your Mongodb dsn:
```
let api = require('@marcusgsta/mongodb-api');

api.init('process.env.DBWEBB_DSN || "mongodb://localhost:27017/math"')
```

In your Express route, create a collection:

```
let colName = "formulas";
```

READ
Example from /api using async await

```
router.get("/", async (request, response) => {

    try {
        let res = await api.findInCollection("formulas", {}, {}, 0);
        response.json(res);
    } catch (err) {
        response.json(err);
    }
});
```


ADD
Create an object with the fields and values that you need.
```
let resObject = {
    "name": name,
    "formula": formula,
    "description": description
};

let res = await api.addToCollection("formulas", resObject);
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

Reset database and fill with default data
```
npm run reset-database
```

Test with
```
npm test
```

# Dependencies:
mongodb
express.js
