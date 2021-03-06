/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const charactersRouter = require('./characters/characters-router');
const authRouter = require('./auth/auth-router');
const registerRouter = require('./register/register-router');

const NODE_ENV = require('./config');

const app = express();

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.use('/api/characters', charactersRouter);
app.use('/api/auth', authRouter);
app.use('/api/register', registerRouter);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.use(function errorHandler(error, req, res, next) {
  let response;

  if (NODE_ENV === 'production') {
    response = {
      error: { message: 'server error' }
    };
  }
  else {
    console.error(error);
    response = {
      message: error.message,
      error
    };
  }

  res.status(500).json(response);
});

module.exports = app;
