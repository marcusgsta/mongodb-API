const app = require('./index');

// get env variable DBWEBB_PORT
var PORT;

if (typeof process.env.DBWEBB_PORT !== 'undefined') {
    PORT = process.env.DBWEBB_PORT;
} else {
    PORT = 1337; //use for production (after build)
    //PORT = 1339; // use for development (npm run start-dev)
}

// Start up server

app.listen(process.env.PORT || PORT, () => {
// app.listen(PORT, () => {
    console.log("Express is listening on port " + PORT);
});