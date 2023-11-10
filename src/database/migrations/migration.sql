-- Create brand table
CREATE TABLE `brand` (
  `ID` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Create category table
CREATE TABLE `category` (
  `ID` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Create products table
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

-- Create rol table
CREATE TABLE `rol` (
  `id` varchar(200) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Create sales_detail table
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

-- Create user table
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
