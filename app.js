var express = require('express');
var path = require('path');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const helmet = require('helmet');
const bluebird = require('bluebird');
var mysql = require('mysql');

var api = require('./routes/api');
const config = require('./config');

var app = express();

process.on('uncaughtException', function (err) {
  console.error(err);
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "authorization,content-type,cache-control");
  next();
});

app.use(morgan('tiny'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());;
app.use(morgan('tiny'));

config.conetion = mysql.createConnection(config.database);

app.use('/', api);

app.listen(config.server.port, () => {
  console.log(`Executando na porta ${config.server.port}`);
});

module.exports = app;
