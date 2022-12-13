//How call Stack Work

// function a() {
//   console.log("a");
// }

// a();
// console.log("End");

// how Asynchonous Work Behind the Scence

// console.log("Hi");
// setTimeout(function cb1() {
//   console.log("cb1");
// }, 5000);

// console.log("Bye");

// 💥 Example

// console.log("First");

// setTimeout(() => {
//   console.log("Second");
// }, 3000);

// setTimeout(() => {
//   console.log("Third");
// }, 2000);

// console.log("Fourth");

// 💥 Another Example

let login = (UserName, Password) => {
  setTimeout(() => {
    console.log("User Log in", UserName);
  }, 3000);
};
login("Ahsan@gmail.com", 1233);
