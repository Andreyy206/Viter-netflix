-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 15, 2024 at 08:45 AM
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
(22, 'Pinoy 1', 'ASASASA', 'asasa', 'saasa', 'asas', 'sasasa', 'sasass', 'poster.jpg', 'Pinoy', 1, '2024-11-04 10:23:35', '2024-10-30 14:31:32'),
(23, 'Kdrama 2', 'sasas', 'asasa', 'asasas', 'asas', 'dasasda', 'daadsad', 'poster.jpg', 'kdrama', 1, '2024-10-30 14:57:27', '2024-10-30 14:48:46'),
(24, 'Kdrama 3', 'adsads', 'asassa', 'asasa', 'asas', 'dcsds', 'dsdsds', 'poster.jpg', 'kdrama', 1, '2024-10-30 14:57:31', '2024-10-30 14:51:00'),
(25, 'Kdrama 4', 'sdsds', 'sdsd', 'sdsd', 'sdsd', 'sadsads', 'sdsdsd', 'poster.jpg', 'kdrama', 1, '2024-10-30 14:57:36', '2024-10-30 14:51:24'),
(26, 'Kdrama 5', 'sasa', 'sasas', 'asas', 'asas', 'asasa', 'sasas', 'poster.jpg', 'kdrama', 1, '2024-10-30 14:57:39', '2024-10-30 14:56:13'),
(28, 'Pinoy 3', 'asasas', 'desfgdsf', 'sdfds', 'dsfdsff', 'dfdfdf', 'dfsdfffd', 'poster.jpg', 'pinoy', 1, '2024-11-04 12:35:15', '2024-10-30 14:58:29'),
(31, 'International 2', 'dfsdfsdfsd', 'fdsfdsf', 'dsfdsfsdf', 'dsfdsfsdf', 'dfgdfgdfd', 'dfgdfdfdf', 'poster.jpg', 'international', 1, '2024-10-30 14:59:34', '2024-10-30 14:59:34'),
(32, 'International 3', 'fgfgfg', 'fgfgfd', 'dfgfdg', 'fdgdfgfd', 'dfgdfgdfg', 'fdghfgfg', 'poster.jpg', 'international', 1, '2024-10-30 14:59:55', '2024-10-30 14:59:55'),
(33, 'International 4', 'fhdfgdf', 'fgdfgdf', 'dfgfdgdfg', 'dfgdfgdfg', 'sdsdsd', 'sdd sadssad', 'poster.jpg', 'international', 1, '2024-10-30 15:00:17', '2024-10-30 15:00:17'),
(34, 'International 5', 'hghjfghj', 'yjhghjg', 'dfdsdfs', 'uyguyguy', 'dfdfsf', 'fdssgdsgdsed', 'poster.jpg', 'international', 1, '2024-10-30 15:00:39', '2024-10-30 15:00:39');

-- --------------------------------------------------------

--
-- Table structure for table `netflix_settings_category`
--

