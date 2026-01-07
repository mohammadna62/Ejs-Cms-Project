const express = require("express");
const path = require("path");

const app = express();

 app.use("/css", express.static(path.join(__dirname,"public/css")))
 app.use("/images", express.static(path.join(__dirname,"public/images")))
 app.use("/fonts", express.static(path.join(__dirname,"public/fonts")))
//app.use(express.static("public")); // /
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

const users = [
  { id: 1, username: "amin_saeedi", password: "amin1212" },
  { id: 2, username: "h_ebadi", password: "ebadi1012" },
  { id: 3, username: "qadir_yolme", password: "yolme10_10" },
  { id: 4, username: "reza_dolati", password: "2lati1212" },
];

app.get("/", (req, res) => {
  res.render("index", {
    title:"Node Js Project",
    users,
    usersTitle: "Users List",
    isLogin: false,
    username: "Amin Saeedi",
  });
});

// app.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   console.log(username, password);

//   const isUserInDB = users.some(
//     (user) => user.username === username && user.password === password
//   );

//   if (isUserInDB) {
//     res.render("panel", {
//       username: req.body.username,
//     });
//   } else {
//     res.render("login", {
//       error: "کاربری با این اطلاعات یافت نشد",
//     });
//   }
// });

app.listen(4001, () => {
  console.log("Server running on port 4001");
});
