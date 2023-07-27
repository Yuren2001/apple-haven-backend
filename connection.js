require("dotenv").config();

const mongoose = require("mongoose");

const connectionStr =
  "mongodb+srv://applehaven:hLLOSDEVL06MBFTU@cluster0.vrvv3yw.mongodb.net/applehaven?retryWrites=true&w=majority";

mongoose
  .connect(connectionStr, { useNewUrlParser: true })
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log(err));

mongoose.connection.on("error", (err) => {
  console.log(err);
});
