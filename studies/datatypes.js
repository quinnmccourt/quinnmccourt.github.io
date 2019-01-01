/* 
 * 1. A number is a primitive datatype that represents a numerical value. 
 * Numbers can be negative and/or decimals.
 */
 
var num = 1;

/*
 * 2. Strings are primitive datatypes that can be a collection of characters. 
 * Values of a string are contained between either a single or double quotations.
 * The characters in a string are stored using a zero-based index. 
 * They can be individually assessed using bracket notation. 
 */
 
var name = "Quinn";
console.log(name[0]); // should log "Q" to the console.

/*
 * 3. Boolean is a primitive datatype that uses the true and false keywords.
 * Conditional statements use boolean values to control data flow.
 */
 
var bool = true;
var bool = false;

/*
 * 4. Arrays are complex datatypes that are containers for values.
 * Values within an array are sorted by a zero-based index and can be accessed 
 * with bracket notation.
 */
 
var arr = [1, "string", true, [2, 3], {}, null, undefined, NaN];

// Arrays can hold many data types, including nested arrays, objects, and functions.

/*
 * 5. Objects are complex data types that are containers for other values.
 * Data within an object is sorted by key-value pairs and can be accessed 
 * using bracket or dot notation. Keys must be strings. 
 */ 

var obj = {key: 'value',
            name: 'Quinn',
            object: {},
            array: [],}; // Objects can also hold many data types.

/*
 * 6. Functions are complex data types that allow for multiple executions 
 * of the same code block. A function contains the function keyword, the name 
 * of the function, any number of parameters, and a code block. 
 * Functions are called by their name plus any arguments.
 */

function add(num1, num2) {
    return num1 + num2;
}

console.log(add(1, 2)); //calls the function and returns 3

/*
 * 7. Undefined is a primitive data type that is used when variables do not
 * have a value assigned to them. When used in arithmetic operations 
 * it returns NAN 
 */

var undef;
console.log(undef); // prints undefined to console.

/* 
 * 8. Null is a primitive data type that representing nothing.
 * When used in arithmetic operations it is treated as 0. 
 */

var nullVar = null;

/*
 * 9. NaN is a property that represents Not-A-Number. 
 * We get this value when we attempt to return a number where there isn’t one. 
 */

var notANumber = 5 * "string";

console.log (notANumber); //prints to console NaN.

/*
 * 10. Infinity and -Infinity represent the greatest and lowest values, respectively. 
 * Any positive number multiplied by Infinity equals Infinity, 
 * and any number divided by Infinity equals 0.
 */

var inf = Infinity;

console.log(inf / 0); // prints 0 to the console
console.log(inf * 4); // prints Infinity to the console

/* 11. Primitive data types are immutable, in that they don’t hold other values;
 * they are unalterable and are a specific size. Complex data types aggregate
 * data and are mutable; in that you can change what is inside of them.
 */

/* 12. Primitive values are passed to a function by copy; 
 * this means that values will not be shared between variables, 
 * put copies of those values (they have different memory addresses. 
 * Complex data types values are by reference; this means that they are 
 * pointing to specific values stored in memory.
 */ 
