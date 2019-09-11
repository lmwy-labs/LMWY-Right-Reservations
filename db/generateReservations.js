const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const moment = require('moment');

const connection = mysql.createConnection(mysqlConfig);

connection.connect(function(err) {
  if (err) { return console.log('error mysql connection ' + err)}
  console.log('connected to mysql');
});

const createReservation = (restaurant, timeOpening, timeClosing, reservationDate, reservationTime, reservedSeats, cb) => {
  reservationDate = moment(reservationDate).format('YYYY-MM-DD');
  timeOpening = moment(timeOpening).utc().format('HH:MM:SS');
  timeClosing = moment(timeClosing).utc().format('HH:MM:SS');
  reservationTime = moment(reservationTime).utc().format('HH:MM:SS');
  
  var data = [restaurant, timeOpening, timeClosing, reservationDate, reservationTime, 10, reservedSeats];
  var sql = "INSERT INTO reservations (name, time_opening, time_closing, calendar_date, calendar_time, num_open_seats, num_reserved_seats) \
              VALUES ?,?,?,?,?,?,?";
  connection.query(sql, data, (err, results) => {
      if (err) return console.log(err);
      cb(null, results);
  });
};

const getReservation = (rname, date, timeLower, timeUpper, partySize, cb) => {
  var data = [rname, date, partySize, timeLower, timeUpper];
  var sql = 'SELECT calendar_time FROM reservations WHERE name = ? AND calendar_date = ? AND \
              num_open_seats >= ? AND calendar_time >= ? AND calendar_time <= ? ORDER BY calendar_time ASC'
  connection.query(sql, data, (err, results) => {
    if (err) return console.log(err);
    cb(null, results);
  });
};

const updateReservation = (rname, reservationDate, reservationTime, reservedSeats) => {
  filter = [rname, reservationDate, reservationTime, reservedSeats];
  sql = `UPDATE reservations SET num_reserved_seats = ? WHERE name = ?, calendar_date = ? and calendar_time = ?`;
  connection.query(sql, filter, (err, results) => {
    if (err) return console.log(err);
    cb(null, results);
});
};

const deleteReservation = (rname, reservationDate, reservationTime) => {
  sql = `DELETE FROM reservations WHERE name = ?, calendar_date = ? and calendar_time = ?`;
  filter = [rname, reservationDate, reservationTime];
  connection.query(sql, filter, (err, results) => {
    if (err) return console.log(err);
    cb(null, results);
});
};

const getRestaurantInfo = (rname, cb) => {
  var sql = 'SELECT time_opening, time_closing FROM reservations where name = ?'
  connection.query(sql, rname, (err, results) => {
      if (err) return console.log(err);
      cb(null, results);
  });
};

module.exports = {
  createReservation,
  getReservation,
  getRestaurantInfo,
  updateReservation,
  deleteReservation,
}