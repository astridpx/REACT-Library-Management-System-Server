-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 15, 2023 at 03:04 AM
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
-- Table structure for table `student_acc`
--

CREATE TABLE `student_acc` (
  `STUD_ID` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `stud_no` varchar(100) NOT NULL,
  `image` text NOT NULL,
  `course` varchar(100) NOT NULL,
  `section` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `isActive` varchar(100) NOT NULL DEFAULT 'false',
  `role` varchar(100) NOT NULL DEFAULT 'applicants',
  `isAUTHORIZE` varchar(100) NOT NULL DEFAULT 'false'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_acc`
--

INSERT INTO `student_acc` (`STUD_ID`, `name`, `stud_no`, `image`, `course`, `section`, `email`, `password`, `isActive`, `role`, `isAUTHORIZE`) VALUES
(2, 'Jane Anne Luna', 'AY2022-01921', '1670917816758.png', 'BSED', 'BSED-1A1', 'jane@gmail.com', '$2b$10$ri22bXWrmlkY58Np5/MSROYcXIV4WRcUH.PGOwq9aOqWFRe2g8zl6', 'false', 'student', 'true'),
(3, 'Josh Sigua', 'AY2022-09121', '1670917780641.png', 'BSIT', 'BSIT-1A1', 'josh@gmail.com', '$2b$10$hTbCnw8eqGdYqQElthPvROo/zKN01oM7F1oplgpIK6IIfnsavnUum', 'false', 'student', 'true'),
(17, 'James Chan', 'AY2022-82617', '1676170573298.jpg', 'BSED', 'BSED-1A1', 'james@gmail.com', '$2b$10$4UgCveDdZ88zhRW1cn4hE.M1LsYkqUI.CZaAUarDC0e0UI2ujAyxG', 'false', 'student', 'true'),
(21, 'Sarah Mae Dalmacio', 'AY0880-13789', '', 'BSED', 'BSED-2A2', 'sarah@gmail.com', '$2b$10$wQgLfMF9EdQSc3mF7LCg2ulynpLI8sJpkmnwvMtrPC3s1519d5goq', 'false', 'applicants', 'true'),
(22, 'Jerick Reyes', 'AY0230-92107', '', 'BSIT', 'BSIT-3A1', 'jerick@gmail.com', '$2b$10$8c9xh0pXqfISE6yfb6tFzuZY1uJ7jE/tgWeCz.lqoKkqHC2WQB9IS', 'false', 'student', 'true'),
(23, 'Alyanna Rivera', 'AY2020-03255', '', 'BSED', 'BSED-2A1', 'yanna@gmail.com', '$2b$10$ASMpBn1qFwi2u1gOAJb5HOJ7BOqjThdJJRrqMr52uRAJaxep1Jpe6', 'false', 'applicants', 'false'),
(24, 'Jenny Reyes', 'AY3127-31273', '1676422184585.png', 'BSED', 'BSED-4B1', 'jenny@gmail.com', '$2b$10$68aupK31uHMdnKkplkMt1Ol2q77DWk2A5PuNNeqk2oGmimTxee/e2', 'false', 'student', 'false');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `student_acc`
--
ALTER TABLE `student_acc`
  ADD PRIMARY KEY (`STUD_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `student_acc`
--
ALTER TABLE `student_acc`
  MODIFY `STUD_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
