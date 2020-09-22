const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost:27017/portfolio', { useUnifiedTopology: true, useNewUrlParser: true })
    .then((dt) => { console.log("mongodb connected sucessfully.") })
    .catch(err => console.log(err))

require('./middlewares/appMiddleware')(app);


app.get('/', (req, res) => {
    res.json({ message: "API Up n Running" })
})

app.use('/api', require('./api/api'))

app.use('*', function (req, res, next) {
    res.status(404).json({ 'message': "Not Found" })
})

module.exports = app;