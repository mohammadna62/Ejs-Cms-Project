const express = require("express");
const path = require("path");
const coursesRouter = require("./routes/course");
const usersRouter = require("./routes/user");
const cookiesRouter = require("./routes/cookie");
const flash = require("express-flash");
const session = require("express-session");
const cookieParser = require("cookie-parser")
const {
  paramValidator,
  queryValidator,
} = require("./validators/test.validator");
const validate = require("./middlewares/validate");
require("./configs/db");


const app = express();

app.use("/css", express.static(path.join(__dirname, "public/css")));
app.use("/js", express.static(path.join(__dirname, "public/js")));
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use("/fonts", express.static(path.join(__dirname, "public/fonts")));

app.use(
  session({
    secret: "Secret Key",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(flash());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser("ljkhfkjwehfkjh"));//* set secret key for hashing

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.get("/params/:id", paramValidator(), validate, (req, res) => {
  return res.json({ message: "Data saved successfully :))" });
});

app.get("/query", queryValidator(), validate, (req, res) => {
  return res.json({ message: "Query saved successfully :))" });
});

app.use("/courses", coursesRouter);
app.use("/auth", usersRouter);
app.use("/cookies", cookiesRouter);

app.listen(4001, () => {
  console.log("Server running on port 4001");
});
