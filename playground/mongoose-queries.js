const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo}     = require('./../server/models/todo');
const {User}     = require('./../server/models/user');

let id = '5a19cea25443e2d0edfcfc5d';
let userID = '5a16ffe8e83e048574c954c8';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

/* Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos ', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo ', todo);
}); */

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo ', todo);
}).catch((e) => console.log(e));

User.findById(userID).then((user) => {
  if (!user) {
    return console.log('User ID not found');
  }
  console.log('User ', user);
}).catch((e) => console.log(e));