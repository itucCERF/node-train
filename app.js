var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var routes = require('./routes/index');

// set the view engine to ejs
app.set('view engine', 'ejs');
// set default layout
app.set('layout', './layouts/default')

app.use(expressLayouts);

//Set static folder
app.use(express.static(__dirname + '/public'))

// index route
app.use('/', routes);

app.listen(8080);
console.log('Server is listening on port 8080');