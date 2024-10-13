let promise = new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve("Success");
  }, 2000)
);

console.log(promise.then((data) => console.log(data)));
