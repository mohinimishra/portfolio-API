const ContactService = require('./contactService');

module.exports.getList = (req, res, next) => {
    ContactService.list().then((dt) => {
        res.json({ 'message': 'List Of Contacts', data: dt })
    }).catch(err => next(err))
}

module.exports.create = (req, res, next) => {
    let dt = req.body;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    ContactService.create(dt).then((data) => {
        res.status(201).json({ 'message': "Contact created Succesfully", data })
    }).catch(err => next(err))
}

module.exports.delete = (req, res, next) => {
    let id = req.params.id;
    ContactService.delete(id).then(dt => {
        res.json({ 'message': 'Contact Deleted' })
    }).catch(err => { next(err) })
}