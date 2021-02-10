// Import and initialize the web server. 
const express = require('express');
const app = express();

// Import environmental variables.
require('dotenv').config();

// Get port based on environmental variables.
// dev: 3000, prod: 80.
const port = process.env[`PORT_${process.env['NODE_ENV'].toUpperCase()}`];

// setup a GET response to http://localhost/
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Listen on the given port.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});