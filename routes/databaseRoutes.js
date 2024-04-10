// routes/databaseRoutes.js
const express = require('express');
const path = require('path');
const router = express.Router();
const { fetchDataFromDatabase } = require('../utils/databaseQuery');

router.get('/', (req, res) => {
  const filePath = path.resolve(__dirname, '../views/database.html');
  res.sendFile(filePath);
});

router.get('/data', (req, res) => {
  fetchDataFromDatabase((err, data) => {
    if (err) {
      console.error('Error fetching data from database:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(data);
    }
  });
});

module.exports = router;

