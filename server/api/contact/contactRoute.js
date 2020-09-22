const router = require('express').Router();
const controller = require('./contactController');

router.route('/')
    .get(controller.getList)
    .post(controller.create)

router.route('/:id')
    .delete(controller.delete)

module.exports = router;