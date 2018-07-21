const db = require('./db.js');

module.exports.handleSignUp = (email, password) => {
    //Check if email already exists
    //save user to database
    db.saveUser({email, password});
    //send the welcome email
};