#!/usr/bin/env node
"use strict";
//mongodb
var express = require('express');
var router = express.Router();

/* POST mongodb page. */

router.post("/", async (request, response) => {
    const Api = require("../index");
    let api = new Api();

    try {
        var name = request.body.name;
        var formula = request.body.formula;
        var description = request.body.description;

        let resObject = {
            "name": name,
            "formula": formula,
            "description": description
        };

        let res = await api.addToCollection("formulas", resObject);

        response.json(res);
    } catch (err) {
        console.log(err);
        response.json(err);
    }
});


module.exports = router;
