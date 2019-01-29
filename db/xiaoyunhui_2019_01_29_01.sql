-- MySQL dump 10.13  Distrib 5.7.23, for Linux (x86_64)
--
-- Host: localhost    Database: xiaoyunhui
-- ------------------------------------------------------
-- Server version	5.7.23-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `class`
--

DROP TABLE IF EXISTS `class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `class` (
  `class_id` int(11) NOT NULL AUTO_INCREMENT,
  `class_name` varchar(255) DEFAULT NULL,
  `class_create_time` varchar(255) DEFAULT NULL,
  `school_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`class_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class`
--

LOCK TABLES `class` WRITE;
/*!40000 ALTER TABLE `class` DISABLE KEYS */;
INSERT INTO `class` VALUES (1,'class_name','class_create_time','school_id'),(2,'class_namedsadsa','class_create_timedsadsad','school_iddsadsadsa');
/*!40000 ALTER TABLE `class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `match_type`
--

DROP TABLE IF EXISTS `match_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `match_type` (
  `match_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `match_type_name` varchar(255) DEFAULT NULL,
  `match_type_manager` varchar(255) DEFAULT NULL,
  `match_type_create_time` varchar(255) DEFAULT NULL,
  `match_type_del` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`match_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `match_type`
--

LOCK TABLES `match_type` WRITE;
/*!40000 ALTER TABLE `match_type` DISABLE KEYS */;
INSERT INTO `match_type` VALUES (1,'match_type_name','match_type_manager','match_type_create_time华盛顿和骄傲','delete'),(2,'matchd','match_t','华盛顿和骄傲','delete'),(3,'match_type_name_asd','match_type_manager','match_type_create_time','delete'),(4,'类型测试','match_type_manager','match_type_create_time','delete'),(5,'类型测试','match_type_manager','match_type_create_time','delete'),(6,'测试测试','1','1548495241','normal'),(7,'男子组','1','1548495275','normal');
/*!40000 ALTER TABLE `match_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `matchs`
--

DROP TABLE IF EXISTS `matchs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
  `match_img` varchar(255) DEFAULT NULL,
  `match_address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`match_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matchs`
--

LOCK TABLES `matchs` WRITE;
/*!40000 ALTER TABLE `matchs` DISABLE KEYS */;
INSERT INTO `matchs` VALUES (5,'标题','1548505125','1548505137','2','1','杰瑞','菊树','律师','1','','delete','6','/storage/emulated/0/Android/data/com.jenking.xiaoyunhui/cache/1548505132934.jpg','律师'),(6,'测试二','1548505828','1548505843','2','1','律师恶魔来了','不睡','人数','1','','delete','7','/storage/emulated/0/Android/data/com.jenking.xiaoyunhui/cache/1548505836169.jpg','没有力气'),(7,'卢卡斯','1548506936','1548506949','2','1','穆里奇','58574','6组5日','1','','delete','6','/storage/emulated/0/Android/data/com.jenking.xiaoyunhui/cache/1548506945495.jpg','爸爸'),(8,'加','1548561310','1548561326','2','1',' 就是','哈哈哈','人数','1','','delete','6','upload/t5CRsmgjan9DYd4EzMA9OOrl.jpg','推荐几个'),(9,'标题','1548561465','1548561478','2','1','哈哈','要是','36','1','','delete','6','upload/JWKsJTVCQ80BcsyTPFBd-CEr.jpg','地点'),(10,'标题','1548561686','1548561711','2','1','简要说明','裁判','哈哈哈','1','','delete','6','upload/bwItXCCZfmKUeyphwMPuTVL0.jpg','我日'),(11,'新比赛测试','1548574065','1548574105','2','1','简要说明','裁判','12','1','6','delete','7','upload/PaWz2ZC67mOuymLtVbKmi7tX.jpg','主校区'),(12,'第二个新比赛','1548595251','1548595340','2','7','哈哈哈哈','要求','12','1','9','delete','6','upload/HoN3Tum3t7V7LSFcdtQIpaRx.jpg','地点'),(13,'男子组440米接力赛','1551337200','1548678313','10','7','简要说明','比赛要求','12','1','9','delete','7','upload/OK5ArGkFPGoDXeUtOd6zn1eR.jpg','主校区'),(14,'新比赛','1548680182','1548680219','4','7','简要说明','哈哈哈','12','1','9','normal','7','upload/IhqQpW00QdckA32gnqkU9Wih.jpg','新校区体育场');
/*!40000 ALTER TABLE `matchs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `referee`
--

DROP TABLE IF EXISTS `referee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `referee` (
  `referee_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) DEFAULT NULL,
  `referee_status` varchar(255) DEFAULT NULL,
  `referee_manager` varchar(255) DEFAULT NULL,
  `referee_del` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`referee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `referee`
--

LOCK TABLES `referee` WRITE;
/*!40000 ALTER TABLE `referee` DISABLE KEYS */;
INSERT INTO `referee` VALUES (1,'2','referee_status','referee_manager','delete'),(2,'3','referee_status','referee_manager','delete'),(3,'8','1','','delete'),(4,'10','2','7','normal'),(5,'11','2','7','normal'),(6,'9','1','','normal');
/*!40000 ALTER TABLE `referee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `school`
--

DROP TABLE IF EXISTS `school`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `school`
--

LOCK TABLES `school` WRITE;
/*!40000 ALTER TABLE `school` DISABLE KEYS */;
INSERT INTO `school` VALUES (1,'school_logo ','school_name','school_address','school_manager',NULL,'school_detail','school_remark','delete','school_create_time'),(2,'school_logo 啊啊啊ddd','school_namefsdfdsf','school_address','school_manager','school_abstract','school_detail','school_remark','delete','school_create_time'),(3,'school_logo 啊啊啊ddd','school_namefsdfdsf','school_address','school_manager','school_abstract','school_detail','school_remark','delete','school_create_time'),(4,'upload/nm97v4waukrLOOpsrWxGQfu_.jpg','测试','地址','1','造作','介绍','','delete','1548570227'),(5,'upload/jtLONQIdjhOi6puGwj_RUw49.jpg','名称','地址','1','造作','前几天破鼓','','delete','1548570336'),(6,'upload/YSGwQRCEWvt6EaISLFFiM2pg.jpg','名称果然是','地址','1','校训','介绍','','normal','1548570856'),(7,'upload/Xkm6tD_aYZP-SlQMRCFqkuo1.jpg','溜了溜了','司机','1','校训','详细介绍','','normal','1548571585'),(8,'upload/9OFIIKYvG3Qw500XaWgiHHyw.jpg','名称名称','地址','1','校训','介绍','','normal','1548571783'),(9,'upload/sQb9EBM9fihLbDFQDXGB-36e.jpg','中国某某大学','中国广州','7','校训','详细介绍','','normal','1548595305');
/*!40000 ALTER TABLE `school` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `score`
--

DROP TABLE IF EXISTS `score`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `score`
--

LOCK TABLES `score` WRITE;
/*!40000 ALTER TABLE `score` DISABLE KEYS */;
INSERT INTO `score` VALUES (1,'match_id','user_id','referee_id','score_value','score_create_time','score_detail','score_remark','score_publish_time','normal'),(2,'undefined','undefined','undefined','undefined','undefined','undefined','123456','undefined','delete');
/*!40000 ALTER TABLE `score` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team`
--

DROP TABLE IF EXISTS `team`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team`
--

LOCK TABLES `team` WRITE;
/*!40000 ALTER TABLE `team` DISABLE KEYS */;
INSERT INTO `team` VALUES (1,'team_leader','team_create_time','team_create_user','undefined','team_detail','team_abstract','team_status','undefined','delete'),(2,'team_leader','team_create_time','team_create_user','team_nameasdsad','team_detail','team_abstract','team_status','team_logoasdasd','normal');
/*!40000 ALTER TABLE `team` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'jack','jack',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'delete',NULL,NULL),(2,'123','123',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'delete',NULL,NULL),(3,'jack1','jack1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'delete',NULL,NULL),(4,'jack2','jack2','user_realname','user_sex','user_avatar','user_slogan','user_phone','user_email','user_health','user_address','user_type','user_status','user_create_time','user_remark','delete','user_school','user_class'),(5,'anb','asd',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'delete',NULL,NULL),(6,'6666','asda',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'delete',NULL,NULL),(7,'admin','admin',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'3',NULL,NULL,NULL,'normal',NULL,NULL),(8,'super','super',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1',NULL,NULL,NULL,'delete',NULL,NULL),(9,'123','123',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1',NULL,'1548664087',NULL,'normal',NULL,NULL),(10,'jack','jack',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2',NULL,'1548664307',NULL,'normal',NULL,NULL),(11,'super','super',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2',NULL,'1548667127',NULL,'normal',NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_match`
--

DROP TABLE IF EXISTS `user_match`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_match` (
  `user_match_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(11) DEFAULT NULL,
  `match_id` varchar(11) DEFAULT NULL,
  `user_match_del` varchar(11) DEFAULT NULL,
  `user_match_status` varchar(255) DEFAULT NULL,
  `score_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_match_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_match`
--

LOCK TABLES `user_match` WRITE;
/*!40000 ALTER TABLE `user_match` DISABLE KEYS */;
INSERT INTO `user_match` VALUES (7,'9','14','normal','1',NULL);
/*!40000 ALTER TABLE `user_match` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_team`
--

DROP TABLE IF EXISTS `user_team`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_team` (
  `user_team_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) DEFAULT NULL,
  `team_id` varchar(255) DEFAULT NULL,
  `user_team_del` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_team_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_team`
--

LOCK TABLES `user_team` WRITE;
/*!40000 ALTER TABLE `user_team` DISABLE KEYS */;
INSERT INTO `user_team` VALUES (1,'1dsadsa哈哈哈','2dsa12211221哈哈哈','delete'),(2,'1dsadsa','2dsa','normal');
/*!40000 ALTER TABLE `user_team` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-28 22:01:16
