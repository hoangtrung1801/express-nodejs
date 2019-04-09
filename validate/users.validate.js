module.exports = {
	postCreate: function (req, res, next) {
		console.log(req.body);
		console.log(req.file);
		var errors = [];
		if (!req.body.name) {
			errors.push('Name is required');
		}
		if (!req.body.password) {
			errors.push('Password id required');
		}
		if (!req.body.phone) {
			errors.push('Phone is required');
		}

		if (errors.length) {
			res.render('./users/create', {
				errors: errors,
				value: req.body
			})
			return;
		} else {
			next();
		}

	}
}