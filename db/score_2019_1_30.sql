/*
Navicat MySQL Data Transfer

Source Server         : 用呗云借通APP日志
Source Server Version : 50723
Source Host           : localhost:3306
Source Database       : xiaoyunhui

Target Server Type    : MYSQL
Target Server Version : 50723
File Encoding         : 65001

Date: 2019-01-30 10:36:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for score
-- ----------------------------
DROP TABLE IF EXISTS `score`;
CREATE TABLE `score` (
  `score_id` int(11) NOT NULL AUTO_INCREMENT,
  `match_id` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `referee_id` varchar(255) DEFAULT NULL,
  `score_value` varchar(255) DEFAULT NULL,
  `score_create_time` varchar(255) DEFAULT NULL,
  `score_detail` varchar(255) DEFAULT NULL,
  `score_remark` varchar(255) DEFAULT NULL,
  `score_publish_time` varchar(255) DEFAULT NULL,
  `score_del` varchar(255) DEFAULT NULL,
  `score_unit` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`score_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
