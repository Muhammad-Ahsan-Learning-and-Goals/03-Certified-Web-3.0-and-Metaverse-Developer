const arr = ["Ali", "Ahsan", "Raza"];
const arr2 = [3, 2, 1, "concate"];

// for (let i = 0; i <arr.length; i++){
// console.log(arr[i]);
// }

// for each m kuch i return ni krwa skty

// 01 - foreach

// arr.forEach((items) => {
//   console.log(items);
// });

//02 - Map

// const arr2 = arr.map((items) => {
//   console.log(items);
//   return items;
// });

// console.log(arr2);

//03 concat Method

// console.log(arr2.concat(arr));

// 04 Push, pop , shift, unshift

// ar = [1, 2, 3];
// ar.push("Ali"); //add in last
// ar.pop(); // remove from last
// ar.shift(); // remove from first
// ar.unshift("Ali") // Add in first

// console.log(ar);

// 💖 Slice  Splice and Join , every,

// a = [1, 2, 3, 4, 5];

// a.splice(2, 0, "ALI", "Raza");
// console.log(a);

// let b = a.slice(1, 4);
// console.log(b);

// let arrjoin = arr.join(" ");
// console.log(arrjoin);

// const array1 = [1, 3, 46, , 8, 6];
// console.log(array1.every((value) => value < 50));

// arrFilter = ["Ali", "Raza", 3, 2, "Muhammad", "Ali", "Ali"];
// const result = arrFilter.filter((word) => word.length > 4);
// console.log(result);

// indexof

// const d = [1, 4, 5, 3, 2, 53];
// const indx = d.indexOf(2);
// console.log(indx);

//add number

const addarray = [2, 2, 3, 2];
let temp = 0;

addarray.forEach((num) => {
  temp += num;
});

console.log(temp);
