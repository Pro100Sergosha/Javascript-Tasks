function hello(callback) {
  setTimeout(() => {
    callback();
  }, 1000);
}

hello(() => console.log("Hello world"));
