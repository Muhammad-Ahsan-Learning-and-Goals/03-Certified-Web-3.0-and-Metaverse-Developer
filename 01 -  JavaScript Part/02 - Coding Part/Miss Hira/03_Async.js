// async function myFunction() {

//await  function is used in the body of async function

// }
// myFunction();

// const myPromise = new Promise((resolve, reject) => {
//   resolve("I am Resolved");
// });

// async function myFunction() {
//   const resolvedValue = await myPromise;
//   console.log(resolvedValue);
// }
// myFunction();

// Order Example

function breakFastOrder(item) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${item} is Ready`);
    }, 3000);
  });
}

async function Order(item) {
  const Order = await breakFastOrder(item);
  console.log(Order);
}

Order("Cofee");
Order("Milk");
