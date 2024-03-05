/* create three variables which are the end calculations of the vault code (10, 40, 39).
  create string which tells the user about being chosen for the vault, and which
  uses the three variables, put the string with the combination in an alert box
*/

// creation of varibles whose caluclations equal the code combination (10, 40, 39)
const num1 = 5 + 5; // added to equal 10, num1 now equals 10
const num2 = 20 * 2; // multiplied to equal 40, num2 now equals 40
const num3 = num2 - 1; // subtracted 1 from num2(40), num3 now equals 39

//combination of all three variables into string
const string = (`You have received this message because you have been chosen to open an important vault.

Here is the secret combination: ${num1} - ${num2} - ${num3}`);/*the variable "string" now equals a string
 with the code combination separated by dashes along with the message telling the user about the combination 
 (there is an extra line to make the alert have a break separatig the message and the combination)
*/


//show user dialog box with string containing code combination
alert(string); //the varibale "string", which contains the code combination, is sent to the user as an alert box.


//ignore this

// function failure(currentNum) {
//   currentNum = prompt('you must put in a valid positive interger', 0)

//   if (currentNum != null) {
//     currentNum = Number(currentNum);
//     if (typeof currentNum != 'number' || currentNum < 0 || (currentNum % 1) > 0 || isNaN(currentNum)) {
//       currentNum = failure(currentNum);
//     }
//     return currentNum;
//   }
//   return null;
// }

// let inpNum1 = prompt('input first number of combination', 0);// 1

// if (inpNum1 != null) {
//   inpNum1 = Number(inpNum1);
//   console.log(inpNum1);
//   console.log(typeof inpNum1);
//   if (typeof inpNum1 != 'number' || inpNum1 < 0 || (inpNum1 % 1) > 0 || isNaN(inpNum1)) {
//     inpNum1 = failure(inpNum1);
//   }
// }
// console.log(inpNum1);
// if (inpNum1 != null) {
//   let inpNum2 = prompt('input second number of combination', 0);// 2
//   if (inpNum2 != null) {
//     inpNum2 = Number(inpNum2);
//     console.log(inpNum2);
//     console.log(typeof inpNum2);
//     if (typeof inpNum2 != 'number' || inpNum2 < 0 || (inpNum2 % 1) > 0 || isNaN(inpNum2)) {
//       inpNum2 = failure(inpNum2);
//     }
//   }
//   console.log(inpNum2);
//   if (inpNum1 != null && inpNum2 != null) {
//     let inpNum3 = prompt('input third number of combination', 0);// 2
//     if (inpNum3 != null) {
//       inpNum3 = Number(inpNum3);
//       console.log(inpNum3);
//       console.log(typeof inpNum3);
//       if (typeof inpNum3 != 'number' || inpNum3 < 0 || (inpNum3 % 1) > 0 || isNaN(inpNum3)) {
//         inpNum3 = failure(inpNum3);
//       }
//     }
//     console.log(inpNum3);
//     if (inpNum1 != null && inpNum2 != null && inpNum3 != null) {
//       alert(`Here is the secret combination: ${inpNum1} - ${inpNum2} - ${inpNum3}`);
//     }
//     else {
//       alert('action was canceled');
//     }
//   }
//   else {
//     alert('action was canceled');
//   }
// }
// else {
//   alert('action was canceled');
// }









