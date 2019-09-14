// RESTAURANTS
// open_time:   9:00 - 11:AM in 1 hr intervals
// close_time:  16:00 - 18:00
// capacity_per_slot: 20 - 100

// RESERVATIONS
// set restaurant reserved capacity at 30-80%

const randomInt= (min = 0, max) => {
  // generate random int between min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const createRestaurant = (id) => {
  let name = 'r' + id;
  let open_time = ('0' + randomInt(8, 11)).slice(-2) + ':00'
  let close_time = randomInt(16, 23) + ':00';
  let capacity_per_slot = randomInt(20, 100).toString();
  return `${name}, ${open_time}, ${close_time}, ${capacity_per_slot}`;
};

module.exports = {
  createRestaurant,
}