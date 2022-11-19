// Recursive Function

function recursive(nr) {
  console.log(" Started Function : ", nr);
  if (nr > 0) {
    recursive(--nr);
  } else {
    console.log("Recursion Completed ");
  }
  console.log("Function Ended : ", nr);
}
recursive(5);
