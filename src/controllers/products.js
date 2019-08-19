const stripe = require("stripe")(process.env.PROD_STRIPE_SECRET_KEY);

const list = async (req, res) => {
  try {
    const products = await stripe.products.list({ limit: 10 });

    res.json(products.data);
  } catch (ex) {
    res.status(400).json({ message: "Error: " + ex });
  }
};

const get = async (req, res) => {
  try {
    const product = await stripe.products.retrieve(req.params.id);

    res.json(product);
  } catch (ex) {
    res.status(400).json({ message: "Error: " + ex });
  }
};

module.exports = {
  list,
  get
};
