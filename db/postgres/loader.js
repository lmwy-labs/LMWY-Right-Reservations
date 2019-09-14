const pgConfig = require('./config.js');
const { Pool, Client } = require('pg');

const connectionString = `postgresql://${pgConfig.user}@${pgConfig.host}/${pgConfig.database}`;

const pool = new Pool({
  connectionString: connectionString,
});

async function insertRestaurants(n) {
  let promises = [];

  for (let i = 0; i < n; i++) {
    let text = 'INSERT INTO restaurants(name, open_time, close_time, capacity_per_slot) VALUES($1, $2, $3, $4) RETURNING *'
    let values = helper.createRestaurantData(i);
    let newPromise = pool.query(text, values);
    promises.push(newPromise);
  }
  return Promise.all(promises)
    .then((res) => console.log(`Done inserting ${n} rows.`))
};

pool.end();

// COPY restaurants FROM 'restaurants.csv' DELIMITER ',' CSV HEADER
COPY restaurants(id,name,open_time,close_time,capacity_per_slot) FROM '/Users/taehoonkim/Google\ Drive/hr-prep/sdc/ot-right-reservations/db/csv/restaurants.csv' DELIMITER ',' CSV HEADER;