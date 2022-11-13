// print  current date

const date = new Date();
console.log(date);
console.dir(date);

// date by spacific
const fullDate = new Date(2010, 12, 11);
console.log(fullDate);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getTime());
console.log(date.getDay);
console.log(date.getMonth);
console.log(date.getHours());

// 💚 Functions

// DRY , Used for Code ResueAblity

// function (functionName ) { Fumction Body } AT the End Calling or Invoking the Function

function welcome() {
  console.log("Hello , Muhammad Ahsan");
}
