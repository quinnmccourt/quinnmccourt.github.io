/*
 * 1. The two phases to using functions: First we must define the function.
 * Next we can execute (or call) a function by typing the name or variable of the function followed by ().
 */
 
 function printHello() { // defining the function
     console.log('Hello!'); 
 } 
 
 printHello(); // calling the function would print Hello! to the console.

/*
 * 2. What’s the difference between a function’s parameters and arguments PASSED to a function?
 * A functions paramaters are variable placeholeds for the arguements passsed to a function. 
 *The arguements are given when the function is called. This allows for functions to be reused
 */
 
 function add(num1, num2) { //num1 and num2 are the functions paramaters
   return num1 + num2;
 }

add(1, 2); //1 and 2 are the arguements passed to the function.
 
/*
 * 3. What’s the syntax for a NAMED function?
 */
 
function func() {
    
}
 
/*
 * 4. How do we assign a function to a variable?
 */
 
 var func = function() { 
     
 };
 
/*
 * 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value.
 * How do we specify inputs, and how do we specify outputs?
 */
 
 function funct(param1, param2) { //param1 and param2 let us specify inputs
     return param1 + param2; //return statement specifies outputs
 }

/*
 * 6.Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
 */
 
var glo = "I am a global scope!";

function local() {
    var loc = "I am a local scope!";
    console.log(glo);
}

local(); // would print the global scope to the console because it can access the global scope
// console.log(loc) would return a refrence error because it cannot see the local scope of the function.

/*
 * 7. Closures: Functions form closures around the data they house. 
 * If an object returned from the Function and is held in memory somewhere (referenced), 
 * that closure stays ALIVE, and data can continue to exist in these closures!
 */
 
 function func1(param1) {
     return function(param2) {
         console.log(param1);
         console.log(param2);
     };
 }

var close = func1("hello") ;

close("goodbye"); //prints both param1 and param2