//Function Declearation 01

function makeFriedAnda(callback01) {
  setTimeout(() => {
    callback01("Egg Fried"); //invoke
  }, 2000);
}

//Function Declearation 02

function makeBread(callback02) {
  setTimeout(() => {
    callback02("Bread Ready");
  }, 2000);
}
/* para1 pass yha p kia us k bad ya callabck02 m gya wha sy assigbned value ko pick kia(is ko arrow funxtion sy asy kia) 
 
 */

makeFriedAnda((arg1) => {
  console.log(arg1);

  makeBread((arg2) => {
    console.log(arg2);
  });
});

// makeBread(function (para1) {
//   console.log(para1);
//   makeFriedAnda(function (para2) {
//     console.log(para2);
//   });
// });
