const express = require("express");
const path = require("path");
const coursesRouter = require("./routes/course");
const usersRouter = require("./routes/user");
const flash = require("express-flash")
const session = require("express-session")
require("./configs/db");

const app = express();

app.use("/css", express.static(path.join(__dirname, "public/css")));
app.use("/js", express.static(path.join(__dirname, "public/js")));
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use("/fonts", express.static(path.join(__dirname, "public/fonts")));
app.use(session({
  secret:"secret key",
  resave:false,
  saveUninitialized:false,
}))
app.use(flash())
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use("/courses", coursesRouter);
app.use("/auth", usersRouter);

app.listen(4001, () => {
  console.log("Server running on port 4001");
});
