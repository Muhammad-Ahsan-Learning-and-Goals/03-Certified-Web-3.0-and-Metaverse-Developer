//create an array

names = ["Muhammad", 21, "Ahsan"];

console.log(names); // print names array on console

console.log(names.length); // check the length of an array

names[0] = "Ali"; //🧡 add new elemement at index 0;

console.log(names);

//Adding and replacing elements

names.push("BSCS"); // 🧡 push method at element at Last index
console.log(names);

// names.splice(2, 3, "FSC", "Matric");  //Add using splice
// console.log(names);

console.log(names);

names.pop(); // 🧡 remove last element

console.log(names);

names.shift(); // 🧡  remove 1st eement from an Array
console.log(names);

let t = [6, 4, 2, 5, 3, 1];
console.log(t); // Before Sorting

t.sort(); //🧡 Sort an array
console.log(t);

let e = ["Apple", "Zoo", "yellow", "Black", "Man"];
e.reverse(); // Reverse an Array
console.log(e);
e.sort();
console.log(e);

let a = [1, 2, 3];
let b = [4, 5, 6];
let c = a.concat(b); //  🧡 to join two arrays
console.log(c);
