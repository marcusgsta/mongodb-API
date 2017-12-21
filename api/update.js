"use strict";
//mongodb
var express = require('express');
var router = express.Router();

/* POST mongodb page. */

router.put("/", async (request, response) => {
    const Api = require("../index");
    let api = new Api();

    try {
        var id = request.body.id;
        var name = request.body.name;
        var formula = request.body.formula;
        var description = request.body.description;
        // create an object from the fields and values
        let resObject = {
            "name": name,
            "formula": formula,
            "description": description
        };
        let res = await api.updateItemFromCollection("formulas", id, resObject);

        response.json(res);
    } catch (err) {
        console.log(err);
        response.json(err);
    }
});


module.exports = router;
