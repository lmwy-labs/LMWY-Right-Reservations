const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../db/dataGenerator.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'));

// TEST API CALL
app.get('/api/restaurants/r1', (req, res) => {
    db.getReservation('r20', '2019-09-04', (err, data) => {
        if (err) return console.log(err);
        res.send(data);
    });
});

app.listen(3000, function() {
    console.log('Listening on Port 3000...');
});



