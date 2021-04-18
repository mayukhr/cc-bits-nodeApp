const express = require("express");
const bp = require("body-parser");
const path = require("path");
const app = express();
const port = process.env.port || 8080;

app.set("view engine", "ejs");
app.use(bp.urlencoded());
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/login", function (req, res) {
  const CREDS = {
    username: req.body.username,
    password: req.body.password
  };
  if (CREDS.username === "mayukh" && CREDS.password === "12345") {
    res.send("<h1>Login Successfully.</h1>");
    console.log(`User ${CREDS.username}...`);
  } else {
    res.render("error");
  }
});

app.listen(port, function () {
  console.log(`Listening to port ${port}...`);
});
