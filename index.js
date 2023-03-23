const express = require('express');
const app = express();

const port = 3000;
const hostname = '127.0.0.1';

//import the file from routte folder
const useroute = require('./routes/router');

//any HTTP request that starts with /user will be handled by the router middleware
app.use('/AS', useroute);

//server starts listening
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});