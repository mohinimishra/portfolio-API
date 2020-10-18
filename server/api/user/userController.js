const UserService = require('./userService');
const { v4: uuid } = require('uuid')

module.exports.getList = (req, res, next) => {
    UserService.list().then(({ count, data }) => {
        res.json({ 'message': 'List Of Users', count: count, data: data })
    }).catch(err => next(err))
}

module.exports.create = (req, res, next) => {
    let dt = req.body;

    UserService.create(dt).then((data) => {
        res.status(201).json({ 'message': "Contact created Succesfully", data })
    }).catch((err) => next(err))
}