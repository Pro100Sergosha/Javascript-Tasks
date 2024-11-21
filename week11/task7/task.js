class ArrayHelper {
  reverseArray(array) {
    return array.sort((a, b) => b - a);
  }
}
const arr = [1, 2, 3, 4, 5];

const arra = new ArrayHelper();

console.log(arra.reverseArray(arr));
