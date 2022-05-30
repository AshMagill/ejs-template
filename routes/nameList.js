const express = require("express");

const router = express.Router();

router.get("/", () => {
  console.log("this is the name list route for viewing all names");
});
