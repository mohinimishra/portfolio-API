const UserService = require('../api/user/userService');
const jwt = require('jsonwebtoken')
const config = require('../config/config');
const User = require('../api/user/userSchema')


module.exports.createUser = (data) => {
    return UserService.create(data)

}
exports.authenticate = function (req, res, next) {
    console.log(req.headers)
    console.log(req.method)
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === "Bearer") {
        let token = req.headers.authorization.split(' ')[1];
        console.log("token ", token)
        try {
            let decoded = jwt.verify(token, config.jwtSecret);
            req.user = decoded.user
            next()
        } catch (error) {
            next(error)
        }
    } else if (req.headers["x-access-apikey"] && req.method == "GET") {


        User.findOne({ "apiKey": req.headers["x-access-apikey"] }).then(data => {
            console.log(data)
            if (data.role == "admin") {
                req.user = data._id
                next()
            } else {
                next(new Error('Unauthorized'))
            }
        }).catch(err => next(err))
    }
    else {
        next(new Error('Unauthorized'))
    }
}

exports.signToken = function (id) {
    return jwt.sign({ user: id }, config.jwtSecret, { expiresIn: parseInt(config.jwtExpire) })
}

// sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6

// echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | 
// sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list