const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.status(200).send({error: 'Page not found.', name: 'Todo App v1.0'});
});

app.get('/user', (req, res) =>{
    res.send([
        {name: 'Mike', age: 25},
        {name: 'Alex', age: 23},
        {name: 'Chris', age: 22}
    ]);
});

app.listen(3000, () => {
    console.log('server started');
});

module.exports.app = app;