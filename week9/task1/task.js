let person = {
  name: "Sergo",
};
function nameOfObj(obj, name) {
  if (obj.hasOwnProperty(name)) {
    return obj[name];
  }
  throw new Error("This object does not have this type of property!");
}

try {
  let obj = nameOfObj(person, "name");
  console.log(obj);
  console.log("Success");
} catch (error) {
  console.log(error);
}
