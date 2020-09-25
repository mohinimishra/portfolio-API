const router = require('express').Router();
const Controller = require('./projectController');

router.route('/')
    .get(Controller.getList)
    .post(Controller.create)

router.route('/:slug')
    .get(Controller.getDetails)

router.route('/:_id/delete')
    .delete(Controller.delete)

router.route('/:_id/update')
    .post(Controller.update)

router.route('/:id/upload-image')
    .post(Controller.uploadImg)

module.exports = router;