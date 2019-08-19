const router = require("express").Router();
const productsCtrl = require("./controllers/products");

router.get("/products", productsCtrl.list);
router.get("/products/:id", productsCtrl.get);

module.exports = router;
