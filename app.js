require('dotenv').config();
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
let port = process.env.PORT || 3000;
var web = require('./routes/web');
var api = require('./routes/api');

// set the view engine to ejs
app.set('view engine', 'ejs');
// set default layout
app.set('layout', './layouts/default')

app.use(expressLayouts);

// Set static folder
app.use(express.static(__dirname + '/public'))

// index route
app.use('/api', api);
app.use('/', web);

app.listen(port);
console.log(`Server is listening on port ${port}`);