-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 25, 2024 at 03:11 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

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
  `Password` varchar(255) NOT NULL,
  `lastLogin` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`AID`, `Username`, `Password`, `lastLogin`) VALUES
(1, 'adminbook1', 'bookinadm427', '2024-03-24 23:31:09'),
(2, 'bokadm4527', 'admbok162d', '2024-03-23 13:18:17');

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `BID` int(11) NOT NULL,
  `UID` int(11) NOT NULL,
  `SID` int(11) NOT NULL,
  `dateTime` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`BID`, `UID`, `SID`, `dateTime`) VALUES
(2, 15, 8, '2024-03-25 05:29:38'),
(3, 15, 9, '2024-03-25 05:32:25'),
(8, 15, 12, '2024-03-25 07:11:43');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `FID` int(11) NOT NULL,
  `UID` int(11) NOT NULL,
  `text` varchar(5000) NOT NULL,
  `dateTime` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`FID`, `UID`, `text`, `dateTime`) VALUES
(1, 15, 'this is a test', '2024-03-24 07:51:13'),
(2, 15, 'test', '2024-03-24 08:16:46');

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
('ashendul@gmail.com', '4kw3RLvyikSEcfGbE1PpY9bXFF7PPbPF', '2024-03-24 01:54:12'),
('greenmartlankan@gmail.com', 'pYkYaJxecglnW4IanRu4o8eo3SdSlqRJ', '2024-03-24 01:59:29');

-- --------------------------------------------------------

--
-- Table structure for table `service`
--

