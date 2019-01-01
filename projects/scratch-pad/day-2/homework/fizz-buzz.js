// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    // loop through 1 to 100
    var i = 0

for (i = 1; i < 101; i++) {
    // conditional statement that checks if a number is a multiple of three and five and prints fizz buzz
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }
    // else if statement that checks if a number is a mulitple of 3 and prints fizz
    else if (i % 3 === 0) {
        console.log('Fizz');
    }
     // else if statement that checks if a number is a multiple of 5 and prints buzz
    else if (i % 5 === 0) {
        console.log('Buzz');
    }
     // else return i 
    else {
        console.log(i);
    }
}


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}