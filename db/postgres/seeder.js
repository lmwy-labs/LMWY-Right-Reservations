const helper = require('./dbHelpers.js');
const path = require('path');
const fs = require('fs');
const csv = require('fast-csv');

const ws = fs.createWriteStream(path.join(__dirname, '../', 'csv/restaurants.csv'));
// writeUsers.write('id,name,open_time,close_time,capacity_per_slot\n', 'utf8');
ws.on('finish', function(){
  console.log('DONE!');
});

const createRestaurants = (n, writer, encoding, callback) => {
  let i = n;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      let data = helper.createRestaurant(id);
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
}
// 10000000
createRestaurants(10000000, ws, 'utf-8', () => {
  ws.end();
});
