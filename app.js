// import express
const express = require("express");
const bodyParser = require("body-parser");

//create react app
const app = express();

//set up ejs for the view engine
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));

const namesList = [];

//import routes for form and viewing names

//make a route '/users' to view names
//must be a post route (eventually)
app.get("/users", (req, res) => {
  res.render("name-input");
});

app.post("/users", (req, res) => {
  namesList.push(req.body.name);
  console.log(`pushed ${req.body.name} to list`);
});

//make a route '/' for name input
app.get("/", (req, res) => {
  res.render("name-list", { nameList: namesList });
  console.log(namesList);
});

//run app on port 3000
app.listen(3000);
