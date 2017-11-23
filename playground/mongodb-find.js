/* const MongoClient = require('mongodb').MongoClient; */

// This line is the same as getting a "method" from the npm package, and we added ObjectID
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');

/*   db.collection('Todos').find({
    _id: new ObjectID('5a1625b952f43eceb15f9c14')
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  }); */

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

/*   db.close(); */
});