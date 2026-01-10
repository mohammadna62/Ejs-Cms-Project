const express = require("express");
const path = require("path");

const app = express();

app.use("/css", express.static(path.join(__dirname, "public/css")));
app.use("/js", express.static(path.join(__dirname, "public/js")));
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use("/fonts", express.static(path.join(__dirname, "public/fonts")));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.listen(4001, () => {
  console.log("Server running on port 4001");
});
