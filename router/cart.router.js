var express = require('express');

var controller = require('../controller/cart.controller');

var router = express.Router();

router.get('/',  controller.cart);

module.exports = router;