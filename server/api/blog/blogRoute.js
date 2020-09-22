const router = require('express').Router();
const controller = require('./blogController')

router.route('/')
    .get(controller.getList)

router.route('/:slug')
    .get(controller.getDetails)

module.exports = router;
