var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = reuqire('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
var routes = require('./routes/index');

var app = express();

//Logging of HTTP
var accessLogStream = fs.createWriteStream(__dirnam + '/http.log', { flags: 'a' });
app.use(logger('combined', { stream: accessLogStream }));

//View engine setup
app.set('views', path.join(__dirname, '/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(facicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser()); 
app.use(express.static(path.join(__dirname, 'public'))); 

//using the routes defined in routes/index.js
app.use('/', routes); 

//catch a 404 error and send message
app.use(function(req, res, next) {
    var err = new Error('Resource Not Found');
    err.status = 404;
    res.send(404, {status:404, message: 'Resource not found'}); 
    next(err); 
});

//catch a 500 error and send message
app.use(function(req, res, next) {
    var err = new Error('Internal Server Error');
    err.status = 500;
    res.send(500, {status:500, message: 'Internal server error'});
    next(err); 
}); 

//setting server port
app.set('port', process.env.port || 3000); 

//starting up the server
var server = app.listen(app.get('port'), function() {
    console.log('Server is listening on port' + app.get('port'));
});

module.exports = app; 