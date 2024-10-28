let data = '{"name":"Sergo", "last_name":"Azizbekyan"}';

try {
  let obj = JSON.parse(data);
  console.log(obj);
} catch (error) {
  console.log(error);
}
