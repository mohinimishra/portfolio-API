const router = require('express').Router();
const Controller = require('./projectController');

router.route('/')
    .get(Controller.getList)
router.route('/:slug')
    .get(Controller.getDetails)
module.exports = router;