/*
 * String Manipulation: String Manipulation allows for operators and methods to modify, identify, extract, or rearrange strings.
 * Methods on strings are pure; they do not modify the original strings but instead provide a new string. We can also use functions
 * to manipulate strings.
 *
 * 1. String manipulation with operators
 *
 * a. +: concatenates strings
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
 * 2. String manipulation with string methods
 *
 * a. .length: returns the length of the string
 */
 
var str = "Flight";

console.log(str.length); //returns 6

/*
 * b. toLowerCase() and toUpperCase()
 */
 var str = "HELLO";
 console.log(str.toLowerCase()); // making each character in the string lowercase. Prints "hello"
 console.log(str.toUpperCase()); // making each character in the string uppercase. Prints "HELLO"
 
/*
 * c. .replace(). Returns a new string that replaces matched strings with replacement strings. 
 */
 var str = "hamburger";
 console.log(str.replace("burger", "burder"));
/*
 * d. .split(): splits a string into an array of strings.
 */
 
 var str = "Hello World";
 
 console.log(str.split(" ")); // Prints ["Hello", "World"]

 
/*
 * e. .subsring()
 */
 
 var str = 'Hello World';
console.log(str.substring(5, 9)); // prints "Wor"
console.log(str.substring(3)); // prints "lo World"

 
/*
 * f. .slice() Takes a section of a string from start to end parameters.
 */
 
 var numbers = "012345";

console.log(numbers.slice(4, 5)); //  Prints [4]


 
 /* 
 *g. .concat() Concatenates two strings into one.
 */
 
var nameFirst = 'Quinn';
var nameLast = 'McCourt';

console.log(nameFirst.concat(' ', nameLast)); //  Prints "Quinn McCourt."
