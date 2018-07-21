//const MongoClient = require('mongodb').MongoClient;
//destructuring in JavaScript -> create a variable from an object property
//
const {MongoClient, ObjectID} = require('mongodb');

/* let obj = new ObjectID();
console.log(obj); */


//gets connection to the actual database
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to database.');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

/*     const findTodos = db.collection('Todos');
    findTodos.find({_id: new ObjectID('5b53acb806b949e114fcb3e4')})
        .find().then((data) => {
        console.log(JSON.stringify(data, undefined, 2));
    }).catch(error => {
        console.log('Unable to fetch todos');
    }); */

/*     const findTodos = db.collection('Todos');
    findTodos.find({
            _id: new ObjectID('5b53acb806b949e114fcb3e4')
        })
        .count().then((data) => {
            console.log(JSON.stringify(data, undefined, 2));
        }).catch(error => {
            console.log('Unable to fetch todos');
        }); */

    const users = db.collection('Users');
    users.find({name: 'Mike'}).count().then((data) => {
        console.log("Number of docs: " + data);
    });

    client.close();
});

