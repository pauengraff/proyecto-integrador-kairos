-- MariaDB dump 10.19  Distrib 10.4.28-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: kairos_db
-- ------------------------------------------------------
-- Server version	10.4.28-MariaDB

CREATE DATABASE IF NOT EXISTS `kairos_db`;
USE `kairos_db`;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brand` (
  `ID` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES (1,'Garmin'),(2,'Colmi'),(3,'Suunto'),(4,'Rolex'),(5,'Tag Heuer'),(6,'Omega'),(7,'Casio'),(8,'Seiko'),(9,'Tissot'),(10,'Imilab');
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `ID` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Clasico'),(2,'Deportivo'),(3,'Moda Alta Gama'),(4,'Deporte Profesional');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `ID` varchar(200) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `image` varchar(255) NOT NULL,
  `id_category` int(11) DEFAULT NULL,
  `id_brand` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_products_category` (`id_category`),
  KEY `fk_products_brand` (`id_brand`),
  CONSTRAINT `fk_products_brand` FOREIGN KEY (`id_brand`) REFERENCES `brand` (`ID`),
  CONSTRAINT `fk_products_category` FOREIGN KEY (`id_category`) REFERENCES `category` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES ('26771aef-cfec-4aec-b177-96bedc578f10','Suunto 456','El mejor reloj para trail de larga duracion',150000.00,'image-1694804289942.jpg',1,3),('26881aef-cfec-8aec-b177-69bedc578f11','P8','Reloj economico',10500.00,'image-1694804448137.jpg',2,2),('92f89435-8a31-49a8-ba91-e21fad38bb6f','TISSOT','Reloj Tissot Alta Gama',185000.00,'default-image.jpeg',3,9),('a6bc021f-b02f-4986-9444-a4e40561856f','Fenix 4','Lo mas de lo mas para correr',210000.00,'image-1694803791664.jpg',1,1),('b40302ea-a331-4fe0-9822-118ca37559bf','FENIX 6','Reloj Cristal de Zafiro Carga Solar',256000.00,'image-1699377618847.jpg',4,7),('c0bb5ff4-1dd0-4424-aa2f-2b376b3b5ec6','T REX','El mejor reloj outdoor',10250.00,'image-1694804801750.jpg',2,10);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rol` (
  `id` varchar(200) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES ('1','admin'),('2','user'),('3','guest');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales_detail`
--

DROP TABLE IF EXISTS `sales_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sales_detail` (
  `ID` varchar(200) NOT NULL,
  `name` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `quantity` int(11) NOT NULL,
  `id_products` varchar(200) DEFAULT NULL,
  `id_user` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_sales_detail_products` (`id_products`),
  KEY `fk_sales_detail_user` (`id_user`),
  CONSTRAINT `fk_sales_detail_products` FOREIGN KEY (`id_products`) REFERENCES `products` (`ID`),
  CONSTRAINT `fk_sales_detail_user` FOREIGN KEY (`id_user`) REFERENCES `user` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales_detail`
--

LOCK TABLES `sales_detail` WRITE;
/*!40000 ALTER TABLE `sales_detail` DISABLE KEYS */;
/*!40000 ALTER TABLE `sales_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `ID` varchar(200) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `birth_date` date NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `id_rol` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_user_rol` (`id_rol`),
  CONSTRAINT `fk_user_rol` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('295201ae-2e04-479d-846b-56263aff16ea','ADMIN','ADMIN','admin@admin.com','2000-01-01','$2a$10$HdE.Kl2.LB7o.kxq3kIYUOiGJxGCGb/Bp1k1PIUYSmOvwr2uah/eG','avatar-1699466590710.jpg','1'),('669c76c3-65a2-48e2-90a1-78b91d8ba2e9','Manuel','Morales','manuelmorales@gmail.com','1995-10-23','$2a$10$h8.H.7uO4P.XhbyyiXpZkOxs/sY8M/yNpbSzELBWYXPddaJnKTMZ6','avatar-1698155538638.jpg','2'),('bc34bc82-3cf3-4594-a1ef-b4a57c818fa5','Pedro','Gomez','pedrogomez@hotmail.com','1998-10-21','$2a$10$gyhI2Sa0pl4/03t8nhDCRutMrzSdsSWMRd/GGHRB/AOv62jTrvhyW','avatar-1698948422310.jpg','2'),('d2c64f30-d124-4b07-adf7-6abdbb8ec8de','Guillermina','Carrera','guillerminacarrera@gmail.com','1997-02-14','$2a$10$AiJJPDDf/B1mxisVDSoUM.mK.G6X4z/wWoGKtSfb/WYZBImyvGPUq','avatar-1698155604128.jpg','2'),('ed21373f-7a9b-4ef2-94d7-788f6f9fe7c8','Victoria','Enriquez','victoriaenriquez@gmail.com','1983-11-05','$2a$10$rM2hmpAZzNo9atOzh5CSGOXFJD6QVSoU5uyXtTD2kZNLwfH6PyQmG','avatar-1698155256210.jpg','2');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'kairos_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-08 19:57:27
