/*
MySQL Data Transfer
Source Host: localhost
Source Database: snack
Target Host: localhost
Target Database: snack
Date: 2020/8/13 8:51:50
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for admlog
-- ----------------------------
DROP TABLE IF EXISTS `admlog`;
CREATE TABLE `admlog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `num` char(25) NOT NULL,
  `pwd` char(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records 
-- ----------------------------
INSERT INTO `admlog` VALUES ('1', 'kopi', '1456');
