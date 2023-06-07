// var numOne = prompt("Enter first Number");
// var numTwo = prompt("Enter second Number");
// var sum = Number(numOne) + Number(numTwo);
// var sub = Number(numOne) - Number(numTwo);
// var mul = Number(numOne) * Number(numTwo);
// var div = Number(numOne) / Number(numTwo);
// var mod = Number(numOne) % Number(numTwo);

// document.write(`Sum of ${numOne} and ${numTwo} is ${sum}\r\n`);
// document.write(`Sub of ${numOne} and ${numTwo} is ${sub}\r\n`);
// document.write(`Mul of ${numOne} and ${numTwo} is ${mul}\r\n`);
// document.write(`Div of ${numOne} and ${numTwo} is ${div}\r\n`);
// document.write(`Mod of ${numOne} and ${numTwo} is ${mod}\r\n`);

// // Task a: Declare a variable
// var myVariable;

// // Task b: Show the value of the variable in the browser
// document.write("Value after variable declaration is: " + myVariable + "<br>");

// // Task c: Initialize the variable with some number
// myVariable = 5;

// // Task d: Show the initial value of the variable in the browser
// document.write("Initial value: " + myVariable + "<br>");

// // Task e: Increment the variable
// myVariable++;

// // Task f: Show the value of the variable after increment in the browser
// document.write("Value after increment is: " + myVariable + "<br>");

// // Task g: Add 7 to the variable
// myVariable += 7;

// // Task h: Show the value of the variable after addition in the browser
// document.write("Value after addition is: " + myVariable + "<br>");

// // Task i: Decrement the variable
// myVariable--;

// // Task j: Show the value of the variable after decrement in the browser
// document.write("Value after decrement is: " + myVariable + "<br>");

// // Task k: Show the remainder after dividing the variable's value by 3
// var remainder = myVariable % 3;

// // Task l: Show the remainder in the browser
// document.write("The remainder is: " + remainder + "<br>");

// // Store ticket price in a variable
// var ticketPrice = 600;

// // Calculate the cost of buying 5 tickets
// var totalCost = ticketPrice * 5;

// // Output the result
// console.log(
//   "The cost of buying 5 tickets to a movie is " + totalCost + " PKR."
// );

// // Define the number for the multiplication table
// var number = 4;

// // Display the multiplication table in the browser
// document.write("<h2>Multiplication Table of " + number + "</h2>");

// for (var i = 1; i <= 10; i++) {
//   document.write(number + " x " + i + " = " + number * i + "<br>");
// }

// // Task a: Store a Celsius temperature into a variable
// var celsiusTemperature = 32;

// // Task b: Convert Celsius to Fahrenheit and output the result
// var fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
// console.log(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F");

// // Task c: Store a Fahrenheit temperature into a variable
// var fahrenheitTemperature2 = 68;

// // Task d: Convert Fahrenheit to Celsius and output the result
// var celsiusTemperature2 = ((fahrenheitTemperature2 - 32) * 5) / 9;
// console.log(fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C");

// // Store the prices of item 1 and item 2
// var item1Price = 1000;
// var item2Price = 1500;

// // Store the ordered quantity of item 1 and item 2
// var item1Quantity = 2;
// var item2Quantity = 3;

// // Store the shipping charges
// var shippingCharges = 200;

// // Calculate the subtotal for each item
// var item1Subtotal = item1Price * item1Quantity;
// var item2Subtotal = item2Price * item2Quantity;

// // Calculate the total cost including shipping charges
// var totalCost = item1Subtotal + item2Subtotal + shippingCharges;

// // Display the receipt in the browser
// document.write("<h2>Receipt</h2>");
// document.write(
//   "<p>Item 1: Price - " +
//     item1Price +
//     " PKR, Quantity - " +
//     item1Quantity +
//     "</p>"
// );
// document.write(
//   "<p>Item 2: Price - " +
//     item2Price +
//     " PKR, Quantity - " +
//     item2Quantity +
//     "</p>"
// );
// document.write("<p>Shipping Charges: " + shippingCharges + " PKR</p>");
// document.write("<h4>Total Cost: " + totalCost + " PKR</h4>");

// // Store the total marks and marks obtained by the student
// var totalMarks = 500;
// var marksObtained = 390;

// // Calculate the percentage
// var percentage = (marksObtained / totalMarks) * 100;

// // Display the result in the browser
// document.write("<h2>Percentage Calculation</h2>");
// document.write("<p>Total Marks: " + totalMarks + "</p>");
// document.write("<p>Marks Obtained: " + marksObtained + "</p>");
// document.write("<h4>Percentage: " + percentage.toFixed(2) + "%</h4>");

// // Exchange rates
// var usdToPkrRate = 104.8;
// var sarToPkrRate = 28;

// // Total currency
// var usd = 10;
// var sar = 25;

// // Convert total currency to Pakistani Rupees in a single expression
// var totalPkr = usd * usdToPkrRate + sar * sarToPkrRate;

// // Display the result
// console.log("Total Currency in Pakistani Rupees: " + totalPkr + " PKR");

