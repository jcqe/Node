/*
MySQL Data Transfer
Source Host: localhost
Source Database: snack
Target Host: localhost
Target Database: snack
Date: 2020/8/13 8:53:15
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for log
-- ----------------------------
DROP TABLE IF EXISTS `log`;
CREATE TABLE `log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `num` char(10) NOT NULL,
  `pwd` char(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records 
-- ----------------------------
INSERT INTO `log` VALUES ('1', 'pol', '123');
INSERT INTO `log` VALUES ('28', '', '');
INSERT INTO `log` VALUES ('29', 'kop', '123');
INSERT INTO `log` VALUES ('30', 'ppp', '1456');
INSERT INTO `log` VALUES ('31', 'poiu', '456');
