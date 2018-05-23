-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS ticketDon;
-- Creates the "blogger" database --
CREATE DATABASE ticketDon;

use ticketDon;


select * from userrcpts;

select * from userdonors;

select * from tickets;

INSERT INTO tickets (event_name, date, location, venue_name, ticket_qty, createdAt, updatedAt, userRcptId, userDonorId )
VALUES ("jay z", 12/23/1994, "philly", "wells fargo", 5, 12/23/2011, 12/21/2012, 1, 1);







