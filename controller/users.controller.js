var User = require('../models/user.model');

module.exports = {
	users: async function (req, res) {
		var users = await User.find();
		res.render('./users/users', {
			users: users
		});
	},

	search: function (req, res) {
		var key = req.query.key;

		User.find({}, function (err, data) {
			var users = [];

			users = data.filter(function (user) {
				return user.name.toLowerCase().indexOf(key.toLowerCase()) !== -1;
			})

			res.render('./users/users', {
				users: users
			})
		})
	},

	create: function (req, res) {
		res.render('./users/create');
	},

	postCreate: function (req, res) {
		User.create(req.body, function(err, data) {
			if (err) return handleError(err);
		});

		User.find({}, function (err, data) {
			res.render('./users/users', {
				users: data
			})
		})
	},

	view: function (req, res) {
		var id = req.params.id;

		User.findOne({_id: id}, function (err, data) {
			res.render('./users/view', {
				user: data
			})
		})
	},

	detele: function (req, res) {
		var id = req.params.id;

		User.deleteOne({_id: id}, function (err, data) {});

		res.redirect('/users');
	}
}