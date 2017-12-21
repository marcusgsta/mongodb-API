# mongodb-API

Connect to Mongodb and use a simple Express API with Create, Read, Update and Delete routes.


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

Configure your mongodb adress in the file dsn.js
```
"mongodb://localhost:27017/math";
```

Reset database and fill with default data
```
npm run reset-database
```

# Dependencies:
mongodb
express.js
