const express = require('express');
const cors = require('cors');
const userRoute = require('./user.route');
const app = express();

app.use(express.json());
app.use(cors());
app.use( "/", userRoute);

module.exports = app;
