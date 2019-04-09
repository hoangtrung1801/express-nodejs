var Product = require('../models/product.model');

module.exports = {
	products: function (req, res) {
		var page = parseInt(req.query.page) || 1;
		var perPage = 8;

		var begin = (page - 1) * perPage;
		var end = page * perPage;

		Product.find({}, function (err, data) {
			var maxPage = Math.ceil(data.length / 8);

			res.render('./products/products', {
				products: data.slice(begin, end),
				page: page,
				maxPage: maxPage
			});
		})
	}
}