const helper = require('./seedHelpers.js');
const path = require('path');
const fs = require('fs');

const createData = (func, n, writer, encoding, callback) => {
  let i = n;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      let data = func(id);
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
};

const ws_restaurant = fs.createWriteStream(path.join(__dirname, '../', 'csv/test.csv'));
createData(helper.createRestaurant, 10000000, ws_restaurant, 'utf-8', () => {
  ws_restaurant.end();
});
ws_restaurant.on('finish', function(){
  console.log('Finished seeding restaurants.');
});

// const ws_reservation = fs.createWriteStream(path.join(__dirname, '../', 'csv/reservations.csv'));
// createData(helper.createReservation, 100000000, ws_reservation, 'utf-8', () => {
//   ws_reservation.end();
// });
// ws_reservation.on('finish', function(){
//   console.log('Finished seeding reservations.');
// });


// COPY restaurants(name,open_time,close_time,capacity_per_slot) FROM '/Users/taehoonkim/Google Drive/hr-prep/sdc/ot-right-reservations/db/csv/restaurants.csv' DELIMITER ',' CSV HEADER;
// COPY reservations(restaurant_id,reservation_datetime,seats) FROM '/Users/taehoonkim/Google Drive/hr-prep/sdc/ot-right-reservations/db/csv/reservations.csv' DELIMITER ',' CSV HEADER;