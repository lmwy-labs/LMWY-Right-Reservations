const db = require('mysql');

const connection = db.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : 'opentable'
  });

connection.connect();

// schema
// table: calendar
        // restaurant_id
        // restaurant_name
        // location_city
        // calendar_date
        // calendar_time
        // num_opening_seats
        // num_reserved_seats
// table: restaurants
        // name
        // time_opening
        // time_closing
// first generate 100 restaurants
// for each restaurant, generate 3 calendar months of data
// each day has calendar times, randomly generate opening and closing times, between 5pm and 11pm





