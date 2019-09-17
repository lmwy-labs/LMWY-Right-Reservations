const { Client } = require('pg');
const config = require('../../db/postgres/config.js');

const db = new Client({
  user: config.user,
  password: config.password,
  host: config.host,
  database: config.database,
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to postgres.', err.stack)
  } else {
    console.log('Connected to postgres.')
  }
});

const createReservation = (req, res) => {
  const insertData = [Number(req.params.restaurantId), new Date(req.body.reservation_datetime), Number(req.body.seats)];
  const sql = 'INSERT INTO reservations(restaurant_id, reservation_datetime, seats) VALUES ($1, $2, $3) RETURNING (id, restaurant_id, reservation_datetime, seats)';

  db.query(sql, insertData)
    .then((data) => {
      res.send(data.row)
    })
    .catch((err) => {
      console.log(err)
      res.send(err)
    });
};

// GET /api/restaurants/1/availability/date=2019-09-12&time=19:00&seats=3
const getAvailableTimes = (req, res) => {
//   let restaurantId = req.params.restaurantId;
//   // res.send([req.query.date, req.query.time, req.query.seats]);
//   db.getAvailableTimeSlots(restaurantId, (err, data) => {
//     if (err) res.status(500).send(err);
//     else {
//       db.getRestaurantInfo(restaurantId, (err, data) => {
//         if (err) res.status(500).send(err);
//         else {
          
//         }
//       // given list of reserved times + open/close times per restaurant
//       // for (i = open ---> close)
//       // bookTimes.push(open + ':00');
//       // [9:00, 10:00 ... 18:00]
//       // unavailTimes = [17:00];
//       // bookTimes.filter(v => unavailTimes.indexOf(v) >= 0)

//       res.status(200).send(data)
//       }
//     })
//   }
};

// PATCH /api/restaurants/1/reservations/111
const updateReservation = (req, res) => {

};

// DELETE /api/restaurants/:restaurantId/reservations/:reservationId
const deleteReservation = (req, res) => {

};

module.exports = {
  createReservation,
  getAvailableTimes,
  updateReservation,
  deleteReservation,
};
