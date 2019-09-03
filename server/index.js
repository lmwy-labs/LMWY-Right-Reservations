const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../db/dataGenerator.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/restaurants/:rid', express.static(__dirname + '/../public'));

// TEST API CALL
app.get('/api/restaurants/:rid/reservations', (req, res) => {
    var restaurant = req.params.rid;
    var date = req.query.date;
    var timeLower = req.query.timeLower;
    var timeUpper = req.query.timeUpper;
    db.getReservation(restaurant, date, timeLower, timeUpper, (err, data) => {
        if (err) return console.log(err);
        console.log(data);
        res.send();
    });
});

app.listen(3000, function() {
    console.log('Listening on Port 3000...');
});



