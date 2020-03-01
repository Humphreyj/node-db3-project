-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT ProductName, CategoryId, CategoryName FROM Product
JOIN Category
ON Product.CategoryId = Category.Id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT o.id, o.OrderDate, s.CompanyName from [order] as o
Join Shipper as s
on o.shipVia = s.id
WHERE o.OrderDate < '2012-8-9'

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT o.OrderId, o.ProductId, o.Quantity, p.ProductName FROM OrderDetail as o
JOIN Product as p
ON o.ProductId = p.id
WHERE o.OrderId = '10251'
ORDER BY p.ProductName;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT  o.Id,  o.ShipName, e.LastName from [Order] as o
JOIN Employee as e
ON o.EmployeeId = e.id