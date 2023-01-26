const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`${PORT} is FIRED UP SON! 🔥🔥🔥`);
});