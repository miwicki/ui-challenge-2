`use strict`;

// add dependencies
const pg = require('pg');
const bodyParser = require('body-parser');
const express = require('express');

// set port number
const PORT = process.env.PORT || 3000;

// setup server 'app'
const app = express();

// declare conString
const conString = 'postgres://postgres:1234@localhost:5432/postgres';
const client = new pg.Client(conString);
client.connect();

// connect dependencies and root folder
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

// start server on specified port
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
