const mongoose = require("mongoose");

const data = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/staynest";

async function main() {
    await mongoose.connect(MONGO_URL);
    console.log("connected to database");
}

const initDB = async () => {
    await Listing.deleteMany({});

    await Listing.insertMany(data.data);

    console.log("data was initialized");

};

main()
    .then(initDB)
    .catch((err) => {
        console.log(err);
    });