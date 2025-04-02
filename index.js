// Import required modules
const express = require('express');
const router = require('./router');
require('dotenv').config();
require('./dbConnection');

const app = express();
const PORT = process.env.PORT || 4000;

// Initialize Express app
app.use(express.json());


app.use('/users',router)

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
