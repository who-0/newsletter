const express = require("express");
const path = require("path");
const api = require("./routes/api");
const app = express();
app.use(express.static(path.join(__dirname, "..", "client")));

app.use(api);
module.exports = app;
