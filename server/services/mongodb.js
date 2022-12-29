const mongoose = require("mongoose");
const MOGO_URL = process.env.MONGO_URL;

mongoose.set("strictQuery", true);
mongoose.connection.once("open", () => {
  console.log("mongodb is connected");
});
mongoose.connection.on("error", (error) => {
  console.log(error);
});

const mongonConnect = async () => {
  await mongoose.connect(MOGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const mongoDissconnect = async () => {
  await mongoose.disconnect();
};

module.exports = {
  mongonConnect,
  mongoDissconnect,
};
