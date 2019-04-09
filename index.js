var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

var usersRoute = require('./router/users.router');
var productsRoute = require('./router/products.router');

var port = 3000;

mongoose.connect('mongodb://localhost/express-demo', {useNewUrlParser: true});

app.set('views', './views');
app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json
app.use('/users', usersRoute);
app.use('/products', productsRoute);

app.get('/', function (req, res) {
	res.render('./home');
})

app.listen(port, function () {
	console.log('Connect thanh cong');
})