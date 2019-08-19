const router = require("express").Router();
const productsCtrl = require("./controllers/products");
const variationsCtrl = require("./controllers/variations");
router.get("/", (req, res) => {
  res.json({ message: "It works" });
});
router.get("/products", productsCtrl.list);
router.get("/products/:productId", productsCtrl.get);
router.get("/products/:productId/variations", variationsCtrl.list);
router.get("/products/:productId/variations/:variationId", variationsCtrl.get);

module.exports = router;