CREATE TABLE `service` (
  `SID` int(11) NOT NULL,
  `SPID` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `LongDescription` varchar(4000) NOT NULL,
  `ShortDescription` varchar(2000) NOT NULL,
  `Image` varchar(255) NOT NULL,
  `Image2` varchar(255) DEFAULT NULL,
  `Image3` varchar(255) DEFAULT NULL,
  `Image4` varchar(255) DEFAULT NULL,
  `Image5` varchar(255) DEFAULT NULL,
  `isAvailable` int(11) NOT NULL DEFAULT 0,
  `Location` varchar(1000) NOT NULL,
  `category` varchar(500) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `Price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `service`
--

INSERT INTO `service` (`SID`, `SPID`, `Name`, `LongDescription`, `ShortDescription`, `Image`, `Image2`, `Image3`, `Image4`, `Image5`, `isAvailable`, `Location`, `category`, `createdAt`, `updatedAt`, `Price`) VALUES
(8, 13, 'Shangrila', 'Shangri-La Hotel, synonymous with luxury and unparalleled hospitality, stands as a global beacon of refined accommodations and extraordinary service. Each Shangri-La Hotel embodies the brand\'s commitment to creating a harmonious and luxurious environment that transcends the ordinary, and guests can expect nothing less from this prestigious hospitality establishment.\n\nUpon entering a Shangri-La Hotel, guests are welcomed into a world of elegance and sophistication. The lobby, often adorned with exquisite artwork and tasteful decor, sets the tone for the opulent experience that awaits. The hotel\'s design seamlessly blends traditional Asian aesthetics with contemporary luxury, creating an ambiance that is both culturally rich and globally resonant.', 'Shangri-La Hotel is a renowned luxury hotel brand known for its opulent accommodations, impeccable service, and exceptional amenities. With a commitment to creating memorable experiences for guests, Shangri-La Hotel offers a sophisticated and indulgent stay, blending Asian-inspired hospitality with global standards of excellence.', '1711117536065-shan 1.jpg', '1711117536066-shan 2.jpg', '1711117536066-shan 3.jpg', '1711117536067-shan 4.jpg', '1711117536067-shan 5.jpg', 0, '2, 1 Colombo - Galle - Hambantota - Wellawaya Hwy, Colombo 00200', 'Hotel', '2024-03-22 14:25:36', '2024-03-22 14:25:36', '35000.00'),
(9, 14, 'Yala Safari', 'Yala Safari presents an immersive journey into the natural wonders of Yala National Park, situated in the southeastern region of Sri Lanka. Spanning over 97,000 hectares, Yala is the second largest national park in the country and boasts a rich biodiversity that beckons adventurers and wildlife enthusiasts from across the globe.\n\nEmbarking on a Yala Safari is like stepping into a realm where untamed beauty reigns supreme. The park\'s diverse ecosystems encompass dense jungles, expansive grasslands, shimmering lakes, and coastal lagoons, providing a habitat for a staggering array of wildlife.', 'Yala Safari offers an exhilarating wildlife experience in the heart of Sri Lanka\'s Yala National Park. Visitors embark on guided safaris through diverse landscapes, encountering majestic creatures such as elephants, leopards, and a myriad of bird species. It\'s a thrilling adventure in one of Asia\'s most renowned wildlife sanctuaries.', '1711118170818-yala1.jpg', '1711118170818-yala3.jpg', '1711118170818-yalka2.jpg', '1711118170818-yala4.jpg', NULL, 0, '2/8 Gunawardana Mawatha, Lake Road, 82600', 'Tour', '2024-03-22 14:36:10', '2024-03-22 14:36:10', '5000.00'),
(10, 15, 'Mitsubishi Lancer', 'The Mitsubishi Lancer, a compact sedan with a rich history, has earned a reputation for blending sporty aesthetics with dynamic performance. Its exterior design is characterized by sleek lines, a distinctive front grille, and a profile that conveys a sense of agility and speed. The Lancer has evolved over the years, adapting to changing automotive trends while maintaining its sporty appeal.\n\nUnder the hood, the Lancer typically features a range of engine options, emphasizing performance and responsiveness. Whether equipped with a fuel-efficient engine for daily commuting or a more powerful option for spirited driving, the Lancer caters to drivers who prioritize an engaging driving experience. The sedan\'s handling and suspension systems are tuned to provide a balanced and responsive ride, contributing to its reputation as a sporty compact car.', 'The Mitsubishi Lancer is a compact sedan known for its sporty design and dynamic performance. Popular for its agility and sleek appearance, the Lancer delivers a spirited driving experience, making it an appealing choice for those seeking a stylish and responsive compact car.', '1711118440185-lancer 1.jpg', '1711118440185-lancer 2.jpg', '1711118440185-lancer 3.jpg', '1711118440186-lancer 4.jpg', NULL, 0, '1533 Kottawa - Malabe Rd, Pannipitiya 10230', 'Vehicle', '2024-03-22 14:40:40', '2024-03-22 14:40:40', '8000.00'),
(12, 12, 'Galle Fort Tour', 'Step into a bygone era with the Galle Fort Tour, a captivating exploration of one of Sri Lanka\'s most historically significant and beautifully preserved sites. Nestled on the southwestern coast, Galle Fort stands as a testament to centuries of cultural intersections, colonial influences, and maritime history.  The journey commences with a stroll along the fortified walls, where the sea breeze carries whispers of the past. Constructed by the Portuguese in the 16th century and later fortified by the Dutch, Galle Fort encapsulates a harmonious blend of European architectural styles infused with South Asian elements. Knowledgeable guides lead participants through cobblestone streets, adorned with colonial-era buildings, charming boutiques, and vibrant cafes.', 'The Galle Fort Tour is a journey into the rich history and architectural splendor of Galle, a UNESCO World Heritage Site in Sri Lanka. Explore the well-preserved Galle Fort, a charming blend of colonial-era structures, cobblestone streets, and vibrant cultural attractions. Immerse yourself in the unique ambiance of this coastal fortress, with its historic landmarks, boutique shops, and panoramic views of the Indian Ocean.', '1711284883382-fort 1.jpg', NULL, NULL, NULL, NULL, 1, 'Galle', 'Tour', '2024-03-24 12:54:43', '2024-03-25 02:10:46', '4000.00'),
(13, 12, 'Anantaya Resort', 'Discover the epitome of luxury at Anataya Resort Chilaw, an idyllic haven situated on the sun-kissed shores of Chilaw in Sri Lanka. This beachfront retreat seamlessly blends contemporary sophistication with the natural beauty of its coastal surroundings, creating an immersive experience for discerning travelers seeking tranquility and indulgence.  Accommodations at Anataya Resort Chilaw epitomize modern elegance, with each room and suite meticulously designed to offer a harmonious blend of comfort and style. Whether overlooking the pristine beach or the lush gardens, every space is a sanctuary of serenity, complete with upscale amenities and thoughtful touches.', 'Anataya Resort Chilaw is a luxury escape nestled on the pristine shores of Chilaw in Sri Lanka. This beachfront resort offers modern elegance, unparalleled comfort, and breathtaking ocean views. Guests can indulge in exquisite cuisine, rejuvenate at the spa, and enjoy a range of recreational activities, making it an ideal destination for a memorable coastal retreat.', '1711285061080-ana1.jpg', NULL, NULL, NULL, NULL, 1, 'Karukupane, Bangadeniya, Chilaw 61000', 'Hotel', '2024-03-24 12:57:41', '2024-03-24 12:57:41', '8000.00');

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
  `isVerified` int(11) NOT NULL DEFAULT 0,
  `lastLogin` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `token` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `serviceprovider`
--

INSERT INTO `serviceprovider` (`SPID`, `email`, `password`, `name`, `address`, `phoneNumber`, `serviceDesc`, `isVerified`, `lastLogin`, `createdAt`, `updatedAt`, `token`) VALUES
(12, 'greenmartlankan@gmail.com', '$2a$10$LPaEQ.vgUzGc3WUM4boIheFg7w6/0NL1BxTd5xVLXIrgkzwLr7/sq', 'Kingsbury', '48 Janadhipathi Mawatha, Colombo', '01124212212', 'The Kingsbury: A premier 5-star hotel boasting breathtaking ocean views in the heart of Colombo. Enjoy luxurious accommodations, diverse dining options, a rejuvenating spa, and exceptional service, all within easy reach of the citys finest attractions and business hub.', 1, '2024-03-25 02:05:39', '2024-03-22 13:28:36', '2024-03-24 22:47:36', NULL),
(13, 'uptimelk@gmail.com', '$2a$10$39yMhKp4lXzEFfZZ./SJcOeQ08gNbB0gj5h6l90odWlmjsSXOGVpq', 'Shangrila', '2, 1 Colombo - Galle - Hambantota - Wellawaya Hwy, Colombo', '0117888288', 'Shangri-La provides world-class accommodations, elegant dining options, rejuvenating spa services, state-of-the-art fitness facilities, and exceptional event spaces for both business and leisure travelers across the globe. Their attentive staff and focus on personalized service create a truly memorable experience for every guest.', 1, '2024-03-25 01:26:22', '2024-03-22 13:33:02', '2024-03-22 13:33:02', NULL),
(14, 'dulabeyse@gmail.com', '$2a$10$0Hmgiw259drUrXpXTKWHGu9WeQxe4KfDC.Pmacszi089pd/RHk462', 'WildLife', 'Pannipitiya, Maharagama', '0112341234', 'Discover the wonders of the natural world on a thrilling journey, creating memories that will last a lifetime as you witness the extraordinary beauty of wildlife.', 1, '2024-03-22 14:33:50', '2024-03-22 13:37:24', '2024-03-22 13:37:24', NULL),
(15, 'sedul9054@gmail.com', '$2a$10$pdLjKQejzUTEVCurSuGC2Oc6wAQMOAoEZjje0dKRx4nLNgWty4ny6', 'GetCar', 'No.3 Polwatta Road, Pannipitiya, Maharagama', '0112341235', 'Find the perfect car for your next adventure, whether you\'re cruising the coast, tackling city streets, or exploring the countryside. Our wide selection of reliable vehicles and transparent pricing put you in the driver\'s seat.', 1, '2024-03-22 14:36:37', '2024-03-22 13:43:43', '2024-03-22 13:43:43', NULL),
(16, 'test@gmail.com', '$2a$10$kSAMuWQauR4DGGEi3ws0nOGcU42i9ktsdPl2g7jIp/wTLkrWLhP7y', 'test', 'test', '123456', 'test', 0, '2024-03-23 21:12:00', '2024-03-23 21:10:42', '2024-03-23 21:10:42', 'wLjqlWHATlsVguHgTvU8CqS8H8EkLxvf');

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
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `token` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`UID`, `email`, `password`, `name`, `address`, `phoneNumber`, `isVerified`, `lastLogin`, `createdAt`, `updatedAt`, `token`) VALUES
(15, 'ashendul@gmail.com', '$2a$10$rjwF0oVDvQv8X8Fo2g6zku.h4nvv64cW1kWUU2Gl4X73JP8agYKlS', 'Ashen Abeysekara', 'Pannipitiya', '0111234567', 1, '2024-03-25 01:34:39', '2024-03-22 13:44:35', '2024-03-22 13:44:35', NULL),
(16, 'test@gmail.com', '$2a$10$6M.63LLNIhP0a/SlicaV/uzrao9DiPapND1N0sVMVQ2c.ERtsls1C', 'test', 'test', '123456', 0, NULL, '2024-03-23 21:09:34', '2024-03-23 21:09:34', '1NFyVGTXo3uHAItT7XepeK8cjJgDknh8'),
(17, 'tes1t@gmail.com', '$2a$10$746xJMcVv6dqsxQ/umKUPOHveleRKQOOTKJt/3HyPUqeGML8mhbqC', 'test', 'test', '123456', 0, NULL, '2024-03-23 21:25:46', '2024-03-23 21:25:46', '1NFyVGTXo3uHAItT7XepeK8cjJgDknh8');

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
  MODIFY `BID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `FID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `service`
--
ALTER TABLE `service`
  MODIFY `SID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `serviceprovider`
--
ALTER TABLE `serviceprovider`
  MODIFY `SPID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `UID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

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
