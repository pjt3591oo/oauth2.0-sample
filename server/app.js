require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

const axios = require('axios');
const cors = require('cors');

// cors 방지
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 클라이언트에게 code를 전달받아 access token을 발급받는다.
app.get('/login', async (req, res) => {
  try {
    const { code, redirect_uri } = req.query;
    const { data } = await axios.post(
      'https://www.googleapis.com/oauth2/v4/token',
      {
        code,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET_ID,
        grant_type: 'authorization_code',
        redirect_uri 
      }
    )
    console.log(data);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
})

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
