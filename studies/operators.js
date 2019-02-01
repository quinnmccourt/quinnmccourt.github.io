/*
 * Operators: Javascript uses operators to assign, compare, and manipulate data. 
 *
 *
 * 1. Assignment operators
 */
 var assign = "assignment"; // equals sign assigns right operand to the left operand
 console.log(assign); // prints "assignment"
 
 var assign = 1;
 assign += 1;
 console.log(assign); // Adds the value on the right from the current value of assign. prints 2
 assign -= 1;
 console.log(assign); // Subtracts the value on the right from the current value of assign.  prints 1
 assign *= 5;
 console.log(assign); // Multiplies the value on the right from the current value of assign. prints 5
 assign /= 5; 
 console.log(assign); // Divides the value on the right from the current value of assign. prints 1
/*
 * 2. Arithmetic operators 
 */
 var ari;
 
 ari = 1 + 1;
 console.log(ari); // Addition. prints 2
 ari = 1 - 1;
 console.log(ari); // Subtraction. prints 0
 ari = 3 * 3;
 console.log(ari); // Multiplication. prints 9
 ari = 9 / 3;
 console.log(ari); // Division. prints 3
 ari = 9 % 5;
 console.log(ari); //Uses modulo operator, which give the remainder from dividing two numbers. prints 4 
 ari = ari++;
 console.log(ari); // Increments the humber by 1. prints 5
 ari = ari--;
 console.log(ari); // Decrements the number by 1. prints 4
/*
 * 3. Comparison operators allow use compare two values and use booleans. 
 */

var varOne = 5;

console.log(varOne == 5); //equal op. prints true

console.log(varOne != 6); // not equal op. prints true

console.log(varOne === 5); // strict equal op. prints true

console.log(varOne !== "5"); // strict not equal op. prints true

console.log(varOne > 1); // greater than op. prints true

console.log(varOne < 7); // less than op. prints true

console.log(varOne >= 5); // greater than or equal op. prints true

console.log(varOne <= 5); // less than or equal op. prints true

/*
 * 4. Logical operators
 */

let x = 5;

console.log(x < 7 && x > 3); //logical AND op. prints true

console.log(x > 50 || x === 5); //logical OR op. prints true

 
 
/*
 * 5. Unary operators (!, typeOf, -)
 */

// a. !: converts datatypes into its boolean equivalent before negating it.

!5; // returns false
!-5; // returns true

// b. typeOf determines the class of a datatype. Does not work properly for arrays,
// null, or Date

var number = 2;
typeof number; // returns 'number'

// c. -: converts non-number data types to numbers and negates them.

-"5"; // returns -5

/* 
 * 6. Ternary operator (a ? b : c) is a shortcut for an if statement. If the first
 * condition (a) evaluates to true than (b) is executed, otherwise (c) is executed 
 */
 
var name = 'Quinn';
var greet = (name === 'Quinn') ? "Hello, Quinn" : "Hello, Stranger";
console.log(greet); // "Hello, Quinn"