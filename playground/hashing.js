const {SHA256} = require('crypto-js');
const jwt      = require('jsonwebtoken');

let data = {
  id: 10
}

let token = jwt.sign(data, '123abc');

let decoded = jwt.verify(token, '123abc');
console.log(decoded);





/* let message = 'I am user number 3';
let hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

let data = {
  id: 4
};

let token = {
  data: data,
  hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
}

// 'somesecret' is the salting 

let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

if (resultHash === token.hash) {
  console.log('Data was not changed');
} else {
  console.log('Data was changed. Do not trust!');
} */
