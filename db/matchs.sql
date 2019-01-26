/*
Navicat MySQL Data Transfer

Source Server         : admin
Source Server Version : 50725
Source Host           : localhost:3306
Source Database       : xiaoyunhui

Target Server Type    : MYSQL
Target Server Version : 50725
File Encoding         : 65001

Date: 2019-01-26 19:43:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for matchs
-- ----------------------------
DROP TABLE IF EXISTS `matchs`;
CREATE TABLE `matchs` (
  `match_id` int(11) NOT NULL AUTO_INCREMENT,
  `match_title` varchar(255) DEFAULT NULL,
  `match_time` varchar(255) DEFAULT NULL,
  `match_create_time` varchar(255) DEFAULT NULL,
  `match_referee_id` varchar(255) DEFAULT NULL,
  `match_manager` varchar(255) DEFAULT NULL,
  `match_abstract` varchar(255) DEFAULT NULL,
  `match_detail` varchar(255) DEFAULT NULL,
  `match_athletes_num` varchar(255) DEFAULT NULL,
  `match_status` varchar(255) DEFAULT NULL,
  `match_organizers` varchar(255) DEFAULT NULL,
  `match_del` varchar(255) DEFAULT NULL,
  `match_type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`match_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of matchs
-- ----------------------------
INSERT INTO `matchs` VALUES ('1', 'match_title', 'match_time', 'match_create_time', 'match_referee_id', 'match_manager', 'match_abstract', 'match_detail', 'match_athletes_num', 'match_status', 'match_organizers', 'normal', null);
INSERT INTO `matchs` VALUES ('2', 'match_titlessssss', 'match_timessss', 'match_create_timess', 'match_referee_idsss', 'match_managerssss', 'match_abstractssss', 'match_detailsss', 'match_athletes_numsss', 'match_statussss', 'match_organizerssssss', 'delete', null);
INSERT INTO `matchs` VALUES ('3', 'match_title', 'match_time', 'match_create_time', 'match_referee_id', 'match_manager', 'match_abstract', 'match_detail', 'match_athletes_num', 'match_status', 'match_organizers', 'normal', null);
INSERT INTO `matchs` VALUES ('4', 'match_title', 'match_time', 'match_create_time', 'match_referee_id', 'match_manager', 'match_abstract', 'match_detail', 'match_athletes_num', 'match_status', 'match_organizers', 'normal', null);
