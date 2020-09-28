
const router = require('express').Router();
const controller = require('./authController');


router.post('/signin', controller.signin);
router.post('/signup', controller.signup);

module.exports = router;