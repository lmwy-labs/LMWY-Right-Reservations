const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

connection.connect(function(err) {
    if (err) { return console.log('error mysql connection ' + err)}
    console.log('connected to mysql');
});

const getReservation = (rname, date, timeLower, timeUpper, partySize, cb) => {
    var data = [rname, date, partySize, timeLower, timeUpper];
    var sql = 'SELECT calendar_time FROM reservations WHERE name = ? AND calendar_date = ? AND num_open_seats >= ? AND calendar_time >= ? AND calendar_time <= ? ORDER BY calendar_time ASC'
    connection.query(sql, data, (err, results) => {
        if (err) return console.log(err);
        cb(null, results);
    });
}

module.exports = {
    getReservation
}