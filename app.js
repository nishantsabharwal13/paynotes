
require('dotenv').config();
require('babel-core/register')({
  presets: ['es2015', 'react', 'stage-1'],
  plugins: ['dynamic-import-webpack']
});
require('babel-polyfill');

require.extensions['.scss'] = () => {
  return;
};

const express = require('express');
const path = require('path');
const app = express();

const compression = require('compression');
app.use(compression());

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const logger = require('morgan');
app.use(logger('dev'));

const cookieParser = require('cookie-parser');
app.use(cookieParser('mySecretString'));

const mongoose = require('mongoose');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongoose-connection error'));

const mongooseOptions = {
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 1000,
  useNewUrlParser: true,
};

// Mongoose config

mongoose.connect(process.env.DB, mongooseOptions);

app.use(express.static(path.join(__dirname, 'public')));

// view engine setup;
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

// request handler for server side rendering
const requestHandler = require('./requestHandler');
app.use(requestHandler);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
