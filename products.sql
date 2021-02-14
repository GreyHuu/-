/*
 Navicat Premium Data Transfer

 Source Server         : 阿里云服务器数据库
 Source Server Type    : MySQL
 Source Server Version : 50733
 Source Host           : 106.15.237.74:3306
 Source Schema         : learn_egg

 Target Server Type    : MySQL
 Target Server Version : 50733
 File Encoding         : 65001

 Date: 14/02/2021 20:01:27
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products`  (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '商品名称',
  `price` float(10, 2) NULL DEFAULT NULL COMMENT '价格',
  `imgurl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '图片地址',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES (1, '小米11', 4299.00, 'https://img14.360buyimg.com/n0/jfs/t1/156126/22/6258/119030/600293b8E0a5d0444/b3108123a305971d.jpg');
INSERT INTO `products` VALUES (2, 'OPPO Reno5', 2999.00, 'https://img14.360buyimg.com/n0/jfs/t1/154641/20/10118/122842/5fd8928cE12318ab6/330d61c61b9381a2.jpg');
INSERT INTO `products` VALUES (3, 'Redmi Note', 1099.00, 'https://img14.360buyimg.com/n0/jfs/t1/143051/26/15747/73035/5fbdd54cE80757a48/67c387e1d0dc5c83.jpg');
INSERT INTO `products` VALUES (4, '荣耀X10', 2399.00, 'https://img14.360buyimg.com/n0/jfs/t1/141768/29/1714/131082/5ef9966aEcf368671/aaffea2c94abe8ac.jpg');
INSERT INTO `products` VALUES (5, 'Apple iPhone 11', 4899.00, 'https://img14.360buyimg.com/n0/jfs/t1/148767/39/18017/86358/5fd32ff0E5ca41721/d885f7c401dfa557.jpg');
INSERT INTO `products` VALUES (6, '三星 Galaxy S21', 4999.00, 'https://img14.360buyimg.com/n0/jfs/t1/162304/16/6070/75705/6020e0ebE3315c610/331580d113114543.jpg');

SET FOREIGN_KEY_CHECKS = 1;
