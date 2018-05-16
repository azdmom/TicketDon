-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS ticketDon;
-- Creates the "blogger" database --
CREATE DATABASE ticketDon;

use ticketDon;

create table users_givers(
email varchar(35) not null, 
password varchar(25) not null, 
street_address varchar(225) not null, 
city varchar(25) not null,
state varchar(25) not null,  
zip_code varchar(25) not null, 
phone  integer(20) not null, 
primary key (email)
);

create table users_recepients(
email varchar(35) not null,
password varchar(25) not null, 
street_address varchar(225) not null, 
city varchar(25) not null,
state varchar(25) not null,  
zip_code varchar(25) not null, 
phone  integer(20) not null,
aarp_num varchar (40) not null, 
primary key (email)
);

create table events(
event_id Int( 11 ) AUTO_INCREMENT NOT NULL,
event_name varchar(25) not null,
event_street_address varchar(225) not null, 
event_city varchar(25) not null,
event_state varchar(25) not null,  
event_zip_code varchar(25) not null,
primary key (event_id)
);

create table tickets(
donation_id Int( 11 ) AUTO_INCREMENT NOT NULL,
event_id Int( 11 ) NOT NULL,
event_street_address varchar(225) not null, 
event_city varchar(25) not null,
event_state varchar(25) not null,  
event_zip_code varchar(25) not null,
primary key (donation_id)
);

ALTER TABLE tickets 
ADD CONSTRAINT FK_events 
FOREIGN KEY (event_id) REFERENCES events(event_id);