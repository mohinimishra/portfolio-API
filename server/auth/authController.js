const AuthService = require('./authService');
const User = require('../api/user/userSchema')


module.exports.signin = (req, res, next) => {
    let body = req.body;
    User.findOne({ emailId: body.emailId }).then((data) => {
        if (data) {
            if (!data.comparePass(body.password)) {
                res.status(401).json({ message: "Email Password Incorrect" })
            } else {
                let token = AuthService.signToken(data._id);
                data.password = "";
                res.status(200).json({ message: "Succesfully logged In", token, data: data })
            }
        }
        else {
            res.status(400).json({ message: "Email Password Incorrect" })
        }

    }).catch(err => next(err))
}

module.exports.signup = (req, res, next) => {
    let body = req.body;
    if (!body.emailId || !body.password) {
        res.status(400).json({ message: "Email and pasword required" })
    }
    AuthService.createUser(body).then(dt => {
        // let data = { name: dt.name, email: dt.emailId, _id: dt._id, apiKey: dt.apiKey }
        res.status(201).json({ message: 'Successfully sign up', data: dt })
    }).catch(err => next(err))
}