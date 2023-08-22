const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});

const DB = 'mongodb+srv://mdoughlin:5Diamond@cluster0.ry1wyvp.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Database connected..');
});
