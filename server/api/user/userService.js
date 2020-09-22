const User = require('./userSchema');

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
    return new Promise(async (resolve, reject) => {
        try {
            let newUser = await new User(data)
            let detail = await newUser.save()
            let count = await newUser.save().countDocument()
            resolve({ detail, count })
        } catch (err) {
            reject(err)
        }
    })
}
