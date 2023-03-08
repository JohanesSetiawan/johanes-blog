const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const UserModel = require("./models/User");
const bcrypt = require('bcryptjs');
const app = express();

const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://<username_mongodb>:<password>@cluster0.gq3a8hv.mongodb.net/?retryWrites=true&w=majority')

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userdoc = await UserModel.create({ username, password: bcrypt.hashSync(password, salt) });
    res.json(userdoc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userdoc = await UserModel.findOne({ username });
  res.json(userdoc);
});

app.listen(4000);

