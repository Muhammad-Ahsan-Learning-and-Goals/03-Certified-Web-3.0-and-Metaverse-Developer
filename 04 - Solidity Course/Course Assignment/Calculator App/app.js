// 💛 Calculator App

let number1 = +prompt("Enter the Number One");

let operator = prompt(`Enter the operator + , - , * , / ,`);

let number2 = +prompt("Enter the Number Two");

if (operator == " + ") {
  result = parseInt( number1 + number2);
  window.alert(result);
} 

// else if (operator == " - ") {
//   result = parseInt(number1 - number2);
//   window.alert(result);
// }

// else if (operator == " * ") {
//   result = number1 * number2;
//   window.alert(result);
// } 

// else if (operator == " / ") {
//   result = number1 / number2;
//   window.alert(result);
// }

// else {
//   document.write("Enter Correct Value");
// }
