/* eslint-disable no-console */

const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const port = 5000;
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/../public/dist/')));

app.listen(port, () => {
  console.log('Listening on port', port);
});
