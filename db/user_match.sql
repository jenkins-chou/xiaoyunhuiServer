/*
Navicat MySQL Data Transfer

Source Server         : admin
Source Server Version : 50725
Source Host           : localhost:3306
Source Database       : xiaoyunhuiserver

Target Server Type    : MYSQL
Target Server Version : 50725
File Encoding         : 65001

Date: 2019-01-28 23:52:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user_match
-- ----------------------------
DROP TABLE IF EXISTS `user_match`;
CREATE TABLE `user_match` (
  `user_match_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(11) DEFAULT NULL,
  `match_id` varchar(11) DEFAULT NULL,
  `user_match_del` varchar(11) DEFAULT NULL,
  `user_match_status` varchar(255) DEFAULT NULL,
  `score_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_match_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
