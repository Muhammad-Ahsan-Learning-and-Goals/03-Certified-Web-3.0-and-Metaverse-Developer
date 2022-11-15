//How call Stack Work

// function a() {
//   console.log("a");
// }

// a();
// console.log("End");

// how Asynchonous Work Behind the Scence

console.log("Hi");
setTimeout(function cb1() {
  console.log("cb1");
}, 5000);

console.log("Bye");
