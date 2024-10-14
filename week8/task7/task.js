let promise = new Promise((resolve, reject) => {
  resolve("Success First Promise");
});

promise
  .then((data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
      resolve("Success Second promise");
    });
  })
  .then((data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
      reject("Failed Third promise");
    });
  })
  .catch((data) => console.log(data));
