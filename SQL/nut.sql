/*
MySQL Data Transfer
Source Host: localhost
Source Database: snack
Target Host: localhost
Target Database: snack
Date: 2020/8/13 8:53:30
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for nut
-- ----------------------------
DROP TABLE IF EXISTS `nut`;
CREATE TABLE `nut` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(25) DEFAULT NULL,
  `inf` varchar(250) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records 
-- ----------------------------
INSERT INTO `nut` VALUES ('1', '开心果', '原色不漂白坚果炒货', '23', 'http://localhost:7001/public/upload/1597217565955开心果.jpg');
INSERT INTO `nut` VALUES ('2', '葵花籽', '葵花籽煮瓜子蜜汁山核桃味', '14', 'http://localhost:7001/public/upload/1597217957455瓜子.jpg');
INSERT INTO `nut` VALUES ('3', '碧根果', '西域美农 盐焗碧根果', '43', 'http://localhost:7001/public/upload/1597218068794核桃.jpg');
