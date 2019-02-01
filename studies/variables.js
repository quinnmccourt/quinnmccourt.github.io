/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/*
 * 4. var, let, and const
 * var: assignment keyword that has global and local hoisting scope and can be reassigned
 * let: assignment keyword that has block hoisting scope and can be reassigned
 * const: assignment keyword that has block hoisting scope and cannot be reassigned
 */
 var changer = 'yes';
 changer = 'no';
 console.log(changer); // prints 'no'
 
 let changing = 'yes';
 changing = 'no';
 console.log(changer); // prints 'no'
 
 const change = 'no';
 //change = 'yes' // TypeError: Assignment to constant variable. Cannot change the value of a const
 
 
/*
 * 5. Hoisting
 * Variable declarations and function declarations are taken to the top of their scope.
 * Different types are hoisted differently
 * only variable names are hoisted while both the name and the code block of functions are hoisted.
 * Hoisting happens are runtime. 
 */
 func();
 var one = 'one';
 var two = 'two';
 function func() {
     
 }
 // visualising hoisting would look like
 
 var one;
 var two;
 function func() {
     
 }
 one = 'one';
 two = 'two';
 func();
 