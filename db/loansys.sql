-- phpMyAdmin SQL Dump
-- version 4.4.13.1deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 23, 2016 at 02:27 AM
-- Server version: 5.6.28-0ubuntu0.15.10.1
-- PHP Version: 5.6.11-1ubuntu3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `loansys`
--

-- --------------------------------------------------------

--
-- Table structure for table `Accounts`
--

CREATE TABLE IF NOT EXISTS `Accounts` (
  `accounts_id` varchar(25) NOT NULL,
  `accounts_clients_id` varchar(25) NOT NULL,
  `accounts_status` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Accounts`
--

INSERT INTO `Accounts` (`accounts_id`, `accounts_clients_id`, `accounts_status`) VALUES
('ACC56ebf923bc149', 'CL56ebf923b3409', 'active'),
('ACC56ebf9471edf7', 'CL56ebf94701eee', 'active'),
('ACC56eec5ac65e48', 'CL56eec5ac51260', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `AccRecords`
--

CREATE TABLE IF NOT EXISTS `AccRecords` (
  `accrecords_id` varchar(25) NOT NULL,
  `accrecords_accounts_id` varchar(25) NOT NULL,
  `accrecords_loans_id` varchar(25) NOT NULL,
  `accrecords_balance` decimal(9,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `AccRecords`
--

INSERT INTO `AccRecords` (`accrecords_id`, `accrecords_accounts_id`, `accrecords_loans_id`, `accrecords_balance`) VALUES
('AR56f1802cd6d13', 'ACC56ebf923bc149', 'LO56f1802cc96ec', 6000.00);

-- --------------------------------------------------------

--
-- Table structure for table `Clients`
--

CREATE TABLE IF NOT EXISTS `Clients` (
  `clients_id` varchar(25) NOT NULL,
  `clients_name` varchar(100) NOT NULL,
  `clients_address` varchar(150) NOT NULL,
  `clients_contact` varchar(15) NOT NULL,
  `clients_bdate` date NOT NULL,
  `clients_gender` char(10) NOT NULL,
  `clients_job` varchar(50) NOT NULL,
  `clients_mstatus` varchar(10) NOT NULL,
  `clients_spousename` varchar(100) DEFAULT NULL,
  `clients_dependents` int(99) DEFAULT NULL,
  `clients_status` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Clients`
--

INSERT INTO `Clients` (`clients_id`, `clients_name`, `clients_address`, `clients_contact`, `clients_bdate`, `clients_gender`, `clients_job`, `clients_mstatus`, `clients_spousename`, `clients_dependents`, `clients_status`) VALUES
('CL56ebf923b3409', 'Moses Lucas', 'MANILA PHILPPINES Brgt Crame', '09063402308', '1996-02-10', 'male', 'WEb Software Engineer', 'single', '', 0, 'active'),
('CL56ebf94701eee', 'Marseline Vamp', 'Cave Roy St. Brgy Tibagan', '7675847', '1996-04-17', 'female', 'Red Kcus', 'single', '', 0, 'active'),
('CL56eec5ac51260', 'Paolo Navarro', 'Pewdipie Brgy Tibagan', '7564636', '1990-03-16', 'male', 'jkadsof', 'married', 'Tae', 23, 'active');

-- --------------------------------------------------------

--
-- Table structure for table `Durations`
--

CREATE TABLE IF NOT EXISTS `Durations` (
  `durations_id` varchar(25) NOT NULL,
  `durations_name` varchar(50) NOT NULL,
  `durations_days` int(11) NOT NULL,
  `durations_status` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Durations`
--

INSERT INTO `Durations` (`durations_id`, `durations_name`, `durations_days`, `durations_status`) VALUES
('DR150001', '6 Months', 180, 'active'),
('DR56eb9c7ebd79c', 'Annual', 365, 'active'),
('DR56eb9c8ed901f', 'Two Years (2yrs)', 725, 'active'),
('TR56eb9c62c42c1', 'asdfas', 123, 'inactive'),
('TR56eb9cc5dbee8', 'asdf', 321, 'inactive'),
('TR56ebec3158a9f', 'undefined', 0, 'inactive'),
('TR56ebecb0f2cc8', 'undefined', 0, 'inactive'),
('TR56ebf235dee3c', '', 0, 'inactive');

-- --------------------------------------------------------

--
-- Table structure for table `Loans`
--

CREATE TABLE IF NOT EXISTS `Loans` (
  `loans_id` varchar(25) NOT NULL,
  `loans_clients_id` varchar(25) DEFAULT NULL,
  `loans_durations_id` varchar(25) NOT NULL,
  `loans_duration` int(11) NOT NULL,
  `loans_terms_id` varchar(25) NOT NULL,
  `loans_term` int(11) NOT NULL,
  `loans_loantypes_id` varchar(25) NOT NULL,
  `loans_interest` int(99) NOT NULL,
  `loans_amount` decimal(9,2) NOT NULL,
  `loans_transdate` date NOT NULL,
  `loans_settledate` date DEFAULT NULL,
  `loans_status` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Loans`
--

INSERT INTO `Loans` (`loans_id`, `loans_clients_id`, `loans_durations_id`, `loans_duration`, `loans_terms_id`, `loans_term`, `loans_loantypes_id`, `loans_interest`, `loans_amount`, `loans_transdate`, `loans_settledate`, `loans_status`) VALUES
('LO56f1802cc96ec', 'CL56ebf923b3409', 'DR150001', 180, 'TR56eb9839bbd53', 30, 'LT56eec75bef5fd', 0, 6000.00, '2016-03-23', '2016-03-23', 'open');

-- --------------------------------------------------------

--
-- Table structure for table `LoanTypes`
--

CREATE TABLE IF NOT EXISTS `LoanTypes` (
  `loantypes_id` varchar(25) NOT NULL,
  `loantypes_name` varchar(50) NOT NULL,
  `loantypes_interest` int(99) NOT NULL,
  `loantypes_status` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `LoanTypes`
--

INSERT INTO `LoanTypes` (`loantypes_id`, `loantypes_name`, `loantypes_interest`, `loantypes_status`) VALUES
('LT1500001', 'Happy', 12, 'active'),
('LT150002', 'Emergency', 15, 'active'),
('LT56eba1ea3ea2a', 'asdf', 12, 'inactive'),
('LT56eba24062df8', 'Educational', 13, 'active'),
('LT56eec75bef5fd', 'Special', 0, 'active'),
('LT56f1100bb1721', 'Zido', 1, 'inactive'),
('LT56f11036ea444', 'ZAIDO', 1, 'inactive'),
('LT56f1104735805', 'asdf', 12, 'inactive');

-- --------------------------------------------------------

--
-- Table structure for table `Payments`
--

CREATE TABLE IF NOT EXISTS `Payments` (
  `payments_id` varchar(25) NOT NULL,
  `payments_loans_id` varchar(25) NOT NULL,
  `payments_date` date NOT NULL,
  `payments_amount` decimal(9,2) NOT NULL,
  `payments_type` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Payments`
--

INSERT INTO `Payments` (`payments_id`, `payments_loans_id`, `payments_date`, `payments_amount`, `payments_type`) VALUES
('PY56f18a7b707a5', 'LO56f1802cc96ec', '2016-03-23', 1000.00, 'cash'),
('PY56f18cdadbdd4', 'LO56f1802cc96ec', '2016-03-23', 2000.00, 'cash'),
('PY56f18e6b78307', 'LO56f1802cc96ec', '2016-03-23', 1000.00, 'cheque');

-- --------------------------------------------------------

--
-- Table structure for table `Terms`
--

CREATE TABLE IF NOT EXISTS `Terms` (
  `terms_id` varchar(25) NOT NULL,
  `terms_name` char(50) NOT NULL,
  `terms_days` int(11) NOT NULL,
  `terms_status` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Terms`
--

INSERT INTO `Terms` (`terms_id`, `terms_name`, `terms_days`, `terms_status`) VALUES
('TR150001', 'Weekly', 7, 'active'),
('TR56eb9839bbd53', 'Monthly', 30, 'active'),
('TR56eb9981d18ba', 'Annually', 365, 'inactive'),
('TR56eb99be4c547', 'Two Years (2 yrs)', 725, 'inactive'),
('TR56eb99f368597', 'asdfa', 1213, 'inactive'),
('TR56eb9bdf06511', 'Every 15th Day', 15, 'active'),
('TR56eec730ef448', 'TAE', 26, 'inactive');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE IF NOT EXISTS `Users` (
  `users_name` varchar(15) NOT NULL,
  `users_password` varchar(50) NOT NULL,
  `users_type` varchar(15) NOT NULL,
  `users_status` char(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`users_name`, `users_password`, `users_type`, `users_status`) VALUES
('admin', '0192023a7bbd73250516f069df18b500', 'ADMIN', 'inactive'),
('adsfsadf', 'd41d8cd98f00b204e9800998ecf8427e', 'none', 'inactive'),
('asdf', '6a204bd89f3c8348afd5c77c717a097a', 'ADMIN', 'inactive'),
('greenlantern', '0ea32a4dcab9c7efbe6f5eca3b9b8417', 'TREASURER', 'active'),
('jennie', '8a4b93ff76664d996ccfb95aacc412bc', 'FRONT DESK', 'active'),
('moses', '594aa0a9de0c75cd4d4037b6b65c683e', 'ADMIN', 'active'),
('moses.lucas.10', '0192023a7bbd73250516f069df18b500', 'admin', 'active'),
('paolo', '969044ea4df948fb0392308cfff9cdce', 'ADMIN', 'active'),
('root', '63a9f0ea7bb98050796b649e85481845', 'ADMIN', 'inactive'),
('test', '098f6bcd4621d373cade4e832627b4f6', 'FRONT DESK', 'inactive'),
('undefined', '5e543256c480ac577d30f76f9120eb74', 'undefined', 'inactive'),
('wer', 'e130e5e618f15cee7a519d8b7b8306a0', 'ADMIN', 'active');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Accounts`
--
ALTER TABLE `Accounts`
  ADD PRIMARY KEY (`accounts_id`),
  ADD UNIQUE KEY `accounts_clients_id` (`accounts_clients_id`);

--
-- Indexes for table `AccRecords`
--
ALTER TABLE `AccRecords`
  ADD PRIMARY KEY (`accrecords_id`);

--
-- Indexes for table `Clients`
--
ALTER TABLE `Clients`
  ADD PRIMARY KEY (`clients_id`);

--
-- Indexes for table `Durations`
--
ALTER TABLE `Durations`
  ADD PRIMARY KEY (`durations_id`),
  ADD KEY `durations_name` (`durations_name`);

--
-- Indexes for table `Loans`
--
ALTER TABLE `Loans`
  ADD PRIMARY KEY (`loans_id`);

--
-- Indexes for table `LoanTypes`
--
ALTER TABLE `LoanTypes`
  ADD PRIMARY KEY (`loantypes_id`);

--
-- Indexes for table `Payments`
--
ALTER TABLE `Payments`
  ADD PRIMARY KEY (`payments_id`);

--
-- Indexes for table `Terms`
--
ALTER TABLE `Terms`
  ADD PRIMARY KEY (`terms_id`),
  ADD KEY `terms_name` (`terms_name`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`users_name`),
  ADD UNIQUE KEY `users_name` (`users_name`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
