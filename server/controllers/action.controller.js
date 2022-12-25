const path = require("path");
const httpGetSuccess = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "client", "success.html"));
};

const httpGetError = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "client", "error.html"));
};

module.exports = {
  httpGetSuccess,
  httpGetError,
};
