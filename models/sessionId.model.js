var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sessionIdSchema = new Schema({
	carts: {
		type: Map,
		of: String
	}
});

var SessionId = mongoose.model('SessionId', sessionIdSchema, 'sessionId');

module.exports = SessionId;
