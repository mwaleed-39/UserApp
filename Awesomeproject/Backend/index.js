const express = require("express");
const app = express();
const cors = require("cors");
const mongooose = require("mongoose");
const User = require("./Routes/User");
mongooose.connect("mongodb://127.0.0.1");
app.use(cors());
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use("/User", User);

app.listen(5000, function () {
  console.log("Started application on port ", 5000);
  console.log("this is the first node js applicationn");
});
