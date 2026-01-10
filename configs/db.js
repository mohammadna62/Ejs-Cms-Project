const mongoose = require("mongoose");

const dbUrl = "mongodb://localhost:27017/node-ejs";

mongoose
  .connect(dbUrl)
  .then(() => console.log("Server Connected To DB Successfully :))"))
  .catch((err) => console.log("Err ->", err));
