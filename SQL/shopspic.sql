/*
MySQL Data Transfer
Source Host: localhost
Source Database: snack
Target Host: localhost
Target Database: snack
Date: 2020/8/13 8:53:40
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for shopspic
-- ----------------------------
DROP TABLE IF EXISTS `shopspic`;
CREATE TABLE `shopspic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(25) DEFAULT NULL,
  `url` varchar(250) DEFAULT NULL,
  `inf` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records 
-- ----------------------------
INSERT INTO `shopspic` VALUES ('1', '糖果', 'http://localhost:7001/public/upload/1596893587577candy.jpg', '愿你的生活只剩下甜');
INSERT INTO `shopspic` VALUES ('2', '干果', 'http://localhost:7001/public/upload/1596894147381nut.jpg', '取自天然，源于健康');
INSERT INTO `shopspic` VALUES ('4', '品', 'http://localhost:7001/public/upload/1596894197669Drink.jpg', '舌尖上的情深意长');
INSERT INTO `shopspic` VALUES ('5', '冰淇淋', 'http://localhost:7001/public/upload/1596894222805iceCream.jpg', '吻住你的唇,冻结你的心');
INSERT INTO `shopspic` VALUES ('6', '巧克力', 'http://localhost:7001/public/upload/1596894246955chocolate.jpg', '恋出美妙，分享香浓');
