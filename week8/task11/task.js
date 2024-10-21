async function jsonPlaceHolder(url) {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
}

jsonPlaceHolder("https://jsonplaceholder.typicode.com/todos/");
