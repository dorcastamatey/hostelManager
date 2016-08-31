-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 31, 2016 at 10:46 PM
-- Server version: 10.1.9-MariaDB
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `key_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `firstName` varchar(20) NOT NULL,
  `lastName` varchar(20) NOT NULL,
  `managerId` varchar(15) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `firstName`, `lastName`, `managerId`, `email`, `password`) VALUES
(12, 'Dorcas', 'Tamatey', 'dtamatey', 'dorcas.tamatey@ashesi.edu.gh', 'd894191b6bec8c3942e055836929a4b1'),
(13, 'Gloria', 'Tamatey', 'gtamatey', 'gtamatey@ashesi.edu.gh', '5736b335d2b79d0a98a067905b6e3b3f'),
(18, 'Prince', 'Ofori', 'pofori', 'pofori@ashesi.edu.gh', '34ea50e85135492b244314398c7bc301'),
(19, 'Mohammed ', 'Suala', 'msuala', 'msuala@ashesi.edu.gh', 'd652f5ffa6e133aa456765118783fe3a'),
(20, 'Mohammed ', 'Osmanu', 'mosmanu', 'mosmanu@ashesi.edu.gh', 'cc0315afa49cb999dd78e98a6e16835d'),
(24, 'Ali', 'Ibrahim', 'aibrahim', 'aibrahim@ashesi.edu.gh', 'f86ac59ae46a25d4a21b318eb1d6ab42'),
(25, 'Cathrine', 'Awuah Oppong', 'caoppong', 'caoppong@ashesi.edu.gh', '3d34ddbf71c1865c211903efd834053f'),
(26, 'Maku', 'Tamatey', 'mtamatey', 'maku@gmail.com', 'mtamatey');

-- --------------------------------------------------------

--
-- Table structure for table `historic_data`
--

CREATE TABLE `historic_data` (
  `dataId` int(11) NOT NULL,
  `firstName` varchar(20) NOT NULL,
  `lastName` varchar(20) NOT NULL,
  `studentID` varchar(15) NOT NULL,
  `email` varchar(30) DEFAULT NULL,
  `hostelName` varchar(25) NOT NULL,
  `roomNo` varchar(10) NOT NULL,
  `keyNo` varchar(10) NOT NULL,
  `academicYear` varchar(10) NOT NULL,
  `yearGroup` varchar(10) NOT NULL,
  `semester` varchar(15) NOT NULL,
  `contact` varchar(11) NOT NULL,
  `issueDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `historic_data`
--

INSERT INTO `historic_data` (`dataId`, `firstName`, `lastName`, `studentID`, `email`, `hostelName`, `roomNo`, `keyNo`, `academicYear`, `yearGroup`, `semester`, `contact`, `issueDate`) VALUES
(1, 'Gladys', 'Lamptey', '87162019', 'gladys@gmail.com', 'Ephraim Amu', '206', '206_k1', '2016/2017', '2019', ' Fall', '0268763453', '2016-07-27'),
(2, 'Adwoa', 'Lawson', '12345', 'adwoa@gmail.com', 'Ephraim Amo', '206', '206_k2', '2016/2017', '2018', ' Fall', '0268236459', '2016-07-27'),
(3, 'Addelaid ', 'Boakye', '8374637', 'addelaid@gmail.com', 'Ephraim Amo', '206', '206_k3', '2017', '2019', ' Fall', '02484876488', '2016-07-27'),
(4, 'Dorcas', 'Tamatey', '65142016', 'dorcas.tamatey@gmail.com', 'Oteng Koranten', '208', 'k1', '2016/2017', '2017', ' Fall', '0268116462', '2016-08-29'),
(5, 'Gladys ', 'Nortey', '9384754', 'ashesi.hostel.manager@gmail.co', 'Oteng Koranteng', '837', 'k10', '2016/2017', '2017', ' Fall', '02837465', '2016-08-29'),
(6, 'Obed', 'Nortey', '9384750', 'dorcas.tamatey@ashesi.edu.gh', 'Oteng Koranteng', '837', 'k11', '2016/2017', '2017', ' Fall', '02837465', '2016-08-29'),
(7, 'Leticia', 'Adotey', '98674', 'leticia@gmail', 'Ephraim Amo', '8674', 'key1', '', '2020', ' Fall', '048743', '2016-08-31');

