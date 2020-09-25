const router = require('express').Router();
const controller = require('./blogController')

router.route('/')
    .get(controller.getList)
    .post(controller.create)


router.route('/:slug')
    .get(controller.getDetails)


module.exports = router;
