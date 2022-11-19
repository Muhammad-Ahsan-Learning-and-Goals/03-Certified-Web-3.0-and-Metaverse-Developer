//seprade Operator

// let a = [4, 5, 6];
// let b = [1, 2, 3];

// let c = [...b, ...a];
// console.log("The Adsition of Two Arrays using Sepred Operator is =" + c);

//  Exapmle No 2

// function addTwoNumbers(x, y) {
//   console.log(x + y);
// }
// let arr = [5, 9];
// addTwoNumbers(...arr);

//  Call Back Function Example

function doSomething(callback) {
  setTimeout(() => {
    console.log("Muhamad Ahsan ");
  }, 3000);
  callback();
}

function sayHi() {
  console.log("Kasy Ho yara ");
}
doSomething(sayHi);
