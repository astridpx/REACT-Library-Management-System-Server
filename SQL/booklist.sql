-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 15, 2023 at 03:01 AM
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
-- Table structure for table `booklist`
--

CREATE TABLE `booklist` (
  `BOOK_ID` int(11) NOT NULL,
  `isbn` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `author` varchar(100) NOT NULL,
  `published_date` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `booklist`
--

INSERT INTO `booklist` (`BOOK_ID`, `isbn`, `title`, `author`, `published_date`) VALUES
(11, '777-1372-197', 'WEB 3', 'Jack Smith', '2023-02-16'),
(12, '791-7973-197', 'C++', 'Jon Clark', '2022-11-09'),
(14, '667-3012-973', 'ENGLISH', 'Mark Chanbiz', '2023-02-16'),
(18, '828-1821-891', 'NETWORKING', 'Mark Alsino', '2022-11-14'),
(19, '212-3213-123', 'GAME DEVELOPMENT', 'Joan Canstanas', '2022-11-01'),
(20, '917-7219-729', 'MACHINE LEARNING', 'Mark Gutson', '2022-11-29'),
(21, '818-3810-831', 'MATH', 'James Bond', '2022-10-26'),
(22, '047-2277-427', 'CLOUD COMPUTING', 'James Henry', '2022-02-20'),
(25, '018-3018-381', 'PHP BOOK', 'Mark Andrew', '2022-12-20'),
(31, '794-7127-423', 'ARTICLES OF THE PHILIPPINES', 'Rein Sigua', '2023-02-01'),
(32, '809-1193-821', 'SCIENCE', 'Arthur Neri', '2023-03-01'),
(33, '007-1737-917', 'PHYSICS', 'Mae Gomez', '2023-02-23');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booklist`
--
ALTER TABLE `booklist`
  ADD PRIMARY KEY (`BOOK_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booklist`
--
ALTER TABLE `booklist`
  MODIFY `BOOK_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
