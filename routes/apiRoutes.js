// routes/apiRoutes.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const apiKey = process.env.OMDB_API_KEY;
    const imdbId = 'tt3896198'; // Replace with a valid IMDb ID or a dynamic value
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbId}`;
    
    const response = await axios.get(apiUrl);
    const apiData = response.data;
    
    res.json(apiData);
  } catch (error) {
    console.error('Error fetching data from API:', error);
    res.status(500).send('Error fetching data from API');
  }
});

module.exports = router;
