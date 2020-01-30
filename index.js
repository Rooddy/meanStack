const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const {mongoose} = require('./db.js');
var bigController = require('./bigController.js');
var summaryController = require('./summaryController.js');

var app = express();

app.use(bodyParser.json());

//app.use(cors({ origin: 'http://localhost:3000' }));
app.use(cors());


app.listen(3000, "192.168.0.22");

app.use('/summary', summaryController);
app.use('', bigController);

