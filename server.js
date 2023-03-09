const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const userRoute = require('./routes/userRoutes');
const productRoute = require('./routes/productRoute');
const contactRoute = require('./routes/contactRoute');
const errorHandler = require('./middleware/errorMiddleware');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();

// Middlewares
app.use(express.json()); // Help handle JSON data in our application
app.use(express.urlencoded({ extended: false })); // Help handle data that comes via the URL
app.use(cookieParser());
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'https://pinvent-app-frontend.vercel.app',
    ],
  })
);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes Middleware
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/contactus', contactRoute);

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
