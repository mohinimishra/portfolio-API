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
