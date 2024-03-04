/* create three variables which are the end calculations of the vault code (10, 40, 39).
 create string which uses the three variables, put the string with the combination in an alert box
*/

// creation of varibles whose caluclations equal the code combination (10, 40, 39)
const num1 = 5 + 5; // added to equal 10, num1 now equals 10
const num2 = 20 * 2; // multiplied to equal 40, num2 now equals 40
const num3 = num2 - 1; // subtracted 1 from num2(40), num3 now equals 39

//combination of all three variables into string
const string = (`You have received this message because you have been chosen to open an important vault.
 Here is the secret combination:${num1} - ${num2} - ${num3}`); //the variable "string" now equals a string with the code combination separated by dashes

//show user dialog box with string containing code combination
alert(string); //the varibale "string", which contains the code combination, is sent to the user as an alert box.
