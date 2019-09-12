const mysqlConfig = require('./config.js');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const sequelize = new Sequelize(
  mysqlConfig.database, // db
  mysqlConfig.user, // user
  null, // pw
  {
    dialect: 'mysql',
    host: mysqlConfig.host,
    port: "3306",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Reservations = sequelize.define('reservations', {
  id: 
  {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name:
  {
    type: Sequelize.STRING,
    defaultValue: function() {
      return 'default';
    },
  },
  time_opening:
  {
    type: Sequelize.TIME,
    defaultValue: function() {
      const time_hour_min = [0, .3];
      return Math.floor(Math.random()*(19-11)+11) + time_hour_min[Math.floor(Math.random()*2)];
    },
  },
  time_closing:
  {
    type: Sequelize.TIME,
    defaultValue: function() {
      const time_hour_min = [0, .3];
      return Math.floor(Math.random()*(19-11)+11) + time_hour_min[Math.floor(Math.random()*2)];
    },
  },
  calendar_date:
  {
    type: Sequelize.DATEONLY,
  },
  calendar_time:
  {
    type: Sequelize.TIME,
  },
  num_open_seats:
  {
    type: Sequelize.INTEGER,
    defaultValue: function() {
      return Math.floor(Math.random()*(100-30)+30);
    },
  },
  num_reserved_seats:
  {
    type: Sequelize.INTEGER,
    defaultValue: function() {
      return Math.floor(Math.random()*10);
    },
  },
}, {
  timestamps: false
});

const createReservation = (restaurant, timeOpening, timeClosing, reservationDate, reservationTime, reservedSeats, cb) => {
  sequelize.sync()
    .then(() => Reservations.create({
      "name": restaurant,
      "time_opening": timeOpening,
      "time_closing": timeClosing,
      "calendar_date": reservationDate,
      "calendar_time": reservationTime,
      "num_reserved_seats": reservedSeats,
    }))
    .then(result => {
      cb(null, result);
    })
    .catch(err => cb(err));
};

const getReservation = (rname, date, timeLower, timeUpper, partySize, cb) => {
  sequelize.sync()
    .then(() => {
      Reservations.findAll({ 
        where: { 
          name: rname,
          calendar_date: reservationDate,
          calendar_time: reservationTime,
          num_open_seats: { [Op.gte]: partySize, },
          calendar_time: { [Op.gte]: timeLower, },
          calendar_time: { [Op.lte]: timeUpper, },
        },
        order: [ [ 'calendar_time', 'ASC' ] ],
    })
      .then(record => {
        record.update({ num_reserved_seats: partySize, })
      })
    })
    .then(result => {
      cb(null, result);
    })
    .catch(err => cb(err));
};

const updateReservation = (rname, reservationDate, reservationTime, partySize, cb) => {
  sequelize.sync()
    .then(() => {
      Reservations.findOne({ where: { name: rname, calendar_date: reservationDate, calendar_time: reservationTime, } })
      .then(record => {
        record.update({ num_reserved_seats: partySize, })
      })
    })
    .then(result => {
      cb(null, result);
    })
    .catch(err => cb(err));
};

const deleteReservation = (rname, reservationDate, reservationTime, cb) => {
  sequelize.sync()
    .then(() => {
      Reservations.destroy({ where: { name: rname, calendar_date: reservationDate, calendar_time: reservationTime, } })
    })
    .then(result => {
      cb(null, result);
    })
    .catch(err => cb(err));
};

module.exports = {
  createReservation,
  getReservation,
  updateReservation,
  deleteReservation,
}