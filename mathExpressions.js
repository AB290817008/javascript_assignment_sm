var numOne = prompt("Enter first Number");
var numTwo = prompt("Enter second Number");
var sum = Number(numOne) + Number(numTwo);
var sub = Number(numOne) - Number(numTwo);
var mul = Number(numOne) * Number(numTwo);
var div = Number(numOne) / Number(numTwo);
var mod = Number(numOne) % Number(numTwo);

document.write(`Sum of ${numOne} and ${numTwo} is ${sum}\r\n`);
document.write(`Sub of ${numOne} and ${numTwo} is ${sub}\r\n`);
document.write(`Mul of ${numOne} and ${numTwo} is ${mul}\r\n`);
document.write(`Div of ${numOne} and ${numTwo} is ${div}\r\n`);
document.write(`Mod of ${numOne} and ${numTwo} is ${mod}\r\n`);
