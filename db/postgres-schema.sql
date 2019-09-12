DROP DATABASE IF EXISTS opentable;

CREATE DATABASE opentable;

USE opentable;

DROP TABLE IF EXISTS `reservations`;

CREATE TABLE `restaurants` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `time_opening` TIME NOT NULL,
  `time_closing` TIME NOT NULL,
  `total_capacity` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `reservations` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `restaurant_id` INTEGER NOT NULL,
  `reservation_date` DATE NOT NULL,
  `reservation_time` TIME NOT NULL,
  `party_size` INTEGER NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`restaurant_id`) REFERENCES `restaurants` (`id`)
);

CREATE TABLE `restaurant_capacity` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `time_block` DATE NOT NULL,
  `reservation_time` TIME NOT NULL,
  `time_block_capacity` INTEGER NOT NULL,
  `time_block_available` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);