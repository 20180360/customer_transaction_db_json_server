

const express = require('express');
const app = express();
const port = 3000; // Change the port number if needed

const db = require('./db.json'); // Import the contents of db.json

app.get('/data', (req, res) => {
  res.json(db); // Send the contents of db.json as a JSON response
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});