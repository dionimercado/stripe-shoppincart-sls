const serverless = require("serverless-http");
const express = require("express");
require("dotenv").config();
const routes = require("./src/api");

const app = express();

app.use("/v1", routes);

app.listen(4000, () => console.log("Server running on port 4000"));

module.exports.handler = async event => await serverless(app);
