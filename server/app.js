const path = require("path");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const cookie = require("cookie-parser");
const api = require("./routes/api");
const app = express();

app.use(express.static(path.join(__dirname, "..", "client")));
app.use(express.json());
app.use(cookie());
app.use(helmet());
app.use(morgan("tiny"));
// app.use(
//   cors({
//     origin: "https://newsletter-qsx1.onrender.com",
//     methods: ["POST", "GET"],
//   })
// );
app.use(api);

module.exports = app;
