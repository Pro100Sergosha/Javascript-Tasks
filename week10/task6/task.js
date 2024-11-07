const prompt = require("prompt-sync")();
async function registerUser() {
  const name = prompt("Enter your name: ");
  const email = prompt("Enter your email: ");
  const registrationDate = prompt("Enter registration date: ");
  const user = { name, email, registrationDate };
  const res = await fetch("http://localhost:3000/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (res.status === 201) {
    console.log("You've registered successfully!");
    return;
  }
  console.log("Something went wrong!");
  return;
}
// registerUser();

async function addNewBook() {
  const title = prompt("Enter book title: ");
  const author = prompt("Enter book author: ");
  const status = "available";
  const book = { title, author, status };
  const res = await fetch("http://localhost:3000/books/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });
  if (res.status === 201) {
    console.log("Book added successfully!");
    return;
  }
  console.log("Something went wrong!");
  return;
}

// addNewBook();

async function getAllBooks() {
  const res = await fetch("http://localhost:3000/books/");
  const data = await res.json();
  return data;
}

async function borrowBook() {
  const books = await getAllBooks();
  const filteredBooks = books.filter((book) => book.status !== "borrowed");
  console.log(filteredBooks);
  const bookId = prompt("Enter book id to borrow it: ");
  const userId = prompt("Enter your id: ");
  const borrowDate = prompt("Enter borrow date: ");
  const returnDate = prompt("Enter return date: ");
  const userBook = { userId, bookId, borrowDate, returnDate };
  const res = await fetch("http://localhost:3000/borrowed_book/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userBook),
  });
  if (res.status === 201) {
    console.log("Book borrowed successfully!");
    return;
  }
  console.log("Something went wrong");
  return;
}

borrowBook();
