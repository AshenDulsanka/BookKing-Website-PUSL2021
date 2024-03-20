-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 20, 2024 at 12:00 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookkingdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `AID` int(11) NOT NULL,
  `Username` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`AID`, `Username`, `Password`) VALUES
(1, 'adminbook1', 'bookinadm427'),
(2, 'bokadm4527', 'admbok162d');

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `BID` int(11) NOT NULL,
  `UID` int(11) NOT NULL,
  `SID` int(11) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `dateTime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `FID` int(11) NOT NULL,
  `UID` int(11) NOT NULL,
  `text` varchar(5000) NOT NULL,
  `dateTime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `NID` int(11) NOT NULL,
  `Content` varchar(1000) NOT NULL,
  `dateTime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `passwordresets`
--

CREATE TABLE `passwordresets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `passwordresets`
--

INSERT INTO `passwordresets` (`email`, `token`, `createdAt`) VALUES
('dulabeyse@gmail.com', 'zenzYPmdf5XmFnlfY64z3U6WECNvu80D', '2024-03-20 02:25:12'),
('ashendul@gmail.com', 'O2wjwQUSBfihdQ028GvocUgiNfWriRRB', '2024-03-20 10:46:35');

-- --------------------------------------------------------

--
-- Table structure for table `service`
--

CREATE TABLE `service` (
  `SID` int(11) NOT NULL,
  `SPID` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Amount` decimal(10,2) NOT NULL,
  `LongDescription` varchar(4000) NOT NULL,
  `ShortDescription` varchar(2000) NOT NULL,
  `Image` varchar(255) NOT NULL,
  `Image2` varchar(255) DEFAULT NULL,
  `Image3` varchar(255) DEFAULT NULL,
  `Image4` varchar(255) DEFAULT NULL,
  `Image5` varchar(255) DEFAULT NULL,
  `isAvailable` tinyint(1) NOT NULL,
  `Location` varchar(1000) NOT NULL,
  `category` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `serviceprovider`
--

CREATE TABLE `serviceprovider` (
  `SPID` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phoneNumber` varchar(20) NOT NULL,
  `serviceDesc` varchar(500) NOT NULL,
  `category` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `UID` int(11) NOT NULL,
  `email` varchar(500) NOT NULL,
  `password` varchar(500) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(1000) NOT NULL,
  `phoneNumber` varchar(20) NOT NULL,
  `isVerified` int(11) NOT NULL DEFAULT 0,
  `lastLogin` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updateddAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `token` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`UID`, `email`, `password`, `name`, `address`, `phoneNumber`, `isVerified`, `lastLogin`, `createdAt`, `updateddAt`, `token`) VALUES
(2, 'test@gmail.com', '$2a$10$VSlzmC7GD65neGrbmbZM0OXvfewjjBG6TrowoIres/v.yPEFvALFq', 'test', 'Pannipitiya', '0111234567', 0, NULL, '2024-03-16 13:42:32', '2024-03-16 13:42:32', '12ouKAQ2VSNYEZHSPDKeqpLs5sMWOtIJ'),
(3, 'uptimelk@gmail.com', '$2a$10$0SE0m.gpxgNmxckgS5TgIOuIKi7QiYORpNVkQvqj8CbvdOfMUl2ie', 'test', 'Pannipitiya', '0111234567', 0, NULL, '2024-03-16 13:44:21', '2024-03-16 13:44:21', '12ouKAQ2VSNYEZHSPDKeqpLs5sMWOtIJ'),
(8, 'greenmartlankan@gmail.com', '$2a$10$DnG.qVk/ur0GcBPxIP./r.e9pS2BpPP7.IccY3YRlC4cYBALuUhOu', 'test', 'Pannipitiya', '0111234567', 1, NULL, '2024-03-17 08:31:34', '2024-03-17 08:31:34', NULL),
(11, 'ashendul@gmail.com', '$2a$10$ad8F8qinR54YbU.xTDwFHeJaKD.ej01n1Az1Rj4/.za0taKVAyFxS', 'Ashen Abeysekara', '', '', 1, '2024-03-20 10:46:30', '2024-03-19 01:12:23', '2024-03-19 01:12:23', NULL),
(12, 'dulabeyse@gmail.com', '$2a$10$yeS/Pb8GvUEi.3is.2Rhpux7hAEYIqhJCawgyz8hcXHEJliPli3HK', 'test', 'Pannipitiya', '0111234567', 1, '2024-03-19 17:04:50', '2024-03-19 01:17:15', '2024-03-19 01:17:15', NULL),
(13, 'test1@gmail.com', '$2a$10$XZOhAlSdfqVEhPyGhEUAeOOtGXCyK3zG2dAtsf1kPHwO3EKB867g.', 'test', 'Pannipitiya', '0111234567', 0, NULL, '2024-03-20 02:11:05', '2024-03-20 02:11:05', 'eteVGeuRV9buKt2Jf6roNGEt8y50NQDA');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`AID`);

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`BID`),
  ADD KEY `UID` (`UID`),
  ADD KEY `SID` (`SID`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`FID`),
  ADD KEY `UID` (`UID`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`NID`);

--
-- Indexes for table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`SID`),
  ADD KEY `SPID` (`SPID`);

--
-- Indexes for table `serviceprovider`
--
ALTER TABLE `serviceprovider`
  ADD PRIMARY KEY (`SPID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `AID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `BID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `FID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `NID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `service`
--
ALTER TABLE `service`
  MODIFY `SID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `serviceprovider`
--
ALTER TABLE `serviceprovider`
  MODIFY `SPID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `UID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `booking`
--
ALTER TABLE `booking`
  ADD CONSTRAINT `booking_ibfk_1` FOREIGN KEY (`UID`) REFERENCES `users` (`UID`),
  ADD CONSTRAINT `booking_ibfk_2` FOREIGN KEY (`SID`) REFERENCES `service` (`SID`);

--
-- Constraints for table `feedback`
--
ALTER TABLE `feedback`
  ADD CONSTRAINT `feedback_ibfk_1` FOREIGN KEY (`UID`) REFERENCES `users` (`UID`);

--
-- Constraints for table `service`
--
ALTER TABLE `service`
  ADD CONSTRAINT `service_ibfk_1` FOREIGN KEY (`SPID`) REFERENCES `serviceprovider` (`SPID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
