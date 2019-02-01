/*
 * 1. Explain while, for, and for-in loops
 * Loops are a repeating block of code.
 * While loops: While loops need 1 step to be defined: an end condition
 * For loops: Need 3 steps to define: Where should I start, how long, and what
 * changes each time I loop.
 * For In loops: Need 2 steps to define: how keys will be referred to and which object
 * you want to loop over.
 */
 
/*
 * 2. Be able to loop any number of times, 
 *forward counting up to some limit, backward counting down to 0
 */
 function loopUp(num) {
     for(let i = 0; i < num + 1; i++) {
        console.log(i);
     }
     
 }

loopUp(50); // prints each number from 0 to 50.

function loopDown(num) {
   while (num >= 0) {
        console.log(num);
        num--
    }
}

loopDown(50); // prints each number from 50 to 0.

// 3. Loop over an Array, forwards and backwards

var arr = [1, 'string', true, [], {}];

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]); // prints values in forward order.
}

for (var i = arr.length - 1; i > 0; i--) {
    console.log(arr[i]); // prints values in backward order.
}

// 4.Loop over an Object
 
 var obj = {number: 1, string: "hello", boolean: true};
 
 for (var key in obj) {
 console.log(obj[key]); // prints all values to console.
 console.log(key); // prints all keys to console.
 }