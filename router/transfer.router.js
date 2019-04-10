var express = require('express');
var csrf = require('csurf');
var bodyParser = require('body-parser');

var controller = require('../controller/transfer.controller');

var csrfProtection = csrf({ cookie: true });
var parseForm = bodyParser.urlencoded({ extended: false });

var router = express.Router();

router.get('/', csrfProtection, controller.transfer);

router.post('/', parseForm, csrfProtection, controller.postTransfer);

module.exports = router;