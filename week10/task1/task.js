const prompt = require("prompt-sync")();

// POST
async function postData(data) {
  const res = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (res.status === 201) {
    const data = await res.json();
    console.log("User created sucessfully");
  }
}

function createNewUser() {
  let user = {
    name: prompt("Enter your name: "),
    email: prompt("Enter you email: "),
    registration_date: prompt("Enter registration date: "),
  };
  return user;
}

function main() {
  const user = createNewUser();
  postData(user);
}
main();
