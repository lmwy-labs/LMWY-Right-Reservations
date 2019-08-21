-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'restaurants'
-- 
-- ---

DROP TABLE IF EXISTS `restaurants`;
		
CREATE TABLE `restaurants` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR(50) NOT NULL DEFAULT 'NULL',
  `cuisine` VARCHAR(50) NOT NULL DEFAULT 'NULL',
  `rating` DECIMAL NOT NULL DEFAULT NULL,
  `price` VARCHAR(10) NOT NULL DEFAULT NULL,
  `location_id` INTEGER NOT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'location'
-- 
-- ---

DROP TABLE IF EXISTS `location`;
		
CREATE TABLE `location` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `city` VARCHAR(50) NOT NULL DEFAULT 'NULL',
  `metro_area` VARCHAR(50) NULL DEFAULT NULL,
  `state` VARCHAR(10) NOT NULL DEFAULT 'NULL',
  `country` VARCHAR(50) NOT NULL DEFAULT 'NULL',
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'reservation_openings'
-- 
-- ---

DROP TABLE IF EXISTS `reservation_openings`;
		
CREATE TABLE `reservation_openings` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `restaurant_id` INTEGER NOT NULL DEFAULT NULL,
  `restaurant_name` VARCHAR(50) NOT NULL DEFAULT 'NULL',
  `location_id` INTEGER NOT NULL DEFAULT NULL,
  `user_id` INTEGER NULL DEFAULT NULL,
  `username` VARCHAR(50) NOT NULL DEFAULT 'NULL',
  `calendar_date` DATE NOT NULL DEFAULT 'NULL',
  `calendar_time` TIME NOT NULL DEFAULT 'NULL',
  `open` TINYINT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'users'
-- 
-- ---

DROP TABLE IF EXISTS `users`;
		
CREATE TABLE `users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `username` VARCHAR(50) NOT NULL DEFAULT 'NULL',
  `name` VARCHAR(50) NOT NULL DEFAULT 'NULL',
  `email` VARCHAR(50) NOT NULL DEFAULT 'NULL',
  `phone` BIGINT NOT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---


-- ---
-- Table Properties
-- ---

-- ALTER TABLE `restaurants` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `location` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `reservation_openings` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

INSERT INTO `restaurants` (`id`,`name`,`cuisine`,`rating`,`price`,`location_id`) VALUES
('1','Benu','Contemporary','5.0','$$$$','1');
INSERT INTO `location` (`id`,`city`,`metro_area`,`state`,`country`) VALUES
('1','San Francisco','San Francisco Bay Area','CA','USA');
INSERT INTO `reservation_openings` (`id`,`restaurant_id`,`restaurant_name`,`location_id`,`user_id`,`username`,`calendar_date`,`calendar_time`,`open`) VALUES
('','','','','','','','','');
INSERT INTO `users` (`id`,`username`,`name`,`email`,`phone`) VALUES
('1','ez','eileen','eileen@me.com','4');










