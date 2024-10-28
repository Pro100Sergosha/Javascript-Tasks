async function main() {
  const response = await fetch(
    "https://api.github.com/users/temuritsutskiridze"
  );
  if (response.ok) {
    let data = await response.json();
    console.log(data);
  }
}

main();
