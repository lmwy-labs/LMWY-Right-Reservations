const express = require('express');
const app = express();
const db = require('../db/dataGenerator.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'));


app.listen(3000, function() {
    console.log('Listening on Port 3000...');
});



