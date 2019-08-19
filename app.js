const serverless = require("serverless-http");
const express = require("express");

const app = express();

app.get("/products", (req, res) => res.json([]));
app.listen(4000, () => console.log("Server running on port 4000"));

module.exports.handler = async event => await serverless(app);
