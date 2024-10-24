// server.js
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const bookingRoutes = require('./routes/bookings');

const app = express();
const PORT = 3000;

// MongoDB Atlas URI
const uri = "mongodb+srv://s3945368:9Ka6ZmSMZ8a2ScYH@airbnbbookingsdb0.u6f8v.mongodb.net/sample_airbnb?retryWrites=true&w=majority";

// Connect to MongoDB Atlas
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));  // Serve static files

// API Routes
app.use('/api/bookings', require('./routes/bookings'));

// Handle 404 errors
app.use((req, res) => res.status(404).send('Not found'));

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
