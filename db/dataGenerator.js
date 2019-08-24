const mysql = require('mysql');
// const faker = require('faker');

// schema
// table: restaurants
        // name
        // max_seats
        // time_opening
        // time_closing
// table: calendar
        // restaurant_id
        // restaurant_name
        // location_city
        // calendar_date
        // calendar_time
        // num_opening_seats
        // num_reserved_seats
// first generate 100 restaurants
// for each restaurant, generate 3 calendar months of data
// each day has calendar times, randomly generate opening and closing times, between 5pm and 11:30pm

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'opentable'
  });

connection.connect(function(err) {
    if (err) { return console.log('error mysql connection ' + err)}
    console.log('connected to mysql');
});

const generateRestaurants = (cb) => {
    var restaurants = [];
    const time_hour_min = [0, .3]

    for (var i = 1; i < 101; i ++) {
        const name = 'r' + i;
        const max_seats = Math.floor(Math.random()*(100-30)+30);
        const time_opening = (Math.floor(Math.random()*(19-17)+17) + time_hour_min[Math.floor(Math.random()*2)]) * 10000;
        const time_closing = (Math.floor(Math.random()*(24-21)+21) + time_hour_min[Math.floor(Math.random()*2)]) * 10000;
        const restaurant = [name, max_seats, time_opening, time_closing];
        restaurants.push(restaurant);
    }
    
    connection.query({ sql: 'INSERT INTO restaurants (name, max_seats, time_opening, time_closing) VALUES ?', values: [restaurants]}, (err, results, fields) => {
        if (err) return console.log(err);
        cb(null, 'Generated Restaurants');
    });
}

generateRestaurants((err, data) => {
    if (err) return console.log(err);
    console.log(data);
});

const generateReservations = (cb) => {
    // restaurant_id
    // restaurant_name
    // location_city
    // calendar_date
    // calendar_time
    // num_opening_seats
    // num_reserved_seats
    for (var i = 1; i < 101; i ++) {
        connection.query('')
    }

}



connection.end((err) => {
    if (err) return console.log(err);
    console.log('disconnected from mysql')
});
