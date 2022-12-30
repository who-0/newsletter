const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const http = require("http");
const app = require("./app");
const { mongonConnect } = require("./services/mongodb");
const server = http.createServer(app);
const PORT = process.env.PORT || 8000;
server.listen(PORT, async (_) => {
  await mongonConnect();
  console.log(`Server is running on PORT:${PORT}`);
});
