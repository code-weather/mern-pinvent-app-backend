const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  console.log('Ayy this works BOIIIII!!!!');
});

const PORT = process.env.PORT || 8000;

// Connect to mongoDB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
  app.listen(PORT, () => {
      console.log(`${PORT} is FIRED UP SON! 🔥🔥🔥`);
    })
  .catch((err) => console.log(err));
});