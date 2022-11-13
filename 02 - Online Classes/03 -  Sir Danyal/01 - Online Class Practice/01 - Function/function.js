console.log(" 💚 Start Date Topic ");

// 😍 print  current date

// const date = new Date();
// console.log(date);
// console.dir(date);

// // 😍 date by spacific

// const fullDate = new Date(2010, 12, 11);
// console.log(fullDate);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getTime());
// console.log(date.getDay);
// console.log(date.getMonth);
// console.log(date.getHours());

console.log(" 💚 End Date Topic");

console.log(" 💚 Start Function Topic");

// 😍 Functions

// DRY (Don't repeat Yourself ) , Used for Code ResueAblity

//  function (functionName ) { Fumction Body } AT the End Calling or Invoking the Function

// Arguments are Passed during declearation , and para maters are pased when we call the functions

// 😍 Simple Fumction

function fName() {
  console.log("This is Simple Function");
}

fName();

// 😍  functon with parameter  and Arguments

function welcome(fullName) {
  console.log(`${fullName} , Welcome to Our Website`);
}
welcome("Muhammad Ahsan"); // Arguments is Passed

// 😍  Use of Return Keyword

function greeting(names) {
  return `Hi, ${names} , Nice to Meet you `;
}

let greet = greeting("Ali");
console.log(greet);

// Example no 02

function add(x, y) {
  return `${x + y}`;
}

let addition = add(32, 12);
console.log(`Addition of two Numbers is =   ${addition}`);
