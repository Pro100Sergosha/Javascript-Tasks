// GET
async function getUsers() {
  const res = await fetch("http://localhost:3000/users");
  if (res.ok) {
    const data = await res.json();
    console.log(data);
  }
}
getUsers();
