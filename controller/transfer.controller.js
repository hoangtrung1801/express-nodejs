var Transfer = require('../models/transfer.model');

module.exports = {
	transfer: function (req, res) {
		res.render('./transfer/transfer', {
			csrfToken: req.csrfToken()
		});
	},

	postTransfer: function (req, res) {
		req.body.amount = parseInt(req.body.amount);

		Transfer.create(req.body, function (err, data) {
			 if (err) return handleError(err);
		});
		res.redirect('/');
	}
}