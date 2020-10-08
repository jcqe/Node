/*
MySQL Data Transfer
Source Host: localhost
Source Database: snack
Target Host: localhost
Target Database: snack
Date: 2020/8/13 8:52:57
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for homepage
-- ----------------------------
DROP TABLE IF EXISTS `homepage`;
CREATE TABLE `homepage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(250) DEFAULT NULL,
  `name` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records 
-- ----------------------------
