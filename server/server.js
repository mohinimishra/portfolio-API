const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/config')
const authenticate = require('./auth/authService').authenticate;

console.log(config.dbUrl)

mongoose
    .connect(config.dbUrl, { useUnifiedTopology: true, useNewUrlParser: true })
    .then((dt) => { console.log("mongodb connected sucessfully.") })
    .catch(err => console.log(err))

require('./middlewares/appMiddleware')(app);


app.get('/', (req, res) => {
    res.json({ message: `API Up n Running on ${config.port}` })
})
app.use('/auth', require('./auth/authRoutes'));
app.use('/api', authenticate, require('./api/api'));

app.use('*', function (req, res, next) {
    res.status(404).json({ 'message': "Not Found" })
})

app.use(function (error, req, res, next) {
    console.log(error)
    res.status(500).json({ 'message': error.message })
})
module.exports = app;