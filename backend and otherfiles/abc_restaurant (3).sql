-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 11, 2024 at 03:21 PM
-- Server version: 8.2.0
-- PHP Version: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `abc_restaurant`
--

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
CREATE TABLE IF NOT EXISTS `payments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `amount` decimal(10,2) DEFAULT NULL,
  `paymentMethod` varchar(50) DEFAULT NULL,
  `reservationId` int DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `amount`, `paymentMethod`, `reservationId`, `createdAt`) VALUES
(1, 200.00, 'Credit Card', 300, '2024-09-11 06:36:16'),
(2, 200.00, 'Credit Card', 300, '2024-09-11 06:36:17'),
(3, 200.00, 'Credit Card', 300, '2024-09-11 06:36:18'),
(4, 200.00, 'Credit Card', 300, '2024-09-11 06:36:18'),
(5, 200.00, 'Credit Card', 300, '2024-09-11 06:36:18'),
(6, 200.00, 'Credit Card', 300, '2024-09-11 06:36:19'),
(7, 200.00, 'Credit Card', 300, '2024-09-11 06:36:20'),
(8, 200.00, 'Credit Card', 300, '2024-09-11 06:36:20'),
(9, 200.00, 'Credit Card', 300, '2024-09-11 06:36:21'),
(10, 200.00, 'Credit Card', 300, '2024-09-11 06:36:24'),
(11, 100.00, 'Debit Card', 2, '2024-09-11 06:56:04'),
(12, 45.00, 'Credit Card', 454, '2024-09-11 06:56:29'),
(13, 45.00, 'Credit Card', 454, '2024-09-11 06:56:30'),
(14, 45.00, 'Credit Card', 454, '2024-09-11 06:56:30'),
(15, 45.00, 'Credit Card', 454, '2024-09-11 06:56:30'),
(16, 45.00, 'Credit Card', 454, '2024-09-11 06:56:31'),
(17, 45.00, 'Credit Card', 454, '2024-09-11 07:02:05'),
(18, 200.00, 'PayPal', 3, '2024-09-11 07:22:25'),
(19, 200.00, 'PayPal', 3, '2024-09-11 07:22:27'),
(20, 200.00, 'PayPal', 3, '2024-09-11 07:22:27'),
(21, 300.00, 'PayPal', 6, '2024-09-11 07:36:10'),
(22, 50.00, 'Credit Card', 4, '2024-09-11 08:06:43'),
(23, 50.00, 'PayPal', 12, '2024-09-11 08:20:14'),
(24, 50.00, 'PayPal', 12, '2024-09-11 08:39:38'),
(25, 100.00, 'PayPal', 60, '2024-09-11 09:08:09'),
(26, 120.00, 'PayPal', 1, '2024-09-11 09:35:33');

-- --------------------------------------------------------

--
-- Table structure for table `queries`
--

DROP TABLE IF EXISTS `queries`;
CREATE TABLE IF NOT EXISTS `queries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `queryText` text NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `queries`
--

INSERT INTO `queries` (`id`, `userId`, `queryText`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'dADd', '2024-09-10 11:02:14', '2024-09-10 11:02:14'),
(8, 0, 'Reservation for five', '2024-09-16 21:21:57', '2024-09-27 21:21:57'),
(7, 0, 'Need a table for two', '2024-09-15 21:21:57', '2024-09-16 21:21:57');

-- --------------------------------------------------------

--
-- Table structure for table `reservations`
--

DROP TABLE IF EXISTS `reservations`;
CREATE TABLE IF NOT EXISTS `reservations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `serviceType` enum('dine-in','delivery') NOT NULL,
  `guests` int NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `requests` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `reservations`
--

INSERT INTO `reservations` (`id`, `name`, `email`, `phone`, `serviceType`, `guests`, `date`, `time`, `requests`) VALUES
(1, 'Shankavee', 'shanthiya0211@gmail.com', '0774999224', 'dine-in', 3, '2024-09-30', '00:42:00', 'vyhvg');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
CREATE TABLE IF NOT EXISTS `services` (
  `service_id` int NOT NULL AUTO_INCREMENT,
  `service_name` varchar(255) NOT NULL,
  `service_type` varchar(100) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `available_dates` text,
  PRIMARY KEY (`service_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`service_id`, `service_name`, `service_type`, `location`, `price`, `available_dates`) VALUES
(1, 'dine-in', 'self', 'jaffna', 250.00, '02.10.2024');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`, `role`) VALUES
(1, 'ab', 'ab@gmail.com', '120', 'customer'),
(2, 'a1', 'a1@gmail.com', 'a1', 'admin'),
(3, 's1', 's1@gmail.com', 's1', 'staff');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
