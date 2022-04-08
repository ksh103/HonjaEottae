-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: j6e103.p.ssafy.io    Database: ssafy
-- ------------------------------------------------------
-- Server version	8.0.28-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `area_count`
--

DROP TABLE IF EXISTS `area_count`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `area_count` (
  `area_id` int NOT NULL AUTO_INCREMENT,
  `area_name` varchar(10) NOT NULL,
  `area_x` int DEFAULT NULL,
  `area_y` int DEFAULT NULL,
  `area_count` int DEFAULT NULL,
  PRIMARY KEY (`area_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `area_count`
--

LOCK TABLES `area_count` WRITE;
/*!40000 ALTER TABLE `area_count` DISABLE KEYS */;
INSERT INTO `area_count` VALUES (1,'대구',270,250,417),(2,'대전',220,180,215),(3,'부산',330,300,546),(4,'서울',100,160,1623),(5,'강원',50,225,2455),(6,'경기',30,130,3023),(7,'경남',340,190,1923),(8,'경북',200,260,1918),(9,'광주',350,120,217),(10,'세종',160,130,69),(11,'울산',270,310,239),(12,'인천',110,60,722),(13,'전남',390,50,1683),(14,'전북',275,120,1349),(15,'제주',470,60,753),(16,'충남',220,80,1267),(17,'충북',160,205,1117);
/*!40000 ALTER TABLE `area_count` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-07 16:28:35
