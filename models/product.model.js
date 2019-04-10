var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
	name: String,
	image: String,
	description: String,
	amount: Number
});

var Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;