CREATE TABLE `netflix_settings_category` (
  `category_aid` int(11) NOT NULL,
  `category_title` varchar(50) NOT NULL,
  `category_is_active` tinyint(1) NOT NULL,
  `category_datetime` varchar(20) NOT NULL,
  `category_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `netflix_settings_category`
--

INSERT INTO `netflix_settings_category` (`category_aid`, `category_title`, `category_is_active`, `category_datetime`, `category_created`) VALUES
(0, 'International', 1, '2024-11-04 09:58:41', '2024-11-04 09:58:41'),
(0, 'Kdrama', 1, '2024-11-04 09:58:47', '2024-11-04 09:58:47'),
(0, 'Pinoy', 1, '2024-11-04 09:58:52', '2024-11-04 09:58:52'),
(0, 'asasasa', 1, '2024-11-04 13:48:25', '2024-11-04 13:48:25'),
(0, 'sdsadass', 1, '2024-11-04 13:49:11', '2024-11-04 13:49:11'),
(0, 'sdsadsdsd', 1, '2024-11-04 13:55:32', '2024-11-04 13:55:32');

-- --------------------------------------------------------

--
-- Table structure for table `netflix_settings_genre`
--

CREATE TABLE `netflix_settings_genre` (
  `genre_aid` int(11) NOT NULL,
  `genre_title` varchar(50) NOT NULL,
  `genre_is_active` tinyint(1) NOT NULL,
  `genre_datetime` varchar(20) NOT NULL,
  `genre_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `netflix_settings_genre`
--

INSERT INTO `netflix_settings_genre` (`genre_aid`, `genre_title`, `genre_is_active`, `genre_datetime`, `genre_created`) VALUES
(1, 'asasa', 1, '2024-11-04 09:30:50', '2024-11-04 09:30:50'),
(2, 'asasasasd', 1, '2024-11-04 13:46:52', '2024-11-04 13:46:52'),
(3, 'adsadsdads', 1, '2024-11-04 13:46:56', '2024-11-04 13:46:56'),
(4, 'sdasdas', 1, '2024-11-04 13:49:20', '2024-11-04 13:49:20'),
(5, 'asas', 1, '2024-11-04 13:51:40', '2024-11-04 13:51:40'),
(6, 'csfcscs', 1, '2024-11-04 13:55:41', '2024-11-04 13:55:41'),
(7, 'dfsfvds', 1, '2024-11-04 13:55:47', '2024-11-04 13:55:47');

-- --------------------------------------------------------

--
-- Table structure for table `netflix_settings_ratings`
--

CREATE TABLE `netflix_settings_ratings` (
  `_` int(11) NOT NULL,
  `ratings_aid` int(11) NOT NULL,
  `ratings_title` varchar(50) NOT NULL,
  `ratings_is_active` tinyint(1) NOT NULL,
  `ratings_datetime` varchar(20) NOT NULL,
  `ratings_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `netflix_settings_ratings`
--

INSERT INTO `netflix_settings_ratings` (`_`, `ratings_aid`, `ratings_title`, `ratings_is_active`, `ratings_datetime`, `ratings_created`) VALUES
(0, 1, 'asasaas', 1, '2024-11-04 10:11:37', '2024-11-04 09:36:58'),
(0, 2, 'asasas', 1, '2024-11-04 10:11:31', '2024-11-04 10:11:31'),
(0, 3, 'asasa', 1, '2024-11-04 13:50:19', '2024-11-04 13:50:19'),
(0, 4, 'ghfghhfg', 1, '2024-11-04 13:50:24', '2024-11-04 13:50:24'),
(0, 5, 'qwerty', 1, '2024-11-04 13:53:40', '2024-11-04 13:53:40');

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
-- Dumping data for table `netflix_top_movies`
--

INSERT INTO `netflix_top_movies` (`topmovies_aid`, `topmovies_title`, `topmovies_year`, `topmovies_genre`, `topmovies_rating`, `topmovies_duration`, `topmovies_summary`, `topmovies_cast`, `topmovies_image`, `topmovies_category`, `topmovies_is_active`, `topmovies_datetime`, `topmovies_created`) VALUES
(5, 'ttt', 'gngn', 'gngn', 'ghngn', 'nnhgn', 'hmhm', 'mhmh', 'poster.jpg', '1', 1, '2024-10-31 07:57:11', '2024-10-31 07:57:11'),
(6, 'TTTT', 'GFGFG', 'GFFG', 'fdfd', 'fdfsf', 'fgvdvg', 'gvvgvfd', 'Logo-netflix.png', '1', 1, '2024-10-31 08:29:06', '2024-10-31 08:29:06');

-- --------------------------------------------------------

--
-- Table structure for table `netflix_top_series`
--

CREATE TABLE `netflix_top_series` (
  `topseries_aid` int(50) NOT NULL,
  `topseries_title` varchar(150) NOT NULL,
  `topseries_year` varchar(10) NOT NULL,
  `topseries_genre` varchar(20) NOT NULL,
  `topseries_rating` varchar(20) NOT NULL,
  `topseries_duration` varchar(15) NOT NULL,
  `topseries_summary` text NOT NULL,
  `topseries_cast` text NOT NULL,
  `topseries_image` varchar(50) NOT NULL,
  `topseries_ranking` varchar(30) NOT NULL,
  `topseries_is_active` tinyint(1) NOT NULL,
  `topseries_datetime` varchar(20) NOT NULL,
  `topseries_created` varchar(40) NOT NULL
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
-- Indexes for table `netflix_settings_genre`
--
ALTER TABLE `netflix_settings_genre`
  ADD PRIMARY KEY (`genre_aid`);

--
-- Indexes for table `netflix_settings_ratings`
--
ALTER TABLE `netflix_settings_ratings`
  ADD PRIMARY KEY (`ratings_aid`);

--
-- Indexes for table `netflix_top_movies`
--
ALTER TABLE `netflix_top_movies`
  ADD PRIMARY KEY (`topmovies_aid`);

--
-- Indexes for table `netflix_top_series`
--
ALTER TABLE `netflix_top_series`
  ADD PRIMARY KEY (`topseries_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `netflix_movies`
--
ALTER TABLE `netflix_movies`
  MODIFY `movies_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `netflix_settings_genre`
--
ALTER TABLE `netflix_settings_genre`
  MODIFY `genre_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `netflix_settings_ratings`
--
ALTER TABLE `netflix_settings_ratings`
  MODIFY `ratings_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `netflix_top_movies`
--
ALTER TABLE `netflix_top_movies`
  MODIFY `topmovies_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `netflix_top_series`
--
ALTER TABLE `netflix_top_series`
  MODIFY `topseries_aid` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
