const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

module.exports = function (app) {
    app.use(morgan('dev')); //work as a logger
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }))
}