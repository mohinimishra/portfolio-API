let AuthService = require('./authService')


module.exports.signin = (req, res, next) => {
    let body = req.body;











}

module.exports.signup = (req, res, next) => {
    let body = req.body;
    if (!body.emailId || !body.password) {
        res.status(400).json({ message: "Email and pasword required" })
    }
    AuthService.createUser(body).then(dt => {
        let data = { name: dt.name, email: dt.emailId, _id: dt._id }
        res.status(201).json({ message: 'Successfully sign up', data: data })
    }).catch(err => next(err))
}