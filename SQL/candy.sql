/*
MySQL Data Transfer
Source Host: localhost
Source Database: snack
Target Host: localhost
Target Database: snack
Date: 2020/8/13 8:52:20
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for candy
-- ----------------------------
DROP TABLE IF EXISTS `candy`;
CREATE TABLE `candy` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(25) DEFAULT NULL,
  `inf` varchar(250) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records 
-- ----------------------------
INSERT INTO `candy` VALUES ('1', '牛乳糖', '花生牛轧糖网红情话糖果', '60', 'http://localhost:7001/public/upload/1597050825665Nougat0.jpg');
INSERT INTO `candy` VALUES ('3', '棉花糖', '网红猫爪棉花糖咖啡伴侣', '23', 'http://localhost:7001/public/upload/1597056381288cottonCandy.png');
INSERT INTO `candy` VALUES ('4', '星空糖', '糖果礼盒装星空棒棒糖', '￥128', 'http://localhost:7001/public/upload/1597056519769StarrySky.jpg');
INSERT INTO `candy` VALUES ('15', '松露', '俄罗斯进口松露，原汁原味', '112', 'http://localhost:7001/public/upload/1597135582691Truffle.jpg');
INSERT INTO `candy` VALUES ('17', 'QQ糖', '日本进口，富含多种维生素', '265', 'http://localhost:7001/public/upload/1597135995037QQ糖.jpg');
INSERT INTO `candy` VALUES ('21', '薄荷糖', '嚼爽无糖薄荷糖网红糖果', '85', 'http://localhost:7001/public/upload/1597136400779Mints.jpg');
INSERT INTO `candy` VALUES ('22', 'QQ爆浆', '旺旺QQ爆浆夹心软糖果汁软糖', '31', 'http://localhost:7001/public/upload/1597136564381爆浆.jpg');
INSERT INTO `candy` VALUES ('23', '紫皮糖', 'kdv俄罗斯紫皮糖进口食品', '35', 'http://localhost:7001/public/upload/1597136612277Kdv.jpg');
