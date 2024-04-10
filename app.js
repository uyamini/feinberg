// Import required modules
const express = require('express');
const mysql = require('mysql');
const axios = require('axios');

// Create an Express application
const app = express();
const port = 3000;

app.use(express.static('public'));

// MySQL database connection configuration
const connection = mysql.createConnection({
  host: 'localhost', // Update with your MySQL host
  user: 'root', // Update with your MySQL username
  password: 'abcd1234', // Update with your MySQL password
  database: 'feinberg' // Update with your MySQL database name
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Define a route to redirect the root URL to the /database route
app.get('/', (req, res) => {
    res.redirect('/database');
});

// Define a route to serve the database HTML page
app.get('/database', (req, res) => {
    res.sendFile(__dirname + '/views/database.html');
  });

// Define a route to serve the API HTML page
app.get('/api', (req, res) => {
    res.sendFile(__dirname + '/views/api.html');
  });
  
// Define a route to retrieve data from the database
app.get('/data', (req, res) => {
  // Your SQL query to retrieve data
  const sqlQuery = 'SELECT * FROM employees'; // Update with your table name

  // Execute the SQL query
  connection.query(sqlQuery, (err, results) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results); // Send retrieved data as JSON response
  });
});

// Define a route to retrieve data from a public API
app.get('/api-data', async (req, res) => {
    try {
      // Make an HTTP GET request to the API endpoint
      const response = await axios.get('https://api.example.com/data'); // Replace with your API endpoint
  
      // Extract data from the API response
      const apiData = response.data;
  
      res.json(apiData); // Send retrieved data as JSON response
    } catch (error) {
      console.error('Error fetching data from API:', error);
      res.status(500).send('Internal Server Error');
    }
  });

// Start the Express server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
