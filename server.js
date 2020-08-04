const express = module.require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const Book = require("./models/book.model");
const shortid = require("shortid");
const usersRoute = require("./routes/users.route");
app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
   res.render("index", { name: "Bạn" });
});

app.use("/users", usersRoute);

app.listen(port);
