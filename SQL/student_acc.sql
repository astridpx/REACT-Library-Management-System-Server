-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 01, 2023 at 02:15 PM
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
  `isVerify` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_acc`
--

INSERT INTO `student_acc` (`STUD_ID`, `name`, `stud_no`, `image`, `course`, `section`, `email`, `password`, `isActive`, `role`, `isVerify`) VALUES
(2, 'Jane Anne Luna', 'AY2022-01922', 'https://res.cloudinary.com/df1qkteyi/image/upload/v1677108269/svcc-library-profiles/n4mrm55xdcnglqlwu1ck.jpg', 'BSED', 'BSED-1A1', 'jane@gmail.com', '$2b$10$ha9.eN2kTc2SexsF0oglpu.jJKbjrslcAG3oq15tlvwU3F6mRYA8K', 'false', 'student', 1),
(3, 'Josh Sigua', 'AY2022-09121', 'https://res.cloudinary.com/df1qkteyi/image/upload/v1677108332/svcc-library-profiles/qannoih8v49vyno3rmhq.jpg', 'BSIT', 'BSIT-1A1', 'josh@gmail.com', '$2b$10$hTbCnw8eqGdYqQElthPvROo/zKN01oM7F1oplgpIK6IIfnsavnUum', 'false', 'student', 1),
(17, 'James Chan', 'AY2022-82617', 'https://res.cloudinary.com/df1qkteyi/image/upload/v1677108387/svcc-library-profiles/oi1j6izzeh0zmoprfz9c.jpg', 'BSED', 'BSED-1A1', 'james@gmail.com', '$2b$10$4UgCveDdZ88zhRW1cn4hE.M1LsYkqUI.CZaAUarDC0e0UI2ujAyxG', 'false', 'student', 1),
(21, 'Sarah Mae Dalmacio', 'AY0880-13789', '', 'BSED', 'BSED-2A2', 'sarah@gmail.com', '$2b$10$wQgLfMF9EdQSc3mF7LCg2ulynpLI8sJpkmnwvMtrPC3s1519d5goq', 'false', 'applicants', 1),
(22, 'Jerick Reyes', 'AY0230-92107', '', 'BSIT', 'BSIT-3A1', 'jerick@gmail.com', '$2b$10$8c9xh0pXqfISE6yfb6tFzuZY1uJ7jE/tgWeCz.lqoKkqHC2WQB9IS', 'false', 'student', 1),
(23, 'Alyanna Rivera', 'AY2020-03255', '', 'BSED', 'BSED-2A1', 'yanna@gmail.com', '$2b$10$ASMpBn1qFwi2u1gOAJb5HOJ7BOqjThdJJRrqMr52uRAJaxep1Jpe6', 'false', 'applicants', 1),
(24, 'Jenny Reyes', 'AY3127-31273', 'https://res.cloudinary.com/df1qkteyi/image/upload/v1677108471/svcc-library-profiles/qrnkyd3dppsgiga2hgxz.jpg', 'BSED', 'BSED-4B1', 'jenny@gmail.com', '$2b$10$68aupK31uHMdnKkplkMt1Ol2q77DWk2A5PuNNeqk2oGmimTxee/e2', 'false', 'student', 0),
(31, '00000', 'AY0000-00000', '', '0000', '0000', 'iskycruise01@gmail.com', '$2b$10$OcPx8tgJGCTS0MzUCEDW4eJG7rc0pYwet4AsAweMqMAv/R7Fjp3wO', 'false', 'student', 1);

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
  MODIFY `STUD_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
