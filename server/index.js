const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../db/generateReservations.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/restaurants/:rid', express.static(__dirname + '/../public'));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/api/restaurants/:rid/reservations', (req, res) => {
    var restaurant = req.params.rid;
    var date = req.query.date;
    var timeLowerSmall = req.query.timeLower;
    var timeUpperSmall = req.query.timeUpper;
    var partySize = req.query.partySize;
    db.getReservation(restaurant, date, timeLowerSmall, timeUpperSmall, partySize, (err, data) => {
        if (err) return console.log(err);
        res.send(data);
    });
});

app.listen(3003, function() {
    console.log('Listening on Port 3003...');
});



