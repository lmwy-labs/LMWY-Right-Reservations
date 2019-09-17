const config = require('./config');
const { Pool, Client } = require('pg');

const connectionString = `postgresql://${config.user}@${config.host}:5432/${config.database}`
const pool = new Pool({
  connectionString: connectionString,
});

const getAvailableTimeSlots = (restaurantId, cb) => {
  pool.query(`select reservation_datetime, seats from reservations where restaurant_id = ${restaurantId}`, (err, res) => {
    if (err) cb(err);
    else cb(null, res.rows);
  });
}

const getRestaurantInfo = (restaurantId, cb) => {
  pool.query(`select open_time, close_time, capacity_per_slot from restaurants where id = ${restaurantId}`, (err, res) => {
    if (err) cb(err);
    else cb(null, res.rows);
  });
}

// pool.end()

module.exports = {
  getAvailableTimeSlots,
  getRestaurantInfo,
}