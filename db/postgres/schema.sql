DROP DATABASE IF EXISTS opentable;

CREATE DATABASE opentable;

USE opentable;

DROP TABLE IF EXISTS restaurants;
DROP TABLE IF EXISTS reservations;
DROP TABLE IF EXISTS restaurant_capacity;

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  time_opening TIME NOT NULL,
  time_closing TIME NOT NULL,
  total_capacity INTEGER NOT NULL
);

CREATE TABLE reservations (
  id SERIAL PRIMARY KEY,
  restaurant_id INTEGER REFERENCES restaurants (id),
  reservation_datetime TIMESTAMP NOT NULL,
  party_size INTEGER NOT NULL
);

CREATE TABLE restaurant_capacity (
  id SERIAL PRIMARY KEY,
  restaurant_id INTEGER REFERENCES restaurants (id),
  time_block TIME NOT NULL,
  time_block_reserved INTEGER NOT NULL,
  time_block_available INTEGER NOT NULL,
);