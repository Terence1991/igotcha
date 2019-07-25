"use strict";


const PORT = 27017;
const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = `mongodb://127.0.0.1:${PORT}`;

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    console.log(err);
    throw err;
  }

  // ==> We have a connection to the "comments" db,
  //     starting here.
  console.log(`Connected to mongodb: ${MONGODB_URI}`);
  db.close();
});