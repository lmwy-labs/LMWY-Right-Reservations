DROP DATABASE IF EXISTS opentable;

CREATE DATABASE opentable;

USE opentable;

-- ---
-- Table 'restaurants'
-- 
-- ---

DROP TABLE IF EXISTS `restaurants`;
		
CREATE TABLE `restaurants` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL UNIQUE,
    `time_opening` TIME NOT NULL,
    `time_closing` TIME NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'reservation_openings'
-- 
-- ---

DROP TABLE IF EXISTS `reservations`;
		
CREATE TABLE `reservations` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `restaurant_id` INTEGER NOT NULL,
  `restaurant_name` VARCHAR(50) NOT NULL,
  `location_city` VARCHAR(50) NOT NULL,
  `calendar_date` DATE NOT NULL,
  `calendar_time` TIME NOT NULL,
  `num_opening_seats` INTEGER NOT NULL,
  `num_reserved_seats` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Test Data
-- ---

INSERT INTO `restaurants` (`id`,`name`, `time_opening`, `time_closing`) VALUES
('1','Benu', '18:00:00', '22:00:00');
INSERT INTO `reservations` (`id`,`restaurant_id`,`restaurant_name`,`location_city`,`calendar_date`,`calendar_time`,`num_opening_seats`, `num_reserved_seats`) VALUES
('1','1','Benu','San Francisco','2019-09-04','19:00:00','2','48');









