const express = require('express');
app = express();

const UserRoutes = require('./api/routes/users');

app.use('/users',UserRoutes) ;

module.exports = app;