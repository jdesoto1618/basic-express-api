const express = require("express");
const app = express();
const port = process.env.port || 4000;
const path = require("path");
const hbs = require("express-handlebars");
const members = require("./Members");

// handlebars middleware
app.engine("handlebars", hbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) =>
  res.render("index", {
    title: "Member Application",
    members,
  })
);

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/members", require("./routes/api/members"));

app.listen(port, () => {
  console.log(`Example express app listening on port ${port}`);
});
