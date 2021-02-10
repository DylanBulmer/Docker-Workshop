const express = require('express');
const app = express();

require('dotenv').config();

// Get port based on environmental variables.
const port = process.env[`PORT_${process.env['NODE_ENV'].toUpperCase()}`];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});