const express = require('express');
const morgan = require('morgan');

module.exports = function (app) {
    app.use(morgan('dev')); //work as a logger
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }))
}