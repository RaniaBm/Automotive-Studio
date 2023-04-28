const express = require('express');
const app = express();

const port = 3000;
const hostname = '127.0.0.1';

//import the file from routte folder
const useroute = require('./routes/router');

//any HTTP request that starts with /user will be handled by the router middleware
app.use('/AS', useroute);


// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {
        name: "Rania"
    })
})
app.get('/admin', (req, res) => {
    res.render('admin', {
        name: "Rania"
    })
})
app.get('/Aboutus', (req, res) => {
    res.render('Aboutus', {
        name: "Rania"
    })
})
app.get('/login', (req, res) => {
    res.render('login', {
        name: "Rania"
    })
})

//server starts listening
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});