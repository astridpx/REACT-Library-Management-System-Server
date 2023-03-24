-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 24, 2023 at 03:06 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_library`
--

-- --------------------------------------------------------

--
-- Table structure for table `issue_book`
--

CREATE TABLE `issue_book` (
  `ISSUE_ID` int(11) NOT NULL,
  `STUD_ID` int(11) NOT NULL,
  `BOOK_ID` int(11) NOT NULL,
  `issue_date` date NOT NULL,
  `return_date` date NOT NULL,
  `isDueDate` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `issue_book`
--

INSERT INTO `issue_book` (`ISSUE_ID`, `STUD_ID`, `BOOK_ID`, `issue_date`, `return_date`, `isDueDate`) VALUES
(41, 17, 18, '2023-02-14', '2023-02-16', 1),
(46, 37, 19, '2023-03-14', '2023-03-15', 1),
(50, 3, 32, '2023-03-19', '2023-03-21', 1),
(51, 3, 22, '2023-03-19', '2023-03-27', 0),
(53, 3, 33, '2023-03-19', '2023-03-25', 0),
(54, 2, 20, '2023-03-22', '2023-03-31', 0),
(56, 17, 12, '2023-03-22', '2023-03-23', 1),
(57, 2, 11, '2023-03-22', '2023-03-23', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `issue_book`
--
ALTER TABLE `issue_book`
  ADD PRIMARY KEY (`ISSUE_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `issue_book`
--
ALTER TABLE `issue_book`
  MODIFY `ISSUE_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
