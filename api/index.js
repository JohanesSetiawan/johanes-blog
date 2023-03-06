const express = require("express");
const app = express();

app.get("/test", (req, res) => {
  res.json("Hello World");
});

app.listen(4000);
