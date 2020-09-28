const router = require('express').Router();
const Controller = require('./projectController');

router.route('/')
    .get(Controller.getList)
    .post(Controller.create)

router.route('/slug/:slug')
    .get(Controller.getDetails)

router.route('/:_id')
    .delete(Controller.delete)
    .put(Controller.update)




module.exports = router;