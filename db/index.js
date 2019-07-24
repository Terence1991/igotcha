const MongoClient = require('mongodb').Mon;
const url = 'mongodb://localhost/comments';

MongoClient.connect(url, (err, db) => {
  console.log('database connected')

  db.close()
})