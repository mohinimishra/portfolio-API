const Router = require('express').Router();

Router.use('/contacts', require('./contact/contactRoute'));
Router.use('/projects', require('./project/projectRoute'))
Router.use('/signup', require('./user/userRoute'))
Router.use('/blogs', require('./blog/blogRoute'))
Router.use('/users', require('./user/userRoute'))

module.exports = Router;