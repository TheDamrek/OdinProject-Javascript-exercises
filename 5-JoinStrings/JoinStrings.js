let firstName = "John";
let lastName = "Doe";
let thisYear = 2026;
let birthYear = 1990;


let greeting = " Hello, my name is " + firstName + " " + lastName + "." + " I am" + " " + (thisYear - birthYear) + " years old." + " " + "I was born in 1990, in Mexico.";


let fullName = firstName + " " + lastName;
let age = thisYear - birthYear;

let NewGreeting = " Hello, my name is " + fullName + "." + " I am" + " " + age + " years old." + " " + "I was born in 1990, in Mexico.";



module.exports = {greeting, firstName, lastName, thisYear, birthYear, fullName, age, NewGreeting};