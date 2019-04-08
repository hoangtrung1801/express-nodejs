var User = require('../models/user.model');

module.exports = {
	users: async function (req, res) {
		var users = await User.find();
		console.log(users);
		res.render('./users/users', {
			users: users
		});
	},

	create: function (req, res) {
		res.render('./users/create');
	},

	postCreate: function (req, res) {
		User.create(req.body, function(err, data) {
			if (err) return handleError(err);
		})

	}
}