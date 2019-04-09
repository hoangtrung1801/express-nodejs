var SessionId = require('../models/sessionId.model');

module.exports = async function (req, res, next) {
	if (!req.cookies.sessionId) {
		var data = await SessionId.create({});
		var _id = data._id;

		res.cookie('sessionId', _id);
	};

	next();
}