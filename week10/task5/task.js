// DELETE
async function deleteUser(userId) {
  const res = await fetch(`http://localhost:3000/users/${userId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.ok) {
    const data = await res.json();
    console.log(data);
  }
}

deleteUser("2");
