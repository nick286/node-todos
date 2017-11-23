/* const MongoClient = require('mongodb').MongoClient; */

// This line is the same as getting a "method" from the npm package, and we added ObjectID
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');

/*   db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  }); */

/*   db.collection('Todos').insertOne({
    name: 'Nicolas Larose',
    age: 29,
    location: 'Montreal'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  }); */

  db.close();
});