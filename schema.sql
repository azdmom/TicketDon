
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;


-- ----------------------------
--  Table structure for `Events`
-- ----------------------------
DROP TABLE IF EXISTS `ticketDon`;
CREATE TABLE `ticketDon` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `event_name` varchar(50) NOT NULL,
  `location_name` varchar(50) NOT NULL,
  `venue_name` varchar(255) NOT NULL,
  `date` varchar(20) NOT NULL,
  `ticket_number` varchar(4),
  
  PRIMARY KEY (`id`)
) 

-- ----------------------------
--  Test Records
-- ----------------------------
BEGIN;
INSERT INTO `Events` VALUES ('1','Mark', 'Taylor Swift reputation Stadium Tour', 'Philadelphia', 'Lincoln Financial Field', '2018-07-13', '2');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;