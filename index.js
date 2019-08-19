const serverless = require("serverless-http");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const routes = require("./src/api");

const app = express();

app.use(cors());
app.use("/v1", routes);

app.listen(4000, () => console.log("Server running on port 4000"));

module.exports.handler = serverless(app);
