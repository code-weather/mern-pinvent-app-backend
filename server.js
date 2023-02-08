const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const userRoute = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorMiddleware');
const cookieParser = require('cookie-parser')

const app = express();

// Middlewares
app.use(express.json()); // Help handle JSON data in our application
app.use(express.urlencoded({ extended: false })); // Help handle data that comes via the URL
app.use(cookieParser())
app.use(cors())

// Routes Middleware
app.use('/api/users', userRoute);

// Routes
app.get('/', (req, res) => {
  res.send('Home page');
});

// Error Middleware
app.use(errorHandler);

// Connect to mongoDB and start server
mongoose.set('strictQuery', true); // When strict option is set to true, Mongoose will ensure that only the fields that are specified in your Schema will be saved in the database, and all other fields will not be saved (if some other fields are sent).

const PORT = process.env.PORT || 8000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`${PORT} is FIRED UP SON! 🔥🔥🔥`);
    });
  })
  .catch((err) => console.log(err));
