CREATE DATABASE EmployeeDB;

USE EmployeeDB;

CREATE TABLE Department (
    DepartmentId INT IDENTITY(1,1),
    DepartmentName varchar(500)
);

INSERT INTO Department VALUES ('Support'), ('IT');

SELECT * FROM Department;

CREATE TABLE Employee (
    EmployeeId INT IDENTITY(1,1),
    EmployeeName varchar(500),
	Department varchar(500),
	DateOfJoining date,
	PhotoFileName varchar(500)
);

INSERT INTO Employee VALUES 
	('Radim', 'IT', '1998-10-01', 'anonymous.jpg'),
	('Valinka', 'Support', '1999-03-01', 'anonymous.jpg');

SELECT * FROM Employee;
