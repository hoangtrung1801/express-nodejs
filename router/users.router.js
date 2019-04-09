var express = require('express');
var multer = require('multer'); // v1.0.5

var controller = require('../controller/users.controller');
var validate = require('../validate/users.validate');

var upload = multer({dest: 'public/uploads/'}, ); // for parsing multipart/form-data

var router = express.Router();

router.get('/',  controller.users);

router.get('/search', controller.search)

router.get('/create', controller.create);

router.post('/create', upload.single('avatar') ,validate.postCreate, controller.postCreate);

router.get('/:id', controller.view);

router.get('/detele/:id', controller.detele);

module.exports = router;