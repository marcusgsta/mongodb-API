//mongodb

var express = require('express');
// var router = express.Router();
var app = express();
/* GET mongodb page. */

app.get("/", async (request, response) => {
    const Api = require("../index");
    let api = new Api("mongodb://localhost:27017/math");

    try {
        let res = await api.findInCollection("formulas", {}, {}, 0);

        console.log(res);
        response.json(res);
    } catch (err) {
        console.log(err);
        response.json(err);
    }
});



// module.exports = router;
