const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;
const database = process.env.MONGODB_DATABASE || "";

const connection = mongoose.connect(`${uri}/${database}`, {
  useNewUrlParser: true,
});

connection.then(() => {
  console.log("Connected to MongoDB");
});
