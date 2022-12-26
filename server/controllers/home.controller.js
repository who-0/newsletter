const path = require("path");
const url = require("url");
const httpGetHome = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "client", "index.html"));
};
const httpPostHome = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  if (!firstName || !lastName || !email) {
    return res.status(404).json({
      error: "Please All fill input.",
    });
  }
  // res.writeHead(301, { Location: "http://localhost:3000/success" });
  // res.end();

  // return await res.sendFile(
  //   path.join(__dirname, "..", "..", "client", "success.html")
  // );
  return res.status(200).json(req.body);
};

module.exports = { httpGetHome, httpPostHome };
