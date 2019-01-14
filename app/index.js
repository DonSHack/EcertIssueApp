'use strict'
// required dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');
// setup the env variables
const dotenv = require('dotenv');
dotenv.config();
// routers
const routes = require('../routes/index.route');
// express app
const server = require('./server')
const app = module.exports = {};
app.runServer = function (args) {
    // routes
    server.use('/', routes);
    server.listen(process.env.NODE_PORT || 3000, (err) => {
        if (err) {
            console.log('Server goes down due to ' + err)
        } else {
            console.log('Server running on ' + process.env.NODE_PORT || 3000)
        }
    });
}