const prompt = require("prompt-sync")();
// GET
async function getUserInfo(userId) {
  const res = await fetch(`http://localhost:3000/users/${userId}`);
  if (res.ok) {
    const data = await res.json();
    console.log(data);
  }
}

getUserInfo("1");
