"use strict";
//mongodb
var express = require('express');
var router = express.Router();

/* POST mongodb page. */

router.delete("/", async (request, response) => {
    const Api = require("../index");
    let api = new Api();

    try {
        var id = request.body.id;
        let res = await api.removeFromCollection("formulas", id);

        console.log("id", id);
        response.json(res);
    } catch (err) {
        console.log(err);
        response.json(err);
    }
});



module.exports = router;
