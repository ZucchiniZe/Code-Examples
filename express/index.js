'use strict';
var express = require('express'),
    stylus = require('stylus'),
    nib = require('nib'),
    morgan = require('morgan'),
    app = express()

var port = process.env.PORT || 3000;

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}

if (app.get('env') === 'development') {
  app.locals.pretty = true;
}

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(morgan('combined'));

app.use(stylus.middleware({
  src: __dirname + '/public',
  compile: compile
}));

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index', {title: 'Virtual Chemistry', page: 'Home'});
});

app.locals.icon = function(icon){ return '<i class="fa fa-' + icon + '"></i>'; };

app.listen(port);
