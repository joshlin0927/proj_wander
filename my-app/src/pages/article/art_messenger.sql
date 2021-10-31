-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021-10-31 06:28:41
-- 伺服器版本： 10.4.20-MariaDB
-- PHP 版本： 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫: `wander`
--

-- --------------------------------------------------------

--
-- 資料表結構 `art_messenger`
--

CREATE TABLE `art_messenger` (
  `sid` int(11) NOT NULL,
  `ar_sid` int(11) DEFAULT NULL,
  `st_sid` int(11) DEFAULT NULL,
  `st_pictuer` varchar(255) DEFAULT NULL,
  `messenger` varchar(255) NOT NULL,
  `great` int(11) DEFAULT NULL,
  `created_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `art_messenger`
--

INSERT INTO `art_messenger` (`sid`, `ar_sid`, `st_sid`, `st_pictuer`, `messenger`, `great`, `created_date`) VALUES
(8, 0, 0, '555', '', 0, '2021-10-30 19:17:22');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `art_messenger`
--
ALTER TABLE `art_messenger`
  ADD PRIMARY KEY (`sid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `art_messenger`
--
ALTER TABLE `art_messenger`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
