/*
 * 1. If: the start of a control flow that uses conditional statements to execute code.
 */
 function moods(mood){
 
 
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