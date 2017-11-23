// This line is the same as getting a "method" from the npm package, and we added ObjectID
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');

/*   db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5a1639de52f43eceb15fa1d4')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  }); */

  db.collection('Todos').findOneAndUpdate({
    name: "Nicolas Larose"
  }, {
    $set: { name: "Laurel" },
    $inc: { age: 1 }
  }, {
    returnOriginal: false
  }).then((results) => {
    console.log(results);
  });

  //db.close();
});