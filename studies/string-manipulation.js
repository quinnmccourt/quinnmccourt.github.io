/*
 * 1. String manipulation with operators
 *
 * a. +: concatinates strings
 */

var string = "Hello";
var stringTwo = "World";

var stringThree = string + " " + stringTwo;
console.log(stringThree); //returns "Hello World"

 
/*
 * b. += shortcut for concatenate strings
 */

var string = "Hello";

string += " World";

console.log(string) // returns "Hello World"

/*
 * 2. String manpipulation with string methods
 *
 * a. .length: returns the length of the string
 */
 
var str = "Flight";

console.log(str.length); //returns 6

/*
 * b. toLowerCase() and toUpperCase(): capitalizes or decapitalizes all characters
 * in a string
 */
 var str = "HELLO";
 console.log(str.toLowerCase()); // prints "hello"
 console.log(str.toUpperCase()); // prints "HELLO"
 
/*
 * c. .replace()
 *
 * d. .split(): splits a string into an array of strings seperated by a seperator
 */
 
 var str = "Hello World";
 
 console.log(str.split(" ")); // prints ["Hello", "World"]

 
/*
 * e. .subsring()
 */
 
 var str = 'Hello World';
console.log(str.substring(5, 9)); // prints "Wor"
console.log(str.substring(3)); // prints "lo World"

 
/*
 * f. .slice()
 */
 
 var numbers = [1, 2, 3, 4, 5];

console.log(numbers.slice(4)); // prints [5]


 
 /* 
 *g. .concat
 */
 
var nameFirst = 'Quinn';
var nameLast = 'McCourt';

console.log(nameFirst.concat(' ', nameLast)); //prints "Quinn McCourt"
