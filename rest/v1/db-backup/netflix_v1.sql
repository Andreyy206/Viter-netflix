-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 30, 2024 at 08:28 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `netflix_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `netflix_movies`
--

CREATE TABLE `netflix_movies` (
  `movies_aid` int(11) NOT NULL,
  `movies_title` varchar(150) NOT NULL,
  `movies_year` varchar(10) NOT NULL,
  `movies_genre` varchar(20) NOT NULL,
  `movies_rating` varchar(20) NOT NULL,
  `movies_duration` varchar(15) NOT NULL,
  `movies_summary` text NOT NULL,
  `movies_cast` text NOT NULL,
  `movies_image` varchar(50) NOT NULL,
  `movies_category` varchar(50) NOT NULL,
  `movies_is_active` tinyint(1) NOT NULL,
  `movies_datetime` varchar(20) NOT NULL,
  `movies_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `netflix_movies`
--

INSERT INTO `netflix_movies` (`movies_aid`, `movies_title`, `movies_year`, `movies_genre`, `movies_rating`, `movies_duration`, `movies_summary`, `movies_cast`, `movies_image`, `movies_category`, `movies_is_active`, `movies_datetime`, `movies_created`) VALUES
(20, 'Kdrama 1', 'asdada', 'dad', 'adad', 'adad', 'adad', 'dadad', 'poster.jpg', 'kdrama', 1, '2024-10-30 15:00:56', '2024-10-30 14:30:19'),
(21, 'International 1', '2024', 'sdsds', 'sdsd', 'sdsdds', 'asas', 'asasas', 'poster.jpg', 'international 1', 1, '2024-10-30 14:31:06', '2024-10-30 14:31:06'),
(22, 'Pinoy 1', '2023', 'asas', 'saasa', 'asas', 'sasasa', 'sasass', 'poster.jpg', 'pinoy 1', 1, '2024-10-30 14:31:32', '2024-10-30 14:31:32'),
(23, 'Kdrama 2', 'sasas', 'asasa', 'asasas', 'asas', 'dasasda', 'daadsad', 'poster.jpg', 'kdrama', 1, '2024-10-30 14:57:27', '2024-10-30 14:48:46'),
(24, 'Kdrama 3', 'adsads', 'asassa', 'asasa', 'asas', 'dcsds', 'dsdsds', 'poster.jpg', 'kdrama', 1, '2024-10-30 14:57:31', '2024-10-30 14:51:00'),
(25, 'Kdrama 4', 'sdsds', 'sdsd', 'sdsd', 'sdsd', 'sadsads', 'sdsdsd', 'poster.jpg', 'kdrama', 1, '2024-10-30 14:57:36', '2024-10-30 14:51:24'),
(26, 'Kdrama 5', 'sasa', 'sasas', 'asas', 'asas', 'asasa', 'sasas', 'poster.jpg', 'kdrama', 1, '2024-10-30 14:57:39', '2024-10-30 14:56:13'),
(27, 'Pinoy 2', 'asasas', 'asassa', 'asasa', 'asas', 'dfdffd', 'dfdfdf', 'poster.jpg', 'pinoy', 1, '2024-10-30 14:58:10', '2024-10-30 14:58:10'),
(28, 'Pinoy 3', 'asasas', 'desfgdsf', 'sdfds', 'dsfdsff', 'dfdfdf', 'dfsdfffd', 'poster.jpg', 'pinoy', 1, '2024-10-30 14:58:29', '2024-10-30 14:58:29'),
(29, 'Pinoy 4', 'gfdgfdf', 'dgfdgd', 'gfdfgdgf', 'dfdf', 'ghghgh', 'ghghgh', 'poster.jpg', 'pinoy', 1, '2024-10-30 14:58:49', '2024-10-30 14:58:49'),
(30, 'Pinoy 5', 'fgfgfg', 'ghjgh', 'ghghhg', 'ghghghs', 'fgfgfg', 'fhfhfhfh', 'poster.jpg', 'pinoy', 1, '2024-10-30 14:59:12', '2024-10-30 14:59:12'),
(31, 'International 2', 'dfsdfsdfsd', 'fdsfdsf', 'dsfdsfsdf', 'dsfdsfsdf', 'dfgdfgdfd', 'dfgdfdfdf', 'poster.jpg', 'international', 1, '2024-10-30 14:59:34', '2024-10-30 14:59:34'),
(32, 'International 3', 'fgfgfg', 'fgfgfd', 'dfgfdg', 'fdgdfgfd', 'dfgdfgdfg', 'fdghfgfg', 'poster.jpg', 'international', 1, '2024-10-30 14:59:55', '2024-10-30 14:59:55'),
(33, 'International 4', 'fhdfgdf', 'fgdfgdf', 'dfgfdgdfg', 'dfgdfgdfg', 'sdsdsd', 'sdd sadssad', 'poster.jpg', 'international', 1, '2024-10-30 15:00:17', '2024-10-30 15:00:17'),
(34, 'International 5', 'hghjfghj', 'yjhghjg', 'dfdsdfs', 'uyguyguy', 'dfdfsf', 'fdssgdsgdsed', 'poster.jpg', 'international', 1, '2024-10-30 15:00:39', '2024-10-30 15:00:39');

-- --------------------------------------------------------

--
-- Table structure for table `netflix_top_movies`
--

CREATE TABLE `netflix_top_movies` (
  `topmovies_aid` int(11) NOT NULL,
  `topmovies_title` varchar(100) NOT NULL,
  `topmovies_year` varchar(10) NOT NULL,
  `topmovies_genre` varchar(20) NOT NULL,
  `topmovies_rating` varchar(20) NOT NULL,
  `topmovies_duration` varchar(10) NOT NULL,
  `topmovies_summary` text NOT NULL,
  `topmovies_cast` text NOT NULL,
  `topmovies_image` varchar(30) NOT NULL,
  `topmovies_category` varchar(20) NOT NULL,
  `topmovies_is_active` tinyint(1) NOT NULL,
  `topmovies_datetime` varchar(20) NOT NULL,
  `topmovies_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `netflix_movies`
--
ALTER TABLE `netflix_movies`
  ADD PRIMARY KEY (`movies_aid`);

--
-- Indexes for table `netflix_top_movies`
--
ALTER TABLE `netflix_top_movies`
  ADD PRIMARY KEY (`topmovies_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `netflix_movies`
--
ALTER TABLE `netflix_movies`
  MODIFY `movies_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `netflix_top_movies`
--
ALTER TABLE `netflix_top_movies`
  MODIFY `topmovies_aid` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
