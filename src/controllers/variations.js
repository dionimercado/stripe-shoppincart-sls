const stripe = require("stripe")(process.env.PROD_STRIPE_SECRET_KEY);

const list = async (req, res) => {
  try {
    const products = await stripe.skus.list({ product: req.params.productId });

    res.json(products.data);
  } catch (ex) {
    res.status(400).json({ message: "Error: " + ex });
  }
};

const get = async (req, res) => {
  try {
    const products = await stripe.skus.list({ ids: [req.params.variationId] });

    res.json(products.data);
  } catch (ex) {
    res.status(400).json({ message: "Error: " + ex });
  }
};

module.exports = {
  list,
  get
};
