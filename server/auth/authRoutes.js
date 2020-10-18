
const router = require('express').Router();
const controller = require('./authController');
const contactController = require('../api/contact/contactController')


router.post('/signin', controller.signin);
router.post('/signup', controller.signup);
router.post('/contacts', contactController.create)

module.exports = router;