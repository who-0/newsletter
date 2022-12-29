const path = require("path");
const express = require("express");
const bdparser = require("body-parser");
const api = require("./routes/api");
const app = express();
app.use(express.static(path.join(__dirname, "..", "client")));
app.use(express.json());
app.use(bdparser.json());

app.use(api);
module.exports = app;
