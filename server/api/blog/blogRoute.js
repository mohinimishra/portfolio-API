const router = require('express').Router();
const controller = require('./blogController')

router.route('/')
    .get(controller.getList)
    .post(controller.create)

router.route('/slug/:slug')
    .get(controller.getDetails)

router.route('/:_id')
    .delete(controller.delete)
    .put(controller.update)



module.exports = router;
