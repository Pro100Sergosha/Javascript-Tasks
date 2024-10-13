function oddOrEven(num1, num2, callback1, callback2) {
  if (num1 > num2) {
    callback1();
  } else {
    callback2();
  }
}

oddOrEven(
  20,
  10,
  () => console.log("Even"),
  () => console.log("Odd")
);
