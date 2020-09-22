const Contact = require('./contactSchema');

module.exports.list = function () {
    return new Promise((resolve, reject) => {
        Contact.find().then((data) => {
            resolve(data)
        }).catch((err) => reject(err))
    })
}

module.exports.create = function (dt) {
    let newContact = new Contact(dt);
    return new Promise((resolve, reject) => {
        newContact.save().then(dt => {
            resolve(dt)
        }).catch(err => { reject(err) })
    })
}

module.exports.delete = function (id) {
    return new Promise((resolve, reject) => {
        Contact.findByIdAndDelete(id).then((data) => {
            resolve(data)
        }).catch(err => reject(err))
    })
}