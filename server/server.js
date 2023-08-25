const express = require("express");
const app = express();

const routes = require("./routes");
const mongoose = require("mongoose");

// const app = express();
const port = 8080;

app.use("/", routes);

// app.get("/", (req, res) => {
//   res.send("Hello, World");
// });

app.listen(port, () => {
  console.log(`Server running on Port ${port}`);
});

const DB = "mongodb+srv://mdoughlin:5Diamond@cluster0.ry1wyvp.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Database connected..');
});
