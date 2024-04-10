// app.js
const express = require('express');
const databaseRoutes = require('./routes/databaseRoutes');
const apiRoutes = require('./routes/apiRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use('/database', databaseRoutes);
app.use('/api', apiRoutes);
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
