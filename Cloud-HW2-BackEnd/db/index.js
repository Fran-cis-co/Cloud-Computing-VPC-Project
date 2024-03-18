const { MongoClient } = require('mongodb');

const config = require('../config.json');

const mongo = () => {
    const URL = `mongodb+srv://${config.username}:${config.password}@4220.icu4hfk.mongodb.net/${config.database_name}?retryWrites=true&w=majority`;
    let db = null;

    async function connect() {
        try {
            const client = new MongoClient(URL);
            await client.connect();

            db = client.db();

            console.log("Connected to mongo DB");
        } catch (error) {
            console.log(error);
        }
    }

    async function save() {
        try {
            const collection = db.collection("tasks");
            await collection.insertOne({ "task": "Do the Laundry" });
        } catch (error) {
            console.log(error);
        }
    }

    async function find() {
        try {
            const collection = db.collection("tasks");
            return await collection.find({}).toArray();
        } catch (error) {
            console.log(error);
        }
    }

    return {
        connect,
        find,
        save
    };
};

module.exports = mongo();