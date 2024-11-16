// imports express and axios 
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express(); // express app instance
const PORT = 3000; // default port for local development

require('dotenv').config(); // load env var from .env files

// tells express to use express.json as middleware for incoming  requests
app.use(express.json());

// enable cors for all origins
// app.use(cors()); // fine for local development 

app.use(cors({
    origin: 'http://localhost:4200' // only allow requests from localhost:4200, backend
}))

// NASA API KEY
const NASA_API_KEY = process.env.NASA_API_KEY;


// Endpoint for getting the current Astronomy Picture of the Day (APOD) from NASA API
app.get('/api/apod', async (req, res) => {
    try {
      const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching nasa apod data...' });
    }
  });



// This is where the frontend angular app will send requests to to fetch data
// app start at localhost:3000
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
  });
