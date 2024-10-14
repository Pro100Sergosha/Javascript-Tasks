let promise = new Promise((resolve, reject) => {
  resolve(10);
});

promise
  .then((data) => data)
  .then((data) => {
    return new Promise((resolve, reject) => {
      resolve(data * 2);
    });
  })
  .then((data) => console.log(data));
