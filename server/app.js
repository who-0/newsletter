const path = require("path");
const express = require("express");
const cookie = require("cookie-parser");
const api = require("./routes/api");
const app = express();

app.use(express.static(path.join(__dirname, "..", "client")));
app.use(express.json());
app.use(cookie());
app.use(api);

module.exports = app;
