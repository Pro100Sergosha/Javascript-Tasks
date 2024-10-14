let promise = new Promise((resolve, reject) => {
  let success = Math.random() >= 0.5;
  if (success) {
    resolve("Success");
  } else {
    reject("Error");
  }
});

promise.then((data) => console.log(data)).catch((data) => console.log(data));
