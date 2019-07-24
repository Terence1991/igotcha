"use strict";

const PORT = 3000
const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI =  `localhost:${PORT}`;

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  // ==> We have a connection to the "comments" db,
  //     starting here.
  console.log(`Connected to mongodb: ${MONGODB_URI}`);
  db.close();
});