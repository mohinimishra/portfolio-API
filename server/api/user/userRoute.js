const router = require('express').Router();
const controller = require('./userController')

router.route('/')
    .get(controller.getList)
    .post(controller.create)


module.exports = router;