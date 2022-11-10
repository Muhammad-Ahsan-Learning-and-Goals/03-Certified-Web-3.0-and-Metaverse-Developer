// simple function

// function name(params) { statement}

// function add(x, y) {
//   return x + y;
// }

// console.log(add(5, 7));

//arrow Functions

// (parameter name ) => functions work , calling

// let add2 = (x, y) => x + y;
// console.log(add2(32, 76));

const student = {
  firstName: "Ali ",
  lastName: "Raza",
  fullName: function () {
    return this.firstName + this.lastName;
  },
};

console.log(student.fullName());