-- --------------------------------------------------------

--
-- Table structure for table `lockerkey`
--

CREATE TABLE `lockerkey` (
  `lockerKeyId` int(11) NOT NULL,
  `lockerKey` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lockerkey`
--

INSERT INTO `lockerkey` (`lockerKeyId`, `lockerKey`) VALUES
(2, '206_L2'),
(3, '206_L3'),
(1, '206_L4'),
(6, 'l65rg'),
(4, 'lfg'),
(5, 'locker1'),
(8, 'locker2');

-- --------------------------------------------------------

--
-- Table structure for table `maintainceissues`
--

CREATE TABLE `maintainceissues` (
  `id` int(11) NOT NULL,
  `issue` varchar(50) NOT NULL,
  `location` varchar(15) NOT NULL,
  `reporterName` varchar(30) NOT NULL,
  `contact` varchar(11) NOT NULL,
  `issueStatus` varchar(15) NOT NULL,
  `date_reported` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `maintainceissues`
--

INSERT INTO `maintainceissues` (`id`, `issue`, `location`, `reporterName`, `contact`, `issueStatus`, `date_reported`) VALUES
(1, 'Broken Louvres in room 208', 'Akonor', 'Vida Lartey', '566643', 'Resolved', '2016-07-27'),
(2, 'door lock', 'room 208', 'Asiedu Lamptey', '08765430', 'Resolved', '2016-07-27'),
(3, 'microwaves', 'kitchen', 'Seidu Ali', '0986543', 'Resolved', '2016-07-28'),
(4, 'broken light bulb', '208', 'Dorcas', 'contact', 'not resolved', '2016-08-29'),
(5, 'faulty microwave', 'room 323', 'Linda Korle', '395843', 'Resolved', '2016-08-31');

-- --------------------------------------------------------

--
-- Table structure for table `managers`
--

CREATE TABLE `managers` (
  `id` int(11) NOT NULL,
  `firstName` int(11) NOT NULL,
  `lastName` int(11) NOT NULL,
  `managerId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `theId` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `studentId` varchar(12) NOT NULL,
  `amount` varchar(5) NOT NULL,
  `type` varchar(10) NOT NULL,
  `payDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`theId`, `name`, `studentId`, `amount`, `type`, `payDate`) VALUES
(1, 'Natasha', '299384', '10', 'locker key', '2016-07-27'),
(2, 'Raymond Nartey', '847563', '15', 'locker', '2016-07-27'),
(3, 'Lucy Amoah', '76543', '10', 'locker', '2016-07-27'),
(4, 'Dorcas Tamatey', '65142016', '10.00', 'Room', '2016-08-29'),
(6, 'Aba Larry', '948576', '10', 'room', '2016-08-31'),
(7, 'Aba Larry', '948576', '10', 'locker', '2016-08-31');

-- --------------------------------------------------------

--
-- Table structure for table `roomkeyno`
--

CREATE TABLE `roomkeyno` (
  `keyId` int(11) NOT NULL,
  `room_key` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `roomkeyno`
--

INSERT INTO `roomkeyno` (`keyId`, `room_key`) VALUES
(4, '101'),
(1, '206_k1'),
(3, '206_k3'),
(2, '206_k4'),
(5, 'dkf'),
(15, 'huyrdef'),
(16, 'key1');

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `roomsId` int(11) NOT NULL,
  `roomNo` varchar(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`roomsId`, `roomNo`) VALUES
(3, '204'),
(1, '206'),
(2, '207');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `Id` int(11) NOT NULL,
  `firstName` varchar(20) NOT NULL,
  `lastName` varchar(20) NOT NULL,
  `studentID` varchar(15) NOT NULL,
  `email` varchar(30) DEFAULT NULL,
  `hostelName` varchar(25) NOT NULL,
  `roomNo` varchar(10) NOT NULL,
  `roomKeyNo` varchar(10) NOT NULL,
  `lockerKeyId` varchar(10) NOT NULL,
  `academicYear` varchar(10) NOT NULL,
  `yearGroup` varchar(10) NOT NULL,
  `semester` varchar(15) NOT NULL,
  `contact` varchar(11) NOT NULL,
  `issueDate` date NOT NULL,
  `roomKeyStatus` varchar(15) NOT NULL,
  `lockerKeyStatus` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`Id`, `firstName`, `lastName`, `studentID`, `email`, `hostelName`, `roomNo`, `roomKeyNo`, `lockerKeyId`, `academicYear`, `yearGroup`, `semester`, `contact`, `issueDate`, `roomKeyStatus`, `lockerKeyStatus`) VALUES
(4, 'Dorcas', 'Tamatey', '64142016', 'dorcas.tamatey@gmail.com', 'Oteng Koranten', '208', 'k1', '206_L2', '2016/2017', '2017', '', '0268116462', '2016-08-29', 'Taken', 'Paid'),
(5, 'Gladys ', 'Nortey', '9384754', 'ashesi.hostel.manager@gmail.co', 'Oteng Koranteng', '837', 'k10', 'locker1', '2016/2017', '2017', ' Fall', '02837465', '2016-08-29', 'Taken', 'Taken'),
(10, 'Obed', 'Nortey', '9384750', 'dorcas.tamatey@ashesi.edu.gh', 'Oteng Koranteng', '837', 'k11', '206_L3', '2016/2017', '2017', ' Fall', '02837465', '2016-08-29', 'Taken', 'Returned'),
(11, 'Leticia', 'Adotey', '98674', 'leticia@gmail', 'Ephraim Amo', '8674', 'key1', 'locker2', '', '2020', ' Fall', '048743', '2016-08-31', 'Taken', 'Taken');

-- --------------------------------------------------------

--
-- Table structure for table `visitor`
--

CREATE TABLE `visitor` (
  `visitorId` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `room_visited` varchar(5) NOT NULL,
  `person_visited` varchar(50) NOT NULL,
  `visitor_contact` varchar(12) NOT NULL,
  `host_contact` varchar(11) NOT NULL,
  `date_of_visit` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `visitor`
--

INSERT INTO `visitor` (`visitorId`, `name`, `room_visited`, `person_visited`, `visitor_contact`, `host_contact`, `date_of_visit`) VALUES
(1, 'Anna Naami', '207', 'Grace Larbi', '02688765543', '026457890', '2016-07-27'),
(2, 'Nakotey Mavis', '208', 'Paa Kwesi', '097475463732', '8734747322', '2016-07-27'),
(3, 'Elly Ohene', '207', 'Kweku Ohene', '026789997', '025678909', '2016-07-27'),
(4, 'Grace Forson', '206', 'Cathrine', '029348556', '02857686', '2016-08-29'),
(5, 'Terry Alvin', '687', 'Evans Lartey', '9784', '00969', '2016-08-31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `managerId` (`managerId`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `historic_data`
--
ALTER TABLE `historic_data`
  ADD PRIMARY KEY (`dataId`),
  ADD UNIQUE KEY `studentID` (`studentID`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `lockerkey`
--
ALTER TABLE `lockerkey`
  ADD PRIMARY KEY (`lockerKeyId`),
  ADD UNIQUE KEY `lockerKey` (`lockerKey`);

--
-- Indexes for table `maintainceissues`
--
ALTER TABLE `maintainceissues`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`theId`);

--
-- Indexes for table `roomkeyno`
--
ALTER TABLE `roomkeyno`
  ADD PRIMARY KEY (`keyId`),
  ADD UNIQUE KEY `key` (`room_key`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`roomsId`),
  ADD UNIQUE KEY `roomNo` (`roomNo`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `studentID` (`studentID`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `visitor`
--
ALTER TABLE `visitor`
  ADD PRIMARY KEY (`visitorId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT for table `historic_data`
--
ALTER TABLE `historic_data`
  MODIFY `dataId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `lockerkey`
--
ALTER TABLE `lockerkey`
  MODIFY `lockerKeyId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `maintainceissues`
--
ALTER TABLE `maintainceissues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `theId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `roomkeyno`
--
ALTER TABLE `roomkeyno`
  MODIFY `keyId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `roomsId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `visitor`
--
ALTER TABLE `visitor`
  MODIFY `visitorId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
