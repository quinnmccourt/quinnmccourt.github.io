/*
 * Control flow: The ability for our programs to execute exception handling or conditional statements
 * to decide which code blocks to run. 
 *
 * 1. If: the start of a control flow that uses conditional statements to execute code.
 */
 function moods(mood){
 let cookies = 10;
 
 if (mood === 'happy') {
     return console.log('I am happy!'); //only executes this code if mood equals happy.
 }
 

/*
 * 2. Else-if: The next possible step of control flow. This statement tests a new
 * condition if the previous condition was false and executes the code if its true.
 */
 
 else if (mood === 'sad') {
     return console.log('I am sad!');
 }
 
 // We can also use 'and' {&&} or 'or' {||} logical operators to evaluate multiple conditions
 
 else if (mood === 'tired' || mood === 'sleepy') {
      return console.log('I didn\'t get enough sleep!'); // will return if either statement is true
 }
 
 else if (mood === 'hungry' && cookies === 0 ) {
      return console.log('I am hungry and have nothing to eat!'); // will return only if each statement is true
 }

/*
 * 3. Else: executes a code block if the first condition was false 
 */
 
 else {
     return console.log('I have no understanding of my emotions!');
 }
 }

/*
 * 4. Switch: switch statements give code blocks to execute if specific inputs are given. 
 */
 
 switch ('mad') {
  case 'sad':
    console.log('I am sad!');
    break;
  case 'happy':
   console.log('I am happy!');
    break;
  case 'tired':
    console.log('I am tired!');
    break;
  default:
    console.log('I have no understanding of my emotions!');
    break; }