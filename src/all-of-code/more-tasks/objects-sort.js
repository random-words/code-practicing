function sortObjects(arr, field) {
  if (field === "age") {
    return arr.sort((a, b) => a.age - b.age);
  }
  if (field === "name") {
    return arr.sort((a, b) => a.name.localeCompare(b.name));
  }
}

const arr = [
  { name: "name5", age: 8 },
  { name: "name2", age: 2 },
  { name: "name3", age: 3 },
];

console.log(sortObjects(arr, "age"));
