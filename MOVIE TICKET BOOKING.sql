CREATE DATABASE TICKET_BOOKING;
USE TICKET_BOOKING;

-----------------------------------------------------------------------------------------------------------------------------------------------------
CREATE TABLE USER(
UserID			VARCHAR(225),
Name			VARCHAR(225),
Password		VARCHAR(225),
Email			VARCHAR(225),
Phone			VARCHAR(225)
);
drop table user;
ALTER TABLE USER
ADD PRIMARY KEY (UserID);
select * from user;
Describe USER;

---------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE ADMIN (
    AdminID          VARCHAR(225),
    Name            VARCHAR(225),
    Password        VARCHAR(225),
    Email           VARCHAR(225),
    Phone           VARCHAR(225),
    PRIMARY KEY (AdminID)
);


---------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE CITY(
CityID			VARCHAR(225),
Name			VARCHAR(225),
State			VARCHAR(225),
Zipcode			VARCHAR(225),
PRIMARY KEY (CityID)
);
-----------------------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE MOVIES(
MovieID 		INT,
Title 			VARCHAR(225),
Description 	VARCHAR(1000),
Duration 		DATETIME,
Language 		VARCHAR(225),
ReleaseDate 	DATETIME,
Country 		VARCHAR(225),
Genre 			VARCHAR(225)
); 
ALTER TABLE MOVIES
ADD PRIMARY KEY (MovieID);
alter table movies
MODIFY Duration varchar(225);
ALTER TABLE MOVIES
ADD Movies_CityID VARCHAR(225);
ALTER TABLE MOVIES
ADD foreign key (Movies_CityID) references CITY(CityID);

SELECT * FROM MOVIES;
describe movies;

-----------------------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE THEATER (
TheaterID 		INT,
Name 			VARCHAR(225),
TotalSeats		VARCHAR(225),
THEATER_CinemaID INT,
PRIMARY KEY (TheaterID)
);
DROP TABLE THEATER;
ALTER TABLE THEATER 
ADD FOREIGN KEY (THEATER_CinemaID)  REFERENCES CINEMA(CinemaID);
------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE SHOWS(
ShowID			INT,
Date			DATETIME,
StartTime		DATETIME,
EndTime			DATETIME,
Shows_TheaterID		INT,
Shows_MovieID		INT,
PRIMARY KEY		(ShowID)
);

ALTER TABLE SHOWS 
ADD FOREIGN KEY	(Shows_TheaterID) references THEATER(TheaterID);
ALTER TABLE SHOWS
ADD FOREIGN KEY	(shows_MovieID) references MOVIES(MovieID);
ALTER TABLE SHOWS
MODIFY STARTTIME TIME;
ALTER TABLE SHOWS
MODIFY ENDTIME TIME;
-----------------------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE BOOKING(
BookingID			INT,
NumberofSeats		INT,
TimeStamp			DATETIME,
Status				INT,
Booking_UserID		VARCHAR(225),
Booking_ShowID		INT,
PRIMARY KEY			(BookingID),
BOOKING_PaymentID 	VARCHAR(225)
);
ALTER TABLE BOOKING 
ADD FOREIGN KEY (Booking_UserID)  references USER (UserID);
ALTER TABLE BOOKING
ADD FOREIGN KEY (Booking_ShowID)  references SHOWS(ShowID); 
alter table Booking
modify BookingID VARCHAR(225);
ALTER TABLE BOOKING 
ADD COLUMN BOOKING_PaymentID INT,
ADD FOREIGN KEY (BOOKING_PaymentID)references PAYMENT(PaymentID);

UPDATE BOOKING
SET BOOKING_PaymentID = '1';
UPDATE BOOKING
SET BOOKING_PaymentID = '1'
WHERE BookingID=1;



-----------------------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE PAYMENT(
PaymentID 		INT,
AmountNumber 	INT,
TimeStamp		DATETIME,
DiscountCoupon  VARCHAR(225),
RemoteTransactionID  VARCHAR(225),
PaymentMethod		VARCHAR(225),
PAYMENT_BookingID	INT,
PRIMARY KEY (PaymentID)
);
DROP TABLE PAYMENT;
ALTER TABLE PAYMENT
ADD FOREIGN KEY (PAYMENT_BookingID) REFERENCES BOOKING(BookingID);
-------------------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- OPTIONAL--
-----------------------------------------------------------------------------------------------------------------------------------------------------
CREATE TABLE CINEMA(
CinemaID		VARCHAR(225),
Name 			VARCHAR(225),
TotalCinemaHalls VARCHAR(225),
CINEMA_CityID 	 VARCHAR(225),
PRIMARY KEY  (CinemaID)
);
DROP TABLE CINEMA;
ALTER TABLE CINEMA
ADD FOREIGN KEY  (CINEMA_CityID) REFERENCES CITY (CityID);
---------------------------------------------------------------------------------------------------------------------------------------------------------------

CREATE TABLE CINEMA_SEAT (
CinemaSeatID 			VARCHAR(225),
SeatNumber 				INT,
Type 					VARCHAR(225),
CINEMA_SEAT_TheaterID 	INT,
PRIMARY KEY (CinemaSeatID)
);
ALTER TABLE CINEMA_SEAT
ADD FOREIGN KEY (CINEMA_SEAT_TheaterID) REFERENCES THEATER(TheaterID);


------------------------------------------------------------------------------------------------------------------------------------------------------
CREATE TABLE SHOW_SEAT(
ShowSeatID 				INT, 
Status					VARCHAR(225),
Price					INT,
SHOW_SEAT_CinemaSeatID	VARCHAR(225),
SHOW_SEAT_ShowID			INT,
SHOW_SEAT_BookingID		INT,
PRIMARY KEY (ShowSeatID)
);
DROP TABLE SHOW_SEAT;
ALTER TABLE SHOW_SEAT
ADD FOREIGN KEY (SHOW_SEAT_CinemaSeatID) REFERENCES CINEMA_SEAT(CinemaSeatID);
ALTER TABLE SHOW_SEAT 
ADD FOREIGN KEY (SHOW_SEAT_ShowID) REFERENCES SHOWS(ShowID);
ALTER TABLE SHOW_SEAT 
ADD FOREIGN KEY (SHOW_SEAT_BookingID) REFERENCES BOOKING(BookingID);
-----------------------------------------------------------------------------------------------------------------------------------------------------

-------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------------


