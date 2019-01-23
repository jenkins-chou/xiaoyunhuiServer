/*
Navicat MySQL Data Transfer

Source Server         : 用呗云借通APP日志
Source Server Version : 50723
Source Host           : localhost:3306
Source Database       : xiaoyunhui

Target Server Type    : MYSQL
Target Server Version : 50723
File Encoding         : 65001

Date: 2019-01-23 15:27:44
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for class
-- ----------------------------
DROP TABLE IF EXISTS `class`;
CREATE TABLE `class` (
  `class_id` int(11) NOT NULL AUTO_INCREMENT,
  `class_name` varchar(255) DEFAULT NULL,
  `class_create_time` varchar(255) DEFAULT NULL,
  `school_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`class_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of class
-- ----------------------------
INSERT INTO `class` VALUES ('1', 'class_name', 'class_create_time', 'school_id');
INSERT INTO `class` VALUES ('2', 'class_namedsadsa', 'class_create_timedsadsad', 'school_iddsadsadsa');

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
  PRIMARY KEY (`match_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of matchs
-- ----------------------------
INSERT INTO `matchs` VALUES ('1', 'match_title', 'match_time', 'match_create_time', 'match_referee_id', 'match_manager', 'match_abstract', 'match_detail', 'match_athletes_num', 'match_status', 'match_organizers', 'normal');
INSERT INTO `matchs` VALUES ('2', 'match_titlessssss', 'match_timessss', 'match_create_timess', 'match_referee_idsss', 'match_managerssss', 'match_abstractssss', 'match_detailsss', 'match_athletes_numsss', 'match_statussss', 'match_organizerssssss', 'delete');
INSERT INTO `matchs` VALUES ('3', 'match_title', 'match_time', 'match_create_time', 'match_referee_id', 'match_manager', 'match_abstract', 'match_detail', 'match_athletes_num', 'match_status', 'match_organizers', 'normal');
INSERT INTO `matchs` VALUES ('4', 'match_title', 'match_time', 'match_create_time', 'match_referee_id', 'match_manager', 'match_abstract', 'match_detail', 'match_athletes_num', 'match_status', 'match_organizers', 'normal');

-- ----------------------------
-- Table structure for match_type
-- ----------------------------
DROP TABLE IF EXISTS `match_type`;
CREATE TABLE `match_type` (
  `match_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `match_type_name` varchar(255) DEFAULT NULL,
  `match_type_manager` varchar(255) DEFAULT NULL,
  `match_type_create_time` varchar(255) DEFAULT NULL,
  `match_type_del` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`match_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of match_type
-- ----------------------------
INSERT INTO `match_type` VALUES ('1', 'match_type_name', 'match_type_manager', 'match_type_create_time华盛顿和骄傲', 'normal');
INSERT INTO `match_type` VALUES ('2', 'matchd', 'match_t', '华盛顿和骄傲', 'delete');

-- ----------------------------
-- Table structure for referee
-- ----------------------------
DROP TABLE IF EXISTS `referee`;
CREATE TABLE `referee` (
  `referee_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) DEFAULT NULL,
  `referee_status` varchar(255) DEFAULT NULL,
  `referee_manager` varchar(255) DEFAULT NULL,
  `referee_del` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`referee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of referee
-- ----------------------------
INSERT INTO `referee` VALUES ('1', 'user_id', 'referee_status', 'referee_manager', null);
INSERT INTO `referee` VALUES ('2', 'user_id范德萨范德萨 ', 'referee_status', 'referee_manager', 'delete');

-- ----------------------------
-- Table structure for school
-- ----------------------------
DROP TABLE IF EXISTS `school`;
CREATE TABLE `school` (
  `school_id` int(11) NOT NULL AUTO_INCREMENT,
  `school_logo` varchar(255) DEFAULT NULL,
  `school_name` varchar(255) DEFAULT NULL,
  `school_address` varchar(255) DEFAULT NULL,
  `school_manager` varchar(255) DEFAULT NULL,
  `school_abstract` varchar(255) DEFAULT NULL,
  `school_detail` varchar(255) DEFAULT NULL,
  `school_remark` varchar(255) DEFAULT NULL,
  `school_del` varchar(255) DEFAULT NULL,
  `school_create_time` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`school_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of school
-- ----------------------------
INSERT INTO `school` VALUES ('1', 'school_logo ', 'school_name', 'school_address', 'school_manager', null, 'school_detail', 'school_remark', 'normal', 'school_create_time');
INSERT INTO `school` VALUES ('2', 'school_logo 啊啊啊ddd', 'school_namefsdfdsf', 'school_address', 'school_manager', 'school_abstract', 'school_detail', 'school_remark', 'delete', 'school_create_time');
INSERT INTO `school` VALUES ('3', 'school_logo 啊啊啊ddd', 'school_namefsdfdsf', 'school_address', 'school_manager', 'school_abstract', 'school_detail', 'school_remark', 'normal', 'school_create_time');

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
  PRIMARY KEY (`score_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of score
-- ----------------------------
INSERT INTO `score` VALUES ('1', 'match_id', 'user_id', 'referee_id', 'score_value', 'score_create_time', 'score_detail', 'score_remark', 'score_publish_time', 'normal');
INSERT INTO `score` VALUES ('2', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', '123456', 'undefined', 'delete');

-- ----------------------------
-- Table structure for team
-- ----------------------------
DROP TABLE IF EXISTS `team`;
CREATE TABLE `team` (
  `team_id` int(11) NOT NULL AUTO_INCREMENT,
  `team_leader` varchar(255) DEFAULT NULL,
  `team_create_time` varchar(255) DEFAULT NULL,
  `team_create_user` varchar(255) DEFAULT NULL,
  `team_name` varchar(255) DEFAULT NULL,
  `team_detail` varchar(255) DEFAULT NULL,
  `team_abstract` varchar(255) DEFAULT NULL,
  `team_status` varchar(255) DEFAULT NULL,
  `team_logo` varchar(255) DEFAULT NULL,
  `team_del` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`team_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of team
-- ----------------------------
INSERT INTO `team` VALUES ('1', 'team_leader', 'team_create_time', 'team_create_user', 'undefined', 'team_detail', 'team_abstract', 'team_status', 'undefined', 'delete');
INSERT INTO `team` VALUES ('2', 'team_leader', 'team_create_time', 'team_create_user', 'team_nameasdsad', 'team_detail', 'team_abstract', 'team_status', 'team_logoasdasd', 'normal');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) DEFAULT NULL,
  `user_pass` varchar(255) DEFAULT NULL,
  `user_realname` varchar(255) DEFAULT NULL,
  `user_sex` varchar(255) DEFAULT NULL,
  `user_avatar` varchar(255) DEFAULT NULL,
  `user_slogan` varchar(255) DEFAULT NULL,
  `user_phone` varchar(255) DEFAULT NULL,
  `user_email` varchar(255) DEFAULT NULL,
  `user_health` varchar(255) DEFAULT NULL,
  `user_address` varchar(255) DEFAULT NULL,
  `user_type` varchar(255) DEFAULT NULL,
  `user_status` varchar(255) DEFAULT NULL,
  `user_create_time` varchar(255) DEFAULT NULL,
  `user_remark` varchar(255) DEFAULT NULL,
  `user_del` varchar(255) DEFAULT NULL,
  `user_school` varchar(255) DEFAULT NULL,
  `user_class` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'jack', 'jack', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `user` VALUES ('2', '123', '123', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `user` VALUES ('3', 'jack1', 'jack1', null, null, null, null, null, null, null, null, null, null, null, null, 'normal', null, null);
INSERT INTO `user` VALUES ('4', 'jack2', 'jack2', 'user_realname', 'user_sex', 'user_avatar', 'user_slogan', 'user_phone', 'user_email', 'user_health', 'user_address', 'user_type', 'user_status', 'user_create_time', 'user_remark', 'normal', 'user_school', 'user_class');

-- ----------------------------
-- Table structure for user_match
-- ----------------------------
DROP TABLE IF EXISTS `user_match`;
CREATE TABLE `user_match` (
  `user_match_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(11) DEFAULT NULL,
  `match_id` varchar(11) DEFAULT NULL,
  `user_match_del` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`user_match_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_match
-- ----------------------------
INSERT INTO `user_match` VALUES ('1', '1dsadsa', '2', 'delete');
INSERT INTO `user_match` VALUES ('2', '1', '2', 'normal');

-- ----------------------------
-- Table structure for user_team
-- ----------------------------
DROP TABLE IF EXISTS `user_team`;
CREATE TABLE `user_team` (
  `user_team_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) DEFAULT NULL,
  `team_id` varchar(255) DEFAULT NULL,
  `user_team_del` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_team_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_team
-- ----------------------------
INSERT INTO `user_team` VALUES ('1', '1dsadsa哈哈哈', '2dsa12211221哈哈哈', 'delete');
INSERT INTO `user_team` VALUES ('2', '1dsadsa', '2dsa', 'normal');
