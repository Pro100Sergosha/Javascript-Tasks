// GET
async function deleteUser(userId, data) {
  const res = await fetch(`http://localhost:3000/users/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (res.ok) {
    const data = await res.json();
    console.log(data);
  }
}

deleteUser("2", { name: "testUSER", email: "NEWmail@mail.com" });
