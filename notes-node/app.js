console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');

//lets us import our own file for use -> external functions
const notes = require('./notes.js');

const user = os.userInfo().username;
console.log(user);

let result = notes.add(1,2);
console.log(result);
console.log(_.isString('hello'));
console.log(_.uniq([1, 4, 4, 4, 5, 3, 2, 1, 2]).sort());

// fs.appendFile('greetings.txt', `Hello there ${user} you are ${notes.age}` , err => {
//     if(err) {
//         console.log('Unable to write to file');
//     }
// });