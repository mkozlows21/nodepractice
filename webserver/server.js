const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
let app = express();

//tells node where partials are located
hbs.registerPartials(__dirname + '/views/partials')
//use hbs as view engine
app.set('view engine', 'hbs');
//tells node where our static html is located

app.use((req, res, next) => {
    let now = new Date().toString();
    let log = `${now}: ${req.method} ${req.url}`;
    
    console.log(log);
    fs.appendFileSync('server.log', log + '\n', (err) => {
        if(err) {
            console.log('Unable to append to server log');
        }
    });
    next();
});

app.use((req, res, next) => {
    res.render('maintenance.hbs');
});

app.use(express.static(__dirname + '/public'));

//helper function that can be accessed by hbs templates
//handlebars helpers!
hbs.registerHelper('getCurrentYear', ()=> {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        currentYear: new Date().getFullYear(),
        welcome: 'Welcome to the home page'
    });
});

app.get('/about',(req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (req, res) => {
    res.send({
        error: 'This was a bad request.'
    });
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});