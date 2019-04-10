var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transferSchema = new Schema({
	accountId: String,
	amount: Number
});

var Transfer = mongoose.model('Transfer', transferSchema, 'transfer');

module.exports = Transfer;
