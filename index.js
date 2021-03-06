"use strict";

class Mongoapi {
    constructor(dsn) {
        this.mongo = require("mongodb").MongoClient;
        this.dsn = dsn || process.env.DBWEBB_DSN || "mongodb://localhost:27017/math";
    }

    /**
     * Find documents in a collection by matching search criteria.
     *
     * @async
     *
     * #@param {string} dsn        DSN to connect to database.
     * @param {string} colName    Name of collection.
     * @param {object} criteria   Search criteria.
     * @param {object} projection What to project in results.
     * @param {number} limit      Limit the number of documents to retrieve.
     *
     * @throws Error when database operation fails.
     *
     * @return {Promise<array>} The resultset as an array.
     */
    async findInCollection(colName, criteria, projection, limit) {
        const db  = await this.mongo.connect(this.dsn);
        const col = await db.collection(colName);
        const res = await col.find(criteria, projection).limit(limit).toArray();

        await db.close();

        return res;
    }

    /**
     * Add documents to a collection
     *
     * @async
     *
     * #@param {string} dsn        DSN to connect to database.
     * @param {string} colName    Name of collection.
     *
     * @throws Error when database operation fails.
     *
     * @return {Void}
     */
    async addToCollection(colName, item) {
        const db  = await this.mongo.connect(this.dsn);
        const col = await db.collection(colName);

        // const res = await col.insert(
        //     { "name": name,
        //         "formula": formula,
        //         "description": description}
        // );
        console.log(item);

        const res = await col.insert(item);

        await db.close();

        return res;
    }

    // async addToCollection(colName, name, formula, description) {
    //     const db  = await this.mongo.connect(this.dsn);
    //     const col = await db.collection(colName);
    //     const res = await col.insert(
    //         { "name": name,
    //             "formula": formula,
    //             "description": description}
    //     );
    //
    //     await db.close();
    //
    //     return res;
    // }

    /**
     * Delete documents to a collection
     *
     * @async
     *
     * #@param {string} dsn        DSN to connect to database.
     * @param {string} colName    Name of collection.
     *
     * @throws Error when database operation fails.
     *
     * @return {Void}
     */
    async removeFromCollection(colName, id) {
        console.log("id", id);
        const ObjectId = require('mongodb').ObjectId;
        const db  = await this.mongo.connect(this.dsn);
        const col = await db.collection(colName);
        //const res = await col.remove({ _id: new ObjectId(id)});
        const res = await col.deleteOne({ _id: new ObjectId(id)});

        await db.close();

        return res;
    }

    /**
     * Delete documents to a collection
     *
     * @async
     *
     * #@param {string} dsn        DSN to connect to database.
     * @param {string} colName    Name of collection.
     *
     * @throws Error when database operation fails.
     *
     * @return {Void}
     */
    async updateItemFromCollection(colName, id, item) {
        const ObjectId = require('mongodb').ObjectId;
        const db  = await this.mongo.connect(this.dsn);
        const col = await db.collection(colName);

        var myquery = { _id: new ObjectId(id) };
        // var newvalues = { name: name, formula: formula, description: description };
        var newvalues = item;
        const res = await col.update(myquery, { $set: newvalues } );

        await db.close();

        return res;
    }

    /**
     * Reset a collection by removing existing content and insert a default
     * set of documents.
     *
     * @async
     *
     * #@param {string} dsn     DSN to connect to database.
     * @param {string} colName Name of collection.
     * @param {string} doc     Documents to be inserted into collection.
     *
     * @throws Error when database operation fails.
     *
     * @return {Promise<void>} Void
     */
    async resetCollection(colName, doc) {
        const db  = await this.mongo.connect(this.dsn);
        const col = await db.collection(colName);

        await col.deleteMany();
        await col.insertMany(doc);
        console.log("Database was reset and setup.");
        await db.close();
    }
}



module.exports = Mongoapi;
