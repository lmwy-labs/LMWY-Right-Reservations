const compression = require('compression');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../db/generateReservations.js');
const axios = require('axios');

app.use(compression());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/restaurants/:rid', express.static(__dirname + '/../public'));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.post('/api/restaurants/:rid/reservations', (req, res) => {
    // TO DO
    var restaurant = req.params.rid;
    var timeOpening = req.body.time_opening;
    var timeClosing = req.body.time_closing;
    var reservationDate = req.body.calendar_date;
    var reservationTime = req.body.calendar_time;
    var reservedSeats = req.body.num_reserved_seats;
    db.createReservation(restaurant, timeOpening, timeClosing, reservationDate, reservationTime, reservedSeats, (err, data) => {
        if (err) return console.log(err);
        res.send(data);
    });
});

app.get('/api/restaurants/:restaurantName', (req, res) => {
    var restaurantName = req.params.restaurantName;
    db.getRestaurantInfo(restaurantName, (err, data) => {
        if (err) return console.log(err);
        res.send(data);
    });
});

app.get('/api/restaurants/:rid/reservations', (req, res) => {
    var restaurant = req.params.rid;
    var date = req.query.date;
    var timeLowerSmall = req.query.timeLower;
    var timeUpperSmall = req.query.timeUpper;
    var partySize = req.query.partySize;
    db.updateReservation(restaurant, date, timeLowerSmall, timeUpperSmall, partySize, (err, data) => {
        if (err) return console.log(err);
        res.send(data);
    });
});

app.put('/api/restaurants/:rid/reservations', (req, res) => {
    var restaurant = req.params.rid;
    var reservationDate = req.body.calendar_date;
    var reservationTime = req.body.calendar_time;
    var reservedSeats = req.body.num_reserved_seats;
    db.updateReservation(reservedSeats, restaurant, reservationDate, reservationTime, reservedSeats, (err, data) => {
        if (err) return console.log(err);
        res.send(data);
    });
});

app.delete('/api/restaurants/:rid/reservations', (req, res) => {
    console.log(JSON.stringify(req.body));
    var restaurant = req.params.rid;
    // TO DO
    var reservationDate = req.body.calendar_date;
    var reservationTime = req.body.calendar_time;
    db.deleteReservation(restaurant, reservationDate, reservationTime, (err, data) => {
        if (err) return console.log(err);
        res.send("Reservation successfully deleted.");
    });
});


app.listen(3003, function() {
    console.log('Listening on Port 3003...');
});



