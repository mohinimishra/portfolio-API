const User = require('./userSchema');
const { v4: uuid } = require('uuid');

module.exports.list = function () {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await User.find()
            let count = await User.find().countDocuments()
            resolve({ count, data })
        } catch (error) {
            reject(error)
        }
    })
}

module.exports.create = function (data) {
    data.apiKey = uuid();
    let newUser = new User(data);

    return newUser.save()
    // return new Promise(async (resolve, reject) => {
    //     try {
    //         let newUser = new User(data)
    //         let detail = await newUser.save();
    //         resolve(detail)
    //     } catch (err) {
    //         reject(err)
    //     }
    // })
}
