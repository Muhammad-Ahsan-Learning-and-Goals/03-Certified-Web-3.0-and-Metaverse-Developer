// console.log("Start");

// Funaction in simple word is Nokar jiss ko hm batbar call kr skty han

// function doSomeThing() {
//   console.log("Hello World");
// }

// doSomeThing(); // Cal the Function

// 🤍 Asyncronous Function (Colud not Return )
// syncronous m return kra skty han

function makeFriedEgg(callback) {
  setTimeout(() => {
    callback("Egg Fried");
  }, 2000);
}

function eggFriedCallback(param) {
  console.log(param);
}

makeFriedEgg(eggFriedCallback);

console.log("End");

// 🤍 Make Bread

console.log("Start");
function makeBread(callback1) {
  setTimeout(() => {
    callback1("Bread Fried");
  }, 2000);
}

function callback1(param1) {
  console.log(param1);
}

makeBread(callback1);
