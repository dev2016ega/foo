-- phpMyAdmin SQL Dump
-- version 4.1.6
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2016-09-30 14:46:07
-- 服务器版本： 5.6.16
-- PHP Version: 5.5.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `devega`
--

-- --------------------------------------------------------

--
-- 表的结构 `indexs`
--

CREATE TABLE IF NOT EXISTS `indexs` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `label` int(2) NOT NULL DEFAULT '0' COMMENT '顺序标签',
  `title` varchar(30) NOT NULL DEFAULT '',
  `content` varchar(200) NOT NULL DEFAULT '',
  `link` varchar(200) NOT NULL COMMENT '图片或视频URL',
  `type` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `indexs`
--

INSERT INTO `indexs` (`id`, `label`, `title`, `content`, `link`, `type`) VALUES
(1, 1, '咨询业务', '凭借专业的知识、经验、技术和广泛的信息渠道，向客户提供可行性报告', '/devega/img/index/about1.jpg', 'about'),
(2, 2, '培训业务', '给新员工或现有员工传授其完成本职工作所必需的正确思维认知、基本知识和技能', '/devega/img/index/about2.jpg', 'about'),
(3, 3, '风控系统RCS', 'RCS系统设计了灵活的处理机制，大部分安全威胁能自动处理，从而实现故障自愈', '/devega/img/index/about3.jpg', 'about'),
(4, 4, '系列课程', '系列课程适合对象:店总经理、副总经理、招商高管及其他相关部门人员等', '/devega/img/index/about4.jpg', 'about'),
(5, 1, '', '', '/devega/img/index/banner1.jpg', 'banner'),
(6, 2, '', '', '/devega/img/index/banner2.jpg', 'banner'),
(7, 3, '', '', '/devega/img/index/banner3.jpg', 'banner'),
(8, 0, '', '', 'http://player.youku.com/player.php/sid/XMTU4MzMyNTk3Mg==/isAutoPlay/false/newPlayer/true/v.swf', 'video');

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `abstract` varchar(500) NOT NULL,
  `content` text,
  `createtime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `title`, `abstract`, `content`, `createtime`) VALUES
(1, '直面外汇风险，企业机遇与挑战', '伴随着人民币汇率及利率的市场化改革，尤其是8.11之后，企业面对着外汇市场一系列的新规及改革。而新期，英国退欧亦使得短期内外汇市场，英镑贬值、美元升值，进而带动人民币兑美元贬值。', NULL, '2016-09-30 17:48:41'),
(2, '2016中国银行总行交易业务资格（第一期）培训圆满结束', '2016年7月29日，北京迪威格投资咨询有限公司承办的为期三天的中国银行总行交易业务资格（第一期）培训圆满结束！获得了学员们的一致好评！', NULL, '2016-09-06 17:48:41'),
(3, '2016中远财务有限责任公司外汇交易业务培训已成功开展三期', '本年度中远财务公司内训围绕外汇交易业务的培训主题，内容涵盖人民币外汇发展历程与市场动态、外汇交易心理与技巧、外汇交易风险控制、外汇交易室运作与管理、外汇衍生品风险案例分析、企业外汇风险管理、贵金属市场与黄金交易、自贸区帐户使用等一系列专题。', NULL, '2016-09-04 17:49:29'),
(4, '2016年7月企业外汇运作与保值策略研讨会盛大闭幕！', '2016年7月22日，由高顿财税学院联合北京迪威格投资咨询有限公司举办的“汇率新形势下，企业外汇运作与保值策略”高级策略研讨会盛大闭幕！迪威格公司首席专家孙晓凡先生进行了主讲授课。', NULL, '2016-08-16 17:49:59');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