// // Initialize the variable with a number
// var number = 7;

// // Perform the arithmetic operations in a single expression
// var result = ((number + 5) * 10) / 2;

// // Display the result
// console.log("Result: " + result);

// // Store the current year in a variable
// var currentYear = 2023;

// // Store their birth year in a variable
// var birthYear = 1990;

// // Calculate their possible ages based on the stored values
// var age1 = currentYear - birthYear;
// var age2 = age1 - 1;

// // Display the result
// console.log("Possible Ages: " + age1 + " or " + age2);

// // Store the radius into a variable
// var radius = 5;

// // Calculate the circumference based on the radius
// var circumference = 2 * Math.PI * radius;

// // Calculate the area based on the radius
// var area = Math.PI * Math.pow(radius, 2);

// // Display the results
// console.log("The circumference is " + circumference.toFixed(2));
// console.log("The area is " + area.toFixed(2));

// // Store your favorite snack into a variable
// var favoriteSnack = "chocolate bars";

// // Store your current age into a variable
// var currentAge = 30;

// // Store a maximum age into a variable
// var maximumAge = 80;

// // Store an estimated amount per day (as a number)
// var amountPerDay = 2;

// // Calculate how many snacks you would need for the rest of your life
// var yearsRemaining = maximumAge - currentAge;
// var snacksNeeded = yearsRemaining * 365 * amountPerDay;

// // Output the result
// console.log(
//   "You will need " +
//     snacksNeeded +
//     " " +
//     favoriteSnack +
//     " to last you until the ripe old age of " +
//     maximumAge
// );

//Assignment No.6

// // Define the variable 'a'
// var a = 10;

// document.write("Result:" + "<br>");

// // Display the initial value of 'a'
// document.write("The value of a is: " + a + "<br>");

// document.write("..........................................." + "<br>");
// document.write("<br>");

// // Perform ++a operation and display the result
// document.write("The value of ++a is: " + ++a + "<br>");
// document.write("Now the value of a is: " + a + "<br>");

// // Perform ++a operation again and display the result
// document.write("<br>" + "The value of ++a is: " + a++ + "<br>");
// document.write("Now the value of a is: " + a + "<br>");

// // Perform --a operation and display the result
// document.write("<br>" + "The value of --a is: " + --a + "<br>");
// document.write("Now the value of a is: " + a + "<br>");

// // Perform a-- operation and display the result
// document.write("<br>" + "The value of a-- is: " + a-- + "<br>");
// document.write("Now the value of a is: " + a + "<br>");

//Q//

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;

// document.write("a is " + a + "<br>");
// document.write("b is " + b + "<br>");
// document.write("Result is " + result + "<br>");

// var name = prompt("Enter your name:"); // Prompt the user to enter their name
// var greeting = "Hello, " + name + "! Welcome!"; // Create a greeting message with the entered name
// alert(greeting); // Display the greeting message in an alert dialog

//Q//

// // Prompt the user to enter a number
// var number = prompt("Enter a number:");

// // Check if the user entered a number
// if (number === null || number === "") {
//   // If no number is entered, set the default number to 5
//   number = 5;
// }

// // Convert the input number to an integer
// number = parseInt(number);

// // Display the multiplication table
// document.write("<h2>Multiplication Table of " + number + "</h2>");
// for (var i = 1; i <= 10; i++) {
//   document.write(number + " x " + i + " = " + number * i + "<br>");
// }

// Take input for subject names
var subject1 = prompt("Enter subject 1 name:");
var subject2 = prompt("Enter subject 2 name:");
var subject3 = prompt("Enter subject 3 name:");

// Total marks for each subject
var totalMarks = 100;

// Take input for obtained marks for each subject
var obtainedMarks1 = parseInt(
  prompt("Enter obtained marks for " + subject1 + ":")
);
var obtainedMarks2 = parseInt(
  prompt("Enter obtained marks for " + subject2 + ":")
);
var obtainedMarks3 = parseInt(
  prompt("Enter obtained marks for " + subject3 + ":")
);

// Calculate total marks and percentage
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

// Display the result in a table
document.write("<h2>Result</h2>");
document.write("<table>");
document.write(
  "<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>"
);
document.write(
  "<tr><td>" +
    subject1 +
    "</td><td>" +
    totalMarks +
    "</td><td>" +
    obtainedMarks1 +
    "</td></tr>"
);
document.write(
  "<tr><td>" +
    subject2 +
    "</td><td>" +
    totalMarks +
    "</td><td>" +
    obtainedMarks2 +
    "</td></tr>"
);
document.write(
  "<tr><td>" +
    subject3 +
    "</td><td>" +
    totalMarks +
    "</td><td>" +
    obtainedMarks3 +
    "</td></tr>"
);
document.write(
  "<tr><th>Total</th><th>" +
    3 * totalMarks +
    "</th><th>" +
    totalObtainedMarks +
    "</th></tr>"
);
document.write(
  "<tr><th>Percentage</th><th colspan='2'>" +
    percentage.toFixed(2) +
    "%</th></tr>"
);
document.write("</table>");
