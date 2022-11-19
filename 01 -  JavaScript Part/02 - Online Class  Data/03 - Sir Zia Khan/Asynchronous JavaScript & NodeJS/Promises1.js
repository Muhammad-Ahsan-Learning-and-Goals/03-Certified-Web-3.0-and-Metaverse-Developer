// promises

let toastPromise = new Promise((resolve, reject) => {
  let wifeMood = 7;
  if (wifeMood >= 2) {
    resolve("Toast is Ready");
  } else {
    reject("I'm in a bad mood");
  }
});

toastPromise.then((arg) => {
  console.log(arg);
});
