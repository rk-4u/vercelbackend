// Import required modules
const express = require('express');
const router = require('./router');
require('dotenv').config();
const cors = require("cors");
require('./dbConnection');

const app = express();
app.use(cors({
    origin: ['http://localhost:3000',  // Allow localhost for development
  'https://yashiitservices.in' ], // Allow requests from your frontend
    methods: "GET,POST,PUT,DELETE", // Allowed request methods
    allowedHeaders: "Content-Type, Authorization" // Allowed headers
  }));
const PORT = process.env.PORT || 4000;

// Initialize Express app
app.use(express.json());


app.use('/users',router)

app.get('/', (req, res) => {
    res.send('Backend is live!');
});


// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
