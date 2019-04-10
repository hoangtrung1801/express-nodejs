var SessionId = require('../models/sessionId.model');
var Product = require('../models/product.model');

module.exports = {
	cart: async function (req, res) {
		var sessionId = req.cookies.sessionId;
		var session = await SessionId.findById(sessionId);

		if (!session) {
			res.redirect('/products');
			return;
		};

		var carts = [];
		if (session.carts){
			for (var [key, value] of session.carts.entries()){
				var cart = await Product.findById({_id: key});
				cart.amount = value;

				carts.push(cart);
			};
		}

		res.render('./cart/cart', {
			carts: carts
		});
	},

	addCart: async function (req, res) {
		var sessionId = req.cookies.sessionId;
		var productId = req.params.id;

		var product = await Product.findById(productId);
		var session = await SessionId.findById(sessionId);

		if (!session) {
			res.redirect('/products');
			return;
		};

		if (!session.carts){
			session.carts = {};
		}

		var count = parseInt(session.carts.get(productId)) || 0;
		// add product on session cart
		session.carts.set(productId , count + 1);
		session.save();
		console.log(session);

		res.redirect('/cart');
	}
}