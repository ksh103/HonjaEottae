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
-- Table structure for table `bookmark`
--

DROP TABLE IF EXISTS `bookmark`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookmark` (
  `user_id` int NOT NULL,
  `course_id` int NOT NULL,
  KEY `FK_course_idx7_idx` (`course_id`),
  KEY `FK_user_idx6_idx` (`user_id`),
  CONSTRAINT `FK_course_idx7` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_user_idx6` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookmark`
--

LOCK TABLES `bookmark` WRITE;
/*!40000 ALTER TABLE `bookmark` DISABLE KEYS */;
INSERT INTO `bookmark` VALUES (4,1044),(5,1044),(6,1044),(24,88),(3,777),(4,777),(7,777),(9,777),(24,777),(24,901),(24,574),(24,371),(24,494),(24,600),(24,839),(24,218),(24,334),(24,395),(24,17),(24,458),(24,979),(24,716),(24,13),(24,766),(24,545),(24,605),(24,293),(24,663),(24,24),(24,345),(24,629),(24,646),(24,650),(24,1004),(24,888),(24,732),(24,869),(24,206),(24,696),(24,1018),(24,884),(24,698),(24,635),(24,578),(24,803),(24,821),(24,983),(24,1011),(24,16),(24,62),(24,283),(24,339),(24,909),(24,69),(24,854),(24,572),(24,359),(24,12),(24,280),(24,349),(24,774),(24,505),(24,261),(24,787),(24,822),(24,658),(24,767),(24,856),(24,943),(24,703),(24,87),(24,175),(24,211),(24,268),(24,900),(24,684),(24,734),(24,624),(24,176),(24,197),(24,1005),(24,810),(24,1032),(24,718),(24,731),(24,538),(24,98),(24,204),(24,719),(24,806),(24,853),(24,253),(4,339),(4,211),(4,548),(24,108),(3,1044),(27,1029),(27,1044),(27,557);
/*!40000 ALTER TABLE `bookmark` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-07 16:28:43


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
-- Table structure for table `record`
--

DROP TABLE IF EXISTS `record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `record` (
  `record_id` int NOT NULL AUTO_INCREMENT,
  `course_id` int NOT NULL,
  `user_id` int NOT NULL,
  `record_content` varchar(200) DEFAULT NULL,
  `record_reg_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`record_id`),
  KEY `FK_course_idx4_idx` (`course_id`),
  KEY `FK_user_idx4_idx` (`user_id`),
  CONSTRAINT `FK_course_idx4` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_user_idx4` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `record`
--

LOCK TABLES `record` WRITE;
/*!40000 ALTER TABLE `record` DISABLE KEYS */;
INSERT INTO `record` VALUES (1,1044,4,'바다가 너무 이쁘고 힐링하기 좋은 코스에요!','2022-04-06 23:19:49'),(2,1044,5,'다대포에서 좋은 추억 만들고 갑니다~ 작사가 너무 잘 되네요~','2022-04-06 23:21:58'),(3,1044,6,'너무 바쁜 시기에 힐링할 수 있는 좋은 코스에요! 다대포 일몰 짱 이뻐 좋아 가는거야~','2022-04-06 23:23:06'),(4,1044,7,'힘든 시기에 지친 마음을 달랠 수 있는 좋은 혼행이였다. ','2022-04-06 23:23:58'),(5,1044,8,'혼밥하러 떠난 부산 많은걸 보고 먹고 왔다! 혼자어때 최고!','2022-04-06 23:25:29'),(6,1044,9,'아미산 전망대에서 힐링하고 왔습니다 날씨도 너무 좋고 바다내음 맡으니 좋았어요!','2022-04-06 23:28:20'),(7,1044,17,'바다가 너무 좋았어요 코딩하기 좋은 코스 인정~','2022-04-06 23:29:49'),(8,88,24,'대구 핫플레이스를 갔다왔다. 그리고 막창이 너무 맛있었다... 또 와야겠다','2022-04-06 23:39:21'),(9,1044,18,'감천문화마을의 잔잔한 감성을 느낄 수 있어서 좋았어요','2022-04-06 23:41:52'),(10,1044,15,'동탁 부산 공연 중 방문한 코스인데 목이 뻥 뚫리는 여행 코스였어요! 찐찐찐찐 찐이야~! 완전 찐이야~~','2022-04-06 23:42:42'),(11,574,24,'조용히 혼자 여행하기 좋은 부산 바다!! 푸른 바다?를 보며 힐링 제대로 했다 다시 화이팅!!!','2022-04-06 23:43:43'),(12,1044,13,'언제까지 기다리게 할거야 감천 문화마을에서 3년째 기다리고 있습니다. 이 코스 좋아요 추천 waiting','2022-04-06 23:44:18'),(13,17,24,'만개한 장미꽃들 사이로 은은하게 퍼지는 로즈향에 기분까지 좋아지는 나들이 장소로 최고였다...!','2022-02-21 18:00:00'),(14,766,24,'날씨가 너무 좋았고 한국의 아름다움을 느낄수 있었다. 나중에 친구와 한복입고 다시 오고 싶다!','2022-01-31 15:00:00'),(15,98,24,'깨끗한 모래와 푸른 바다가 어우러져 너무 아름답다.. 다음에 또 오고 싶다','2022-01-02 16:00:00'),(16,280,24,'민주화운동을 위해 희생한 광주의 모든 이들을 기념하기 위해 상무대 자리가 5.18기념공원으로 조성되어있다','2021-12-25 23:00:00'),(17,821,24,'지질 박물관에서 광물, 암석, 화석과 같은 전시를 관람했다. 또한 체험학습을 통해 지질과학을 경험해 볼 수 있었다.','2021-12-05 11:00:00'),(18,218,24,'춘천 닭갈비....춘천 닭갈비....춘천 닭갈비....춘천 닭갈비....너무 맛있다...ㅠ... 지금도 생각난다..','2021-11-11 23:00:00'),(19,108,24,'역사와 바다를 한번에 볼 수 있었던 힐링 여행.. 조용해서 여행하기 좋았다','2021-10-25 16:00:00'),(20,1044,14,'자연 풍경이 너무 이쁘고 좋아요!','2022-04-07 11:08:28'),(21,1029,27,'너무 즐거운 여행이었습니다.','2022-04-07 11:21:35'),(22,1044,27,'너무 재미있었습니다 !! ','2022-04-07 11:25:40');
/*!40000 ALTER TABLE `record` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-07 16:28:33

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
-- Table structure for table `record_img_path`
--

DROP TABLE IF EXISTS `record_img_path`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `record_img_path` (
  `file_id` int NOT NULL AUTO_INCREMENT,
  `record_id` int NOT NULL,
  `course_id` int NOT NULL,
  `file_name` varchar(500) NOT NULL,
  `file_size` int NOT NULL,
  `file_content` varchar(10) NOT NULL,
  `file_url` varchar(500) NOT NULL,
  `file_reg_dt` date NOT NULL,
  PRIMARY KEY (`file_id`),
  KEY `FK_record_idx1_idx` (`record_id`),
  KEY `FK_course_idx5_idx` (`course_id`),
  CONSTRAINT `FK_course_idx5` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_record_idx1` FOREIGN KEY (`record_id`) REFERENCES `record` (`record_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `record_img_path`
--

LOCK TABLES `record_img_path` WRITE;
/*!40000 ALTER TABLE `record_img_path` DISABLE KEYS */;
INSERT INTO `record_img_path` VALUES (1,1,1044,'2.jpg',4749,'image/jpeg','/tourimages/27fbe713-64ae-4870-b062-0450047c9c9d.jpg','2022-04-06'),(2,2,1044,'여자.jpg',154790,'image/jpeg','/tourimages/c53e1989-28f1-4627-abd1-c60d798d5e9e.jpg','2022-04-06'),(3,3,1044,'11.jpg',138277,'image/jpeg','/tourimages/20dc0038-7f57-41df-8a6e-322cacdb4b69.jpg','2022-04-06'),(4,4,1044,'8.jpg',64125,'image/jpeg','/tourimages/3c519b5d-1bc6-43c2-b7dc-29971fc0f44a.jpg','2022-04-06'),(5,5,1044,'10.jpg',77927,'image/jpeg','/tourimages/db5318fb-0247-4cef-b484-d13734389e4d.jpg','2022-04-06'),(6,6,1044,'6.jpg',179493,'image/jpeg','/tourimages/02698e3c-9b7c-40c7-98ea-3b1d43bd6715.jpg','2022-04-06'),(7,7,1044,'10.jpg',77927,'image/jpeg','/tourimages/d0d3c7cb-b2b4-4ebd-b92a-875fe09086a7.jpg','2022-04-06'),(8,8,88,'2019011009275613078_l.jpg',320453,'image/jpeg','/tourimages/acbef9f7-2b9f-499b-897c-341bb5700849.jpg','2022-04-06'),(9,9,1044,'4.jpg',518727,'image/jpeg','/tourimages/a7f7f10e-ed08-4435-adac-dec6c048bd0c.jpg','2022-04-06'),(10,10,1044,'5.jpg',145470,'image/jpeg','/tourimages/25551c26-cb8d-4b25-92dd-01b19936b216.jpg','2022-04-06'),(11,11,574,'DSC05636-1.jpg',75369,'image/jpeg','/tourimages/ffd8d4e7-a34a-4998-aa0e-2748e93d0fa8.jpg','2022-04-06'),(12,12,1044,'박대기.jpg',12481,'image/jpeg','/tourimages/25793f6c-8129-4ce9-90ae-a28151a14318.jpg','2022-04-06'),(13,13,17,'UV1RHLAu54VMGXpxYRcPdiQa_Skt5yFoPJ9TMF0b2zg.jpg',100591,'image/jpeg','/tourimages/8d32a18c-9ab5-47be-945c-b37094253e53.jpg','2022-04-06'),(14,14,766,'1555424526634.jpg',177326,'image/jpeg','/tourimages/281dd18e-4f78-4db2-b5d6-07e2a267fbb7.jpg','2022-04-06'),(15,15,98,'2890293820_LzNlkOXj_0873692362671016b0312546d5a8f66d1bf979b3_copyright.jpg',649636,'image/jpeg','/tourimages/1bd7014c-a151-4282-996e-645e49487033.jpg','2022-04-06'),(16,16,280,'518기념공원012.jpg',116932,'image/jpeg','/tourimages/d3df2a9a-81c1-4636-ab46-e8e25b439352.jpg','2022-04-06'),(17,17,821,'040505_bg.jpg',86089,'image/jpeg','/tourimages/136ebedf-7fe9-4aeb-9643-37d8e43f3179.jpg','2022-04-07'),(18,18,218,'4ea95319-7fc3-48a5-aa7c-42443fe3907d.jpg',274632,'image/jpeg','/tourimages/8f978ef6-691a-4ef5-86c5-fafd61976c95.jpg','2022-04-07'),(19,19,108,'AKR20210328013000053_01_i_P2.jpg',169913,'image/jpeg','/tourimages/b79f95ed-9d0f-4106-a4c6-0b849078d612.jpg','2022-04-07'),(20,20,1044,'KakaoTalk_20220406_114447078.jpg',2955450,'image/jpeg','/tourimages/04e76728-1797-4dba-a3dc-ed0c00aa6d5d.jpg','2022-04-07'),(21,21,1029,'test.PNG',819276,'image/png','/tourimages/e8d20727-ad1b-4c9d-8bba-041cd8ae2025.PNG','2022-04-07'),(22,22,1044,'test2.PNG',303723,'image/png','/tourimages/c24c88c6-b494-43ef-a513-2226edd3b7f9.PNG','2022-04-07');
/*!40000 ALTER TABLE `record_img_path` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-07 16:28:34


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
-- Table structure for table `record_tag`
--

DROP TABLE IF EXISTS `record_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `record_tag` (
  `record_id` int NOT NULL,
  `course_id` int NOT NULL,
  `code` int NOT NULL,
  `tag_id` int NOT NULL,
  `is_select` tinyint NOT NULL DEFAULT '0',
  KEY `FK_code_idx2_idx` (`code`),
  KEY `FK_tag_idx1_idx` (`tag_id`),
  KEY `FK_record_idx1_idx` (`record_id`),
  KEY `FK_course_idx7_idx` (`course_id`),
  CONSTRAINT `FK_code_idx2` FOREIGN KEY (`code`) REFERENCES `tag_code` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_course_idx8` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_record_idx2` FOREIGN KEY (`record_id`) REFERENCES `record` (`record_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_tag_idx1` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`tag_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `record_tag`
--

LOCK TABLES `record_tag` WRITE;
/*!40000 ALTER TABLE `record_tag` DISABLE KEYS */;
INSERT INTO `record_tag` VALUES (1,1044,1,2,1),(1,1044,2,3,1),(1,1044,3,1,1),(1,1044,3,4,1),(1,1044,4,1,1),(2,1044,1,2,1),(2,1044,2,3,1),(2,1044,3,1,1),(2,1044,3,4,1),(2,1044,4,1,1),(2,1044,4,6,1),(3,1044,1,2,1),(5,1044,1,2,1),(6,1044,1,2,1),(7,1044,1,2,1),(8,88,1,4,1),(8,88,1,5,1),(8,88,2,6,1),(8,88,3,1,1),(8,88,4,2,1),(9,1044,1,2,1),(11,574,1,1,1),(11,574,1,2,1),(11,574,2,3,1),(11,574,2,6,1),(11,574,3,1,1),(11,574,3,3,1),(11,574,4,1,1),(11,574,4,2,1),(13,17,1,1,1),(13,17,1,3,1),(13,17,2,2,1),(13,17,2,6,1),(13,17,3,1,1),(13,17,3,2,1),(13,17,4,1,1),(13,17,4,2,1),(14,766,1,4,1),(14,766,1,5,1),(14,766,2,1,1),(14,766,2,2,1),(14,766,2,6,1),(14,766,3,3,1),(14,766,4,2,1),(14,766,4,6,1),(15,98,1,1,1),(15,98,1,2,1),(15,98,1,3,1),(15,98,2,2,1),(15,98,2,3,1),(15,98,2,6,1),(15,98,3,1,1),(15,98,3,4,1),(15,98,4,1,1),(15,98,4,2,1),(16,280,1,4,1),(16,280,1,5,1),(16,280,2,3,1),(16,280,3,1,1),(16,280,3,2,1),(16,280,4,2,1),(17,821,1,4,1),(17,821,1,5,1),(17,821,2,2,1),(17,821,2,3,1),(17,821,2,6,1),(17,821,3,2,1),(17,821,3,4,1),(17,821,4,2,1),(18,218,1,5,1),(18,218,2,1,1),(18,218,2,2,1),(18,218,2,4,1),(18,218,2,6,1),(18,218,3,1,1),(18,218,3,3,1),(18,218,4,2,1),(18,218,4,4,1),(18,218,4,5,1),(19,108,1,1,1),(19,108,1,2,1),(19,108,1,3,1),(19,108,2,2,1),(19,108,2,4,1),(19,108,2,6,1),(19,108,3,1,1),(19,108,4,2,1),(20,1044,1,1,1),(20,1044,2,3,1),(20,1044,3,1,1),(20,1044,4,1,1),(21,1029,1,1,1),(21,1029,1,2,1),(21,1029,2,2,1),(21,1029,2,3,1),(21,1029,3,1,1),(21,1029,3,2,1),(21,1029,4,1,1),(21,1029,4,2,1),(22,1044,1,1,1),(22,1044,1,2,1),(22,1044,2,3,1),(22,1044,2,6,1),(22,1044,3,3,1),(22,1044,3,4,1),(22,1044,4,4,1),(22,1044,4,5,1),(22,1044,4,6,1);
/*!40000 ALTER TABLE `record_tag` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-07 16:28:39

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
-- Table structure for table `stamp`
--

DROP TABLE IF EXISTS `stamp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stamp` (
  `user_id` int NOT NULL,
  `course_id` int NOT NULL,
  `course_data_id` int NOT NULL,
  `is_stamp` tinyint NOT NULL DEFAULT '0',
  KEY `FK_user_idx2_idx` (`user_id`),
  KEY `FK_course_data_idx1_idx` (`course_data_id`),
  KEY `FK_tour_course_idx1_idx` (`course_id`),
  CONSTRAINT `FK_course_data_idx1` FOREIGN KEY (`course_data_id`) REFERENCES `course_data` (`course_data_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_tour_user_idx1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stamp`
--

LOCK TABLES `stamp` WRITE;
/*!40000 ALTER TABLE `stamp` DISABLE KEYS */;
INSERT INTO `stamp` VALUES (4,1044,1,1),(4,1044,2,1),(4,1044,3,1),(4,1044,4,1),(4,1044,5,1),(4,1044,6,1),(5,1044,1,1),(5,1044,2,0),(5,1044,3,1),(5,1044,4,1),(5,1044,5,0),(5,1044,6,0),(6,1044,1,0),(6,1044,2,0),(6,1044,3,1),(6,1044,4,1),(6,1044,5,0),(6,1044,6,0),(7,1044,1,1),(7,1044,2,1),(7,1044,3,0),(7,1044,4,0),(7,1044,5,0),(7,1044,6,1),(24,88,1,1),(24,88,2,0),(24,88,3,1),(24,88,4,0),(24,88,5,0),(24,88,6,0),(24,88,7,0),(24,88,8,0),(24,88,9,0),(24,88,10,0),(8,1044,1,1),(8,1044,2,0),(8,1044,3,0),(8,1044,4,0),(8,1044,5,0),(8,1044,6,0),(9,1044,1,0),(9,1044,2,1),(9,1044,3,1),(9,1044,4,0),(9,1044,5,0),(9,1044,6,0),(17,1044,1,1),(17,1044,2,0),(17,1044,3,0),(17,1044,4,0),(17,1044,5,0),(17,1044,6,0),(24,574,1,0),(24,574,2,1),(24,574,3,1),(24,574,4,0),(18,1044,1,1),(18,1044,2,0),(18,1044,3,1),(18,1044,4,0),(18,1044,5,0),(18,1044,6,0),(15,1044,1,1),(15,1044,2,0),(15,1044,3,0),(15,1044,4,0),(15,1044,5,0),(15,1044,6,0),(13,1044,1,1),(13,1044,2,0),(13,1044,3,0),(13,1044,4,0),(13,1044,5,0),(13,1044,6,0),(24,17,1,1),(24,17,2,0),(24,17,3,1),(24,766,1,1),(24,766,2,0),(24,766,3,1),(24,766,4,0),(24,98,1,1),(24,98,2,1),(24,98,3,0),(24,98,4,1),(24,98,5,1),(24,98,6,1),(24,98,7,0),(24,98,8,0),(24,280,1,0),(24,280,2,0),(24,280,3,1),(24,280,4,0),(24,821,1,1),(24,821,2,0),(24,821,3,1),(24,821,4,0),(24,218,1,1),(24,218,2,0),(24,218,3,1),(24,108,1,1),(24,108,2,1),(24,108,3,0),(24,108,4,0),(24,108,5,0),(24,108,6,1),(24,108,7,0),(4,1045,1,0),(4,1045,2,1),(4,1045,3,0),(4,1045,4,0),(12,1045,1,0),(12,1045,2,0),(12,1045,3,0),(12,1045,4,0),(10,1045,1,0),(10,1045,2,0),(10,1045,3,0),(10,1045,4,0),(14,1044,1,0),(14,1044,2,0),(14,1044,3,0),(14,1044,4,1),(14,1044,5,0),(14,1044,6,0),(25,1044,1,1),(25,1044,2,0),(25,1044,3,1),(25,1044,4,0),(25,1044,5,0),(25,1044,6,0),(26,1045,1,0),(26,1045,2,0),(26,1045,3,0),(26,1045,4,0),(22,1045,1,1),(22,1045,2,0),(22,1045,3,0),(22,1045,4,0),(3,1044,1,0),(3,1044,2,0),(3,1044,3,0),(3,1044,4,0),(3,1044,5,0),(3,1044,6,0),(27,1029,1,1),(27,1029,2,1),(27,1029,3,1),(27,1044,1,1),(27,1044,2,1),(27,1044,3,1),(27,1044,4,1),(27,1044,5,1),(27,1044,6,1),(27,696,1,1),(27,696,2,1),(27,696,3,0),(23,1044,1,0),(23,1044,2,0),(23,1044,3,0),(23,1044,4,0),(23,1044,5,0),(23,1044,6,0),(30,391,1,0),(30,391,2,0),(30,391,3,0),(30,391,4,0),(29,1049,1,0),(29,1049,2,0),(29,1049,3,0),(29,1049,4,0),(29,1049,5,0),(28,1044,1,0),(28,1044,2,0),(28,1044,3,0),(28,1044,4,0),(28,1044,5,0),(28,1044,6,0),(14,696,1,0),(14,696,2,0),(14,696,3,0);
/*!40000 ALTER TABLE `stamp` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-07 16:28:31

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
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag` (
  `tag_id` int NOT NULL AUTO_INCREMENT,
  `code` int NOT NULL,
  `tag_name` varchar(10) NOT NULL,
  PRIMARY KEY (`tag_id`,`code`),
  KEY `FK_code_idx1_idx` (`code`),
  CONSTRAINT `FK_code_idx1` FOREIGN KEY (`code`) REFERENCES `tag_code` (`code`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
INSERT INTO `tag` VALUES (1,1,'자연'),(1,2,'커플'),(1,3,'힐링'),(1,4,'휴식'),(2,1,'바다'),(2,2,'가족'),(2,3,'조용한'),(2,4,'관광'),(3,1,'산'),(3,2,'혼자'),(3,3,'신나는'),(3,4,'쇼핑'),(4,1,'역사'),(4,2,'부부'),(4,3,'즐거운'),(4,4,'음식'),(5,1,'도시'),(5,2,'동료'),(5,4,'축제'),(6,2,'친구'),(6,4,'만남');
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-07 16:28:30

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
-- Table structure for table `tag_code`
--

DROP TABLE IF EXISTS `tag_code`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag_code` (
  `code` int NOT NULL AUTO_INCREMENT,
  `code_name` varchar(10) NOT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag_code`
--

LOCK TABLES `tag_code` WRITE;
/*!40000 ALTER TABLE `tag_code` DISABLE KEYS */;
INSERT INTO `tag_code` VALUES (1,'코스'),(2,'일행'),(3,'분위기'),(4,'목적');
/*!40000 ALTER TABLE `tag_code` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-07 16:28:42

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
-- Table structure for table `tour`
--

DROP TABLE IF EXISTS `tour`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tour` (
  `user_id` int NOT NULL,
  `course_id` int NOT NULL,
  `tour_start` datetime DEFAULT NULL,
  `tour_end` datetime DEFAULT NULL,
  `is_start` tinyint NOT NULL DEFAULT '0',
  `is_end` tinyint NOT NULL DEFAULT '0',
  KEY `FK_course_idx3_idx` (`course_id`),
  KEY `FK_user_idx3_idx` (`user_id`),
  CONSTRAINT `FK_course_idx3` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_user_idx3` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tour`
--

LOCK TABLES `tour` WRITE;
/*!40000 ALTER TABLE `tour` DISABLE KEYS */;
INSERT INTO `tour` VALUES (4,1044,'2022-04-06 23:09:53','2022-04-06 23:19:49',1,1),(5,1044,'2022-04-06 23:21:12','2022-04-06 23:21:57',1,1),(6,1044,'2022-04-06 23:22:29','2022-04-06 23:23:05',1,1),(7,1044,'2022-04-06 23:23:31','2022-04-06 23:23:57',1,1),(24,88,'2022-03-27 13:00:00','2022-03-28 18:00:00',1,1),(8,1044,'2022-04-06 23:25:04','2022-04-06 23:25:29',1,1),(9,1044,'2022-04-06 23:27:50','2022-04-06 23:28:20',1,1),(17,1044,'2022-04-06 23:29:30','2022-04-06 23:29:49',1,1),(24,574,'2022-03-05 09:00:00','2022-03-05 18:00:00',1,1),(18,1044,'2022-04-06 23:41:12','2022-04-06 23:41:51',1,1),(15,1044,'2022-04-06 23:42:09','2022-04-06 23:42:41',1,1),(13,1044,'2022-04-06 23:43:40','2022-04-06 23:44:17',1,1),(24,17,'2022-02-19 09:00:00','2022-02-21 18:00:00',1,1),(24,766,'2022-01-29 09:00:00','2022-01-31 15:00:00',1,1),(24,98,'2022-01-01 00:00:00','2022-01-02 16:00:00',1,1),(24,280,'2021-12-24 22:00:00','2021-12-25 23:00:00',1,1),(24,821,'2021-12-04 09:00:00','2021-12-05 11:00:00',1,1),(24,218,'2021-11-11 09:00:00','2021-11-11 23:00:00',1,1),(24,108,'2021-10-24 11:00:00','2021-10-25 16:00:00',1,1),(4,1045,'2022-04-07 10:20:27',NULL,1,0),(12,1045,'2022-04-07 10:21:15',NULL,1,0),(10,1045,'2022-04-07 10:21:32',NULL,1,0),(14,1044,'2022-04-07 10:36:52','2022-04-07 11:08:27',1,1),(25,1044,'2022-04-07 10:39:06',NULL,1,0),(26,1045,'2022-04-07 10:44:50',NULL,1,0),(22,1045,'2022-04-07 10:45:03',NULL,1,0),(3,1044,'2022-04-07 11:12:16',NULL,1,0),(27,1029,'2022-04-07 11:18:54','2022-04-07 11:21:35',1,1),(27,1044,'2022-04-07 11:24:35','2022-04-07 11:25:39',1,1),(27,696,'2022-04-07 11:31:25',NULL,1,0),(23,1044,'2022-04-07 11:50:45',NULL,1,0),(30,391,'2022-04-07 13:44:25',NULL,1,0),(29,1049,'2022-04-07 14:08:44',NULL,1,0),(28,1044,'2022-04-07 15:12:51',NULL,1,0),(14,696,'2022-04-07 15:13:57',NULL,1,0);
/*!40000 ALTER TABLE `tour` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-07 16:28:31

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
-- Table structure for table `tour_test`
--

DROP TABLE IF EXISTS `tour_test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tour_test` (
  `tour_test_id` int NOT NULL AUTO_INCREMENT,
  `tour_test_name` varchar(50) NOT NULL,
  `tour_test_result` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`tour_test_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tour_test`
--

LOCK TABLES `tour_test` WRITE;
/*!40000 ALTER TABLE `tour_test` DISABLE KEYS */;
INSERT INTO `tour_test` VALUES (1,'열정적이고 역동적인 에너지가 가득한 청춘여행 스타일',48),(2,'유명한 관광지 여행을 좋아하는 알짜배기 여행 스타일',39),(3,'탁 트인 바다를 바라보며 느긋하게 힐링하는 여행 스타일',38),(4,'푸르른 산속의 맑은 공기와 함께 여유를 즐기는 여행 스타일',24),(5,'여행지의 이색적인 음식과 역사를 즐기는 여행 스타일',27),(6,'여행지 전통 본연의 맛과 문화를 즐기는 여행 스타일',23),(7,'테스트 결과 정보 없음',-11);
/*!40000 ALTER TABLE `tour_test` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-07 16:28:32

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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_email` varchar(50) NOT NULL,
  `tour_test_id` int NOT NULL DEFAULT '7',
  `user_name` varchar(10) NOT NULL,
  `user_password` varchar(500) NOT NULL,
  PRIMARY KEY (`user_id`,`user_email`),
  KEY `FK_tour_test_idx1_idx` (`tour_test_id`),
  CONSTRAINT `FK_tour_test_idx1` FOREIGN KEY (`tour_test_id`) REFERENCES `tour_test` (`tour_test_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'',7,'',''),(2,'honguri@guriworld.com',7,'혼구리','$2a$10$v9G8kQ1yOA651jCyj1aj1u0bvITkTY0arfwclbu5u90S8BUDFHvYu'),(3,'sumin@z.z',7,'지수민','$2a$10$gA9sCv17NfB0/RtfujkwguG2rFqbKvvwohvQUXnJhwqjl4BsuFDza'),(4,'dmstjd@naver.com',3,'손은성','$2a$10$lqZ4Ne/PseJeRmUFmMXjNeU/lvurj1.bQAQQcOYohZ0vJo6vwQGTu'),(5,'kim2na@ssafy.com',3,'김이나','$2a$10$P6iyEv.AyomPWKUNrUnAHeTI7a31pC6f/y1YlUN9e6ReGO/ianAkS'),(6,'hongchul@ssafy.com',1,'노홍철','$2a$10$YaXlgfGdJC1.KTpkTwP98eMbgJr6yXzpLuKQFYpb8EN8W1uSoKvSm'),(7,'yjs@ssafy.com',2,'유재석','$2a$10$TsZxiNRvKg.WX6uSZMCb6.XTJJl/KcFCn/lxcmXs3lIRocJXo/8EO'),(8,'khb@ssafy.com',1,'김혼밥','$2a$10$XOU2cqUMjHxypVHgXpthv.pplzHFv4bCQOa3ZvDaOr3Gf0KsD5Fau'),(9,'phh@ssafy.com',2,'박혼행','$2a$10$WF.cpoM0RIYEHyZk4klhsuJthD/iL0KKIed2vu5FS9zjJ7dT9ZNNu'),(10,'kjh@ssafy.com',4,'김진호','$2a$10$8K4BJmNrKJoh2UXNV20AkugLNV0C0YQy6onYLQZCqgYHcibCxYLge'),(11,'kns@ssafy.com',3,'김노션','$2a$10$7EgPgLG1f5gxURAro8h1deuyaLdFeJlXBjxQ0I1l45lvMUUg3ClTW'),(12,'pej@ssafy.com',5,'백이진','$2a$10$5qgUUvMZTOZJv8nzHUQtRexZWD7veGokVE0Y00F0YL8yitKpCcE9K'),(13,'pdk@ssafy.com',3,'박대기','$2a$10$d/0ECIn1A5iRTLJbOufcweE9x4OzQjZTkJtgGOd4d.Z3cSYYk6tiS'),(14,'jbj@ssafy.com',2,'장범준','$2a$10$/fpvX8hQb8fdegnYJxIx/.U..1mmGxmF2MKjo2ZMfulmWl5a8S2te'),(15,'dt@ssafy.com',3,'동탁','$2a$10$N6PJ3lHb4pg6Fvp2dG8WD.7QrEJhmiRraLSkSOUv4jKeywZ7oAYi.'),(16,'iu@ssafy.com',2,'아이유','$2a$10$/s2irpd0zslQymci2R9VaugkpMx3.d5YZdBJdA6rfj6KZ53R1i4Dy'),(17,'shk@ssafy.com',6,'손한기','$2a$10$C2A9W9c9iGZgNCvrfsg8b.T5dVI0h4na4nADkorB.3AIoN/8BDO7.'),(18,'psh@ssafy.com',3,'박소현','$2a$10$RIyIfr6bPvnDv77Lkn/ZEePhJGgsnN7Sx7h7rXSlt9eAoX2aTzkBS'),(19,'ksm@ssafy.com',6,'강수민','$2a$10$WiO8.JCZtUeSaOkrJd35RO8qs9DxJh1zKGrS/0NaCILAkTeqEZ6G.'),(20,'kkj@ssafy.com',3,'김감자','$2a$10$vl9KM2Sue4nL6b5YL5xLXeUDKj00qN0CdKxFT9mVbJnOGUQi08ur2'),(21,'kingpotato@ssafy.com',3,'왕감자','$2a$10$LqLsX0T24yUaDG/.f96pp.Y5YVysdxUqocciVqU828/.t7npE1cP2'),(22,'ppr@ssafy.com',2,'박베리','$2a$10$03SLw3B/ZFIlgNixm1KRe.vaQqayRMu949wHpQdR5BU4Poay2LcU6'),(23,'kjz@ssafy.com',2,'김진짜','$2a$10$KY/29y79/TXuXEZe1JT0l.ltL6CZdZeGt48ok8c8JSXjoIvx6oY8y'),(24,'honja@tour.com',2,'김투어','$2a$10$mpLwE/1FyhmeThh/aHCn9O/bYDf1ghqAWT.DdYg6Pljx/LBpfjqqq'),(25,'kdh@naver.com',7,'김도현','$2a$10$P3r7qpZXb0JI0JO1FF8c9.ZNQ2e1ZnOVpot2nfImg.WyZZRLzyoI6'),(26,'a@a.a',7,'강소현','$2a$10$fgexy2M7QyCEg/ZSwSQaAeGnU8fHi7uPBVqZRPDR2VZoqF4R0bbiW'),(27,'daeun503',6,'이다은','$2a$10$RZcGTHSE7AgCLb6pYokuxucp9YqHbAmYsWAilptFQXURJIO6G3bXm'),(28,'cha@ssafy.com',7,'차상훈','$2a$10$taD6M9dkknOMjOJ.F4LHz.lw8bHBDsJTjvf.Y.FxJG0Xmerzq12gi'),(29,'mstkang',2,'강시몬','$2a$10$QgPua01ybuXq6S4teqFdReFI8ZduAeMb7LsuzMWCXRzC1YKyNTQGC'),(30,'test01',2,'김민정','$2a$10$FA5gJj1NKA0ZaRaFyCuxg.N04UeNoc1JRvplktyukrBKWTuIrFvUS');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-07 16:28:40
