-- psql -U $ROOT_USER -a -f db/postgres/schema.sql

DROP DATABASE IF EXISTS opentable;
CREATE DATABASE opentable;

\connect opentable;

DROP TABLE IF EXISTS restaurants;
DROP TABLE IF EXISTS reservations;

CREATE TABLE restaurants (
  id INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(40) NOT NULL,
  open_time TIME NOT NULL,
  close_time TIME NOT NULL,
  capacity_per_slot SMALLINT NOT NULL,
  UNIQUE (id)
);

CREATE TABLE reservations (
  id INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY,
  restaurant_id INTEGER NOT NULL, -- don't forget to add foreign-key constratin after seeding
  reservation_datetime TIMESTAMPTZ NOT NULL,
  seats SMALLINT NOT NULL
);

-- ALTER TABLE reservations ADD CONSTRAINT fk_reservations FOREIGN KEY (restaurant_id) REFERENCES restaurants (id) MATCH FULL;