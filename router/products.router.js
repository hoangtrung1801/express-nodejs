var express = require('express');
var multer = require('multer'); // v1.0.5

var controller = require('../controller/products.controller');

var router = express.Router();

router.get('/',  controller.products);

module.exports = router;