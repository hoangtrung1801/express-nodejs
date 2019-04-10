var express = require('express');

var controller = require('../controller/cart.controller');

var router = express.Router();

router.get('/',  controller.cart);

router.get('/add/:id', controller.addCart);

module.exports = router;