const UserService = require('../api/user/userService');


module.exports.createUser = (data) => {
    return UserService.create(data)

}