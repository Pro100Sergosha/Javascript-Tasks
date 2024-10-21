async function requestHelper(url) {
  let response = await fetch(url);
  return response;
}

let urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
];

let firstResponse = Promise.race(urls.map((url) => requestHelper(url)))
  .then((first) => first.json())
  .then((data) => console.log(data));
