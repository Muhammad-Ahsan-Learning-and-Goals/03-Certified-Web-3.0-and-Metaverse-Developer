console.log(" 💚 Start Arrow Function Topic");
// 😍 Arrow Function

// let arrowFunc = () => {
//   console.log("Simple Arrow Function");
// };

// arrowFunc();

// 😍  Use of this // Arrow functio could not use in this

let person = {
  fName: "Muhammad",
  lName: "Ahsan",
  age: 23,
  fullName: function () {
    console.log(this.fName + " " + this.lName);
  },
};

console.log(person.fullName());
