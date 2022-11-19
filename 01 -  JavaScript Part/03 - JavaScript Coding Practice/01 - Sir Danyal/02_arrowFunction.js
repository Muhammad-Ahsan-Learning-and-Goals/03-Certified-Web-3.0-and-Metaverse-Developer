console.log(" 💚 Start Arrow Function Topic");
// 😍 Arrow Function

// let arrowFunc = () => {
//   console.log("Simple Arrow Function");
// };

// arrowFunc();

// 😍  Use of this // Arrow function could not use in this

// let person = {
//   fName: "Muhammad",
//   lName: "Ahsan",
//   age: 23,
//   fullName: function () {
//     console.log(this.fName + " " + this.lName);
//   },
// };

// console.log(person.fullName());

//  😍 Spread Operators

// const numbersOne = [1, 2, 3];

// const numbersTwo = [4, 5, 6];
// const numbersCombined = [...numbersOne, ...numbersTwo];
// console.log(numbersCombined);

// 😍 Rest ParaMeeter

const addUnlimitedNumbers = (...numbers) => {
  let result = 0;
  for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    result = result + numbers[i];
  }
  return result;
};

const finalResult = addUnlimitedNumbers(0, 21, 13, 415, 12.1, 112);
console.log(finalResult);
