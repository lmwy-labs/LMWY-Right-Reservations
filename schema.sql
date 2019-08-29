DROP DATABASE IF EXISTS opentable;

CREATE DATABASE opentable;

USE opentable;

DROP TABLE IF EXISTS `reservations`;

CREATE TABLE `reservations` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `time_opening` TIME NOT NULL,
  `time_closing` TIME NOT NULL,
  `calendar_date` DATE NOT NULL,
  `calendar_time` TIME NOT NULL,
  `num_open_seats` INTEGER NOT NULL,
  `num_reserved_seats` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);